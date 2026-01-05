export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">宸新復健科診所</h3>
            <p className="text-gray-300">300新竹市東區光復路一段371號B1</p>
            <p className="text-gray-300">(03) 564-7999</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">快速導覽</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/treatments" className="hover:text-white">治療方式</a></li>
              <li><a href="/weight-loss" className="hover:text-white">減重與骨齡</a></li>
              <li><a href="/diseases" className="hover:text-white">疾病衛教</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">關於我們</h3>
            <p className="text-gray-300 text-sm">
              本網站內容僅供衛教參考，不能取代專業醫師診斷。
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 宸新復健科診所 林羿辰醫師. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
