'use client';

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // 使用 requestAnimationFrame 確保在下一幀渲染時才執行 class 變更
            // 這能避免手機在大量運算時發生的畫面撕裂或瞬間跳動
            requestAnimationFrame(() => {
              target.classList.add('is-visible');
            });
            
            observer.unobserve(target);
          }
        });
      },
      { 
        threshold: 0, 
        // 提早 10% 預先載入，讓使用者滑快一點也不會看到空白
        rootMargin: '0px 0px -10% 0px' 
      }
    );

    // 稍微延遲 100ms 再開始偵測，確保 DOM 結構已完全就緒
    setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <style jsx global>{`
      /* ============================================================
         ✨ 1. 初始狀態 (預設為手機版配置)
         ============================================================ */
      .animate-on-scroll {
        opacity: 0;
        
        /* 🔧 優化重點 1：手機版位移距離縮小至 10px */
        /* 距離越短，瀏覽器重繪的負擔越小，看起來越順 */
        transform: translate3d(0, 10px, 0);
        
        /* 動畫時間設定：0.6秒，使用貝茲曲線讓動作更自然 */
        transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        
        /* 🔧 優化重點 2：啟用 GPU 硬體加速 */
        /* 告訴瀏覽器這些屬性即將變化，請用顯卡運算，不要用 CPU */
        will-change: opacity, transform;
        
        visibility: hidden; /* 避免頁面剛載入時閃爍 */
      }

      /* ============================================================
         ✨ 2. 進場狀態 (加上 is-visible 後)
         ============================================================ */
      .animate-on-scroll.is-visible {
        opacity: 1 !important;
        transform: translate3d(0, 0, 0) !important;
        visibility: visible !important;
      }

      /* ============================================================
         ✨ 3. 延遲設定 (階梯式進場)
         ============================================================ */
      .delay-100 { transition-delay: 100ms; }
      .delay-200 { transition-delay: 200ms; }
      .delay-300 { transition-delay: 300ms; }
      .delay-500 { transition-delay: 500ms; }
      
      /* ============================================================
         ✨ 4. 電腦版差異化設定 (螢幕 > 768px)
         ============================================================ */
      @media (min-width: 768px) {
        .animate-on-scroll {
            /* 電腦效能較好，螢幕較大，可以讓位移距離回到 40px，更有氣勢 */
            transform: translate3d(0, 40px, 0);
            /* 電腦版動畫時間可以稍微長一點點，感覺更優雅 */
            transition-duration: 0.8s;
        }
      }

      /* ============================================================
         ✨ 5. 手機版效能極致優化 (螢幕 <= 767px)
         ============================================================ */
      @media (max-width: 767px) {
        
        /* 強制關閉所有毛玻璃效果，這是手機卡頓的最大元兇 */
        .backdrop-blur, 
        .backdrop-blur-sm, 
        .backdrop-blur-md, 
        .backdrop-blur-lg, 
        .backdrop-blur-xl, 
        .backdrop-blur-2xl {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            
            /* 視覺補償：加深背景色，確保文字清晰 */
            background-color: rgba(15, 23, 42, 0.95) !important;
            
            /* 移除複雜陰影與邊框運算 */
            box-shadow: none !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
      }
    `}</style>
  );
}