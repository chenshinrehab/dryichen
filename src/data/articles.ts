import { NewsPost } from './news'; // 從總控制器引入型別定義

export const articlesData: NewsPost[] = [

  
  {
  id: 'frozen-shoulder-and-diabetes',
  title: '五十肩與糖尿病的深度關聯：為什麼糖尿病患者更容易罹患五十肩？',
  lastModified: '2026-04-11',
  category: '衛教文章',
  date: '2026-04-11',
  summary: '糖尿病患者五十肩風險高出5倍！深入解析AGEs糖化機制、血糖控制與五十肩的關係，以及完整治療選項比較。',
  coverImage: '/images/news/article/frozen-shoulder-diabetes.webp',
  seoTitle: '五十肩與糖尿病的深度關聯',
  seoDescription: '深入解析五十肩（沾黏性肩關節囊炎）與糖尿病的相關性：糖尿病患者五十肩風險高出5倍，核心機制涉及AGEs糖化、慢性炎症與微血管病變。探討血糖控制能否改善五十肩，並解析甲狀腺、年齡、性別等其他危險因子。',
  keywords: [
    '五十肩',
    '糖尿病五十肩',
    '沾黏性肩關節囊炎',
    'frozen shoulder',
    '血糖控制',
    'AGEs',
    '五十肩危險因子',
    '五十肩治療'
  ],
  contentHtml: `



<div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
  <h2 style="margin-top: 0; color: #0369a1;">📝 總結摘要與核心觀點</h2>
  <p style="margin-bottom: 0; line-height: 1.6; color: #334155;">
    五十肩（沾黏性肩關節囊炎）與糖尿病之間存在顯著的雙向流行病學關聯。根據2016年發表的分析，糖尿病患者罹患五十肩的風險是一般人的<strong style="color: #0284c7;">5倍</strong>，且五十肩在糖尿病族群中的盛行率高達13.4%
    <sup><a href="https://doi.org/10.11138/mltj/2016.6.1.026" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[1]</a></sup>。
    這背後的核心機制涉及長期高血糖促使「晚期糖化終產物（AGEs）」在關節囊組織中大量堆積，進而引發膠原蛋白交聯與纖維化。除了糖尿病，甲狀腺疾病、年齡、性別、肩部外傷及長時間固定不動，也是不可忽視的五十肩危險因子。雖然關於嚴格血糖控制能否「直接」改善五十肩症狀，目前醫學界仍有爭議，但整合性的治療策略——包括糖尿病管理、物理治療與適當的介入治療——已被證實能顯著改善患者的功能與生活品質。
  </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<section style="margin-bottom: 3.5rem;">
  <h2 style="font-size: 1.75rem; font-weight: bold; color: #ffffff; margin-bottom: 1.5rem;">
    一、什麼是五十肩？從醫學定義認識這個疾病
  </h2>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1.5rem;">
    五十肩的正式醫學名稱為「沾黏性肩關節囊炎（Adhesive Capsulitis）」，俗稱冷凍肩（Frozen Shoulder）。顧名思義，這個疾病的核心病理是：肩關節囊（關節周圍的結締組織袋）因發炎而增厚、形成疤痕組織（沾黏），導致肩膀活動範圍大幅受限，並伴隨持續性的鈍痛或銳痛
    <sup><a href="https://doi.org/10.1136/bmj.331.7530.1453" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[2]</a></sup>。
  </p>
  <p style="color: #ffffff; font-weight: bold; margin-bottom: 1.25rem; font-size: 1.1rem;">臨床上，五十肩通常分為三個階段：</p>
  <ul style="color: #cbd5e1; list-style-type: decimal; padding-left: 1.5rem; line-height: 1.7; font-size: 1.1rem; margin-bottom: 2rem;">
    <li style="margin-bottom: 1rem;">
      <strong style="color: #ffffff;">疼痛期（Freezing Stage）</strong>：約持續6週至9個月，以漸進性疼痛為主，尤其夜間疼痛明顯，患者常因肩痛而難以入眠。
    </li>
    <li style="margin-bottom: 1rem;">
      <strong style="color: #ffffff;">冰凍期（Frozen Stage）</strong>：持續4至9個月，疼痛稍緩，但肩膀僵硬程度達到高峰，日常梳頭、穿衣、拿取高處物品均受限。
    </li>
    <li style="margin-bottom: 1rem;">
      <strong style="color: #ffffff;">解凍期（Thawing Stage）</strong>：持續5個月至2年，肩膀活動度逐漸恢復，但完全康復的時間因人而異，且糖尿病患者往往比一般人需要更長時間
      <sup><a href="https://doi.org/10.1016/j.arrct.2021.100141" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[3]</a></sup>。
    </li>
  </ul>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem;">
    五十肩在一般人口中的盛行率約為2-3%，好發於40至65歲族群，且女性（約58-70%）比男性更容易罹患
    <sup><a href="https://doi.org/10.1136/bmjopen-2022-062920" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[4]</a></sup>。
    這個看似「普通」的肩膀問題，其實與全身性的代謝疾病有著密不可分的關聯。
  </p>
</section>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<section style="margin-bottom: 3.5rem;">
  <h2 style="font-size: 1.75rem; font-weight: bold; color: #ffffff; margin-bottom: 1.5rem;">
    二、糖尿病與五十肩：數據告訴你的事實
  </h2>
  <h3 style="font-size: 1.4rem; font-weight: bold; color: #ffffff; margin-bottom: 1rem;">
    糖尿病患者罹患五十肩的機率有多高？
  </h3>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1rem;">
    這是許多糖尿病患者最迫切想了解的問題。數字相當驚人——
  </p>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1rem;">
    根據Zreik等人2016年發表於《Muscles, Ligaments and Tendons Journal》的系統性文獻回顧（共納入18篇研究），糖尿病患者發生五十肩的風險是非糖尿病者的
    <strong style="color: #2dd4bf; font-size: 1.25rem;">5倍</strong>，而糖尿病族群中五十肩的整體盛行率估計為
    <strong style="color: #2dd4bf; font-size: 1.25rem;">13.4%</strong>
    <sup><a href="https://doi.org/10.11138/mltj/2016.6.1.026" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[1]</a></sup>。
  </p>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 2rem;">
    更進一步細分，第一型糖尿病（Type 1 DM）患者的五十肩發生率高達約10%，而第二型糖尿病（Type 2 DM）患者更高，可達29%
    <sup><a href="https://doi.org/10.1016/j.jcot.2018.04.003" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[5]</a></sup>。
    換句話說，接近三成的第二型糖尿病患者，在其一生中可能遭遇五十肩困擾。
  </p>
  
  <div style="background-color: #fff7ed; border: 1px solid #fed7aa; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
    <p style="color: #9a3412; font-size: 1rem; line-height: 1.6; margin: 0;">
      <strong>⚠️ 臨床觀察：</strong>「一位65歲的第二型糖尿病退休教師，在血糖控制不穩定長達8年後，某天早晨醒來發現自己無法將手臂抬過頭頂，連穿上外套都費力無比。她就醫後被診斷出五十肩，而此前她的醫師從未告訴她，糖尿病本身就是五十肩的重要危險因子。」<br><br>這樣的情境，在臨床上其實相當普遍，卻長期未受到應有的重視。
    </p>
  </div>

  <h3 style="font-size: 1.4rem; font-weight: bold; color: #ffffff; margin-bottom: 1rem;">糖尿病病程長短也有影響</h3>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem;">
    2012年一項對超過201,513名糖尿病患者的大型回溯性研究發現，糖尿病病程同樣是五十肩的重要預測因子：
    <strong style="color: #ffffff;">病程超過10年者，發生五十肩的風險是病程不足5年者的1.85倍</strong>
    <sup><a href="https://pubmed.ncbi.nlm.nih.gov/22617920/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[6]</a></sup>.
    這提示我們，即便血糖控制尚可，長期的糖尿病本身對結締組織的慢性損害就已不可小覷。
  </p>
</section>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<section style="margin-bottom: 3.5rem;">
  <h2 style="font-size: 1.75rem; font-weight: bold; color: #ffffff; margin-bottom: 1.5rem;">
    三、為什麼糖尿病會導致五十肩？深入病理機制
  </h2>

  <div style="margin-bottom: 2.5rem;">
    <h3 style="font-size: 1.4rem; font-weight: bold; color: #ffffff; margin-bottom: 1rem;">
      核心機制一：晚期糖化終產物（AGEs）與膠原蛋白交聯
    </h3>
    <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1rem;">
      這是目前最受學界重視、也最具說服力的解釋機制。
    </p>
    <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1rem;">
      當血液中持續存在過高的葡萄糖時，糖分子會與蛋白質（尤其是膠原蛋白）發生非酶促反應，這個過程稱為「糖化（glycation）」，其產物即為「晚期糖化終產物（Advanced Glycation End-products, AGEs）」。AGEs會促使膠原蛋白分子之間產生異常的「交聯（cross-linking）」，使組織喪失原有的彈性與延展性，變得僵硬、厚實
      <sup><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9815013/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[7]</a></sup>.
    </p>
    <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1.5rem;">
      肩關節囊本身富含第一型與第三型膠原蛋白。當AGEs不斷在此堆積，關節囊組織逐漸纖維化、攣縮，形成五十肩的病理基礎。這也解釋了為何糖尿病相關的五十肩在治療上特別頑固——因為底層的膠原蛋白結構已發生化學性改變，單純的物理治療往往難以逆轉。
    </p>
    
    <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
      <h4 style="margin-top: 0; color: #0e7490; font-weight: bold; font-size: 1.15rem; margin-bottom: 0.5rem;">💡 臨床獨特見解</h4>
      <p style="margin-bottom: 0; color: #334155; line-height: 1.6; font-size: 1.05rem;">
        在診所中，糖尿病相關五十肩患者的關節鏡影像往往顯示出比一般五十肩更為廣泛且緻密的纖維化病灶，且其疤痕組織的黏稠度和韌性也明顯不同。這種組織學上的差異，正是糖尿病五十肩對類固醇注射反應較差的根本原因之一——類固醇能抑制炎症，但無法逆轉已形成的AGEs交聯結構。
      </p>
    </div>
  </div>

  <div style="margin-bottom: 2.5rem;">
    <h3 style="font-size: 1.4rem; font-weight: bold; color: #ffffff; margin-bottom: 1rem;">
      核心機制二：慢性炎症與促炎細胞激素
    </h3>
    <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1rem;">
      高血糖環境除了促進糖化反應，還會誘導多種促炎細胞激素的過量分泌，如腫瘤壞死因子-α（TNF-α）、白細胞介素-1β（IL-1β）等。研究發現，這些促炎因子在五十肩患者的關節囊和滑膜組織中均呈現高度表達
      <sup><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9815013/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[7]</a></sup>.
    </p>
    <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem;">
      糖尿病患者本身即處於一種低度慢性炎症狀態，這使得肩關節囊更容易受到炎症侵襲，一旦啟動炎症-纖維化循環，就難以自行終止。
    </p>
  </div>

  <div>
    <h3 style="font-size: 1.4rem; font-weight: bold; color: #ffffff; margin-bottom: 1rem;">
      核心機制三：微血管病變與神經病變
    </h3>
    <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1rem;">
      長期糖尿病引起的微血管病變，會影響肩關節囊的局部血液供應，導致組織修復能力下降。同時，糖尿病神經病變則可能損害肩關節周圍的感覺神經，使患者對早期的肩膀疼痛與功能退化警覺性降低，從而延誤就醫
      <sup><a href="https://t1dexchange.org/frozen-shoulder-and-diabetes-is-there-a-connection/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[8]</a></sup>.
    </p>
    <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem;">
      2024年一項研究進一步發現，HbA1c水平與肩關節本體感覺之間存在顯著正相關——血糖控制越差，肩部本體感覺偏差越大，這不僅增加了五十肩風險，也讓患者在治療過程中的動作學習和功能恢復更加困難
      <sup><a href="https://doi.org/10.2147/JMDH.S472025" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[9]</a></sup>.
    </p>
  </div>
</section>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<section style="margin-bottom: 3.5rem;">
  <h2 style="font-size: 1.75rem; font-weight: bold; color: #ffffff; margin-bottom: 1.5rem;">
    四、控制好糖尿病，能改善五十肩嗎？
  </h2>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 2rem;">這是一個充滿爭議、但極具臨床意義的問題。</p>

  <h3 style="font-size: 1.4rem; font-weight: bold; color: #ffffff; margin-bottom: 1rem;">研究怎麼說：正反並存的證據</h3>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1rem;">
    一方面，2023年一項採用孟德爾隨機化方法的遺傳因果分析研究，發現第二型糖尿病及空腹血糖升高，與五十肩之間存在
    <strong style="color: #ffffff;">基因因果關聯</strong>，提示控制血糖本身有其預防意義
    <sup><a href="https://pubmed.ncbi.nlm.nih.gov/37748531/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[10]</a></sup>.
  </p>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 2rem;">
    另一方面，Bjordal等學者的回溯性研究（2012年，n=201,513）卻發現，HbA1c水平與五十肩盛行率之間
    <strong style="color: #ffffff;">並無顯著統計相關性</strong>
    <sup><a href="https://pubmed.ncbi.nlm.nih.gov/22617920/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[6]</a></sup>.
    這似乎暗示，五十肩一旦形成，單靠改善HbA1c可能無法直接「治好」已發生的沾黏。
  </p>

  <h3 style="font-size: 1.4rem; font-weight: bold; color: #ffffff; margin-bottom: 1rem;">臨床上較有共識的觀點</h3>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 1.5rem;">綜合目前證據，多數臨床專家的共識如下：</p>
  <ul style="color: #cbd5e1; list-style-type: decimal; padding-left: 1.5rem; line-height: 1.7; font-size: 1.1rem; margin-bottom: 2rem;">
    <li style="margin-bottom: 1rem;">
      <strong style="color: #ffffff;">預防勝於治療</strong>：在五十肩尚未發生前，良好的血糖控制可能降低AGEs堆積速度，從而降低罹患風險。
    </li>
    <li style="margin-bottom: 1rem;">
      <strong style="color: #ffffff;">治療期間同步控糖</strong>：若糖尿病患者已罹患五十肩，積極的血糖管理能改善整體組織代謝環境，有助於提升物理治療的效果。
    </li>
    <li style="margin-bottom: 1rem;">
      <strong style="color: #ffffff;">肩關節擴張注射需特別謹慎</strong>：肩關節擴張注射是五十肩早期止痛的重要手段，但對糖尿病患者，注射後可能引發短暫性的血糖飆升（有時持續2-3天），無須過度擔心。
      <sup><a href="https://t1dexchange.org/frozen-shoulder-and-diabetes-is-there-a-connection/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[8]</a></sup>
    </li>
    <li style="margin-bottom: 1rem;">
      <strong style="color: #ffffff;">糖尿病五十肩更難根治</strong>：研究顯示，糖尿病患者對類固醇注射的初期失敗率（70%）遠高於非糖尿病患者（44%），也就是說，糖尿病五十肩往往需要更長期、更積極的多模態治療。
      <sup><a href="https://doi.org/10.1016/j.jcot.2018.04.003" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[5]</a></sup>
    </li>
  </ul>
  
  <div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
    <h4 style="margin-top: 0; color: #0e7490; font-weight: bold; font-size: 1.15rem; margin-bottom: 0.5rem;">💡 臨床獨特見解</h4>
    <p style="margin-bottom: 0; color: #334155; line-height: 1.6; font-size: 1.05rem;">
      從整合醫學的角度來看，部分臨床醫師發現，當糖尿病患者在接受五十肩治療的同時，同步透過生活型態介入（飲食調整、有氧運動）顯著改善血糖，其肩關節活動度的恢復速度確實快於血糖持續不穩定的患者。這提示糖代謝環境可能透過影響組織修復效率，間接調節五十肩的病程。
    </p>
  </div>
</section>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<section style="margin-bottom: 3.5rem;">
  <h2 style="font-size: 1.75rem; font-weight: bold; color: #ffffff; margin-bottom: 1.5rem;">
    五、五十肩的其他重要危險因子
  </h2>
  <p style="color: #cbd5e1; line-height: 1.7; font-size: 1.1rem; margin-bottom: 2rem;">
    糖尿病固然是最重要的五十肩危險因子，但並非唯一。了解全貌，有助於高風險族群及早採取預防措施。
  </p>
  
  <h3 style="font-size: 1.25rem; font-weight: bold; color: #ffffff; margin-bottom: 0.5rem;">👩 年齡與性別</h3>
  <p style="color: #cbd5e1; line-height: 1.6; font-size: 1.1rem; margin-bottom: 1.5rem;">
    五十肩好發於50至60歲，極少在40歲以前發生。女性佔所有五十肩患者的58-70%，特別是更年期後因雌激素分泌減少，失去對關節周圍軟組織的保護效應，罹患風險顯著上升。
    <sup><a href="https://clevelandshoulder.com/why-are-women-more-prone-to-frozen-shoulder/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[11]</a></sup>
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #ffffff; margin-bottom: 0.5rem;">🔬 甲狀腺疾病</h3>
  <p style="color: #cbd5e1; line-height: 1.6; font-size: 1.1rem; margin-bottom: 1.5rem;">
    甲狀腺功能亢進或低下，均與五十肩風險增加有關。2014年一項台灣全國性縱向人口研究發現，甲狀腺機能亢進是五十肩的獨立危險因子。甲狀腺功能越差，雙側五十肩的比例越高。
    <sup><a href="https://doi.org/10.1038/srep04183" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[12]</a></sup>
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #ffffff; margin-bottom: 0.5rem;">🩹 肩部外傷與長時間制動</h3>
  <p style="color: #cbd5e1; line-height: 1.6; font-size: 1.1rem; margin-bottom: 1.5rem;">
    任何導致肩膀長時間無法活動的情況，如骨折、肩袖撕裂修補術後、乳癌手術後的活動限制，都可能誘發五十肩。關節囊在缺乏定期牽張的情況下，會加速沾黏。
    <sup><a href="https://doi.org/10.1136/bmj.331.7530.1453" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[2]</a></sup>
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #ffffff; margin-bottom: 0.5rem;">❤️ 心血管疾病與代謝症候群</h3>
  <p style="color: #cbd5e1; line-height: 1.6; font-size: 1.1rem; margin-bottom: 1.5rem;">
    心臟病發作後需長時間臥床，以及代謝症候群（肥胖、高血壓、高血脂合併）的患者，都屬於五十肩的高風險族群。
    <sup><a href="https://doi.org/10.1136/bmopen-2022-062920" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[4]</a></sup>
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #ffffff; margin-bottom: 0.5rem;">🧠 神經系統疾病</h3>
  <p style="color: #cbd5e1; line-height: 1.6; font-size: 1.1rem; margin-bottom: 1.5rem;">
    帕金森氏症患者因肌肉張力異常而容易肩膀僵硬；中風患者則因偏癱側肢體廢用而容易繼發性五十肩。
    <sup><a href="https://doi.org/10.1136/bmj.331.7530.1453" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[2]</a></sup>
  </p>

  <h3 style="font-size: 1.25rem; font-weight: bold; color: #ffffff; margin-bottom: 0.5rem;">🧬 強直性脊椎炎</h3>
  <p style="color: #cbd5e1; line-height: 1.6; font-size: 1.1rem; margin-bottom: 1.5rem;">
    帶有HLA-B27基因的患者（即強直性脊椎炎易感族群），也被發現具有較高的五十肩風險。
    <sup><a href="https://drbao.org/frozen-shoulder3/" target="_blank" rel="noopener noreferrer" style="color: #2dd4bf; text-decoration: underline;">[14]</a></sup>
  </p>
</section>
    六、五十肩的治療選項比較表格
  </h2>

  <style>
    .custom-table-container {
      width: 100%;
      overflow-x: auto;
      margin: 20px 0;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .modern-table {
      width: 100%;
      border-collapse: collapse;
      font-family: "PingFang TC", "Heiti TC", "Microsoft JhengHei", sans-serif;
      font-size: 15px;
      background-color: #ffffff;
      color: #1f2937;
      min-width: 850px; /* 確保內容不擠壓 */
    }

    /* 表頭樣式 */
    .modern-table thead tr {
      background-color: #1e3a8a; /* 深藍色 */
      color: #ffffff;
      text-align: left;
      font-weight: bold;
    }

    .modern-table th {
      padding: 16px 12px;
      border-bottom: 2px solid #111827;
      letter-spacing: 0.5px;
    }

    /* 單元格樣式 */
    .modern-table td {
      padding: 14px 12px;
      border-bottom: 1px solid #e5e7eb;
      line-height: 1.6;
    }

    /* 第一欄側邊標題加強反差 */
    .modern-table td:first-child {
      background-color: #f9fafb;
      font-weight: 600;
      color: #111827;
      width: 180px;
    }

    /* 交錯行變色 */
    .modern-table tbody tr:nth-of-type(even) {
      background-color: #f3f4f6;
    }

    /* 滑鼠懸停效果 */
    .modern-table tbody tr:hover {
      background-color: #e0e7ff;
      transition: background-color 0.2s ease;
    }

    /* 針對特殊提醒的樣式 */
    .text-warning { color: #d97706; font-weight: 500; }
    .text-danger { color: #dc2626; font-weight: 600; }
    .text-success { color: #15803d; font-weight: 600; }

    /* 響應式調整 */
    @media (max-width: 600px) {
      .modern-table {
        font-size: 14px;
      }
    }
  </style>

  <div class="custom-table-container">
    <table class="modern-table">
      <thead>
        <tr>
          <th>治療方式</th>
          <th>適用階段</th>
          <th>主要效果</th>
          <th>糖尿病患者特殊考量</th>
          <th style="text-align: center; white-space: nowrap;">來源</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>口服止痛藥 (NSAIDs)</td>
          <td>疼痛期</td>
          <td>減輕炎症與疼痛</td>
          <td>長期使用需注意腎功能</td>
          <td style="text-align: center;">
            <sup><a href="https://www.edh.tw/article/16019" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">[15]</a></sup>
          </td>
        </tr>
        <tr>
          <td>肩關節擴張注射</td>
          <td>疼痛期至冰凍期</td>
          <td>快速止痛、改善短期功能</td>
          <td class="text-warning">⚠️ 注射後可能血糖暫時升高 2-3 天，需加強監測</td>
          <td style="text-align: center; white-space: nowrap;">
            <sup><a href="https://doi.org/10.1016/j.jcot.2018.04.003" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">[5]</a></sup>
            <sup><a href="https://t1dexchange.org/frozen-shoulder-and-diabetes-is-there-a-connection/" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">[8]</a></sup>
          </td>
        </tr>
        <tr>
          <td>物理治療<br><span style="font-size: 0.8rem; font-weight: normal; opacity: 0.7;">(徒手＋運動)</span></td>
          <td>各階段均適用</td>
          <td>恢復關節活動度、強化肌力</td>
          <td>糖尿病患者通常需要更長療程</td>
          <td style="text-align: center;">
            <sup><a href="https://doi.org/10.1016/j.arrct.2021.100141" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">[3]</a></sup>
          </td>
        </tr>
        <tr>
          <td>麻醉下徒手矯正 </td>
          <td>冰凍期至解凍期</td>
          <td>強制鬆開沾黏，快速改善角度</td>
          <td>糖尿病患者術後恢復較慢</td>
          <td style="text-align: center;">
            <sup><a href="https://doi.org/10.1016/j.arrct.2021.100141" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">[3]</a></sup>
          </td>
        </tr>
        <tr>
          <td>關節鏡關節囊鬆解術</td>
          <td>保守治療無效時</td>
          <td>直接切除纖維組織，效果最佳</td>
          <td class="text-danger">❗ 術後感染風險較高 (HbA1c > 8 時顯著上升)</td>
          <td style="text-align: center; white-space: nowrap;">
            <sup><a href="https://doi.org/10.1016/j.jcot.2018.04.003" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">[5]</a></sup>
            <sup><a href="https://pubmed.ncbi.nlm.nih.gov/29688958/" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">[16]</a></sup>
          </td>
        </tr>
        <tr>
          <td>體外震波治療 </td>
          <td>疼痛期至冰凍期</td>
          <td>促進血液循環、緩解疼痛</td>
          <td class="text-success">✅ 無血糖影響，對糖尿病患者相對安全</td>
          <td style="text-align: center;">
            <sup><a href="https://doi.org/10.1016/j.arrct.2021.100141" target="_blank" rel="noopener noreferrer" style="color: #2563eb;">[3]</a></sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

          <section style="margin-bottom: 3.5rem;">
            <div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #b45309; margin-top: 0; font-weight: bold; font-size: 1.4rem; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
                📢 七、常見三大誤區解析
              </h2>
              <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
                <li style="margin-bottom: 1.5rem; display: flex; align-items: start;">
                  <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
                  <div>
                    <strong>誤區一：「五十肩放著不管，一定會自己好」</strong><br>
                    <span style="display: block; margin-top: 0.5rem; line-height: 1.6;"><strong>事實澄清：</strong>雖然五十肩過去被認為是「自限性疾病」，但2021年發表的系統性文獻回顧明確指出，「五十肩是自限性疾病」的說法過於簡化且在很多情況下並不準確——大量證據顯示，許多患者長期遺留疼痛與活動受限。對於糖尿病患者而言，這個問題更為嚴重：若不積極介入，糖尿病五十肩的恢復期往往遠超過一般的2-3年。
                      <sup><a href="https://doi.org/10.1016/j.arrct.2021.100141" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">[3]</a></sup>.
                    </span>
                  </div>
                </li>
                <li style="margin-bottom: 1.5rem; display: flex; align-items: start;">
                  <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
                  <div>
                    <strong>誤區二：「糖尿病控制好了，五十肩就會消失」</strong><br>
                    <span style="display: block; margin-top: 0.5rem; line-height: 1.6;"><strong>事實澄清：</strong>這是一個過度樂觀的期待。如前所述，雖然良好的血糖控制在「預防」五十肩上有其意義，但一旦AGEs已在關節囊中大量交聯沉積，形成結構性纖維化，單靠改善HbA1c無法「消除」已形成的沾黏。糖尿病患者的五十肩，必須同時積極進行肩關節本身的治療（物理治療、注射或手術），而非單純等待血糖改善帶來轉機。
                      <sup><a href="https://pubmed.ncbi.nlm.nih.gov/22617920/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">[6]</a></sup>.
                    </span>
                  </div>
                </li>
                <li style="margin-bottom: 0; display: flex; align-items: start;">
                  <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
                  <div>
                    <strong>誤區三：「做越大、越用力的肩膀運動，五十肩好得越快」</strong><br>
                    <span style="display: block; margin-top: 0.5rem; line-height: 1.6;"><strong>事實澄清：</strong>在五十肩的「疼痛期」，過度激進的肩膀操練反而可能加劇炎症反應，延長痛苦期。臨床上正確的做法是「漸進式的溫和牽張」，而非暴力牽拉。尤其是糖尿病患者，因組織彈性較差，強迫活動容易造成微小撕裂傷，反而誘發更嚴重的炎症與疤痕。正確的方式應在物理治療師的指導下進行個人化的漸進式運動療程。
                      <sup><a href="https://doi.org/10.1016/j.arrct.2021.100141" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">[3]</a></sup>.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

          <section style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 1.5rem; overflow: hidden; margin: 3rem 0; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);">
            <div style="background-color: #1e293b; padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">
              <h2 style="color: #22d3ee; margin: 0; font-size: 1.25rem; display: flex; align-items: center; font-weight: bold;">
                <span style="margin-right: 8px;">🏆</span> 八、FAQ 常見問題
              </h2>
            </div>
            <div style="padding: 2rem 1.25rem 1.2rem 1.25rem;">
              
              <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.2rem; font-weight: bold; line-height: 1.4; display: block; width: 100%; clear: both;">
                Q1. 我有糖尿病，肩膀最近開始痛，怎麼知道是不是五十肩？
              </h3>
              <p style="color: #94a3b8; line-height: 1.8; font-size: 1.05rem; margin-bottom: 2rem; text-align: justify;">
                五十肩最典型的特徵是「各方向活動均受限」，尤其是外旋（手臂向外轉）最為明顯，其次是外展與前屈。若您的肩痛是在無明顯外傷下逐漸發生，且活動範圍日漸縮小，夜間痛明顯，應及早至骨科或復健科就診，進行理學檢查。必要時可搭配超音波或MRI確診，並同時評估血糖控制狀況。
              </p>

              <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.2rem; font-weight: bold; line-height: 1.4; display: block; width: 100%; clear: both;">
                Q2. 除了藥物與治療，日常生活中能做什麼幫助五十肩恢復？
              </h3>
              <p style="color: #94a3b8; line-height: 1.8; font-size: 1.05rem; margin-bottom: 1.5rem; text-align: justify;">
                每天定時做溫和的鐘擺運動（pendulum exercise）、爬牆練習（wall-climbing exercise）等伸展動作，有助於維持並逐步恢復關節活動度。此外，睡姿的調整（避免壓迫患側肩）、熱敷患部（疼痛期冰敷，解凍期熱敷）也有輔助效果。對糖尿病患者而言，規律的有氧運動（如快走、游泳）不僅有助於血糖控制，也能促進全身組織的代謝環境改善，間接有利於五十肩康復。
              </p>

              <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.2rem; font-weight: bold; line-height: 1.4; display: block; width: 100%; clear: both;">
                Q3. 五十肩需要開刀嗎？手術效果如何？
              </h3>
              <p style="color: #94a3b8; line-height: 1.8; font-size: 1.05rem; margin-bottom: 2rem; text-align: justify;">
                絕大多數五十肩（包括糖尿病患者）可透過保守治療（物理治療、注射）獲得改善，不需要手術。手術（主要是關節鏡關節囊鬆解術）通常保留給：保守治療6個月以上仍無顯著改善者。糖尿病患者的手術效果，根據研究，整體上仍能獲得良好的功能改善，但初期改善幅度可能不如非糖尿病患者，且術後恢復較慢，需更積極配合復健。
                <sup><a href="https://doi.org/10.1016/j.jcot.2018.04.003" target="_blank" rel="noopener noreferrer" style="color: #22d3ee; text-decoration: underline;">[5]</a></sup>.
              </p>

              <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.2rem; font-weight: bold; line-height: 1.4; display: block; width: 100%; clear: both;">
                Q4. 五十肩會復發嗎？另一側肩膀也會得嗎？
              </h3>
              <p style="color: #94a3b8; line-height: 1.8; font-size: 1.05rem; margin-bottom: 2rem; text-align: justify;">
                同一側肩膀復發率低（約14%），但對側肩膀確實有發病風險——研究指出約6-17%的患者會在另一側也出現五十肩，且糖尿病患者的雙側發病率更高。預防之道在於保持肩部規律活動、積極控制糖尿病，並在發現早期症狀時及時就醫。
                <sup><a href="https://doi.org/10.1136/bmjopen-2022-062920" target="_blank" rel="noopener noreferrer" style="color: #22d3ee; text-decoration: underline;">[4]</a></sup>.
              </p>


            </div>
          </section>

          <hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

          <div style="background-color: #f8fafc; color: #334155; padding: 32px; border-radius: 12px; border-left: 6px solid #64748b; margin-bottom: 32px; font-family: sans-serif; line-height: 1.7; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 1.5rem; font-weight: bold; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">結語與呼籲行動</h2>
            
            <p style="color: #475569; margin-top: 16px; font-size: 1.05rem;">
              五十肩與糖尿病之間，不是巧合，而是深層代謝失衡的外在表現。糖化、慢性炎症、微血管病變——這些糖尿病的經典病理機制，無一不在肩關節囊中留下它們的印記。
            </p>
            
            <p style="color: #475569; font-size: 1.05rem;">
              如果您是糖尿病患者，請記住：<strong style="color: #1e293b;">肩膀健康是糖尿病整體管理的一部分</strong>。定期請醫師評估肩關節活動度、積極維持血糖控制、不忽視任何早期肩痛信號，是預防五十肩的最有效策略。
            </p>

            <p style="color: #475569; font-size: 1.05rem;">
              如果您已確診五十肩，請不要灰心——即使是糖尿病相關的頑固型五十肩，在規範化的多模態治療下（物理治療＋適當注射＋血糖管理），絕大多數患者都能獲得顯著的功能改善。
            </p>

            <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin-bottom: 16px; color: #1e293b; font-weight: bold; font-size: 1.05rem;">
                若您或身旁的糖尿病患者有肩膀疼痛或活動受限的症狀，請儘速預約復健科門診，進行全面評估，把握治療的黃金時期，另外控制好血糖對五十肩也是非常重要的，推薦新竹內分泌科好醫師。
              </p>
<a href="https://anfulin.com.tw/clinic-hours/metabolic-endocrinology/" 
   target="_blank" 
   rel="noopener noreferrer" 
   style="display: inline-block !important; background-color: #375987 !important; color: #f8fafc !important; font-weight: bold !important; padding: 12px 24px !important; border-radius: 9999px !important; text-decoration: none !important; font-size: 1.05rem !important; font-family: system-ui, sans-serif !important;">
  前往林均賢內分泌專科醫師
</a>
            </div>
          </div>

      `,
  referencesHtml: `
<h2>📚 參考文獻 (References)</h2>
          <div style="background-color: #f8fafc; padding: 1.5rem; border-radius: 0.75rem; margin-top: 1.5rem; font-size: 0.95rem; color: #475569; border: 1px solid #e2e8f0; line-height: 1.6; word-break: break-all;">
            <ol style="padding-left: 0; margin: 0; list-style-type: decimal; list-style-position: inside; color: #2563eb; font-weight: bold;">
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Zreik NH, Malik RA, Charalambous CP. (2016). Adhesive capsulitis of the shoulder and diabetes: a meta-analysis of prevalence. Muscles Ligaments Tendons J, 6(1), 26–34. <a href="https://doi.org/10.11138/mltj/2016.6.1.026" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi:10.11138/mltj/2016.6.1.026</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Dias R, Cutts S, Massoud S. (2005). Clinical Review: Frozen Shoulder. BMJ, 331, 1453–1456. <a href="https://doi.org/10.1136/bmj.331.7530.1453" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi:10.1136/bmj.331.7530.1453</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Dyer BP, Burton C, Rathod-Mistry T, Blagojevic-Bucknall M, van der Windt DA. (2021). Diabetes as a Prognostic Factor in Frozen Shoulder: A Systematic Review. Arch Rehabil Res Clin Transl, 3(3), 100141. <a href="https://doi.org/10.1016/j.arrct.2021.100141" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi:10.1016/j.arrct.2021.100141</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Dyer BP, Rathod-Mistry T, Burton C, van der Windt D, Bucknall M. (2023). Diabetes as a risk factor for the onset of frozen shoulder: a systematic review and meta-analysis. BMJ Open, 13(1), e062920. <a href="https://doi.org/10.1136/bmjopen-2022-062920" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi:10.1136/bmjopen-2022-062920</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Patel AN, Davies AJ, Bhatt M. (2019). Chronic adhesive capsulitis (Frozen shoulder): Comparative outcomes of treatment in patients with diabetes and obesity. J Clin Orthop Trauma, 10(2), 258–263. <a href="https://doi.org/10.1016/j.jcot.2018.04.003" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi:10.1016/j.jcot.2018.04.003</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Tighe CB, Oakley WS Jr. (2012). Effects of glycemic control on prevalence of diabetic frozen shoulder. J Shoulder Elbow Surg. <a href="https://pubmed.ncbi.nlm.nih.gov/22617920/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">PubMed: 22617920</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Dyer BP, Burton C, et al. (2023). Pathophysiology of frozen shoulder. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9815013/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">PMC9815013</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Snyder T1D, Edelman S. (2025). Frozen Shoulder and Diabetes: Clinical Case Reports. <a href="https://t1dexchange.org/frozen-shoulder-and-diabetes-is-there-a-connection/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">T1D Exchange, January 2025</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Albishi A, et al. (2024). Impact of Glycemic Control on Shoulder Proprioception in Type 2 Diabetes Mellitus. <a href="https://doi.org/10.2147/JMDH.S472025" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi:10.2147/JMDH.S472025</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Li W, Lou J, Huangfu W, Han D. (2023). Type 2 diabetes and fasting glycemic traits are causal factors of frozen shoulder. <a href="https://pubmed.ncbi.nlm.nih.gov/37748531/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">PubMed: 37748531</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Cleveland Shoulder Institute. (2025). The Increased Risk of Frozen Shoulder During Menopause Explained. <a href="https://clevelandshoulder.com/why-are-women-more-prone-to-frozen-shoulder/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">Cleveland Shoulder Institute</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Huang SW, Lin JW, Wang WT, et al. (2014). Hyperthyroidism is a risk factor for developing adhesive capsulitis of the shoulder. <a href="https://doi.org/10.1038/srep04183" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi:10.1038/srep04183</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  輝馥診所（2019）。甲狀腺功能好壞，與五十肩也有關係。 <a href="https://retreat-clinic.com/2019/01/08/%E7%94%B2%E7%8B%80%E8%85%BA%E5%8A%9F%E8%83%BD%E5%A5%BD%E5%A3%9E%EF%BC%8C%E8%88%87%E4%BA%94%E5%8D%81%E8%82%A9%E4%B9%9F%E6%9C%89%E9%97%9C%E4%BF%82/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">輝馥診所官方部落格</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  台北原力復健科診所·侯鐘堡醫師（2021）。五十肩深度討論—醫學期刊翻譯分析。 <a href="https://drbao.org/frozen-shoulder3/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">台北原力復健科診所</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  早安健康編輯部（2023）。五十肩治療方式完整解析。 <a href="https://www.edh.tw/article/16019" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">早安健康</a>
                </span>
              </li>
              <li style="margin-bottom: 0.8rem;">
                <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
                  Cancienne JM, et al. (2018). Association of Perioperative Glycemic Control With Deep Postoperative Infection After Shoulder Arthroplasty. <a href="https://pubmed.ncbi.nlm.nih.gov/29688958/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">PubMed: 29688958</a>
                </span>
              </li>
            </ol>
          </div>
        </article>
      </main>

      <footer class="border-t border-zinc-800 text-gray-400 text-center py-8 text-sm mt-8" style="font-family: 'system-ui', sans-serif;">
        <p>本文內容僅供醫學衛教參考，不構成診療建議。請諮詢您的主治醫師以獲得個人化的醫療建議。</p>
        <p class="mt-2">© 2025 醫學知識編輯團隊</p>
      </footer>
    </div>
  `
},

{
  id: 'mounjaro-vs-wegovy-vs-rybelsus',
  title: '猛健樂 vs 週纖達 vs 瑞倍適：三大腸泌素藥物完整比較指南',
  lastModified: '2026-04-11',
  category: '衛教文章',
  date: '2026-04-11',
  summary: '深度比較猛健樂（Mounjaro/Tirzepatide）、週纖達（Wegovy/Semaglutide）與瑞倍適（Rybelsus）的減重效果、副作用、使用方式與費用，結合SURMOUNT-5最新臨床實證，協助患者選擇最適合自己的減重方案。',
  coverImage: '/images/news/article/mounjaro-vs-wegovy-vs-rybelsus.webp',
  seoTitle: '猛健樂 vs 週纖達 vs 瑞倍適：三大腸泌素藥物完整比較指南',
  seoDescription: '深度比較猛健樂（Mounjaro/Tirzepatide）、週纖達（Wegovy/Semaglutide）與瑞倍適（Rybelsus）的減重效果、副作用、使用方式與費用，結合SURMOUNT-5最新臨床實證，協助患者選擇最適合自己的減重方案。',
  keywords: ['猛健樂', '週纖達', '瑞倍適', 'Mounjaro', 'Wegovy', 'Rybelsus', '腸泌素', '減重', 'Tirzepatide', 'Semaglutide'],
  contentHtml: `

<div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem;">
  <h2 style="margin-top: 0; color: #0369a1;">📝 總結摘要與核心觀點</h2>
  <p style="margin-bottom: 0; line-height: 1.6; color: #334155;">
    猛健樂（Mounjaro®/Tirzepatide）、週纖達（Wegovy®/Semaglutide 注射劑）與瑞倍適（Rybelsus®/Semaglutide 口服錠）同屬腸泌素類藥物，但機轉、劑型、減重效果與適用族群各有不同。若以純粹減重效果論，猛健樂憑藉 GIP＋GLP-1 雙重機轉，在 SURMOUNT-5 臨床試驗中創下 72 週平均減重 20.2% 的歷史紀錄，優於週纖達的 13.7%。週纖達則擁有最完整的心血管保護證據，適合高心血管風險患者。瑞倍適以口服錠劑形式突破注射恐懼，但吸收率受飲食影響大，整體減重效果相對較低。三種藥物皆為處方藥，須由專業醫師評估後方可使用，並須配合飲食與運動以達最佳療效。
  </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>前言：台灣肥胖危機與腸泌素藥物的崛起</h2>
<p>根據衛生福利部國民健康署統計，台灣 31 歲以上成人超過 80% 體脂肪過高，成年人過重與肥胖比例已高達 50.85%，意即每兩位成人中就有一位正面臨體重管理的挑戰。<sup><a href="https://health.tvbs.com.tw/medical/359171" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[1]</a></sup> 肥胖不僅影響外觀，更與近 200 種慢性疾病高度相關，已被世界衛生組織正式定義為一種慢性疾病。</p>
<br>
<p>在此背景下，以「腸泌素）」為作用基礎的注射型與口服型藥物，近年成為全球醫學界最矚目的治療突破。2025 年，台灣衛福部先後正式核准猛健樂（Mounjaro®）的減重適應症（2025 年 6 月）以及週纖達（Wegovy®）正式上市（2025 年 4 月），加上早於 2022 年核准的口服藥瑞倍適（Rybelsus®），台灣患者現在擁有前所未有的多元治療選項。<sup><a href="https://drglowbeauty.com.tw/service/mounjaro" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[2]</a></sup><sup><a href="https://www.dr-heichao.com.tw/drnews_view.php?t=2&mpmid=9&minfoid=704" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[3]</a></sup></p>
<br>
<p>然而，面對選擇，許多患者感到困惑：這三種藥物到底有什麼差異？哪一種適合自己？本文將從藥理機轉、臨床實證、使用方法、副作用與費用等多個面向，為你提供最完整、最實證的比較分析。</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>一、三種藥物的基本介紹與藥理機轉</h2>

<h3>猛健樂（Mounjaro®）：雙腸泌素革命</h3>
<p>猛健樂的主要成分為 Tirzepatide，由美國禮來藥廠（Eli Lilly and Company）研發，是全球第一個同時作用於 GIP（葡萄糖依賴型胰島素釋放胜肽）與 GLP-1（類升糖素胜肽-1）兩種腸泌素受體的「雙受體促效劑」。<sup><a href="https://webdept.fjuh.fju.edu.tw/FjuhDep/rdwe/mounjaro/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[4]</a></sup></p>
<p><strong>其作用機轉如下：</strong></p>
<ul>
  <li><strong>GLP-1 受體促效</strong>：促進胰島素分泌、延緩胃排空、降低食慾、抑制升糖素</li>
  <li><strong>GIP 受體促效</strong>：提升胰島素敏感性、促進脂肪代謝、強化能量利用效率，同時有助於降低噁心嘔吐的副作用感受</li>
</ul>
<p>這種雙重機轉，正是猛健樂能在減重與控糖上大幅超越傳統單純 GLP-1 藥物的核心原因。台灣衛福部已於 2025 年 6 月正式核准猛健樂的減重適應症，適用於 BMI ≥ 30 或 BMI ≥ 27 合併至少一項體重相關共病的成人。<sup><a href="https://drglowbeauty.com.tw/service/mounjaro" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[2]</a></sup></p>

<h3>週纖達（Wegovy®）：GLP-1 單受體的心血管守護者</h3>
<p>週纖達主成分為 Semaglutide，由丹麥藥廠諾和諾德（Novo Nordisk）研發，與人體自然分泌的 GLP-1 荷爾蒙有高達 94% 的結構同源性。其半衰期約為一週，因此僅需每週皮下注射一次即可維持穩定藥物濃度。<sup><a href="https://tpshow.net/Wegovy-35370" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[5]</a></sup></p>
<p><strong>作用機轉聚焦於 GLP-1 受體，包含：</strong></p>
<ul>
  <li>向大腦傳遞飽足訊號，降低食慾與熱量攝取</li>
  <li>延緩胃排空，延長飽足感</li>
  <li>促進胰島素分泌並抑制升糖素</li>
  <li>具有心血管保護的獨特優勢，可顯著降低重大心血管不良事件風險</li>
</ul>
<p>週纖達於 2025 年 4 月在台灣正式上市，台灣正式名稱為「週纖達諾特筆」（衛部菌疫輸字第 001224-001228 號）。<sup><a href="https://www.dr-heichao.com.tw/drnews_view.php?t=2&mpmid=9&minfoid=704" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[3]</a></sup></p>

<h3>瑞倍適（Rybelsus®）：全球首款口服 GLP-1 藥物</h3>
<p>瑞倍適同樣含有 Semaglutide，但以每日口服錠劑的創新形式給藥，是全球第一款、也是台灣第一個核准的口服 GLP-1 受體促效劑，於 2022 年取得台灣 TFDA 核准。<sup><a href="https://www.regentaiwan.com/news/rybelsus" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[6]</a></sup></p>
<p>為了克服 GLP-1 類藥物在胃中易被蛋白酶分解的問題，瑞倍適採用 SNAC吸收增強劑包覆藥錠，可中和局部胃酸並促進胃黏膜吸收，使 Semaglutide 得以口服給藥。<sup><a href="https://doctorfit.com.tw/doctors-articles/rybelsus1/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[7]</a></sup> 目前瑞倍適在台灣核准適應症為第二型糖尿病血糖控制，用於減重屬於適應症外（off-label）使用，須由醫師評估。</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>二、三種藥物完整比較表格</h2>
<style>
  .custom-table-container {
    width: 100%;
    overflow-x: auto;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .modern-table {
    width: 100%;
    border-collapse: collapse;
    font-family: "PingFang TC", "Heiti TC", "Microsoft JhengHei", sans-serif;
    font-size: 15px;
    background-color: #ffffff;
    color: #1f2937;
    min-width: 800px; /* 確保內容不擠壓 */
  }

  /* 表頭樣式 */
  .modern-table thead tr {
    background-color: #1e3a8a; /* 深藍色 */
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }

  .modern-table th {
    padding: 16px 12px;
    border-bottom: 2px solid #111827;
    letter-spacing: 0.5px;
  }

  /* 單元格樣式 */
  .modern-table td {
    padding: 14px 12px;
    border-bottom: 1px solid #e5e7eb;
    line-height: 1.5;
  }

  /* 第一欄側邊標題加強反差 */
  .modern-table td:first-child {
    background-color: #f9fafb;
    font-weight: 600;
    color: #111827;
    width: 160px;
  }

  /* 交錯行變色 */
  .modern-table tbody tr:nth-of-type(even) {
    background-color: #f3f4f6;
  }

  /* 滑鼠懸停效果 */
  .modern-table tbody tr:hover {
    background-color: #e0e7ff;
    transition: background-color 0.2s ease;
  }

  /* 響應式調整 */
  @media (max-width: 600px) {
    .modern-table {
      font-size: 14px;
    }
  }
</style>

<div class="custom-table-container">
  <table class="modern-table">
    <thead>
      <tr>
        <th>比較項目</th>
        <th>猛健樂（Mounjaro®）</th>
        <th>週纖達（Wegovy®）</th>
        <th>瑞倍適（Rybelsus®）</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>主成分</td>
        <td>Tirzepatide</td>
        <td>Semaglutide</td>
        <td>Semaglutide</td>
      </tr>
      <tr>
        <td>作用機轉</td>
        <td>GIP ＋ GLP-1 雙受體促效劑</td>
        <td>GLP-1 單受體促效劑</td>
        <td>GLP-1 單受體促效劑</td>
      </tr>
      <tr>
        <td>劑型</td>
        <td>每週一次皮下注射</td>
        <td>每週一次皮下注射</td>
        <td>每日一次口服錠劑</td>
      </tr>
      <tr>
        <td>起始劑量</td>
        <td>2.5 mg/週</td>
        <td>0.25 mg/週</td>
        <td>3 mg/日</td>
      </tr>
      <tr>
        <td>最高劑量</td>
        <td>15 mg/週</td>
        <td>2.4 mg/週</td>
        <td>14 mg/日</td>
      </tr>
      <tr>
        <td>72 週平均減重幅度</td>
        <td>約 20.2%（SURMOUNT-5）</td>
        <td>約 13.7%（SURMOUNT-5）</td>
        <td>約 9–15%（PIONEER 試驗）</td>
      </tr>
      <tr>
        <td>HbA1c 平均降幅</td>
        <td>約 2.0%–2.3%</td>
        <td>約 1.86%</td>
        <td>約 1.0%–1.4%</td>
      </tr>
      <tr>
        <td>台灣核准減重適應症</td>
        <td>✅ 是 (2025 年 6 月)</td>
        <td>✅ 是 (2025 年 4 月)</td>
        <td>❌ 否 (僅限糖尿病)</td>
      </tr>
      <tr>
        <td>青少年 (≥12歲)</td>
        <td>❌ 尚未核准</td>
        <td>✅ 美國已核准</td>
        <td>❌ 否</td>
      </tr>
      <tr>
        <td>心血管保護證據</td>
        <td>尚在研究中</td>
        <td>✅ 強效 (SELECT 試驗)</td>
        <td>有限</td>
      </tr>
      <tr>
        <td>優勢</td>
        <td><strong>最強減重效果、雙重控糖</strong></td>
        <td><strong>心血管保護、青少年適用</strong></td>
        <td><strong>免注射、口服方便</strong></td>
      </tr>
      <tr>
        <td>劣勢</td>
        <td>費用較高、注射劑型</td>
        <td>注射劑型</td>
        <td>吸收率低、服藥限制多</td>
      </tr>
      <tr>
        <td>台灣健保給付</td>
        <td>❌ 否（自費）</td>
        <td>❌ 否（自費）</td>
        <td>❌ 否（自費）</td>
      </tr>
      <tr>
        <td>製藥公司</td>
        <td>美國禮來 (Eli Lilly)</td>
        <td>丹麥諾和諾德 (Novo Nordisk)</td>
        <td>丹麥諾和諾德 (Novo Nordisk)</td>
      </tr>
    </tbody>
  </table>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>三、臨床療效深度比較：數字說話</h2>

<h3>減重效果：猛健樂勝出，但數字背後的細節更重要</h3>
<p>2025 年 5 月，《新英格蘭醫學期刊》（NEJM）發表了史上首個針對猛健樂與週纖達的直接比較臨床試驗——SURMOUNT-5 試驗。<sup><a href="https://doi.org/10.1056/NEJMoa2416394" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[8]</a></sup></p>
<p>試驗設計：751 名無第二型糖尿病的肥胖或過重成人（至少合併一項體重相關共病），隨機分配至猛健樂（最大耐受劑量 10mg 或 15mg）或週纖達（最大耐受劑量 1.7mg 或 2.4mg），持續 72 週。</p>
<p><strong>主要結果：</strong></p>
<ul>
  <li>猛健樂組平均體重下降 <strong>20.2%</strong>（相當於平均減去約 22.8 公斤）</li>
  <li>週纖達組平均體重下降 <strong>13.7%</strong>（相當於平均減去約 15.0 公斤）</li>
  <li>猛健樂較週纖達多出 <strong>47% 的相對減重幅度</strong>，差異具高度統計顯著性<sup><a href="https://pubmed.ncbi.nlm.nih.gov/40353578/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[9]</a></sup></li>
</ul>
<p>腰圍改變方面，猛健樂組腰圍平均縮減 18.4 公分，週纖達組為 13.0 公分。此外，達到減重 25% 以上的比例，猛健樂組為 31.6%，週纖達組僅 16.1%。<sup><a href="https://www.acc.org/Latest-in-Cardiology/Journal-Scans/2025/07/10/09/09/SURMOUNT-5" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[10]</a></sup></p>
<p>一項涵蓋多項 RCT 及真實世界資料的系統性回顧與統合分析研究（2025 年發表）進一步確認，在高劑量（&gt; 10 mg）長期使用（&gt; 6 個月）的情境下，猛健樂的減重效果平均比週纖達多出 5–6.5 個百分點，優勢十分穩健。<sup><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12151102/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[11]</a></sup></p>
<p><strong>真實世界數據的補充：</strong>美國 Komodo Health 數據庫的真實世界研究（SHAPE 研究）顯示，在無第二型糖尿病的過重/肥胖患者中，使用 猛健樂一年的平均減重為 16.5%，週纖達 2.4 mg 則為 14.1%，差距較臨床試驗縮小，但仍維持 猛健樂 的優勢。<sup><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12579654/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[12]</a></sup></p>

<div style="background-color: #f0f9ff; padding: 1.5rem; border-left: 4px solid #0891b2; border-radius: 0.5rem; margin: 1.5rem 0;">
  <h4 style="margin-top: 0; color: #0e7490;">💡 一個重要的臨床細節</h4>
  <p style="margin-bottom: 0; color: #334155;">
    SURMOUNT-5 試驗是以「最大耐受劑量」給藥，並非所有人都能達到最高劑量。因腸胃副作用停藥的比例，週纖達組（5.6%）反而高於猛健樂組（2.7%），這意味著猛健樂在腸胃耐受性方面可能略優於週纖達——這是臨床實務上值得關注的細微差異。
  </p>
</div>

<h3>血糖控制：猛健樂的糖尿病優勢更為突出</h3>
<p>根據 SURPASS-2 試驗，猛健樂各劑量組的 HbA1c 平均降幅分別為：5 mg 組 -2.01%、10 mg 組 -2.24%、15 mg 組 -2.30%。相比之下，週纖達 1 mg 組的 HbA1c 降幅為 -1.86%，三個劑量的猛健樂均顯著優於週纖達。<sup><a href="https://azurebeauty56.com/doctor-column/mounjarovswegovy/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[13]</a></sup> 達到 HbA1c &lt; 7% 目標的比例，猛健樂最高劑量組高達 92%，遠超週纖達的表現。</p>
<p>輔大醫院的資料指出，對非糖尿病及糖尿病受試者，猛健樂分別可減去約 20.9% 及 14.7% 的體重，且可使 HbA1c 降低超過 2.0%。<sup><a href="https://webdept.fjuh.fju.edu.tw/FjuhDep/rdwe/mounjaro/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[4]</a></sup></p>

<h3>心血管保護：週纖達的獨特優勢</h3>
<p>這是三種藥物中差異最鮮明之處。週纖達在 SELECT 試驗（BMI ≥ 27 合併心血管疾病但無糖尿病）中，證明可顯著降低重大心血管不良事件（MACE）風險，包括心血管死亡、非致命心肌梗塞及非致命中風。這項心血管保護的適應症已獲台灣 TFDA 核准。<sup><a href="https://www.sensenyoho.com/info/post-theme-9" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[14]</a></sup></p>
<p>相比之下，猛健樂的心血管保護數據（SURPASS-CVOT）目前仍有部分結果待完整公布。因此，對於有明確心血管疾病史（如曾有心肌梗塞、中風或冠心病）的患者，週纖達目前具有更強的循證依據。</p>
<p>瑞倍適的口服 Semaglutide 心血管保護數據則相對有限，且由於口服劑量（最高 14 mg/日）遠低於注射型週纖達的有效暴露量，其心血管保護作用無法等同於週纖達。</p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>四、使用方式詳細說明</h2>

<h3>猛健樂（Mounjaro®）使用方式</h3>
<ol>
  <li><strong>起始劑量</strong>：每週一次皮下注射 2.5 mg，持續 4 週</li>
  <li><strong>劑量遞增</strong>：每 4 週可增加 2.5 mg，依序為 5 mg、7.5 mg、10 mg、12.5 mg、15 mg</li>
  <li><strong>注射部位</strong>：腹部（肚臍 5 公分以外）、大腿或上臂，每次輪替部位</li>
  <li><strong>注射時間</strong>：每週固定同一天，一天中任何時間均可，無需空腹</li>
  <li><strong>儲存方式</strong>：未開封需冷藏（2–8°C）；開封後可室溫（不超過 30°C）保存最多 21–30 天，切勿冷凍<sup><a href="https://aurelie-aesthetic.com/mounjaro/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[15]</a></sup></li>
  <li><strong>漏針處理</strong>：漏針後 4 天（96 小時）內盡快補打；超過 4 天則略過，依原定時程注射下一針</li>
</ol>

<h3>週纖達（Wegovy®）使用方式</h3>
<ol>
  <li><strong>起始劑量</strong>：每週一次皮下注射 0.25 mg，持續 4 週</li>
  <li><strong>劑量遞增</strong>：每 4 週逐步增加，依序為 0.5 mg、1 mg、1.7 mg，最終維持劑量 2.4 mg</li>
  <li><strong>注射部位</strong>：腹部（肚臍 5 公分以外）、上臂或大腿，每次輪替部位，90 度垂直刺入</li>
  <li><strong>注射時間</strong>：每週固定同一天，一天中任何時間均可，無需空腹</li>
  <li><strong>儲存方式</strong>：未使用前需冷藏；使用中可室溫（≤ 30°C）保存，不可冷凍</li>
  <li><strong>漏針處理</strong>：5 天內可補打；已超過 5 天則略過，依原定時程注射下一針<sup><a href="https://www.vigorbeauty.com/service.php?act=view&no=124" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[16]</a></sup></li>
</ol>

<h3>瑞倍適（Rybelsus®）使用方式</h3>
<p>瑞倍適的服藥規矩是三種藥物中最嚴格的，必須嚴格遵守：</p>
<ol>
  <li><strong>起始劑量</strong>：每日一次口服 3 mg，持續 1 個月；之後增至 7 mg/日；如需進一步改善血糖，可再增至 14 mg/日（每日最高劑量）</li>
  <li><strong>服藥時機（關鍵！）</strong>：必須在<strong>空腹狀態下</strong>，搭配<strong>少量清水（不超過 120 ml/半杯）</strong>整顆吞服，不可剝開、壓碎或咀嚼</li>
  <li><strong>服藥後等待</strong>：服藥後至少 <strong>30 分鐘內</strong>不可進食、喝水或服用其他口服藥物。等待時間越長，吸收率越佳<sup><a href="https://www.ktgh.com.tw/ktgh/Home/WesternMedDetail/8A908AC137E771A2D8C50EDC1E11BE54" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[17]</a></sup></li>
  <li><strong>建議時機</strong>：通常建議早上起床後立即服藥，調早鬧鐘以確保服藥後 30 分鐘才吃早餐</li>
</ol>

<div style="background-color: #fff7ed; border: 1px solid #fed7aa; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
  <p style="color: #9a3412; font-size: 14px; margin: 0;">
    <strong>⚠️ 臨床觀察：</strong>許多患者在剛開始使用瑞倍適時，因為工作或生活習慣，往往無法堅持「嚴格空腹 30 分鐘」的服藥規則，導致 Semaglutide 實際吸收率大幅下降（若搭配食物服用，吸收率可能降低 34% 以上），進而影響療效。這是瑞倍適在真實世界表現可能不如臨床試驗的核心原因之一。
  </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>五、副作用與安全性比較</h2>
<p>三種藥物因均含有 GLP-1 受體促效機制，腸胃道相關副作用是最常見的共同問題：</p>
<p><strong>常見副作用（三種藥物共通）：</strong></p>
<ul>
  <li>噁心、嘔吐（尤其在劑量遞增階段）</li>
  <li>腹瀉或便秘</li>
  <li>腹脹、食慾明顯下降</li>
  <li>輕微頭暈、倦怠感</li>
</ul>
<p>根據 SURMOUNT-5 試驗，因腸胃道副作用而停藥的比例，週纖達組（5.6%）高於猛健樂組（2.7%）。這可能與猛健樂中 GIP 受體促效的加入有關，GIP 受體活化被認為可以緩解部分 GLP-1 所引起的噁心感。<sup><a href="https://www.acc.org/Latest-in-Cardiology/Journal-Scans/2025/07/10/09/09/SURMOUNT-5" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[10]</a></sup></p>
<p><strong>嚴重副作用與禁忌症（三種藥物共通）：</strong></p>
<ul>
  <li>個人或家族有甲狀腺髓質癌（MTC）病史者禁用</li>
  <li>有第二型多發性內分泌腫瘤症候群（MEN 2）者禁用</li>
  <li>有嚴重急性胰臟炎病史者禁用</li>
  <li>孕婦及哺乳期婦女禁用（計畫懷孕者須提前至少 2 個月停藥）</li>
  <li>對藥物成分過敏者禁用</li>
</ul>
<p><strong>瑞倍適的特殊交互作用提醒：</strong></p>
<p>口服 Semaglutide 與 Levothyroxine（甲狀腺素藥物）同時使用時，後者的甲狀腺素暴露量（AUC）可增加約 33%，需監測甲狀腺參數。與 Rosuvastatin（他汀類降血脂藥）併用時，後者的 AUC 可增加 41%，需注意劑量調整。<sup><a href="https://www.ktgh.com.tw/ktgh/Home/WesternMedDetail/8A908AC137E771A2D8C50EDC1E11BE54" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[17]</a></sup></p>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #fffbeb; border: 2px solid #fbbf24; border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  <h2 style="color: #b45309; margin-top: 0; font-weight: bold; border-bottom: 2px solid #fcd34d; padding-bottom: 0.5rem; display: flex; align-items: center;">
      📢 破解迷思：三大常見誤區解析
  </h2>
  
  <ul style="list-style: none; padding: 0; margin-top: 1rem; color: #92400e;">
      <li style="margin-bottom: 1.5rem; display: flex; align-items: start;">
          <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">1</span>
          <div>
            <strong>誤區一：「瑞倍適跟週纖達一樣，只是換成口服，效果相同」</strong><br>
            <span style="display: block; margin-top: 0.5rem;"><strong>正確觀念：</strong>雖然二者同含 Semaglutide，但口服 Semaglutide 的生體可用率遠低於注射型。口服版本需以高達 14 mg/日的劑量才能達到接近週纖達 0.5 mg/週注射的血中暴露量。<sup><a href="https://www.pofeng.org/w/wegovy" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[18]</a></sup> 若與食物同服，吸收率可大幅降低。臨床研究顯示，口服 Semaglutide 14 mg/日的減重效果約為注射型 Semaglutide 2.4 mg/週的 60–70%，兩者並非等效。</span>
          </div>
      </li>
      <li style="margin-bottom: 1.5rem; display: flex; align-items: start;">
          <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">2</span>
          <div>
            <strong>誤區二：「猛健樂副作用更嚴重，因為它更強效」</strong><br>
            <span style="display: block; margin-top: 0.5rem;"><strong>正確觀念：</strong>直觀上可能認為藥物越強、副作用越大，但 SURMOUNT-5 試驗的數據恰恰相反。因腸胃不適停藥的比例，週纖達組（5.6%）實際上<strong>高於</strong>猛健樂組（2.7%）。<sup><a href="https://www.acc.org/Latest-in-Cardiology/Journal-Scans/2025/07/10/09/09/SURMOUNT-5" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[10]</a></sup> 這與猛健樂中 GIP 受體促效的加入有關，GIP 受體活化可能緩解部分 GLP-1 引起的噁心反應。</span>
          </div>
      </li>
      <li style="margin-bottom: 0; display: flex; align-items: start;">
          <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0;">3</span>
          <div>
            <strong>誤區三：「減重藥物只要停藥就會完全復胖，所以沒有意義」</strong><br>
            <span style="display: block; margin-top: 0.5rem;"><strong>正確觀念：</strong>停藥後確實存在體重回升的風險，但這並非意味著減重藥物沒有價值。藥物輔助減重期間同步建立的健康飲食習慣與運動模式，可大幅降低停藥後的復胖幅度。世界衛生組織在 2025 年最新「肥胖用藥指南」中，明確建議成年肥胖患者可長期使用減重藥物作為治療的一部分。<sup><a href="https://drglowbeauty.com.tw/service/mounjaro" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[2]</a></sup></span>
          </div>
      </li>
  </ul>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<section style="background-color: rgba(6, 182, 212, 0.05); border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 1.5rem; padding: 2.5rem 1.25rem; margin-bottom: 3rem; font-family: sans-serif;">
  
  <h2 style="color: #22d3ee; margin-top: 0; margin-bottom: 1.5rem; line-height: 1.4; font-size: 1.5rem; letter-spacing: -0.02em;">
    <span style="display: inline-block;">👨‍⚕️<a href="/about/doctors" style="color: #22d3ee; text-decoration: none;">林羿辰醫師</a>觀點：三大腸泌素該如何抉擇？</span>
  </h2>
  
  <p style="font-size: 1.2rem; line-height: 1.7; color: #cbd5e1; margin-bottom: 2.5rem; text-align: justify; letter-spacing: -0.01em;">
    沒有一種藥物適合所有人，重點在於針對您的健康狀況與生活型態來挑選最符合需求的方案。
  </p>

  <div style="display: grid; gap: 1.8rem;">
    
    <div style="padding: 0;">
      <h4 style="color: #f8fafc; margin-bottom: 0.4rem; font-size: 1.35rem; line-height: 1.3; letter-spacing: -0.02em;">1. 我是第二型糖尿病患者，同時需要減重，該如何選擇？</h4>
      <p style="margin: 0; font-size: 1.15rem; line-height: 1.6; color: #e2e8f0; letter-spacing: -0.01em;">
        對於合併第二型糖尿病與肥胖（俗稱「糖胖症」）的患者，<strong>猛健樂</strong>是目前臨床實證最強的選項。其雙重 GIP/GLP-1 機轉不僅在控糖方面優於傳統 GLP-1 藥物，在減重幅度上同樣名列前茅。SURPASS 系列試驗證明，對第二型糖尿病患者，猛健樂可使 HbA1c 平均下降 2.0–2.3%，並減去約 14.7% 體重。<sup><a href="https://webdept.fjuh.fju.edu.tw/FjuhDep/rdwe/mounjaro/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[4]</a></sup>
        <br><br>
        <span style="color: #38bdf8;">⚡ 臨床重要提醒：部分糖尿病患者在使用雙重腸泌素藥物後，血糖改善速度快且幅度大，若同時服用磺醯脲類藥物或胰島素，低血糖風險相應提高，需與主治醫師密切溝通，適時調整同期使用的降血糖藥物劑量。</span>
      </p>
    </div>

    <div style="padding: 0;">
      <h4 style="color: #f8fafc; margin-bottom: 0.4rem; font-size: 1.35rem; line-height: 1.3; letter-spacing: -0.02em;">2. 我有心臟病史或高心血管風險，但需要減重，哪種藥物最合適？</h4>
      <p style="margin: 0; font-size: 1.15rem; line-height: 1.6; color: #e2e8f0; letter-spacing: -0.01em;">
        對於有明確心血管疾病史（如心肌梗塞、腦中風、周邊動脈疾病）合併肥胖或過重的患者，<strong>週纖達（Wegovy）</strong>目前擁有最強的心血管保護臨床證據，其 SELECT 試驗已證明可顯著降低 MACE（重大心血管不良事件）風險。這也是三種藥物中唯一在台灣正式取得「心血管風險降低」適應症的藥物。
      </p>
    </div>

    <div style="padding: 0;">
      <h4 style="color: #f8fafc; margin-bottom: 0.4rem; font-size: 1.35rem; line-height: 1.3; letter-spacing: -0.02em;">3. 我非常抗拒打針，但想用腸泌素藥物，只能選瑞倍適嗎？</h4>
      <p style="margin: 0; font-size: 1.15rem; line-height: 1.6; color: #e2e8f0; letter-spacing: -0.01em;">
        對於真的無法接受任何注射劑型的患者，<strong>瑞倍適</strong>目前是台灣唯一可選的口服 GLP-1 藥物。雖然減重效果相對有限，但研究顯示口服 Semaglutide 50 mg（未來高劑量版本）在 15 個月內平均可減去約 15% 體重，效果接近注射型。<sup><a href="https://www.bc-huang.com/glp1-semaglutide-liraglutide-dulaglutide-tirzepatide/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[19]</a></sup> 選擇瑞倍適的患者，需要特別做好「每天早起後立即服藥、等待 30 分鐘後才進食」的生活習慣調整。
      </p>
    </div>

    <div style="padding: 0;">
      <h4 style="color: #f8fafc; margin-bottom: 0.4rem; font-size: 1.35rem; line-height: 1.3; letter-spacing: -0.02em;">4. 我是純粹為了減重（無糖尿病），最在意的是最大效果，該選哪個？</h4>
      <p style="margin: 0; font-size: 1.15rem; line-height: 1.6; color: #e2e8f0; letter-spacing: -0.01em;">
        若患者符合適應症（BMI ≥ 30 或 BMI ≥ 27 合併共病），且主要訴求是最大化減重效果，<strong>猛健樂（Mounjaro®）</strong>目前是臨床實證最強的選擇。SURMOUNT-5 的數據已清楚顯示，在同樣使用最大耐受劑量的情況下，猛健樂的減重效果比週纖達多出約 47%（相對減重幅度）。<sup><a href="https://doi.org/10.1056/NEJMoa2416394" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[8]</a></sup>
      </p>
    </div>

  </div>
</section>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<h2>八、費用參考與取得方式</h2>
<p>三種藥物在台灣目前均未納入健保給付，皆為自費處方藥：</p>
<ul>
  <li><strong>猛健樂</strong>：依診所與劑量不同，每月費用約 $11000–$20,000 台幣不等（每支含 4 週用量）</li>
  <li><strong>週纖達</strong>：依診所與劑量不同，1 mg 一支約 $9,000；1.7 mg 約 $12,000；2.4 mg 約 $16,000（每支含 4 週用量）<sup><a href="https://www.pofeng.org/w/wegovy" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none;">[18]</a></sup></li>
  <li><strong>瑞倍適</strong>：費用相對較低，每月約 $4,000–$8,000 台幣（但服藥限制多，需嚴格配合）</li>
</ul>

<div style="background-color: #fef2f2; border: 1px solid #fca5a5; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
  <p style="color: #991b1b; font-size: 14px; font-weight: bold; margin: 0;">
    ⛔ 重要警示：三種藥物均屬處方藥，嚴禁透過網路、私人代購或非醫療管道購買。非正規管道的藥物可能為仿冒品、過期品或儲存不當，不僅無效，更可能危及生命。請務必透過合法醫療院所，由醫師評估後方可取得。
  </p>
</div>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<section style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 1.5rem; overflow: hidden; margin: 3rem 0; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);">
  <div style="background-color: #1e293b; padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">
    <h2 style="color: #22d3ee; margin: 0; font-size: 1.25rem; display: flex; align-items: center;">
      <span style="margin-right: 8px;">🏆</span> 常見問題 FAQ：用藥安全與迷思解答
    </h2>
  </div>

  <div style="padding: 2rem 1.25rem 1.2rem 1.25rem;">
    <div style="width: 100%;">
      
      <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.3rem; line-height: 1.4; display: block; width: 100%; clear: both;">
        Q1：猛健樂、週纖達和瑞倍適，三種藥物可以同時使用嗎？
      </h3>
      <p style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">
        不可以。三種藥物均含有 GLP-1 受體促效成分，同時使用不會增加療效，反而會大幅增加嚴重副作用風險，包括嚴重噁心嘔吐、胰臟炎等。若需更換藥物，必須在專業醫師評估後，制定銜接方案，切勿自行更換或併用。
      </p>

      <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.3rem; line-height: 1.4; display: block; width: 100%; clear: both;">
        Q2：打了猛健樂或週纖達之後，停藥會立刻復胖嗎？
      </h3>
      <p style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">
        停藥後若未維持健康飲食與運動習慣，確實有體重回升的風險。然而「停藥 = 立刻復胖回原點」是過度誇大的說法。研究顯示，停藥後 1 年內部分患者確實會回升約三分之一到一半的減重量，但若能配合生活習慣調整，可有效減緩復胖速度。治療目標是將藥物視為建立新代謝基線的工具，而非永久依賴的必需品。
      </p>

      <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.3rem; line-height: 1.4; display: block; width: 100%; clear: both;">
        Q3：瑞倍適的服藥方式為什麼這麼麻煩？不照做會怎樣？
      </h3>
      <p style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">
        瑞倍適使用 SNAC 吸收增強劑技術，必須在空腹狀態下，胃中酸鹼值低時才能達到最佳局部中和效果，促進藥物穿透胃黏膜吸收。如果搭配食物或大量的水服用，Semaglutide 的吸收量（AUC）可降低 34%、最大濃度（Cmax）可降低 32% 以上。簡而言之，不按規矩服藥，療效會大打折扣。<sup><a href="https://www.ktgh.com.tw/ktgh/Home/WesternMedDetail/8A908AC137E771A2D8C50EDC1E11BE54" target="_blank" rel="noopener noreferrer" style="color: #22d3ee; text-decoration: none;">[17]</a></sup>
      </p>

      <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.3rem; line-height: 1.4; display: block; width: 100%; clear: both;">
        Q4：猛健樂或週纖達使用期間，可以喝酒嗎？
      </h3>
      <p style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem; margin-bottom: 2rem; text-align: justify;">
        建議限量或避免飲酒。酒精本身會影響血糖穩定性，與 GLP-1 類藥物合用可能加重低血糖風險（尤其與其他降糖藥併用時），同時也可能加重腸胃道不適症狀。若有社交場合無法完全避免飲酒，建議先與主治醫師討論，並注意飲酒量與觀察身體反應。
      </p>

      <h3 style="color: #f8fafc; margin-top: 0; margin-bottom: 0.75rem; font-size: 1.3rem; line-height: 1.4; display: block; width: 100%; clear: both;">
        Q5：這三種藥物對肌肉量有影響嗎？停藥後肌肉會流失嗎？
      </h3>
      <p style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem; margin-bottom: 1.5rem; text-align: justify;">
        這是近年臨床上備受關注的議題。台灣 STEP12 研究的次分析顯示，使用 Semaglutide 減去的體重中，約 75% 為脂肪下降，25% 為瘦體組織（肌肉）流失。<sup><a href="https://www.pofeng.org/w/wegovy" target="_blank" rel="noopener noreferrer" style="color: #22d3ee; text-decoration: none;">[18]</a></sup> 因此，在使用任何腸泌素藥物期間，建議同步進行阻力訓練（如重量訓練）並確保充足的蛋白質攝取（每日每公斤體重至少 1.2–1.5 克蛋白質），以盡量保留肌肉量。
      </p>

    </div>
  </div>
</section>

<hr style="margin: 3rem 0; border-top: 1px solid #e2e8f0;">

<div style="background-color: #f8fafc; color: #334155; padding: 32px; border-radius: 12px; border-left: 6px solid #64748b; margin-bottom: 32px; font-family: sans-serif; line-height: 1.7; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
  
  <h2 style="color: #1e293b; margin-top: 0; font-size: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">結語與行動呼籲</h2>
  
  <p style="color: #475569; margin-top: 16px;">
    猛健樂、週纖達與瑞倍適代表著現代醫學在代謝疾病與肥胖治療上的重大突破。沒有一種藥物適合所有人——<strong>猛健樂</strong>以最強減重效果領先，<strong>週纖達</strong>以心血管保護獨樹一幟，<strong>瑞倍適</strong>以口服劑型克服注射恐懼。
  </p>
  
  <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 0; color: #1e293b;">
      最重要的是，<span style="color: #b91c1c; font-weight: bold;">這三種藥物都是處方藥，不是保健食品</span>。任何使用決策都必須在專業醫師評估後進行，並配合飲食調整、規律運動及定期追蹤，才能達到安全有效的長期成果。
    </p>
  </div>

  <p style="font-weight: bold; color: #1e293b; margin-bottom: 12px;">如果你正在考慮使用上述任一藥物，建議你：</p>
  
  <ol style="color: #475569; padding-left: 20px;">
    <li style="margin-bottom: 8px;">預約具備肥胖醫學或代謝疾病專長的醫師進行評估</li>
    <li style="margin-bottom: 8px;">如實提供完整病史（心血管疾病史、甲狀腺疾病史、胰臟炎病史及現有用藥清單）</li>
    <li style="margin-bottom: 8px;">請醫師根據你的 BMI、共病狀況、心血管風險與個人生活習慣，共同制定個人化治療計畫</li>
    <li style="margin-bottom: 8px;">了解費用與療程長度，做好心理與財務準備</li>
    <li style="margin-bottom: 8px;"><span style="text-decoration: underline; font-weight: 600;">切勿透過網路或非醫療管道購藥</span>，以維護自身用藥安全</li>
  </ol>

  <p style="color: #64748b; font-size: 15px; font-style: italic; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 16px; margin-bottom: 0;">
    肥胖是疾病，需要完整的醫療照護，而非一個人默默承受。勇敢踏出尋求幫助的第一步，才是真正改變的開始。
  </p>
  
</div>

`,
  referencesHtml: `
<h2>📚 參考文獻 (References)</h2>
<div style="background-color: #f8fafc; padding: 1rem; border-radius: 0.75rem; margin-top: 1.5rem; font-size: 0.9rem; color: #475569; border: 1px solid #e2e8f0; line-height: 1.5; word-break: break-all;">
  <ol style="padding-left: 0; margin: 0; list-style-type: decimal; list-style-position: inside; color: #2563eb; font-weight: bold;">
   <li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    健康2.0／TVBS（2025年）。猛健樂比週纖達更快瘦？2025最新價格、副作用指南。實證：台灣肥胖人口與猛健樂市場資訊。 
    <a href="https://health.tvbs.com.tw/medical/359171" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://health.tvbs.com.tw/medical/359171</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    存奕美學診所（2026年2月）。猛健樂 Mounjaro 完整解析。實證：猛健樂台灣核准減重適應症時間（2025年6月）及衛教資訊。 
    <a href="https://drglowbeauty.com.tw/service/mounjaro" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://drglowbeauty.com.tw/service/mounjaro</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    潮代診所 林黑潮（2026年）。Wegovy 週纖達諾特筆全解析。實證：週纖達台灣上市時間（2025年4月）及藥品核准資訊。 
    <a href="https://www.dr-heichao.com.tw/drnews_view.php?t=2&mpmid=9&minfoid=704" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://www.dr-heichao.com.tw/drnews_view.php?t=2&mpmid=9&minfoid=704</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    輔大醫院智慧科學體重管理中心（2025年）。猛健樂：幫助控糖與減重的新選擇。實證：猛健樂雙重機轉、HbA1c 降幅與減重幅度臨床數據。 
    <a href="https://webdept.fjuh.fju.edu.tw/FjuhDep/rdwe/mounjaro/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://webdept.fjuh.fju.edu.tw/FjuhDep/rdwe/mounjaro/</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    北秀健康管理（2025年）。Wegovy 週纖達全攻略！施打方式、臨床效果、副作用詳細揭露。實證：週纖達 GLP-1 機轉、半衰期特性及 STEP 試驗數據。 
    <a href="https://tpshow.net/Wegovy-35370" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://tpshow.net/Wegovy-35370</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    Regent Taiwan（2025年）。瑞倍適（Rybelsus®）全球首款口服 GLP-1 藥物介紹。實證：瑞倍適台灣上市時間（2022年）及 SNAC 吸收技術說明。 
    <a href="https://www.regentaiwan.com/news/rybelsus" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://www.regentaiwan.com/news/rybelsus</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    原美學診所（2024年）。Semaglutide 的口服劑型（Rybelsus 瑞倍適）在台灣上市了！實證：SNAC 吸收增強劑技術及口服 GLP-1 藥物突破說明。 
    <a href="https://doctorfit.com.tw/doctors-articles/rybelsus1/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://doctorfit.com.tw/doctors-articles/rybelsus1/</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    Aronne LJ, et al.（2025年）. <em>Tirzepatide as Compared with Semaglutide for the Treatment of Obesity.</em> New England Journal of Medicine. 2025; 393(1). 實證：SURMOUNT-5 頭對頭試驗，猛健樂 vs 週纖達直接比較，平均減重 20.2% vs 13.7%。
    <a href="https://doi.org/10.1056/NEJMoa2416394" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi: 10.1056/NEJMoa2416394</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    PubMed（2025年）. <em>Tirzepatide as Compared with Semaglutide for the Treatment of Obesity.</em> PMID: 40353578. 實證：SURMOUNT-5 試驗 PubMed 索引，確認 p &lt; 0.001 統計顯著性。 
    <a href="https://pubmed.ncbi.nlm.nih.gov/40353578/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://pubmed.ncbi.nlm.nih.gov/40353578/</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    American College of Cardiology（2025年7月）. <em>SURMOUNT-5: Greater Loss of Weight, Waist Circumference With Tirzepatide Than Semaglutide.</em> 實證：腰圍縮減比較（-18.4 cm vs -13.0 cm）、停藥率比較（2.7% vs 5.6%）。 
    <a href="https://www.acc.org/Latest-in-Cardiology/Journal-Scans/2025/07/10/09/09/SURMOUNT-5" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://www.acc.org/Latest-in-Cardiology/Journal-Scans/2025/07/10/09/09/SURMOUNT-5</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    PMC（2025年）. <em>Comparative Efficacy of Tirzepatide vs. Semaglutide in Reducing Body Weight: A Systematic Review and Meta-Analysis.</em> 實證：統合分析顯示 Tirzepatide 平均比 Semaglutide 多減重 4.23%（MD）。 
    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12151102/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://pmc.ncbi.nlm.nih.gov/articles/PMC12151102/</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    PMC / SHAPE Study（2025年）. <em>Real-World Weight Loss Observed With Semaglutide and Tirzepatide in Patients with Overweight or Obesity Without Type 2 Diabetes.</em> 實證：真實世界一年追蹤，Tirzepatide 平均減重 16.5% vs Semaglutide 14.1%。 
    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12579654/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://pmc.ncbi.nlm.nih.gov/articles/PMC12579654/</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    蒼嵐健康美學診所（2026年2月）。猛健樂 vs 週纖達 2款瘦瘦筆哪個減重更有效？醫師蒼藍鴿曝答案。實證：SURPASS-2 試驗 HbA1c 降幅比較數據。 
    <a href="https://azurebeauty56.com/doctor-column/mounjarovswegovy/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://azurebeauty56.com/doctor-column/mounjarovswegovy/</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    千色診所（2025年）。週纖達 Wegovy 減重注射筆完整介紹。實證：週纖達心血管保護適應症（SELECT 試驗）說明。 
    <a href="https://www.sensenyoho.com/info/post-theme-9" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://www.sensenyoho.com/info/post-theme-9</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    奧蕾莉美學診所（2026年1月）。猛健樂懶人包 效果/副作用/價錢。實證：猛健樂儲存方式、漏針處理及使用方法。 
    <a href="https://aurelie-aesthetic.com/mounjaro/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://aurelie-aesthetic.com/mounjaro/</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    維格醫療集團（2025年）。週纖達 Wegovy 服務項目。實證：週纖達注射方式、漏針處理、副作用及禁忌症說明。 
    <a href="https://www.vigorbeauty.com/service.php?act=view&no=124" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://www.vigorbeauty.com/service.php?act=view&no=124</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    光田綜合醫院（2022年）。Rybelsus 瑞倍適錠用藥指導——Semaglutide 劑量說明。實證：瑞倍適服藥規範、藥物動力學及藥物交互作用（Levothyroxine、Rosuvastatin 等）。 
    <a href="https://www.ktgh.com.tw/ktgh/Home/WesternMedDetail/8A908AC137E771A2D8C50EDC1E11BE54" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://www.ktgh.com.tw/ktgh/Home/WesternMedDetail/8A908AC137E771A2D8C50EDC1E11BE54</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    李柏鋒診所（2025年）。週纖達 Wegovy 完整資訊。實證：費用資訊、口服 vs 注射型 Semaglutide 暴露量比較、肌肉流失比例（STEP12 台灣次分析）。 
    <a href="https://www.pofeng.org/w/wegovy" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://www.pofeng.org/w/wegovy</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    黃柏誠醫師（2025年1月）。瘦瘦針腸泌素：口服到注射，減重到控糖，每天到每週。實證：口服 Semaglutide 50 mg 高劑量版本減重效果（15 個月平均減重 15%）。 
    <a href="https://www.bc-huang.com/glp1-semaglutide-liraglutide-dulaglutide-tirzepatide/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">https://www.bc-huang.com/glp1-semaglutide-liraglutide-dulaglutide-tirzepatide/</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    Jastreboff AM, et al.（2022年）. <em>Tirzepatide Once Weekly for the Treatment of Obesity.</em> N Engl J Med. 387(3):205-216. 實證：SURMOUNT-1 試驗，非糖尿病肥胖患者使用 Tirzepatide 15 mg，72 週平均減重 22.5%。
    <a href="https://doi.org/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi: 10.1056/NEJMoa2206038</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    Wilding JPH, et al.（2021年）. <em>Once-Weekly Semaglutide in Adults with Overweight or Obesity.</em> N Engl J Med. 384(11):989-1002. 實證：STEP 1 試驗，使用 Semaglutide 2.4 mg 68 週，平均減重 14.9%。
    <a href="https://doi.org/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi: 10.1056/NEJMoa2032183</a>
  </span>
</li>
<li style="margin-bottom: 0.6rem;">
  <span style="color: #475569; font-weight: normal; margin-left: 0.5rem;">
    Hankosky et al.（2025年）. <em>Tirzepatide 10 and 15 mg versus semaglutide 2.4 mg in people with obesity or overweight with type 2 diabetes: An indirect treatment comparison.</em> Diabetes, Obesity and Metabolism. 實證：間接比較研究，Tirzepatide 10 mg 及 15 mg 在第二型糖尿病患者中的體重降幅顯著優於 Semaglutide 2.4 mg。
    <a href="https://doi.org/10.1111/dom.16401" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; text-underline-offset: 3px;">doi: 10.1111/dom.16401</a>
  </span>
</li>  </ol>
</div>

<div style="background-color: #f3f4f6; border-radius: 8px; padding: 16px; font-size: 12px; color: #6b7280; margin-top: 32px;">
  <strong>免責聲明：</strong>本文以衛教宣導及分享醫療新知為目的，非為廣告內容。文章中提及之藥物名稱、效果與使用方式均以醫師親自說明為準。任何藥物使用均需由專業醫師評估並開立處方，切勿自行購買或使用。效果因個人體質不同而有差異。
</div>  `
},

  {
    id: 'dr-lin-appointment-guide',
    title: '🕒 林羿辰醫師看診攻略：掛號小撇步',
    lastModified: '2026-03-11',
    category: '診間隨筆',
    date: '2026-03-11',
    summary: '想要順利看診不撲空、減少等待時間嗎？林羿辰醫師診間專業攻略：掌握網路預約與現場加掛技巧，還有避開人潮的黃金時段建議，讓您就醫更輕鬆。',
    coverImage: '/images/news/article/0311.webp',
    seoTitle: '林羿辰醫師掛號攻略：現場加掛名額、看診時間建議與預約撇步',
    seoDescription: '提供林羿辰醫師看診掛號完整攻略。包含網路預約額滿後的現場加掛規則、建議到診時間、如何縮短等待時間，以及診所預約注意事項，助您順利就醫。',
    keywords: ['林羿辰醫師', '掛號攻略', '現場加掛', '網路預約', '門診時間', '減少等待時間', '復健科掛號'],
    contentHtml: `
        <img src="/images/news/article/0311.webp" alt="林羿辰醫師看診攻略示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
        <br />
        <p>最近有不少病患提到想掛林醫師的門診網路額滿掛不到，或是現場止掛沒辦法看，這邊整理了一份掛號攻略，提供給有需要的朋友喔</p>
  
        <hr>
  
        <h2>1. 網路預約沒名額了？別擔心，還有「現場加掛」！</h2>
        <ul>
          <li><strong>網路預約：</strong> 每診提供 25 個名額。</li>
          <li><strong>現場加掛：</strong> 現場會保留有 10~15 個加掛名額。</li>
        </ul>
        <blockquote>小提醒：若當天人數過多仍會「止掛」，建議盡早到場，確保能掛到號。</blockquote>
  
        <hr>
  
        <h2>2. 想縮短等待時間？掌握兩個黃金時段</h2>
        <p>如果您不想在診間等太久，建議參考以下策略：</p>
        <ul>
          <li><strong>早鳥族：</strong> 門診開始前 30 分鐘就先來掛號。</li>
          <li><strong>避開人潮族：</strong> 門診開始 1 小時後再到現場掛號。</li>
        </ul>
  
        <hr>
  
        <h2>3. 提早規劃，網路預約更輕鬆</h2>
        <p>建議在 <strong>一週前</strong> 就先上網預約，這時段最容易成功卡位，避免看診前夕因額滿而預約不到，影響您的行程安排。</p>
  
        <hr>
  
        <h2>4. 體貼他人，無法就診請取消</h2>
        <p>醫療資源寶貴，如果您已成功預約但臨時有事無法前來，請務必記得 <strong>取消掛號</strong>，將寶貴的名額留給更有需要的病患，讓善意循環。</p>
  
        <hr>
  
        <h2>5. 彈性選擇，醫療品質不打折</h2>
        <p>若林醫師門診真的約不到，或您不想等候太久，診所內其他醫師也都非常優秀且專業。我們維持統一的高標準醫療品質，歡迎大家多加預約利用。</p>
  
        <br />
        <p>祝您就醫順利，早日康復！</p>
        <p>立即前往 <a href="/booking" class="text-cyan-400 hover:underline">掛號系統</a> 查看目前名額。</p>
    `
  },
  
  {
    id: 'baby-kneecap-mystery',
    title: '各位新手爸媽，先別緊張！ 如果你現在抱著剛出生的嬰兒去照 X 光，你會嚇一跳：咦？為什麼寶寶膝蓋那邊是「空」的？骨頭去哪了？ 😱',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '嬰兒照 X 光為什麼看不到膝蓋骨？別緊張，這是老天爺給寶寶最棒的禮物！復健科醫師揭開「隱形膝蓋」的秘密，告訴你為什麼軟骨是寶寶學爬學走的天然安全氣囊。',
    coverImage: '/images/news/article/202602/baby.webp',
    seoTitle: '嬰兒沒有膝蓋骨？復健科醫師解析寶寶髕骨軟骨化與生長秘密',
    seoDescription: '解析嬰兒X光照不到膝蓋的原因：髕骨在2-6歲前由軟骨構成。復健科醫師說明這個「天然護膝」如何保護寶寶學爬學走時避免骨折與疼痛。',
    keywords: ['嬰兒膝蓋', '髕骨', '軟骨鈣化', '生長板', 'X光', '復健科', '兒童骨科', '學爬'],
    contentHtml: `
        <img src="/images/news/article/202602/baby.webp" alt="嬰兒膝蓋X光與軟骨示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>各位新手爸媽，先別緊張！ 如果你現在抱著剛出生的嬰兒去照 X 光，你會嚇一跳：咦？為什麼寶寶膝蓋那邊是「空」的？骨頭去哪了？ 😱</p>

        <p>身為復健科醫師，今天要來揭曉這個上天最溫柔的設計！</p>

        <hr>

        <h2>🦴 真相是：它是「軟」的！</h2>
        <p>寶寶並不是沒有膝蓋結構，而是他們的髕骨（膝蓋骨）一開始完全是由軟骨構成的。 因為軟骨在 X 光下是透明的，所以看起來就像消失了一樣。一直要等到 2 到 6 歲，這塊軟骨才會慢慢鈣化、變硬，成為我們摸到的那塊硬骨頭。</p>
        
        

        <hr>

        <h2>💡 為什麼老天爺要這樣設計？</h2>
        <p>這其實是為了寶寶的「生存」著想！ 試想一下，如果寶寶的膝蓋一出生就是硬邦邦的骨頭：</p>
        
        <ul>
          <li><strong>學爬會痛爆：</strong> 跪在地上爬行時，膝蓋直接撞地板，寶寶肯定不想爬。</li>
          <li><strong>學走易骨折：</strong> 剛學走路跌跌撞撞，硬碰硬的結果就是膝蓋骨碎裂。</li>
        </ul>

        <p>正因為它是軟骨，它就像是寶寶內建的 <strong>「天然高級護膝」</strong> 或是安全氣囊。🚗💨 這也是為什麼小朋友整天摔倒、跪地都沒事，依然笑嘻嘻；但大人一摔，往往就痛到骨裂甚至骨折的原因（因為我們的「護膝」已經變硬了😭）。</p>

        <hr>

        <h2>👨‍⚕️ 醫師的小叮嚀： </h2>
        <p>所以，趁孩子還小（6 歲以前），好好珍惜他們那雙「軟Ｑ」的膝蓋吧！那是他們探索世界最強大的武器。</p>

        <br />
        <p>如果您對孩子的骨骼發育或生長痛有疑慮，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們為您的小寶貝進行詳細評估。</p>
    `
},
  {
    id: 'diurnal-height-change',
    title: '📏 不用喝轉骨湯！每天早上起床，你都會自動「長高 1 公分」！',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '為什麼下午量身高總是矮了一截？別緊張，這不是你變矮了！身為復健科醫師，今天要揭開脊椎「椎間盤」的吸水秘密，教你如何利用生理特性在體檢時量出最高身高。',
    coverImage: '/images/news/article/202602/height.webp',
    seoTitle: '為什麼早上比較高？復健科醫師解析椎間盤與身高變化的關係',
    seoDescription: '解析早晚身高差距的原因：脊椎椎間盤的再水合作用。復健科醫師說明地心引力如何影響脊椎海綿組織，以及充足睡眠對脊椎彈性的重要性。',
    keywords: ['長高', '椎間盤', '身高差距', '復健科', '脊椎保健', '地心引力', '再水合作用'],
    contentHtml: `
        <img src="/images/news/article/202602/height.webp" alt="脊椎椎間盤早晚高度變化示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>體檢的時候，是不是總覺得機器不準？為什麼下午量身高總是矮了一截？ 別緊張，這不是你「變矮了」，也不是機器壞掉！🙅‍♂️</p>

        <p>身為復健科醫師，今天要教你一個作弊的小撇步：想長高，早上量就對了！</p>

        <hr>

        <h2>你的脊椎，其實是一塊「吸水海綿」🧽！</h2>
        
        <p>我們的脊椎骨之間，夾著一塊塊軟骨叫做「椎間盤」。 你可以把它想像成充滿水分的海綿：</p>
        
        <ul>
          <li><strong>☀️ 白天（受壓）：</strong> 當你站著走路、坐著辦公，地心引力就像一隻無形的大手，慢慢把海綿裡的水分擠出來 ➡️ 脊椎變扁，身高變矮。</li>
          <li><strong>🌙 晚上（回充）：</strong> 當你平躺睡覺時，壓力釋放，水分會重新流回椎間盤（再水合作用）➡️ 海綿膨脹，身高變高！</li>
        </ul>

        <hr>

        <h2>📊 數據會說話：</h2>
        <p>一般人早上剛起床跟晚上睡覺前，身高差可以達到 <strong>1 ~ 2 公分</strong>！ 這也是為什麼太空人從外太空回來時🚀，平均會長高 5 公分（因為在那裡沒有重力把脊椎壓扁）！</p>

        <hr>

        <h2>👨‍⚕️ 醫師的小叮嚀：</h2>
        <p>所以，如果你很在意身高數據（或是差那 1 公分就能考空服員/警察），記得體檢一定要約早上！</p>
        <p>而且這也告訴我們：充足的睡眠不只是為了精神，更是為了讓你的脊椎「喝飽水」、恢復彈性喔。</p>

        <br />
        <p>如果您長期有腰椎擠壓感或<a href="/diseases/spine-hip/lumbar-disc-herniation" class="text-cyan-400 hover:underline">椎間盤突出</a>的困擾，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們為您的脊椎健康進行專業評估。</p>
    `
},
  {
    id: 'funny-bone-ulnar-nerve',
    title: '⚡ 撞到手肘那種電到的酥麻感，到底是撞到哪？',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '手肘敲到桌角，瞬間「滋～」的一聲電流感傳遍全身？那種酸爽不是撞到骨頭，而是撞到了尺神經。復健科醫師帶你認識這條「裸露的電線」以及 Funny Bone 的由來。',
    coverImage: '/images/news/article/202602/ulnar.webp',
    seoTitle: '手肘撞到像電到？尺神經與肘隧道症候群解析 | 復健科醫師衛教',
    seoDescription: '手肘撞到產生電流感的原因是「尺神經」受壓。解析 Funny Bone 英文名稱的諧音由來（Humerus 與 Humorous），以及長期手麻可能潛藏的肘隧道症候群風險。',
    keywords: ['尺神經', '手肘電到', 'Funny Bone', '肘隧道症候群', '手麻', '復健科', '肱骨'],
    contentHtml: `
        <img src="/images/news/article/202602/ulnar.webp" alt="手肘尺神經解剖位置示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>大家一定都有這種經驗吧？手肘不小心敲到桌角，瞬間「滋～」的一聲，一股強烈的電流感直接從小指竄到頭皮，那種酸爽簡直讓人原地升天……😱</p>

        <p>身為復健科醫師，我要告訴你：你撞到的不是骨頭，也不是筋，而是一條無辜的「神經」！</p>

        <hr>

        <h2>🧠 真兇是誰？ 它的名字叫 「尺神經」</h2>
        
        <p>因為它經過手肘時，剛好穿過一個沒什麼肌肉保護的淺溝，就像一條裸露的電線。只要輕輕一敲，就會引發那種讓人想哭又想笑的麻痛感。</p>

        <hr>

        <h2>為什麼英文叫它 "Funny Bone"（有趣的骨頭）？</h2>
        <p>這其實是醫學界最著名的「雙關語諧音梗」！🤣</p>
        
        <ul>
          <li><strong>感覺很怪 (Funny)：</strong> 撞到時那種又麻又痛、說不出來的奇怪感覺。</li>
          <li><strong>諧音梗 (Pun)：</strong> 上臂的骨頭叫做 <strong>Humerus（肱骨）</strong>，發音跟 <strong>Humorous（幽默的）</strong>幾乎一模一樣。</li>
        </ul>

        <p>所以，當你敲到電到時，是因為你的 Humerus（肱骨）正在跟你開一個 Humorous（幽默）的玩笑呢！這就是 "Funny Bone" 的由來。</p>

        <hr>

        <h2>👨‍⚕️ 醫師的小提醒：</h2>
        <p>雖然這感覺很「Funny」，但如果你的手肘長期都有麻麻的感覺，甚至影響到手力，那可能就是<strong>「尺神經」被壓迫太久了</strong>，<a href="/diseases/elbow/ulnar-nerve-entrapment" class="text-cyan-400 hover:underline">肘隧道症候群</a>記得要來找醫生檢查喔！</p>

        
        <br />
        <p>如果您有持續性手麻或握力下降的問題，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，我們會透過神經傳導檢查或超音波為您精確診斷。</p>
    `
},

  {
    id: 'weather-pain-joints',
    title: '🌧️ 阿嬤的膝蓋比氣象局還準？原來我們都有內建「人體氣象臺」！',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '明明大太陽，長輩卻說快變天了？這不是迷信，而是物理學！身為復健科醫師，帶你解析為什麼下雨前關節會痠痛，以及氣壓變化如何影響我們的關節囊。',
    coverImage: '/images/news/article/202602/knee.webp',
    seoTitle: '為什麼下雨前膝蓋痠痛？氣壓與關節痛的關係 | 復健科醫師解析',
    seoDescription: '解析「人體氣象臺」現象：低氣壓如何導致關節囊膨脹並壓迫神經。復健科醫師說明變天關節痛的物理原理，並提供舊傷與退化性關節炎的照護建議。',
    keywords: ['天氣痛', '關節痠痛', '低氣壓', '復健科', '退化性關節炎', '舊傷', '人體氣象台'],
    contentHtml: `
        <img src="/images/news/article/202602/knee.webp" alt="氣壓變化與關節疼痛原理圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>明明窗外還出大太陽，家裡的長輩卻突然摸著膝蓋說：「快變天了，我要趕快去收衣服！」結果過沒多久真的下大雨……😱</p>
        <p>你以為這是都市傳說，還是心理作用嗎？</p>
        <p>身為復健科醫師，我要幫阿嬤平反：這不是迷信，這是物理學！ 🔬</p>

        <hr>

        <h2>🎈 為什麼下雨前關節會痠痛？</h2>
        <p>關鍵不在「濕氣」，而在 <strong>「氣壓」</strong>！</p>
        <p>想像你的關節囊就像一顆 <strong>「密封的氣球」</strong>。</p>
        
        

        <p>當天氣變壞、快要下雨前，大氣壓力會降低（低氣壓）。這時候，原本被大氣壓力壓住的關節囊（氣球），就會因為外部壓力變小而 <strong>微微膨脹</strong>。</p>

        <hr>

        <h2>💥 這一脹，事情就大條了！</h2>
        <p>對於健康的關節可能沒感覺，但對於已經有發炎、舊傷或<a href="/diseases/knee/knee-osteoarthritis " class="text-cyan-400 hover:underline">退化性關節炎</a>來說，這微小的膨脹會直接 <strong>壓迫到周邊敏感的神經與組織</strong>，引發痠痛。</p>
        <p>所以，阿嬤的膝蓋是真的偵測到了「氣壓下降」，比氣象預報的衛星雲圖還要早一步！📡</p>

        <hr>

        <h2>👨‍⚕️ 醫師小結：</h2>
        <p>下次長輩說膝蓋痠要下雨了，請給予尊重，並幫他熱敷一下。那可是經過歲月認證的生物科技啊！</p>

        <br />
        <p>👇 你的身上也有內建氣象臺嗎？是膝蓋、腰還是舊傷口？底下留言告訴我，看誰最準！</p>
        
        <br />
        <p>如果您的舊傷隨天氣變化隱隱作痛，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們協助您透過物理治療或增生療法改善慢性發炎。</p>
    `
},
  {
    id: 'text-neck-syndrome',
    title: '抓到了！現在正在低頭的你，脖子上其實坐著一個「8歲小孩」！',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '你現在是不是正低頭盯著螢幕看？身為復健科醫師，我要告訴你一個殘酷的物理真相：當你低頭 60 度時，頸椎承受的壓力高達 27 公斤！這就是為什麼你的肩頸永遠硬得像石頭。',
    coverImage: '/images/news/article/202602/neck.webp',
    seoTitle: '低頭族頸椎壓力有多大？復健科醫師揭開肩頸痠痛與骨刺真相',
    seoDescription: '解析低頭滑手機對頸椎的影響：低頭60度時頸椎需承受27公斤壓力，相當於一名8歲小孩。復健科醫師教你如何透過正確姿勢預防骨刺與肩頸硬得像石頭的問題。',
    keywords: ['低頭族', '頸椎壓力', '肩頸痠痛', '骨刺', '復健科', '手機姿勢', '肩頸僵硬'],
    contentHtml: `
        <img src="/images/news/article/202602/neck.webp" alt="低頭角度與頸椎承受壓力示意圖" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>你現在是不是正低頭盯著螢幕看？</p>
        <p>先別動！維持這個姿勢想一想：你的脖子現在感覺如何？是不是有點緊、有點痠？</p>
        <p>身為復健科醫師，我要告訴你一個殘酷的物理真相。📉</p>

        <hr>

        <h2>💡 你的頭，比你想像的還要重！</h2>
        <p>平常頭擺正的時候，重量大約是 5 公斤（差不多是一顆保齡球的重量 🎳）。</p>
        
        

        <p>但是！當你低頭 60 度 滑手機時（就是你現在這個姿勢），頸椎承受的壓力會瞬間暴增到 <strong>27 公斤</strong>！</p>

        <hr>

        <h2>🐶 27 公斤是什麼概念？</h2>
        <p>這重量大約等於：</p>
        <ul>
          <li>✅ 一個 8 歲的小學生 👦</li>
          <li>✅ 一隻成年的黃金獵犬 🐕</li>
        </ul>
        
        <p>試想一下，如果我現在把一隻黃金獵犬放到你的肩膀上，叫牠乖乖坐好，然後你每天揹著牠滑 3 小時的手機……</p>
        <p>你的頸椎不抗議、不長骨刺才怪！這就是為什麼你的肩頸永遠硬得像石頭。🗿</p>

        <hr>

        <h2>👨‍⚕️ 醫師的小叮嚀：</h2>
        <p>看到這裡，請做一個動作救救你的脖子——<strong>「把手機舉高，平視螢幕」</strong>。</p>
        <p>雖然手會痠，但總比頸椎提早退化，造成<a href="/diseases/spine-hip/cervical-disc-degeneration" class="text-cyan-400 hover:underline">頸椎椎間盤突出</a>好，對吧？</p>

        <br />
        <p>👇 Tag 你身邊那個總是「低頭族」的朋友，問他：你的脖子上現在是坐著小孩還是黃金獵犬？</p>
        
        <br />
        <p>如果您長期受肩頸痠痛困擾，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們透過超音波檢查為您的頸椎狀況把關。</p>
    `
},

  {
    id: 'knuckle-cracking-myth',
    title: '史上最狂醫師！用 60 年實測：阿嬤說的『折手指會變醜』是真的嗎？',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '「不要再折手指了，以後會得關節炎！」這句話你是不是從小聽到大？甚至還有人說手指節會變粗、變醜？身為復健科醫師，今天我要來幫大家破解這個世紀大迷思！',
    coverImage: '/images/news/article/202602/finger.webp',
    seoTitle: '折手指會關節炎嗎？復健科醫師破解折手指變醜、變粗迷思',
    seoDescription: '破解折手指迷思：美國醫師 Donald Unger 連續 60 年實測折手指是否導致關節炎，並獲得搞笑諾貝爾獎。解析喀喀聲來源（空穴現象）與對關節的影響。',
    keywords: ['折手指', '關節炎', 'Donald Unger', '搞笑諾貝爾獎', '復健科', '空穴現象', '手指變粗'],
    contentHtml: `
        <img src="/images/news/article/202602/finger.webp" alt="折手指迷思破解" style="width: min(100%, 650px); height: auto; display: block; margin: 0 auto;">
         <br />
        <p>「不要再折手指了，以後會得關節炎！」這句話你是不是從小聽到大？甚至還有人說手指節會變粗、變醜？🖐️</p>

        <p>身為復健科醫師，今天我要來幫大家破解這個世紀大迷思！</p>

        <hr>

        <h2>👨‍⚕️ 真相是：放心折吧！完全不會得關節炎。</h2>

        <p>這可不是我隨便說說，這是有人用「60 年的青春」換來的答案！ 這世界上有一位超狂的美國醫師 Donald Unger，為了反駁媽媽的話，他連續 60 年 每天都只折「左手」的手指，右手則完全不折，以此作為對照組。</p>

        <p>60 年後，他比對雙手的 X 光片……結果發現 兩隻手的關節狀況一模一樣，都沒有關節炎！ 這份超有毅力的研究，甚至讓他獲得了 2009 年的「搞笑諾貝爾醫學獎」。🏆</p>

        <hr>

        <h2>🤔 那「喀喀聲」到底是怎麼來的？</h2>
        <p>別擔心，那不是骨頭在摩擦！那是關節液中的氣泡破裂產生的聲音（物理學稱之為「空穴現象」），原理就像你擠破氣泡紙一樣療癒，對關節本身是沒有傷害的。</p>

        <hr>

        <h2>🎯 結論：</h2>
        <p>除非你折到會痛，或者用力過猛拉傷韌帶，否則折手指本身是不會讓關節變大或發炎的。放心去折吧！</p>

        <br />
        <p>👇 底下留言標記你身邊那個「超愛折手指」的朋友，告訴他：你可以安心地繼續折手指了！</p>
        
        <br />
        <p>如果您也有任何關節不適或運動傷害，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們為您提供專業評估。</p>
    `
},

  {
    id: 'skiing-injuries-top5',
    title: '🏂 滑雪的終點是骨科？揭曉雪季「五大傷兵名單」',
    lastModified: '2026-02-11',
    category: '衛教文章',
    date: '2026-02-11',
    summary: '最近門診病患有一半是剛從日本回來的雪友。究竟滑雪最容易傷到哪裡？受傷了該如何快速回到雪場？復健科醫師為你解析雪季熱門傷情與 PRP 增生療法。',
    coverImage: '/images/news/article/ski.webp',
    seoTitle: '滑雪受傷怎麼辦？膝蓋韌帶、尾椎、手腕受傷治療與PRP增生療法',
    seoDescription: '解析滑雪五大常見傷害：尾椎挫傷、腳踝扭傷、膝蓋 MCL 受傷、手腕 TFCC 損傷及肩膀脫臼。提供 PRP、增生療法與高能量雷射等快速修復方案。',
    keywords: ['滑雪受傷', '膝蓋內側副韌帶', 'PRP', '增生療法', '三角軟骨損傷', '復健科'],
    contentHtml: `
        <img src="/images/news/article/ski.webp" alt="滑雪受傷常見部位示意圖" style="width: min(100%, 450px); height: auto; display: block; margin: 0 auto;">
        <h2>🏂 滑雪的終點是骨科？</h2>

        <p>最近門診病患，有一半是剛從日本回來的雪友，甚至還有人是為了下週要出發，現在急著要把舊傷修好的。🎿 最近統計了一下診所的「雪季五大傷兵名單」，看看你中了哪一個？👇</p>

        <hr>

        <h2>🔥 滑雪受傷熱門榜 Top 5</h2>
        <ul>
          <li><strong>尾椎下背挫傷：</strong>跌倒時屁股向後坐，造成下背或尾椎疼痛。</li>
          <li><strong>腳踝扭傷：</strong>雪鞋沒穿好或單板（Snowboard），腳踝直接「翻船」。</li>
          <li><strong>膝蓋內側副韌帶受傷：</strong>雙板（Ski）最常見！兩腳板分太開或是膝蓋內夾，導致內側韌帶撕裂傷。</li>
          <li><strong>手腕三角軟骨損傷：</strong>跌倒時手掌直覺撐地，傷到三角軟骨或舟月韌帶。</li>
          <li><strong>肩膀旋轉肌撕裂：</strong>高速撞擊或跌倒時肩膀著地，嚴重時也可能脫臼。</li>
        </ul>

        <hr>

        <h2>🚑 受傷了，該怎麼辦？</h2>
        <p>其實大部分的輕微拉傷，透過口服藥物搭配物理治療，乖乖休息都會好。但問題來了——<strong>「醫師，我的雪季很短啊！」</strong> 😭</p>
        <p>這是我們最常聽到的心聲。機票飯店都訂了，假也請了，誰想在飯店躺平？這也是為什麼最近<strong>增生療法</strong>與 <strong>PRP（自體血小板）</strong> 的詢問度爆表：</p>

        <ul>
          <li><strong>輕微損傷：</strong>使用高濃度葡萄糖修補組織，穩扎穩打；急性疼痛可考慮<strong>高能量雷射</strong>快速舒緩。</li>
          <li><strong>嚴重撕裂 / 時間緊迫：</strong>許多雪友為了趕快回到雪場，直接選擇 <strong>PRP</strong>。利用高濃度生長因子加速修復，縮短尷尬的「停機時間」。</li>
        </ul>

        <blockquote>
            看到好多病患打完針、經過短暫休息與測試後，傳來順利回到雪道上分享滑雪過程的照片，那種失而復得的笑容，真的是復健科醫師最大的成就感！💪
        </blockquote>

        <p>我也開始期待三月底北海道員工旅遊的滑雪行程了！❄️</p>

        <h2>👨‍⚕️ 醫師小叮嚀</h2>
        <p>滑雪前<strong>「暖身」</strong>真的不能省，護具（護腕、護膝、防摔褲）穿好穿滿。如果不幸受傷，千萬不要硬撐，及早評估治療，才能滑得長長久久喔！</p>
        <br />
        <p>如果您也有滑雪運動傷害，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們陪您重返雪道。</p>
    `
  },

  {
    id: 'musclesprain',
    title: '別再叫它「肌鬆針」了！揭開冬天閃腰潮的背後真相',
    lastModified: '2026-02-10',
    category: '衛教文章',
    date: '2026-02-10',
    summary: '寒流來襲，診所湧入大量「閃到腰」與「落枕」的患者，大家一進門就指名要打「肌肉放鬆針」。但你知道它的成份嗎？要如何避免再發生呢？',
    coverImage: '/images/news/article/musclesprain.webp',
    seoTitle: '冬天閃到腰、落枕怎麼辦？揭開肌肉放鬆針真相與預防秘訣',
    seoDescription: '冬天容易落枕閃腰，許多人指名打肌肉放鬆針。醫師解析肌鬆針成分(NSAID、鬆弛劑、類固醇)與冬天肌肉保養兩大秘訣。',
    keywords: ['落枕', '閃到腰', '肌肉鬆弛劑', '冬天保養', '急性發炎'],
    contentHtml: `
        <img src="/images/news/article/musclesprain.webp" alt="冬天肌肉僵硬與治療示意圖" style="width: 100%; height: auto;">
        <h2>別再叫它「肌鬆針」了！揭開冬天閃腰潮的背後真相</h2>

        <p>你是否也有這種經驗？明明昨天還好好的，早上一覺醒來，脖子卻像被水泥封住轉不動？或是只是彎腰綁個鞋帶，腰部突然一陣閃電般的劇痛？</p>
        <p>寒流來診所湧入大量「閃到腰」與「落枕」的患者，大家一進門就指名要打「肌肉放鬆針」。 但你知道它的成份嗎？ 要如何避免再發生呢?</p>

        <h2>📋 為什麼冬天總是「容易落枕、閃腰」？</h2>
        <ul>
          <li><strong>橡皮筋效應：</strong> 低溫讓肌肉與韌帶變硬、變脆。一個轉身或噴嚏，僵硬的肌肉來不及反應，就發生了微小撕裂。</li>
          <li><strong>冬眠模式：</strong> 血管為了保溫而收縮，導致血液循環變差，代謝廢物堆積，肌肉容易處於「缺氧僵硬」狀態。</li>
          <li><strong>防禦姿勢：</strong> 冷風中我們慣性縮脖子、聳肩，這種無意識的緊繃，就容易落枕。</li>
        </ul>

        <h2>💉 那支「神奇的放鬆針」，到底是什麼？</h2>
        <p>當病人痛到崩潰時，這支針確實能救急，大幅改善生活：</p>
        <ul>
          <li><strong>強效滅火（NSAID）：</strong> 快速阻斷急性發炎風暴，把痛覺訊號降下來，但藥物過敏患者打了可能會休克。</li>
          <li><strong>解除痙攣（鬆弛劑）：</strong> 身體受傷時會因為怕痛而瘋狂收縮（痙攣）來保護患處，結果反而越夾越痛。這一針是強制讓肌肉鬆開，打破疼痛的惡性循環。</li>
          <li><strong>強效止痛 (類固醇)：</strong> 劇烈疼痛，且嚴重影響工作生活，可以更強烈的把急性發炎風暴壓下來，依照患者情況決定是否需要加。</li>
        </ul>

        <h2>💡 如何避免冬天肌肉痛?</h2>
        <ul>
          <li><strong>慢速開機：</strong> 醒來先在被窩動一動，讓肌肉先暖機再活動。</li>
          <li><strong>物理外掛：</strong> 一條圍巾、一個熱敷墊，保持肌肉血液循環及彈性。</li>
        </ul>
    `
  },

  {
    id: 'choosing-the-right-treatment',
    title: '今天，我大概讓五位病人「失望」了… 淺談精準把關的重要性',
    lastModified: '2026-02-09',
    category: '診間隨筆',
    date: '2026-02-09',
    summary: '年關將至，許多病患抱著最後一絲希望走進診間，甚至要求昂貴的 PRP 治療只想「快點好」。但醫療的本質不是選貴的就好，而是基於專業判斷的精準把關。',
    coverImage: '/images/news/article/newyear.webp',
    seoTitle: '為什麼醫師不讓我打PRP？精準醫療與正確復健診斷的重要性',
    seoDescription: '面對鈣化性肌腱炎、五十肩、媽媽手等症狀，最貴的 PRP 不一定是最好的選擇。宸新復健科診所醫師分享診間案例，強調精準診斷、把錢花在刀口上的醫療核心價值。',
    keywords: ['PRP', '鈣化性肌腱炎', '五十肩', '媽媽手', '十字韌帶受傷', '椎間盤突出', '精準醫療', '陳信復健科'],
    contentHtml: `
       <img src="/images/news/article//newyear.webp" alt="為什麼醫師不讓我打PRP？精準醫療與正確復健診斷的重要性" class="responsive-img-enlarge">
        <h2>醫療的本質，不是像點餐一樣「選貴的就好」</h2>
        <p>年關將至，疼痛的焦慮似乎也跟著倒數。今天門診比以往忙碌，其中有五位初診病人，像是約好似地帶著同樣的故事前來。他們都在其他地方做過復健、打過針，卻遲遲未見起色。</p>
        <br />
        <p>在親友的介紹下，他們抱著最後一絲希望走進診間，起手式幾乎都一樣：<strong>「醫師，自費沒關係，PRP 也可以，只要能趕快好過年就好！」</strong></p>
        <br />
        <p>說實話，如果醫療只是商業，這會是最好做的生意。但看著他們急切的眼神，最後我一針 PRP 都沒打。經過超音波與理學檢查評估後，我發現昂貴的治療並不是他們此刻的解方：</p>

        <hr>

        <h2>常見五大疼痛迷思：為什麼你不需要 PRP？</h2>
        
        <h3>1️⃣ 鈣化性肌腱炎</h3>
        <p>超音波下看到明顯的鈣化點，這時候需要的不是修補組織的 PRP，而是<strong>體外震波</strong>精準擊碎，才能真正緩解疼痛。</p>
        

        <h3>2️⃣ 五十肩沾黏</h3>
        <p>當關節囊都縮住了，強行注入生長因子也沒空間發揮。<strong>肩關節擴張術</strong>配合物理治療師的徒手治療把角度拉開，才是當務之急。</p>

        <h3>3️⃣ 嚴重發炎的媽媽手</h3>
        <p>「火燒得正旺」的發炎期，PRP 反而可能誘發更強的發炎反應。這時候最傳統的<strong>類固醇</strong>反而像精準的滅火器，能快速控制症狀。</p>

        <h3>4️⃣ 十字韌帶受傷 (全斷)</h3>
        <p>理學檢查發現膝蓋非常鬆且積水嚴重。如果是全斷，打了 PRP 也長不回來，這時醫師的專業是<strong>及時轉診</strong>到醫院安排開刀，而非留下病患做無效治療。</p>
        

        <h3>5️⃣ 椎間盤突出</h3>
        <p>建議先嘗試<strong>健保復健</strong>，再加上後續的<strong>徒手運動調整</strong>。若能在非侵入性治療下改善，就沒必要承擔高風險的椎間盤注射。</p>

        <hr>

        <h2>👨‍⚕️ 醫師筆記：把錢花在刀口上</h2>
        <blockquote>
          「醫療的本質，是基於專業判斷的精準把關。」
        </blockquote>
        
        <p>我也許「拒絕」了病患原本想做的花錢療程，但我給了他們更需要的東西。<strong>選擇對的治療，遠比選擇貴的治療，更能真正幫到病患。</strong></p>
        <br />
        <p>如果您也有長期治療無效的疼痛，歡迎<a href="/booking" class="text-cyan-400 hover:underline">預約門診</a>，讓我們透過精準的影像檢查，為您找到真正的解方。</p>
    `
  },

  {
    id: 'prp-prolotherapy-guide-hsinchu',
    title: '【2026新竹PRP懶人包】：增生療法原理、治療流程與注意事項全解析',
    lastModified: '2026-02-05',
    category: '衛教文章',
    date: '2026-02-05',
    summary: '新竹關節疼痛治療首選！PRP 到底能治療什麼？宸新復健科專業醫師統整 PRP 修復機轉、適應症、治療流程及術後注意事項，並針對新竹運動族群最關心的修復週期與常見問題深度解答。',
    coverImage: '/images/news/article/prp/0.webp',
    seoTitle: '新竹 PRP 增生療法推薦｜宸新復健科：關節修復、運動傷害、價格流程懶人包',
    seoDescription: '在新竹找 PRP 治療？宸新復健科詳細解析 PRP 高濃度血小板血漿原理，針對膝關節退化、旋轉肌破裂、網球肘等運動傷害提供精準治療。結合超音波導引技術，打造最高效率的組織修復計畫。',
    keywords: [
      '新竹PRP', 
      'PRP治療', 
      '宸新復健科', 
      '增生療法', 
      '高濃度血小板血漿', 
      '關節退化治療', 
      '運動傷害修復', 
      '竹北PRP推薦', 
      '超音波導引注射', 
      '韌帶修復'
    ],
    contentHtml: `
    <style>
  .responsive-img-enlarge { width: 110% !important; max-width: none !important; display: block !important; margin: 1rem auto !important; position: relative !important; left: 50% !important; transform: translateX(-50%) !important; height: auto; }
  @media (min-width: 768px) { .responsive-img-enlarge { width: 100% !important; left: 0 !important; transform: none !important; } }
</style>
        <h2>新竹 PRP 增生療法：專業原理與治療流程全解析</h2>
        <img src="/images/news/article/prp/1.webp" alt="新竹 PRP 增生療法修復原理懶人包" class="responsive-img-enlarge">
        <img src="/images/news/article/prp/2.webp" alt="新竹宸新復健科 PRP 專業治療流程說明" class="responsive-img-enlarge">
        <img src="/images/news/article/prp/3.webp" alt="PRP 治療常見適應症：膝關節、旋轉肌、網球肘" class="responsive-img-enlarge">
        <img src="/images/news/article/prp/4.webp" alt="PRP 注射術後注意事項與居家照護建議" class="responsive-img-enlarge">
        <img src="/images/news/article/prp/5.webp" alt="新竹地區 PRP 治療常見問題 FAQ" class="responsive-img-enlarge">
<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px; padding: 12px 0;">
          
          <a href="/treatments/prp" 
             style="
                display: flex; flex-direction: row; align-items: center; justify-content: center;
                gap: 10px; padding: 12px 24px;
                background: linear-gradient(to right, #3b82f6, #4f46e5);
                border-radius: 16px; color: #ffffff !important; text-decoration: none !important;
                font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease-in-out; cursor: pointer;
             "
             onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.2)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1)';"
          >
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="color: white;"><path d="M464 128a64 64 0 0 0-93.5-57.1C352.4 53.6 324.4 41 292 41c-43.4 0-80.4 22.8-100.4 57.1-15.8-11.4-35.3-18.1-56.3-18.1-52.6 0-95.3 42.7-95.3 95.3 0 22.2 7.6 42.6 20.3 58.7-12.7 16.1-20.3 36.5-20.3 58.7 0 52.6 42.7 95.3 95.3 95.3 21 0 40.5-6.7 56.3-18.1C211.6 404.2 248.6 427 292 427c32.4 0 60.4-12.6 78.5-29.9 11 10.7 25.9 17.3 42.3 17.3 35.3 0 64-28.7 64-64 0-18.8-8.1-35.7-21-47.5 12.9-11.8 21-28.7 21-47.5 0-18.8-8.1-35.7-21-47.5 12.9-11.8 21-28.7 21-47.5 0-16.4-6.6-31.3-17.2-42.3a64.24 64.24 0 0 0 4.4-15.1zM292 379c-48 0-87-39-87-87s39-87 87-87 87 39 87 87-39 87-87 87z"></path></svg>
            <span style="white-space: nowrap; color: #ffffff;">了解更多PRP增生療法</span>
          </a>

        </div>

      `
  }, 

  {
    id: 'mounjaro-guide-hsinchu',
    title: '【2026猛健樂懶人包】：藥物原理施打方式，注意事項副作用全解析',
    lastModified: '2026-02-04',
    category: '衛教文章',
    date: '2026-02-04',
    summary: '新竹減重新選擇！猛健樂到底在紅什麼？宸新復健科醫師統整其機轉原理、適應症、施打方式及副作用管理，並公開新竹民眾最關心的價格與療程優勢。',
    coverImage: '/images/news/article/mounjaro/0.webp',
    seoTitle: '新竹猛健樂(Mounjaro)減重門診｜宸新復健科：原理、價格、副作用懶人包',
    seoDescription: '想在新竹諮詢猛健樂(Mounjaro)減重？宸新復健科詳解 Tirzepatide 雙腸泌素原理、適應症、正確施打方式及飲食注意事項。結合專業身體組成檢測，為您量身打造安全有效的瘦身計畫。',
    keywords: ['猛健樂', 'Mounjaro', '新竹減重', '宸新復健科', 'Tirzepatide', '瘦瘦針', '雙機轉', '減肥門診', '胰島素阻抗'],
    contentHtml: `
    <style>
  .responsive-img-enlarge { width: 110% !important; max-width: none !important; display: block !important; margin: 1rem auto !important; position: relative !important; left: 50% !important; transform: translateX(-50%) !important; height: auto; }
  @media (min-width: 768px) { .responsive-img-enlarge { width: 100% !important; left: 0 !important; transform: none !important; } }
</style>
        <h2>新竹猛健樂 Mounjaro 減重門診：藥物機轉與施打指南</h2>
        <img src="/images/news/article/mounjaro/1.webp" alt="猛健樂 Mounjaro 雙腸泌素作用原理懶人包" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/2.webp" alt="猛健樂正確施打方式與療程進度規劃" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/3.webp" alt="新竹減重門診：猛健樂常見副作用管理與應對" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/4.webp" alt="猛健樂療程期間的飲食建議與生活型態調整" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/5.webp" alt="新竹宸新復健科：猛健樂 vs 傳統瘦瘦針差異比較" class="responsive-img-enlarge">
        <img src="/images/news/article/mounjaro/6.webp" alt="猛健樂減重門診諮詢流程與價格說明" class="responsive-img-enlarge">

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px; padding: 12px 0;">
          
          <a href="/weight-bone/mounjaro" 
             style="
                display: flex; flex-direction: row; align-items: center; justify-content: center;
                gap: 10px; padding: 12px 24px;
                background: linear-gradient(to right, #3b82f6, #4f46e5);
                border-radius: 16px; color: #ffffff !important; text-decoration: none !important;
                font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease-in-out; cursor: pointer;
             "
             onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.2)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1)';"
          >
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="color: white;"><path d="M464 128a64 64 0 0 0-93.5-57.1C352.4 53.6 324.4 41 292 41c-43.4 0-80.4 22.8-100.4 57.1-15.8-11.4-35.3-18.1-56.3-18.1-52.6 0-95.3 42.7-95.3 95.3 0 22.2 7.6 42.6 20.3 58.7-12.7 16.1-20.3 36.5-20.3 58.7 0 52.6 42.7 95.3 95.3 95.3 21 0 40.5-6.7 56.3-18.1C211.6 404.2 248.6 427 292 427c32.4 0 60.4-12.6 78.5-29.9 11 10.7 25.9 17.3 42.3 17.3 35.3 0 64-28.7 64-64 0-18.8-8.1-35.7-21-47.5 12.9-11.8 21-28.7 21-47.5 0-18.8-8.1-35.7-21-47.5 12.9-11.8 21-28.7 21-47.5 0-16.4-6.6-31.3-17.2-42.3a64.24 64.24 0 0 0 4.4-15.1zM292 379c-48 0-87-39-87-87s39-87 87-87 87 39 87 87-39 87-87 87z"></path></svg>
            <span style="white-space: nowrap; color: #ffffff;">了解更多猛健樂</span>
          </a>

          <a href="/weight-bone/BMI" 
             style="
                display: flex; flex-direction: row; align-items: center; justify-content: center;
                gap: 10px; padding: 12px 24px;
                background: linear-gradient(to right, #10b981, #059669);
                border-radius: 16px; color: #ffffff !important; text-decoration: none !important;
                font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease-in-out; cursor: pointer;
             "
             onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.2)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1)';"
          >
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="color: white;"><path d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-192 272c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80z"></path></svg>
            <span style="white-space: nowrap; color: #ffffff;">減重自我評估</span>
          </a>

        </div>
    `
  },

  {
    id: 'child-height-growth-guide',
    title: '【2026兒童長高全攻略懶人包】家長必看！掌握黃金生長期的關鍵密碼',
    category: '衛教文章',
    date: '2026-02-04',
    lastModified: '2026-02-04',
    summary: '孩子的身高是家長最關心的事。從遺傳公式、生長板閉合時間、性早熟警訊，到睡眠、營養、跳繩運動建議，復健科醫師整理完整長高懶人包，助孩子突破遺傳限制！',
    coverImage: '/images/news/article/boneage/0.webp',
    
    // ✨ SEO 強力優化區
    seoTitle: '兒童長高懶人包：生長板閉合時間、性早熟症狀、長高食物與跳繩建議 - 醫師完整解析',
    seoDescription: '擔心孩子長不高？醫師詳解兒童長高關鍵：男女生長板閉合年齡、遺傳身高公式、預防性早熟警訊。掌握睡眠黃金期、必吃長高營養素(鈣、鋅、維生素D)及跳繩運動菜單，把握青春期最後衝刺機會。',
    keywords: ['兒童長高', '性早熟', '生長板', '遺傳身高', '骨齡', '轉大人', '生長激素', '跳繩長高', '維生素D', '補鈣'],
    
    contentHtml: `
<style>
  .responsive-img-enlarge { width: 110% !important; max-width: none !important; display: block !important; margin: 1rem auto !important; position: relative !important; left: 50% !important; transform: translateX(-50%) !important; height: auto; }
  @media (min-width: 768px) { .responsive-img-enlarge { width: 100% !important; left: 0 !important; transform: none !important; } }
</style>
        <h2>2026 兒童長高全攻略：把握生長板閉合前的黃金衝刺期</h2>
        <img src="/images/news/article/boneage/1.webp" alt="兒童長高黃金期與生長板閉合時間圖解" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/2.webp" alt="影響兒童身高的關鍵因素：遺傳、營養與作息" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/3.webp" alt="兒童長高必備營養素：蛋白質、鈣質、維生素 D 與鋅" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/4.webp" alt="預防兒童性早熟：避免環境荷爾蒙與肥胖影響身高" class="responsive-img-enlarge">
        <img src="/images/news/article/boneage/5.webp" alt="高效長高運動建議：每日跳繩計畫與正確姿勢" class="responsive-img-enlarge">

        <div style="
          display: grid; 
          /* 強制手機版為兩欄，並在電腦版（螢幕寬於 640px）自動變回四欄 */
          grid-template-columns: repeat(2, 1fr); 
          gap: 10px; 
          padding: 16px 8px;
        ">
          <style>
            @media (min-width: 640px) {
              .button-grid-container { grid-template-columns: repeat(4, 1fr) !important; }
            }
          </style>

          <div class="button-grid-container" style="display: grid; grid-template-columns: inherit; gap: inherit; grid-column: 1 / -1;">
            
            <a href="/weight-bone/bone-age" 
                style="display: flex; align-items: center; justify-content: center; padding: 12px 4px; background: linear-gradient(to right, #3b82f6, #4f46e5); border-radius: 12px; color: #ffffff !important; text-decoration: none !important; font-weight: 700; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; text-align: center;"
                onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="color: #ffffff;">宸新骨齡門診</span>
            </a>

            <a href="/weight-bone/BMI" 
                style="display: flex; align-items: center; justify-content: center; padding: 12px 4px; background: linear-gradient(to right, #10b981, #059669); border-radius: 12px; color: #ffffff !important; text-decoration: none !important; font-weight: 700; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; text-align: center;"
                onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="color: #ffffff;">生長發育評估</span>
            </a>

            <a href="/weight-bone/calculator" 
                style="display: flex; align-items: center; justify-content: center; padding: 12px 4px; background: linear-gradient(to right, #3b82f6, #4f46e5); border-radius: 12px; color: #ffffff !important; text-decoration: none !important; font-weight: 700; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; text-align: center;"
                onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="color: #ffffff;">遺傳身高預測</span>
            </a>

            <a href="/weight-bone/nutrition" 
                style="display: flex; align-items: center; justify-content: center; padding: 12px 4px; background: linear-gradient(to right, #f59e0b, #d97706); border-radius: 12px; color: #ffffff !important; text-decoration: none !important; font-weight: 700; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; text-align: center;"
                onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="color: #ffffff;">長高營養指南</span>
            </a>
          </div>
        </div>

      <p>孩子的身高，一直是許多家長最焦慮的話題。「我的孩子這樣算矮嗎？」、「是不是該補鈣？」、「聽說太早發育會長不高？」這些疑問在診間層出不窮。</p>
      <br>
      <p>其實，兒童長高是一場與時間的賽跑。了解生長板的運作、掌握遺傳與後天的黃金比例，並在正確的時間點介入，才能幫助孩子發揮最大的生長潛力。本篇懶人包將為您完整解析關於「長高」的所有關鍵知識。</p>
  
      <h2>一、 決定身高的兩大力量：遺傳 vs. 後天努力</h2>
      <p>大家常問：「身高是天註定的嗎？」答案是：大部分是，但還有極為重要的努力空間。醫學研究顯示，遺傳因素對身高的影響約佔 <strong>70% 至 80%</strong>，父母的身高決定了孩子的「基本盤」。但剩下的 <strong>20% 至 30%</strong> 則取決於後天的營養、睡眠與運動。這 30% 的差異，往往就是 5 到 10 公分的差距，也是家長可以努力的目標。</p>
      
      <h3>📏 遺傳身高預測公式 (Target Height)</h3>
      <p>您可以透過以下公式，算出孩子未來的「目標身高」範圍：</p>
      <ul>
        <li><strong>男生：</strong>(父親身高 + 母親身高 + 12) ÷ 2 ± 7.5 公分</li>
        <li><strong>女生：</strong>(父親身高 + 母親身高 - 12) ÷ 2 ± 7.5 公分</li>
      </ul>
      <p><em>註：這只是一個統計學上的預測區間。若後天管理得當，孩子絕對有機會突破遺傳預測的高標；反之，若生活作息不佳，可能連低標都達不到。</em></p>
  
      <h2>二、 破解生長板與骨齡的秘密</h2>
      <p>想要長高，關鍵在於位於長骨末端的<strong>「生長板 (Growth Plate)」</strong>。它位於長骨的末端，是骨骼延長的關鍵區域。一旦生長板「閉合」（X光下縫隙消失），骨骼就不會再變長，身高也就此定型。</p>
      
      <p>判斷孩子還能不能長，最準確的方法並非看實際年齡，而是到復健科或小兒內分泌科拍攝左手掌 X 光片來判斷<strong>「骨齡 (Bone Age)」</strong>。</p>
      <ul>
        <li><strong>若骨齡小於實際年齡：</strong>代表還有生長空間，但也可能是體質性生長遲緩。</li>
        <li><strong>若骨齡大於實際年齡：</strong>代表生長板提早老化，生長空間被壓縮，這常是性早熟常見的跡象。</li>
      </ul>
  
      <h3>⏳ 男女平均生長板閉合年齡</h3>
      <ul>
        <li><strong>女生：</strong>平均在 <strong>14 ~ 15 歲</strong> 左右閉合。</li>
        <li><strong>男生：</strong>平均在 <strong>16 ~ 17 歲</strong> 左右閉合 (部分晚熟型的男孩可能延至 18 歲)。</li>
      </ul>
  
      <h2>三、 掌握生長節奏：各階段正常生長速度</h2>
      <p>孩子的生長並非等速前進，每個時期都有標準速度。若低於以下標準，家長務必提高警覺：</p>
      <ul>
        <li><strong>嬰兒期 (0-1歲)：</strong>一年增長 20~25 公分 (生長最快的黃金期)。</li>
        <li><strong>幼兒期 (1-3歲)：</strong>一年增長 10~12 公分.</li>
        <li><strong>學齡前期 (3-6歲)：</strong>一年增長 6~8 公分。</li>
        <li><strong>學齡期 (6歲至青春期前)：</strong>一年穩定成長 5~6 公分。</li>
      </ul>
      <p><strong>🚨 重要警訊：</strong>若此階段孩子每年長不到 <strong>4 公分</strong>，或生長曲線落在第 3 百分位以下（同齡 100 人中排最後 3 名），請務必就醫檢查。</p>
  
      <h2>四、 青春期衝刺：男女大不同</h2>
      <p>青春期是最後的長高機會，一旦啟動，生長板就開始進入關閉的倒數計時。</p>
  
      <h3>👧 女生：通常比男生早發育，也較早停止</h3>
      <ul>
        <li><strong>初期 (約 8-10 歲)：</strong>胸部發育（出現小硬塊），生長開始加速，每年約長 7~8 公分。</li>
        <li><strong>高峰期 (約 10-12 歲)：</strong>到達巔峰，一年可長 8~10 公分。</li>
        <li><strong>末期指標：</strong><strong>「初經來潮」</strong>。初經後生長激素受雌激素抑制，生長速度驟降，平均大約只能再長 4~6 公分。初經前的時間最為寶貴。</li>
      </ul>
  
      <h3>👦 男生：大器晚成，衝刺力強</h3>
      <ul>
        <li><strong>初期 (約 10-12 歲)：</strong>睪丸變大、變色（常被家長忽略），每年約長 7~9 公分。</li>
        <li><strong>高峰期 (約 12-14 歲)：</strong>陰莖增長、長出陰毛，一年可長 10~12 公分。</li>
        <li><strong>末期指標：</strong><strong>「變聲與長鬍鬚」</strong>。當聲音變低沈時，通常已進入青春期後期，生長速度遞減，直到 16、17 歲閉合。</li>
      </ul>
  
      <h2>五、 隱形殺手：性早熟與肥胖影響</h2>
      <p>若女生在 8 歲前乳房發育、男生在 9 歲前睪丸變大，即為性早熟。這會導致骨齡加速成熟，讓生長板提早閉合。雖然這類孩子初期在班上看起來很高，但實際上是「透支未來」，最終成人身高反而可能偏矮。</p>
      <p><strong>家長注意：</strong>避免讓孩子接觸環境荷爾蒙，並嚴格控制體重。肥胖的脂肪細胞會分泌雌激素，是推動骨齡提早閉合的重要因素。</p>
  
      <h2>六、 後天長高三大支柱：睡眠、營養、運動</h2>
      <p>想突破遺傳，必須在生長板閉合前徹底執行以下紀律：</p>
  
      <h3>💤 第一支柱：睡眠 (生長激素工廠)</h3>
      <p>生長激素在<strong>深層睡眠</strong>時分泌最旺盛，其高峰期集中在「晚上 10 點至凌晨 2 點」。</p>
      <ul>
        <li><strong>建議：</strong>為了在 10 點進入深眠，孩子應於 <strong>晚上 9:30 前上床</strong>。</li>
        <li><strong>環境：</strong>務必關燈全黑，微光會干擾褪黑激素，進而影響生長激素分泌。</li>
      </ul>
  
      <h3>🍽️ 第二支柱：營養補充 (蓋房子的原料)</h3>
      <ul>
        <li><strong>蛋白質 (地基)：</strong>生長激素合成的關鍵。多攝取蛋、奶、瘦肉、豆類。</li>
        <li><strong>鈣質 (磚塊)：</strong>讓骨頭變硬。建議每天 2 杯牛奶，並攝取小魚乾或芝麻。</li>
        <li><strong>維生素 D (搬運工)：</strong>幫助腸道吸收鈣。來源包括曬太陽（每日 15 分鐘）、鮭魚、蛋黃。</li>
        <li><strong>鋅 (Zinc)：</strong>與細胞分裂密切相關，缺鋅會導致長不高。來源：牡蠣、海鮮、南瓜子。</li>
        <li><strong>⚠️ 嚴禁糖分：</strong>高糖會<strong>直接抑制生長激素分泌</strong>，一杯全糖手搖飲可能讓生長激素停機 2 小時。</li>
      </ul>
  
      <h3>🏃 第三支柱：運動 (物理性刺激)</h3>
      <p>垂直衝擊運動能刺激生長板，<strong>跳繩</strong>是最高效的選擇。</p>
      <p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 5px solid #3b82f6; color: #374151; line-height: 1.6;">
        <strong style="color: #1f2937;">📝 跳繩長高公式：年齡 × 100 下 / 每天</strong><br>
        例如：10 歲的孩子每天跳 1000 下。建議分段進行，穿著球鞋避免受傷。
      </p>
  
      <h2>七、 結語：給家長的行動清單</h2>
      <p>長高是一次性的機會，錯過就無法重來。請家長協助落實：</p>
      <ol>
        <li><strong>定期紀錄：</strong>每三個月測量身高，繪製生長曲線。</li>
        <li><strong>早睡覺：</strong>晚上 9:30 前就寢，保證生長激素品質。</li>
        <li><strong>多跳躍：</strong>落實每日跳繩計畫。</li>
        <li><strong>吃對營養：</strong>補充足夠蛋白質、鋅與維生素 D，嚴格禁絕糖分與油炸。</li>
        <li><strong>及早就醫：</strong>若發現發育過早或身高停滯，請盡速諮詢復健科醫師進行骨齡評估。</li>
      </ol>


    `
  },

  {
    id: 'climbing-injuries',
    title: '【運動常見傷害 - 攀岩】攀向巔峰也要小心受傷！',
    lastModified: '2026-01-30',
    category: '衛教文章',
    date: '2026-01-30',
    summary: '攀岩是近年熱門運動，但受傷部位多集中在上肢。從手指滑車、肩膀到膝蓋折膝動作，醫師詳解六大常見攀岩傷害，讓你像大神 Alex Honnold 一樣挑戰自我而不受傷！',
    coverImage: '/images/news/article/climb.webp',
    seoTitle: '攀岩運動傷害懶人包：手指滑車、肩旋轉肌、折膝半月板受傷詳解',
    seoDescription: '攀岩愛好者必看！醫師整理六大常見攀岩傷害：A2滑車韌帶撕裂、肩夾擠、高爾夫球肘、TFCC手腕痛及折膝導致的半月板損傷。結合 Alex Honnold 挑戰 101 情境衛教。',
    keywords: ['攀岩', '運動傷害', 'Alex Honnold', '手指滑車', '滑車韌帶', '肩旋轉肌', '半月板', '復健'],
    contentHtml: `
        <h2>常見攀岩運動傷害解析：上肢與下肢的潛在風險</h2>
        <img src="/images/news/article/climb.webp" alt="攀岩運動常見傷害分布圖：手指、肩膀、手肘與膝蓋" style="width: 60%; height: auto;">
      <p>攀岩是近年來超級熱門的運動，不僅納入奧運項目，最近無繩獨攀大神 Alex Honnold 成功攀登台北 101 的壯舉更是震撼全台！</p><br>
      <p>🏥 門診中常遇到受傷的岩友，不同於滑雪多傷下肢，攀岩因運動特性，受傷部位多集中在上肢。常見原因不外乎：<strong>過度使用、休息不足或墜落姿勢不當</strong>。</p>
      
      <p>以下結合攀岩情境，介紹六種常見的攀岩傷害：</p>
  
      <h2>1️⃣ 手指滑車韌帶損傷</h2>
      <p>這是攀岩最常見的傷害（尤其是 A2/A4 滑車）。當攀岩者使用 <strong>「Crimp (扣點)」</strong> 的姿勢，手指緊緊扣住微小邊緣時，肌腱承受極大拉力，易導致韌帶發炎甚至撕裂，嚴重時手指甚至會聽到「啪」的一聲。</p>
  
      <h2>2️⃣ 肩旋轉肌袖損傷</h2>
      <p>肩膀是攀岩時活動範圍最大、受力最複雜的關節。頻繁的 <strong>「過頭動作」</strong> 及大幅度的動態移動，若肩胛穩定度不足，容易造成肩夾擠或肌腱發炎，嚴重時連睡覺壓到肩膀都會痛醒。</p>
  
      <h2>3️⃣ 手肘肌腱炎 (網球肘/高爾夫球肘)</h2>
      <p>前臂肌肉過度緊繃所致。攀爬長距離挑戰時，肌肉極易疲勞：</p>
      <ul>
        <li><strong>高爾夫球肘 (內側痛)：</strong> 常因過度引體向上出力造成。</li>
        <li><strong>網球肘 (外側痛)：</strong> 常因過度伸腕抓握造成。</li>
      </ul>
  
      <h2>4️⃣ 三角纖維軟骨複合體損傷 (TFCC)</h2>
      <p>指的是手腕外側（小指側）的疼痛。當遇到需要抓握大角度的 <strong>「Sloper (平滑點)」</strong> 或 <strong>「Undercling (倒抓)」</strong> 時，手腕在極度扭轉的角度下發力，就容易造成軟骨擠壓受損。</p>
  
      <h2>5️⃣ 膝蓋半月板損傷</h2>
      <p>現代攀岩技巧常使用 <strong>「Drop Knee (折膝)」</strong> 或高強度的 <strong>「Heel Hook (掛腳)」</strong>。這類動作會對膝蓋施加強大的扭轉剪力，容易導致半月板 or 内側韌帶受傷。</p>
  
      <h2>6️⃣ 腳踝扭傷</h2>
      <p>通常發生在 <strong>抱石 (Bouldering)</strong> 項目。在沒有繩索保護的情況下墜落，若落地姿勢不佳或腳剛好卡在岩墊縫隙，極易造成腳踝翻船扭傷。</p>
  
      <h2>👨‍⚕️ 醫師叮嚀</h2>
      <p>攀岩是一項很棒的運動，在追求挑戰自我的同時，也要懂得傾聽身體的聲音。<strong>「適度休息」與「正確的肌力訓練」</strong>才是長久之道喔！</p>
    `
  },

  {
    id: 'hyaluronic-diff',
    title: '打膝蓋剩下的玻尿酸，可以順便補臉嗎？',
    lastModified: '2026-01-21',
    category: '衛教文章',
    date: '2026-01-17',
    summary: '門診一位大姊突發奇想：「醫美打臉好貴，膝蓋打剩的玻尿酸可以補法令紋嗎？」修但幾勒！雖然都叫玻尿酸，但機油跟水泥可是不能混用的喔！',
    coverImage: '/images/news/article/ha.webp',
    seoTitle: '打膝蓋剩下的玻尿酸，可以順便補臉嗎？醫美與關節玻尿酸差異',
    seoDescription: '門診常被問：打膝蓋剩下的玻尿酸，可以順便補臉嗎？醫師解釋：雖然都叫玻尿酸，但關節用的像機油，醫美用的像水泥，用途大不同！醫師詳解三種玻尿酸差異。',
    keywords: ['玻尿酸', '膝蓋退化', '醫美', '增生療法', '韌帶修復', '醫學知識'],
    contentHtml: `
        <h2>關節玻尿酸 vs 醫美玻尿酸：成分、用途與交聯度大對比</h2>
        <img src="/images/news/article/ha.webp" alt="醫美用玻尿酸與關節注射用玻尿酸的差異解析" style="width: 100%; height: auto;">
      <p>門診一位可愛的大姊突發奇想問我：「醫美打臉好貴喔，阿打膝蓋的玻尿酸，剩一點幫我補一下法令紋？」</p>
      <p><strong>😂 修但幾勒！當然不行！</strong></p>
      <p>雖然都叫「玻尿酸」，但不會拿機油去補牆壁一樣啊！這兩者的濃度、分子大小與交聯程度完全不同。</p>
      
      <h2>1. 🚗 膝蓋退化用的：關節的「機油」</h2>
      <p>膝蓋退化就像引擎機油乾掉，骨頭磨骨頭當然痛！這類玻尿酸主要功能是<strong>「潤滑」</strong>。</p>
      <ul>
        <li><strong>短效型（傳統機油）：</strong> 像水一樣稀，要每週打，比較便宜。</li>
        <li><strong>長效型（合成機油）：</strong> 比較濃稠，半年到一年打一次就好，省時但較貴。</li>
      </ul>
      <p><strong>❌ 為什麼不能打臉？</strong><br>因為它太稀了！打進臉部無法支撐，幾天就被流失代謝掉了。</p>
      
      <h2>2. 🧱 醫美用的：臉部的「水泥/填充材」</h2>
      <p>醫美的玻尿酸經過特殊處理（交聯），質地像果凍甚至黏土一樣硬挺。它的功能是<strong>「填充與塑形」</strong>，這樣才能撐起臉型、填補皺紋。</p>
      <p><strong>❌ 為什麼不能打膝蓋？</strong><br>就像把乾掉硬硬的水泥灌進引擎，無法達到潤滑效果，反而會讓膝蓋卡住、更加疼痛！</p>
      
      <h2>3. 🏗️ 韌帶修補用的：組織的「鷹架」</h2>
      <p>這是新研發的玻尿酸應用。它的目的是像<strong>「鷹架」</strong>一樣，讓修復細胞可以爬上鷹架去修補破洞，幫助受傷的組織長回來。</p>
      
      <h4>👨‍⚕️ 醫師小總結</h4>
      <p>雖然名稱一樣，但用途大不同，請記住這三個概念：</p>
      <ul>
        <li>想<strong>潤滑關節</strong> 👉 用<strong>機油</strong>（關節玻尿酸）</li>
        <li>想<strong>變美填補</strong> 👉 用<strong>水泥</strong>（醫美玻尿酸）</li>
        <li>想<strong>修復韌帶</strong> 👉 用<strong>鷹架</strong>（軟組織玻尿酸）</li>
      </ul>
    `
  },

  {
    id: 'kneeclick',
    title: '膝蓋為何會喀喀響，是膝蓋退化了嗎?',
    lastModified: '2026-01-21',
    category: '衛教文章',
    date: '2026-01-14',
    summary: '門診很常碰到病患來看診，詢問膝蓋為何會喀喀響，擔心膝蓋是不是退化了!',
    coverImage: '/images/news/article/knee.webp',
    seoTitle: '膝蓋為何會喀喀響，是膝蓋退化了嗎?',
    seoDescription: '膝蓋為何會喀喀響，是膝蓋退化了嗎?，膝蓋有聲音，膝關節退化。',
    keywords: ['醫學知識', '膝蓋痛', '退化性關節炎', '喀喀響'],
    contentHtml: `
        <h2>膝蓋喀喀響原因揭秘：是生理現象還是關節退化警訊？</h2>
        <img src="/images/news/article/knee.webp" alt="膝蓋關節構造與喀喀響發生原因示意圖" style="width: 100%; height: auto;">

      <p>門診很常碰到病患來看診，詢問膝蓋為何會喀喀響，擔心膝蓋是不是退化了！</p>
  
      <h2>✅ 這種聲音免驚！(生理性聲響)</h2>
      <p>如果膝蓋有聲音，但是 <strong>「完全不痛、不腫、有力氣」</strong>，通常是正常的生理現象：</p>
      <ul>
        <li><strong>氣泡聲：</strong> 像折手指一樣，關節內的氣泡破掉（啵一聲）。</li>
        <li><strong>筋骨滑動：</strong> 就像撥吉他弦，筋稍微掃過骨頭的聲音。</li>
      </ul>
      <h4>👉 醫師說：</h4>
      <p>只要不痛，通常不需要治療，也不是關節炎的前兆喔！</p>
  
      <h2>🚨 出現這 4 種狀況，請看醫生！</h2>
      <p>如果聲音伴隨著不舒服，這才是膝蓋在求救：</p>
      <ul>
        <li><strong>會痛：</strong> 最直接的警訊，內部組織受傷。</li>
        <li><strong>會腫：</strong> 膝蓋看起來腫腫的，摸起來熱熱的。</li>
        <li><strong>會卡：</strong> 膝蓋彎到一半突然「卡死」動不了。</li>
        <li><strong>會軟：</strong> 走路突然沒力氣，稍微軟腳。</li>
      </ul>
      <h4>👉 醫師說：</h4>
      <p>這可能代表半月板、軟骨或是韌帶受傷了，請盡快檢查。</p>
  
      <h2>💪 膝蓋有聲音，該怎麼保養？</h2>
      <ul>
        <li><strong>練壯股四頭肌：</strong> 大腿肌肉有力，就能抓穩膝蓋骨，減少磨損。<br>(方法：坐在椅子上，把腳伸直抬高停留 5-10 秒，或背靠牆壁半蹲)</li>
        <li><strong>運動後放鬆大腿前外側</strong></li>
        <li><strong>避開危險動作：</strong> 少做蹲跪、盤腿坐，避免深蹲超過 90 度。</li>
      </ul>
  
      <h4>💡 最後記住這句口訣：</h4>
      <p><strong>「有聲無痛」多觀察，「有聲有痛」快就醫！</strong></p>
    `
  }
];