// src/components/ScrollAnimation.tsx
'use client'; // 這行很重要，代表這是客戶端執行的程式

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    // 定義觀察器
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // 動畫只播一次
          }
        });
      },
      { threshold: 0.1 }
    );

    // 找出所有需要動畫的元素並開始觀察
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // 清理函式 (雖然首頁通常不用，但這是好習慣)
    return () => observer.disconnect();
  }, []);

  return (
    <style jsx global>{`
      /* 初始狀態：隱藏並往下移 */
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        will-change: opacity, transform;
      }

      /* 進場狀態：顯示並歸位 */
      .animate-on-scroll.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* 延遲設定 */
      .delay-100 { transition-delay: 100ms; }
      .delay-200 { transition-delay: 200ms; }
      .delay-300 { transition-delay: 300ms; }
    `}</style>
  );
}