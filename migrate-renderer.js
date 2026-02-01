const fs = require('fs');
const path = require('path');

// 設定要掃描的目錄 (通常是 src/app)
const TARGET_DIR = path.join(__dirname, 'src/app');

function processFile(filePath) {
    // 只處理 .tsx 檔案
    if (!filePath.endsWith('.tsx')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // --- 步驟 1: 尋找並替換 dangerouslySetInnerHTML ---
    
    // Regex 邏輯：
    // 1. 尋找 <div ... dangerouslySetInnerHTML={{ __html: 變數名稱 }} ... />
    // 2. 忽略 div 上的 className (因為 RichTextRenderer 裡面已經有 prose 樣式了)
    // 3. 捕獲變數名稱 (例如 post.content)
    const regex = /<div[^>]*dangerouslySetInnerHTML=\{\{\s*__html:\s*([^}]+)\s*\}\}[^>]*\/>/g;

    let hasReplacement = false;
    content = content.replace(regex, (match, variableName) => {
        hasReplacement = true;
        // 移除變數前後可能多餘的空白
        const cleanVar = variableName.trim();
        
        console.log(`   └─ 發現目標，變數為: ${cleanVar}`);
        
        // 回傳新的組件寫法
        return `<RichTextRenderer content={${cleanVar}} />`;
    });

    // --- 步驟 2: 如果有替換，才加入 import ---
    if (hasReplacement) {
        // 檢查是否已經引入過
        if (!content.includes('RichTextRenderer')) {
            // 尋找最後一個 import，插在它後面；如果沒有 import 就插在最前面
            const lastImportIndex = content.lastIndexOf('import ');
            
            if (lastImportIndex !== -1) {
                // 找到該行結束的位置
                const endOfLineIndex = content.indexOf('\n', lastImportIndex);
                const before = content.slice(0, endOfLineIndex + 1);
                const after = content.slice(endOfLineIndex + 1);
                
                content = before + "import RichTextRenderer from '@/components/RichTextRenderer';\n" + after;
            } else {
                // 檔案沒有任何 import (很少見)，直接插在頭部
                content = "import RichTextRenderer from '@/components/RichTextRenderer';\n" + content;
            }
        }

        // 寫入檔案
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ 已修改頁面: ${filePath}`);
        }
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else {
            processFile(fullPath);
        }
    });
}

console.log('🚀 開始全站掃描，替換 dangerouslySetInnerHTML ...');
walk(TARGET_DIR);
console.log('🎉 全部完成！請執行 npm run dev 檢查頁面。');