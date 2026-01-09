// app/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd' // 假設你已經有這個組件
import ClinicHome from '@/components/ClinicHome' // 引入剛剛建立的客戶端組件

// 這裡保留你原本的 SEO 設定，這對網路爬蟲非常重要
export const metadata: Metadata = {
  title: '新竹宸新復健科診所 - 林羿辰醫師 | 專業復健治療、PRP注射、震波治療',
  description: '新竹宸新復健科診所，由台大醫師林羿辰院長提供專業復健治療服務，包括PRP注射、震波治療、一對一運動治療、減重門診、兒童骨齡評估等。',
  keywords: ['新竹復健科', 'PRP注射', '震波治療', '復健科診所', '林羿辰醫師', '新竹復健', '兒童骨齡', '增生療法'],
  openGraph: {
    title: '新竹宸新復健科診所 - 林羿辰醫師',
    description: '專業復健治療服務，包括PRP注射、震波治療、一對一運動治療等',
    type: 'website',
    images: ['/images/clinic/logo.png'], // 記得確認圖片路徑
  },
}

const medicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: '宸新復健科診所',
  alternateName: '新竹宸新復健科診所',
  description: '新竹市專業復健科診所，提供PRP注射、震波治療、一對一運動治療等服務',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '光復路一段371號B1',
    addressLocality: '新竹市',
    addressRegion: '東區',
    postalCode: '300',
    addressCountry: 'TW',
  },
  telephone: '+886-3-564-7999',
  url: 'https://dryichen-4ze1.vercel.app/',
  image: '/images/clinic.png', // 記得確認圖片路徑
  medicalSpecialty: ['Physical Medicine and Rehabilitation', '復健醫學'],
  physician: {
    '@type': 'Physician',
    name: '林羿辰',
    jobTitle: '院長',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: '國立台灣大學醫學系',
    },
    hasCredential: [
      '復健專科醫師',
      '骨鬆專科醫師',
      'ACE-CPT 美國運動學會國際私人教練認證',
    ],
  },
  areaServed: {
    '@type': 'City',
    name: '新竹市',
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={medicalClinicSchema} />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">運動教練醫師-林羿辰</h1>
            <p className="text-xl md:text-2xl mb-8">宸新復健科診所院長</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">學歷與資格</h2>
                <ul className="space-y-2">
                  <li>▹ 國立台灣大學醫學系</li>
                  <li>▹ 雙專科醫師 (復健專科 + 骨鬆專科)</li>
                  <li>▹ ACE-CPT 美國運動學會國際私人教練認證</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">經歷</h2>
                <ul className="space-y-2">
                  <li>▹ 馬偕紀念醫院 主治醫師</li>
                  <li>▹ 台灣復健醫學會 會員</li>
                  <li>▹ 台灣增生療法醫學會 會員</li>
                  <li>▹ 台灣大學網球校隊</li>
                </ul>
              </div>

              <div className="flex-shrink-0 mt-8 lg:mt-0">
                <img 
                  src="/images/logo.png" 
                  alt="林羿辰 醫師 宸新復健科" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-2xl border-4 border-white/20 bg-white"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Main Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Treatments */}
              <Link href="/treatments" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">治療方式</h2>
                <p className="text-gray-600 mb-4">
                  專業的復健治療服務，包括 PRP 注射、震波治療、一對一運動治療等
                </p>
                <span className="text-blue-600 font-semibold">了解更多 →</span>
              </Link>

              {/* Weight Loss */}
              <Link href="/weight-loss" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">減重與骨齡</h2>
                <p className="text-gray-600 mb-4">
                  專業減重門診服務，包括週纖達、猛健樂，以及兒童骨齡評估
                </p>
                <span className="text-blue-600 font-semibold">了解更多 →</span>
              </Link>

              {/* Diseases */}
              <Link href="/diseases" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">疾病衛教</h2>
                <p className="text-gray-600 mb-4">
                  詳細的疾病介紹與治療建議，涵蓋脊椎、肩膀、手肘、手部、膝蓋、足踝等
                </p>
                <span className="text-blue-600 font-semibold">了解更多 →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Clinic Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">診所資訊</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">新竹市宸新復健科</h3>
                <h4 className="text-lg font-semibold mb-2">診所特色項目</h4>
                <ul className="space-y-2 mb-4">
                  <li>▹ 醫學中心級數位X光機</li>
                  <li>▹ 頂規高畫質超音波檢查</li>
                  <li>▹ 台大醫師團隊</li>
                </ul>
                <h4 className="text-lg font-semibold mb-2">診所特色治療</h4>
                <ul className="space-y-2">
                  <li>▹ 瑞士進口「聚焦式」和「擴散式」體外震波</li>
                  <li>▹ 瑞士專利進口高純度血小板再生治療 (PRP)</li>
                  <li>▹ 美國進口高能量雷射治療儀</li>
                  <li>▹ 羊膜注射及骨髓濃縮液 (BMAC)</li>
                  <li>▹ 專利韌帶肌腱玻尿酸</li>
                  <li>▹ 器械皮拉提斯及紅繩團體運動課程</li>
                  <li>▹ 兒童早療(物理+職能+語言)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">聯絡資訊</h3>
                <p className="mb-2"><strong>地址：</strong>300新竹市東區光復路一段371號B1</p>
                <p className="mb-4"><strong>電話：</strong>(03) 564-7999</p>
                <a 
                  href="https://maps.google.com/?q=300新竹市東區光復路一段371號B1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  開啟 Google 地圖
                </a>
              </div>
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
