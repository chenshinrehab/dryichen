'use client';

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // 🔧 關鍵技術：使用 requestAnimationFrame
            // 這會強制瀏覽器在「下一幀」才執行變換，確保動畫過程被畫出來，而不是瞬間跳轉
            requestAnimationFrame(() => {
              target.classList.add('is-visible');
            });
            
            observer.unobserve(target);
          }
        });
      },
      { 
        threshold: 0,
        // 手機版優化：提早 10% 預先載入，避免使用者滑太快看到空白
        rootMargin: '0px 0px -10% 0px' 
      }
    );

    // 稍微延遲偵測，確保頁面圖片佔位已完成
    setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <style jsx global>{`
      /* === 初始狀態 === */
      .animate-on-scroll {
        opacity: 0;
        /* 手機版優化：只移動 20px (原本40px)，負擔較小，比較不會卡住變空白 */
        transform: translate3d(0, 20px, 0);
        
        /* 使用貝茲曲線讓動畫更有質感 */
        transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        
        will-change: opacity, transform;
        visibility: hidden; /* 確保一開始真的看不見，避免閃爍 */
      }

      /* === 進場狀態 === */
      .animate-on-scroll.is-visible {
        opacity: 1 !important;
        transform: translate3d(0, 0, 0) !important;
        visibility: visible !important;
      }

      /* === 延遲設定 === */
      .delay-100 { transition-delay: 150ms; }
      .delay-200 { transition-delay: 300ms; }
      .delay-300 { transition-delay: 450ms; }
      
      /* 電腦版可以移動多一點，感覺比較大氣 */
      @media (min-width: 768px) {
        .animate-on-scroll {
            transform: translate3d(0, 40px, 0);
        }
      }
    `}</style>
  );
}