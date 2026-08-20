const fs = require('fs')
const path = require('path')
const ts = require('typescript')

const projectRoot = path.resolve(__dirname, '..')
const moduleCache = new Map()

function resolveLocalModule(request, parentDirectory) {
  const basePath = request.startsWith('@/')
    ? path.join(projectRoot, 'src', request.slice(2))
    : path.resolve(parentDirectory, request)

  const candidates = [
    basePath,
    `${basePath}.ts`,
    `${basePath}.tsx`,
    `${basePath}.js`,
    path.join(basePath, 'index.ts'),
    path.join(basePath, 'index.tsx'),
    path.join(basePath, 'index.js'),
  ]

  const resolved = candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile())
  if (!resolved) throw new Error(`Cannot resolve ${request} from ${parentDirectory}`)
  return resolved
}

function loadTypeScriptModule(filePath) {
  const resolvedPath = path.resolve(filePath)
  if (moduleCache.has(resolvedPath)) return moduleCache.get(resolvedPath).exports

  const module = { exports: {} }
  moduleCache.set(resolvedPath, module)

  const source = fs.readFileSync(resolvedPath, 'utf8')
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
    },
    fileName: resolvedPath,
  }).outputText

  const localRequire = (request) => {
    if (request.startsWith('.') || request.startsWith('@/')) {
      return loadTypeScriptModule(resolveLocalModule(request, path.dirname(resolvedPath)))
    }
    return require(request)
  }

  const evaluate = new Function('require', 'module', 'exports', '__filename', '__dirname', output)
  evaluate(localRequire, module, module.exports, resolvedPath, path.dirname(resolvedPath))
  return module.exports
}

function loadData(relativePath) {
  return loadTypeScriptModule(path.join(projectRoot, 'src', 'data', relativePath))
}

function makeSearchItem(title, url, type, values) {
  return {
    title,
    url,
    type,
    searchText: [title, ...values.flatMap((value) => value || [])]
      .join(' ')
      .toLocaleLowerCase('zh-TW'),
  }
}

const { treatmentsList } = loadData('treatments.ts')
const { diseaseCategoriesList } = loadData('diseases.ts')
const { newsList } = loadData('news.ts')
const { facilitiesData } = loadData('facilities.ts')
const { weightLossPrograms } = loadData('weightLoss.ts')

const searchIndex = [
  ...treatmentsList.map((item) =>
    makeSearchItem(item.title, `/treatments/${item.slug}`, '治療', [item.description, item.keywords]),
  ),
  ...diseaseCategoriesList.flatMap((category) =>
    category.diseases.map((item) =>
      makeSearchItem(item.title, `/diseases/${category.slug}/${item.slug}`, '疾病', [
        item.seoKeywords,
        item.symptoms,
      ]),
    ),
  ),
  ...newsList.map((item) =>
    makeSearchItem(item.title, `/about/news/${item.id}`, '文章', [item.summary, item.keywords]),
  ),
  ...facilitiesData
    .filter((item) => !item.isTreatment)
    .map((item) =>
      makeSearchItem(item.title, `/about/clinic/${item.id}`, '設備', [item.description, item.keywords]),
    ),
  ...weightLossPrograms
    .filter((item) => !item.slug.includes('/'))
    .map((item) =>
      makeSearchItem(item.title, `/weight-bone/${item.slug}`, '特色門診', [
        item.description,
        item.keywords,
      ]),
    ),
]

const outputPath = path.join(projectRoot, 'public', 'search-index.json')
fs.writeFileSync(outputPath, JSON.stringify(searchIndex))
console.log(`Generated ${path.relative(projectRoot, outputPath)} (${searchIndex.length} records)`)
