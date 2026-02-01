'use client';

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    // 檢查瀏覽器是否支援 IntersectionObserver，不支援則直接顯示
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // 使用 requestAnimationFrame 確保在最順暢的幀進行變更
            requestAnimationFrame(() => {
              target.classList.add('is-visible');
            });
            
            // 觸發後立即停止偵測，釋放記憶體
            observer.unobserve(target);
          }
        });
      },
      { 
        threshold: 0.01, // 稍微增加閾值避免極端邊緣觸發
        rootMargin: '0px 0px -5% 0px' // 調整邊距，確保稍微進入視區才動，提升感知效能
      }
    );

    // 延遲偵測時間微調：確保 React 組件掛載完成
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <style jsx global>{`
      /* ============================================================
          ✨ 1. 初始狀態
          ============================================================ */
      .animate-on-scroll {
        opacity: 0;
        /* 使用 3D 加速，強制瀏覽器開啟獨立分層 (Layer) */
        transform: translate3d(0, 15px, 0); 
        
        /* 🔧 優化：僅針對 transform 與 opacity 進行動畫，這是「合成動畫」，不占主執行緒 */
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        
        /* 🔧 優化：移除全域 will-change，避免記憶體負擔。
           瀏覽器在看到 translate3d 時會自動優化。 */
        
        backface-visibility: hidden; /* 防止動畫結束時文字閃爍 */
        pointer-events: none; /* 防止未進場前擋住點擊 */
      }

      /* ============================================================
          ✨ 2. 進場狀態
          ============================================================ */
      .animate-on-scroll.is-visible {
        opacity: 1 !important;
        transform: translate3d(0, 0, 0) !important;
        pointer-events: auto !important;
      }

      /* ============================================================
          ✨ 3. 延遲設定
          ============================================================ */
      .delay-100 { transition-delay: 100ms; }
      .delay-200 { transition-delay: 200ms; }
      .delay-300 { transition-delay: 300ms; }
      
      /* ============================================================
          ✨ 4. 電腦版設定
          ============================================================ */
      @media (min-width: 768px) {
        .animate-on-scroll {
          transform: translate3d(0, 30px, 0);
          transition-duration: 0.8s;
        }
      }

      /* ============================================================
          ✨ 5. 手機版效能禁區 (修正 LCP 評分)
          ============================================================ */
      @media (max-width: 767px) {
        /* 如果使用者開啟「減少動態效果」，我們直接取消動畫 */
        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        /* 🔧 極致優化：關閉手機版複雜濾鏡，節省 GPU 功耗 */
        .backdrop-blur, 
        .backdrop-blur-md, 
        .backdrop-blur-lg {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          background-color: rgba(15, 23, 42, 0.98) !important;
        }
      }
    `}</style>
  );
}