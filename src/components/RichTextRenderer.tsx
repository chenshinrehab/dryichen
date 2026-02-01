// src/components/RichTextRenderer.tsx
import parse, { DOMNode, Element } from 'html-react-parser';
import Image from 'next/image';

interface Props {
  content: string;
}

export default function RichTextRenderer({ content }: Props) {
  const options = {
    replace: (domNode: DOMNode) => {
      // 1. 偵測是否為 <img> 標籤
      if (domNode instanceof Element && domNode.name === 'img') {
        const { src, alt } = domNode.attribs;

        // 2. 攔截並回傳 Next.js Image
        return (
          <Image
            src={src}
            alt={alt || '文章圖片'}
            
            // ✨ 核心技巧：設為 0 並配合 CSS w-full h-auto
            // 這讓圖片能保持原始比例縮放，不需要事先知道寬高
            width={0}
            height={0}
            sizes="100vw"
            
            // ✨ 樣式控制：
            // w-full h-auto: 模擬原本的 style="width: 100%; height: auto;"
            // rounded-lg shadow-md: 統一美化所有文章圖片
            className="w-full h-auto my-6 rounded-lg shadow-md object-cover"
            
            // 效能優化：文章中的圖片通常不用 priority，預設 lazy load 即可
            loading="lazy" 
          />
        );
      }
    },
  };

  // prose 設定是為了讓 Tailwind Typography 自動排版文字
  return <div className="prose prose-invert prose-lg max-w-none text-slate-300">
    {parse(content, options)}
  </div>;
}