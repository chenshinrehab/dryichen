const fs = require('fs');
const path = require('path');

// ================= 設定區域 =================
const CONFIG = {
  targetDir: './src', // 掃描的根目錄
  
  // 🎯 只鎖定這兩種副檔名
  targetExtensions: ['.ts', '.tsx'],
  
  // 設為 false 會直接寫入修改；設為 true 則只會顯示會改哪些檔案 (測試用)
  dryRun: false, 
};
// ===========================================

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function updateReferences() {
  console.log(`🚀 開始掃描 ${CONFIG.targetDir} 下的 .ts 與 .tsx 檔案...`);
  
  let modifiedCount = 0;

  if (!fs.existsSync(CONFIG.targetDir)) {
    console.error(`❌ 找不到目錄: ${CONFIG.targetDir}`);
    return;
  }

  walkDir(CONFIG.targetDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    
    // 過濾條件：只處理 .ts 和 .tsx
    if (CONFIG.targetExtensions.includes(ext)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // 正則：搜尋 .jpg, .jpeg, .png (不分大小寫)
        const regex = /\.(jpg|jpeg|png)/gi;

        if (regex.test(content)) {
          // 替換成 .webp
          const newContent = content.replace(regex, '.webp');

          if (!CONFIG.dryRun) {
            fs.writeFileSync(filePath, newContent, 'utf8');
          }
          
          console.log(`✅ [修改] ${filePath}`);
          modifiedCount++;
        }
      } catch (err) {
        console.error(`❌ 無法讀取: ${filePath}`, err);
      }
    }
  });

  console.log('\n==========================================');
  console.log(`🎉 完成！共修改了 ${modifiedCount} 個 TS/TSX 檔案。`);
  console.log('==========================================');
}

updateReferences();