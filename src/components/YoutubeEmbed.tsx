// src/components/YoutubeEmbed.tsx
export default function YoutubeEmbed() {
  return (
    <div className="w-full h-full relative aspect-[9/16] rounded-xl overflow-hidden border border-slate-600 shadow-xl bg-black">
      <iframe 
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube-nocookie.com/embed/asqbvbEukOM" 
        title="診所介紹 Shorts"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        loading="lazy" // ✨ 原生延遲載入
      ></iframe>
    </div>
  )
}