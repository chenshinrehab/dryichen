'use client';

import React, { useState, useEffect } from 'react';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import ScrollAnimation from '@/components/ScrollAnimation';

// 引入本掛號系統專用的 React Icons
import { 
  FaCalendarCheck, 
  FaUser, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFileAlt, 
  FaHistory, 
  FaSearch, 
  FaTrashAlt, 
  FaLine,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

const LINE_CLIENT_ID = "2010496335";

export default function SelfPayBookingPage() {
  const [activeTab, setActiveTab] = useState<'booking' | 'query'>('booking');
  const [lineUserId, setLineUserId] = useState<string>('');
  
  const [cachedSchedule, setCachedSchedule] = useState<Record<string, string[]>>({});
  const [allAppointments, setAllAppointments] = useState<any[]>([]); 
  
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [displaySlots, setDisplaySlots] = useState<string[]>([]);
  
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // 💡 完全保留原本的所有就診問卷欄位，絕不精簡省略
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    part: '',
    reason: '',
    treatment: ''
  });

  const [queryPhone, setQueryPhone] = useState('');
  const [queryResults, setQueryResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  // 🚀 導入 A 方案：利用 LocalStorage 自動記憶與識別 LINE 使用者狀態
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lineIdParam = params.get('lineUserId');
    
    if (lineIdParam) {
      // 第一次授權成功回來：將 ID 刻進瀏覽器記憶體
      localStorage.setItem('saved_line_user_id', lineIdParam);
      setLineUserId(lineIdParam);
      setActiveTab('query');
    } else {
      // 第二次直接開啟網頁：主動撈取歷史記憶，達成自動登入與展示
      const savedId = localStorage.getItem('saved_line_user_id');
      if (savedId) {
        setLineUserId(savedId);
        setActiveTab('query');
      }
    }

    Promise.all([
      fetch(`/api/doctor-settings`).then(res => res.json()),
      fetch(`/api/reserve?action=getAllAppointments`).then(res => res.json())
    ])
    .then(([settingsRes, aptRes]) => {
      if (settingsRes && settingsRes.success) {
        setCachedSchedule(settingsRes.settings || {});
      }
      if (aptRes && aptRes.success) {
        setAllAppointments(aptRes.list || []);
      }
    })
    .catch(err => console.error("系統通訊異常", err));
  }, []);

  useEffect(() => {
    if (lineUserId) runQuery('line', lineUserId);
  }, [lineUserId]);

  const handleLineAuthRedirect = () => {
    // 🚀 強制指定回呼網址，不讓 window.location.origin 動態亂抓，徹底根除 400 錯誤！
    const redirectUri = encodeURIComponent("https://dryichen.com.tw/booking/selfpay");
    
    window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${LINE_CLIENT_ID}&redirect_uri=${redirectUri}&state=selfPayVerify&scope=profile`;
  };

  const getAvailableSlots = (dateStr: string) => {
    const totalSlots = cachedSchedule[dateStr] || [];
    const bookedSlots = allAppointments
      .filter(a => a.date === dateStr)
      .map(a => a.time_slot || a.time);
    return totalSlots.filter(slot => !bookedSlots.includes(slot));
  };

  const handleDateClick = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedTime('');
    setDisplaySlots(getAvailableSlots(dateStr));
  };

  const resetFormState = () => {
    setFormData({ name: '', phone: '', email: '', part: '', reason: '', treatment: '' });
    setSelectedDate('');
    setSelectedTime('');
    setDisplaySlots([]);
    setQueryPhone('');
    setQueryResults([]);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || formData.phone.length < 9) {
      alert('請正確填寫姓名與手機號碼！'); return;
    }
    if (!selectedDate || !selectedTime) {
      alert('請選擇預約日期與時間時段！'); return;
    }
    setIsSubmitLoading(true);

    const reservationData = {
      date: selectedDate, timeSlot: selectedTime,
      name: formData.name, phone: formData.phone,
      email: formData.email, part: formData.part,
      reason: formData.reason, treatment: formData.treatment,
      lineUserId: lineUserId || '未關聯', service: '自費門診特約' 
    };

    type: 'POST'
    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData)
      });
      const res = await response.json();
      if (res.success) {
        alert("🎉 門診特約預約成功！已同步登錄資料庫。");
        resetFormState();
        window.location.reload();
      } else {
        alert("預約未成功：" + (res.error || "伺服器連線異常"));
      }
    } catch (err) {
      alert("網路連線逾時，請重新送出一次。");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const runQuery = async (type: 'phone' | 'line', value: string) => {
    if (type === 'phone' && !value) { alert('請輸入手機號碼！'); return; }
    setIsLoading(true);
    try {
      const response = await fetch(`/api/reserve?action=query&type=${type}&value=${value}`);
      const resData = await response.json();
      setQueryResults(resData.list || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelBooking = async (id: string, label: string) => {
    if (!confirm(`確定要取消並釋出於 ${label} 的特約看診名額嗎？`)) return;
    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: "cancelAppointment", id: id })
      });
      const json = await response.json();
      if (json.success) {
        alert("預約已成功取消並釋出名額。");
      } else {
        alert("取消失敗：" + (json.error || "未知錯誤"));
      }
      resetFormState();
      window.location.reload();
    } catch (err) {
      alert("連線失敗，請洽診所人員。");
    }
  };

  const renderCalendar = () => {
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000;
    const todayStr = (new Date(today.getTime() - offset)).toISOString().split('T')[0];

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 sm:p-3"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dateObj = new Date(year, month, i);
      const dateStr = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000).toISOString().split('T')[0];
      
      const isPast = dateStr < todayStr;
      const availableSlots = getAvailableSlots(dateStr);
      const hasSlots = availableSlots.length > 0;
      const isDisabled = isPast || !hasSlots;
      const isSelected = selectedDate === dateStr;

      days.push(
        <button
          key={i}
          type="button"
          disabled={isDisabled}
          onClick={() => handleDateClick(dateStr)}
          className={`mx-auto flex items-center justify-center font-bold transition-all select-none
            h-9 w-9 text-sm rounded-lg
            sm:h-12 sm:w-12 sm:text-base md:text-lg sm:rounded-full
            ${isSelected ? 'bg-cyan-600 text-white shadow-md scale-105 sm:scale-110' : 
              isDisabled ? 'text-slate-300 opacity-20 cursor-not-allowed bg-transparent border-none' : 
              'text-slate-700 hover:bg-slate-200 hover:text-cyan-600 bg-white shadow-sm border border-slate-200'
            }
          `}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'MedicalWebPage',
        'name': '特約自費診預約掛號系統 | 林羿辰醫師',
        'provider': { '@type': ['Person', 'Physician'], 'name': '林羿辰 醫師', 'jobTitle': '宸新復健科診所 院長' }
      }} />
      <ScrollAnimation />

      {/* 🚀 終極對策：同時鎖定所有子 div 的背景為淺灰，並強制文字為深色，確保背景不變黑、字體完美浮現 */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 1. 網頁大底維持溫潤的淺灰白 */
        body, html, main, #__next, .flex-grow, div[class*="min-h-screen"], .bg-slate-50 {
          background-color: #f8fafc !important;
          color: #1e293b !important;
        }
        
        /* 2. 導覽條本體與內部所有 div 容器：強制鎖定質感淺灰，全面封鎖黑色背景 */
        nav, header, [class*="nav"], [class*="Navbar"], [class*="header"],
        nav div, header div, nav section, header section {
          background-color: #e2e8f0 !important; 
          background-image: none !important;
          border-bottom: none !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05) !important;
        }

        {/* 3. 解決字體隱形：強制導覽列內的所有文字、標題、Span、按鈕、圖標通通顯示為清晰深灰色 */}
        nav *, header *, [class*="Navbar"] *, [class*="header"] * {
          color: #1e293b !important; 
        }
        
        /* 導覽列第一層選單滑鼠滑過去時變成精緻科技藍 */
        nav a:hover, header a:hover, nav button:hover, header button:hover {
          color: #0891b2 !important;
        }

        /* 4. 下拉選單：獨立隔離！強制維持乾淨的白色底、黑色字 */
        nav ul, header ul, nav div[class*="dropdown"], header div[class*="dropdown"], [class*="dropdown-menu"], [class*="menu"] {
          background-color: #ffffff !important;
          border-radius: 1.25rem !important; /* 🚀 注入精緻大圓角 (約 rounded-2xl) */
          overflow: hidden !important;        /* 🚀 核心關鍵：強制修邊，防止內部方角刺破外框 */
          border: 1px solid #e2e8f0 !important; /* 加上微細邊框，讓白色選單更有立體質感 */
        }
        nav ul *, header ul *, [class*="dropdown"] *, [class*="dropdown-menu"] *, [class*="menu"] * {
          background-color: #ffffff !important;
          color: #0f172a !important;
          fill: #0f172a !important;
        }
        
        /* 下拉選單滑過時的灰色特效底色 */
        nav ul a:hover, header ul a:hover, [class*="dropdown"] a:hover, [class*="dropdown-menu"] a:hover,
        nav ul a:hover *, header ul a:hover *, [class*="dropdown"] a:hover *, [class*="dropdown-menu"] a:hover * {
          background-color: #f1f5f9 !important;
          color: #0f172a !important;
        }

        /* 5. 消滅桃紅色預約按鈕，改為醫學質感藍 */
        nav a[href*="booking"], nav a[href*="reserve"], header a[href*="booking"], 
        .bg-pink-500, .text-pink-500, [class*="pink"], button[class*="pink"], a[class*="pink"] {
          background: #e0f2fe !important;
          background-color: #e0f2fe !important;
          background-image: none !important;
          border: 1px solid #bae6fd !important;
          box-shadow: 0 4px 14px 0 rgba(186, 230, 253, 0.5) !important;
        }
        nav a[href*="booking"] *, header a[href*="booking"] *, .bg-pink-500 *, [class*="pink"] * {
          color: #0369a1 !important; /* 按鈕內的字體改成深藍色 */
        }
        
        /* 預約按鈕滑過去時的加深特效 */
        nav a[href*="booking"]:hover, header a[href*="booking"]:hover, .bg-pink-500:hover, [class*="pink"]:hover {
          background: #bae6fd !important;
          background-color: #bae6fd !important;
        }
      `}} />
      {/* 全域包裹層 */}
      <div className="flex-grow pt-4 pb-16 px-3 sm:px-4 bg-slate-50 min-h-screen text-slate-800 relative z-10 block">
        <div className="max-w-6xl mx-auto space-y-5">
          
          {/* 頁籤切換 */}
          <div className="flex justify-center p-1.5 bg-white rounded-2xl border border-slate-200 max-w-lg mx-auto shadow-sm">
            <button 
              type="button"
              onClick={() => setActiveTab('booking')}
              className={`flex-1 py-3.5 sm:py-4 text-center text-sm sm:text-base font-black rounded-xl transition-all duration-200 ${activeTab === 'booking' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-700'}`}
            >
              特約掛號預約
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('query')}
              className={`flex-1 py-3.5 sm:py-4 text-center text-sm sm:text-base font-black rounded-xl transition-all duration-200 ${activeTab === 'query' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-700'}`}
            >
              查詢 / 取消預約
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
            
            {/* 左側資訊欄 */}
            <div className="md:w-2/5 bg-slate-100/60 p-6 sm:p-10 flex flex-col items-center border-b md:border-b-0 md:border-r border-slate-200">
              <div className="w-full max-w-[180px] sm:max-w-[240px] rounded-2xl border-4 border-white shadow-xl overflow-hidden mb-5 sm:mb-8 bg-white">
                <img src="https://duk.tw/US4zLW.jpg" alt="林羿辰醫師" className="w-full object-contain aspect-[1366/2084]" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">林羿辰 醫師</h1>
                <p className="text-cyan-600 text-xs sm:text-sm font-black tracking-widest mb-4 sm:mb-8">自費門診特約預約</p>
                <div className="text-left bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl space-y-2.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed shadow-sm">
                  <p className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✦</span> 選擇高亮可點擊之日期，即可查看預約空缺。</p>
                  <p className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✦</span> 客滿或無排診之日期將反灰無法點選。</p>
                </div>
              </div>
            </div>

            {/* 右側操作面板 */}
            <div className="md:w-3/5 p-5 sm:p-8 md:p-14 text-sm sm:text-base md:text-lg">
              
              {activeTab === 'booking' && (
                <div className="space-y-6 sm:space-y-8">
                  
                  <div className="bg-slate-50 border border-slate-200 p-4 sm:p-6 rounded-2xl">
                    <h2 className="text-base sm:text-lg font-black text-slate-800 mb-4 sm:mb-5 flex items-center gap-2">
                      <span className="w-5 h-5 sm:w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 border border-cyan-200 flex items-center justify-center text-[11px] sm:text-xs font-black">1</span>
                      選擇預約掛號日期
                    </h2>
                    
                    <div className="flex items-center justify-between mb-4 sm:mb-6 px-1">
                      <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))} className="p-1.5 text-slate-500 hover:text-cyan-600 transition">
                        <FaChevronLeft size={16} />
                      </button>
                      <div className="font-black tracking-wider sm:tracking-widest text-lg sm:text-xl text-slate-900">
                        {currentMonth.getFullYear()} 年 {currentMonth.getMonth() + 1} 月
                      </div>
                      <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))} className="p-1.5 text-slate-500 hover:text-cyan-600 transition">
                        <FaChevronRight size={16} />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-y-2 sm:gap-y-3 text-center">
                      {['日', '一', '二', '三', '四', '五', '六'].map(d => (
                        <div key={d} className="text-xs sm:text-sm font-black text-slate-400 pb-2">{d}</div>
                      ))}
                      {renderCalendar()}
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="space-y-4 animate-fadeIn">
                      <h2 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
                        <span className="w-5 h-5 sm:w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 border border-cyan-200 flex items-center justify-center text-[11px] sm:text-xs font-black">2</span>
                        可選取的特約時間
                      </h2>
                      {displaySlots.length > 0 ? (
                        /* 🚀 修正點 3：微調手機版特約時間按鈕的內襯與字型，防止擠滿格子 */
                        <div className="grid grid-cols-3 gap-2 sm:gap-4">
                          {displaySlots.map(slot => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`border font-black rounded-xl transition-all select-none
                                py-2.5 text-sm
                                sm:py-4 sm:text-base
                                ${selectedTime === slot ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500 text-white shadow-md font-black scale-[1.02]' : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-500 hover:bg-slate-50'}`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-rose-500 font-black py-4 sm:py-5 bg-rose-50 border border-rose-100 rounded-xl text-xs sm:text-sm md:text-base">
                          ⚠️ 抱歉，本日期之特約時段已全數預約額滿。
                        </div>
                      )}
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <form onSubmit={handleBookingSubmit} className="space-y-5 sm:space-y-6 pt-5 sm:pt-6 border-t border-slate-200 border-dashed animate-fadeIn">
                      <h2 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
                        <span className="w-5 h-5 sm:w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 border border-cyan-200 flex items-center justify-center text-[11px] sm:text-xs font-black">3</span>
                        填寫就診基本問卷
                      </h2>

                      <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <FaLine className="text-[#06C755] text-3xl sm:text-4xl shrink-0" />
                          <div className="text-center sm:text-left">
                            <h4 className="font-black text-sm sm:text-base text-slate-800">連結 LINE 帳號管理看診</h4>
                            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">綁定後一鍵調取紀錄、自主取消，免輸入電話</p>
                          </div>
                        </div>
                        {lineUserId ? (
                          <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs sm:text-sm font-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1.5"><FaCheckCircle/>已成功連結</span>
                        ) : (
                          <button type="button" onClick={handleLineAuthRedirect} className="bg-[#06C755] hover:bg-[#05b04b] text-white text-xs sm:text-sm font-black py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg transition-colors whitespace-nowrap shadow-sm">
                            一鍵綁定登入
                          </button>
                        )}
                      </div>

                      {/* 🚀 修正點 4：全數優化手機版回答格內的灰色提示字與輸入框排版 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-black text-slate-500 mb-1.5">病患真實姓名 <span className="text-rose-500">*</span></label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-4 sm:top-4.5 text-slate-400 text-xs sm:text-sm" />
                            <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="繁體中文真實大名" className="w-full p-3.5 sm:p-4 pl-10 sm:pl-12 border border-slate-300 bg-white rounded-xl outline-none focus:border-cyan-500 transition text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-black text-slate-500 mb-1.5">手機號碼 (將完整保留開頭0) <span className="text-rose-500">*</span></label>
                          <div className="relative">
                            <FaPhoneAlt className="absolute left-4 top-4 sm:top-4.5 text-slate-400 text-xs sm:text-sm" />
                            <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="例如：0912345678" className="w-full p-3.5 sm:p-4 pl-10 sm:pl-12 border border-slate-300 bg-white rounded-xl outline-none focus:border-cyan-500 transition text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-black text-slate-500 mb-1.5">電子郵件 (選填)</label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-4 top-4 sm:top-4.5 text-slate-400 text-xs sm:text-sm" />
                          <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="yourname@gmail.com" className="w-full p-3.5 sm:p-4 pl-10 sm:pl-12 border border-slate-300 bg-white rounded-xl outline-none focus:border-cyan-500 transition text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-black text-slate-500 mb-1.5">本次看診不適部位？</label>
                          <div className="relative">
                            <FaMapMarkerAlt className="absolute left-4 top-4 sm:top-4.5 text-slate-400 text-xs sm:text-sm" />
                            <input type="text" value={formData.part} onChange={e => setFormData({...formData, part: e.target.value})} placeholder="例如：right knee (右側膝蓋)、腰椎..." className="w-full p-3.5 sm:p-4 pl-10 sm:pl-12 border border-slate-300 bg-white rounded-xl outline-none focus:border-cyan-500 transition text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-black text-slate-500 mb-1.5">不適發生原因？ (可詳細敘述)</label>
                          <div className="relative">
                            <FaFileAlt className="absolute left-4 top-4 sm:top-5 text-slate-400 text-xs sm:text-sm" />
                            <textarea rows={3} value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} placeholder="請描述疼痛情況、不適過程或受傷經過..." className="w-full p-3.5 sm:p-4 pl-10 sm:pl-12 border border-slate-300 bg-white rounded-xl outline-none focus:border-cyan-500 transition text-sm sm:text-base font-bold text-slate-800 resize-none placeholder-slate-400 leading-relaxed text-justify" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-black text-slate-500 mb-1.5">先前曾接受過哪些治療或放射檢查嗎？</label>
                          <div className="relative">
                            <FaHistory className="absolute left-4 top-4 sm:top-4.5 text-slate-400 text-xs sm:text-sm" />
                            <input type="text" value={formData.treatment} onChange={e => setFormData({...formData, treatment: e.target.value})} placeholder="例如：照過X光、曾做過復健、藥物治療、皆無..." className="w-full p-3.5 sm:p-4 pl-10 sm:pl-12 border border-slate-300 bg-white rounded-xl outline-none focus:border-cyan-500 transition text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400" />
                          </div>
                        </div>
                      </div>

                      <button type="submit" disabled={isSubmitLoading} className="w-full py-4 sm:py-5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-black text-base md:text-lg tracking-widest shadow-lg transition-all disabled:bg-slate-300 text-white">
                        {isSubmitLoading ? "雲端資料庫確認鎖定中..." : "確認送出特約自費掛號"}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {activeTab === 'query' && (
                <div className="space-y-5 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">掛號明細自主查詢</h3>
                  
                  <div className="p-4 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                    {lineUserId ? (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-sm sm:text-base font-bold text-slate-700">
                          已關聯您的 LINE 身分帳號
                        </span>
                        <button onClick={() => runQuery('line', lineUserId)} className="px-4 py-2.5 sm:px-5 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-base font-bold rounded-lg transition shadow">
                          同步 LINE 預約項目
                        </button>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm sm:text-base font-black text-slate-600 mb-2.5">請輸入掛號填寫的手機號碼進行檢索：</label>
                        <div className="flex gap-2 sm:gap-3">
                          <input type="tel" value={queryPhone} onChange={e => setQueryPhone(e.target.value)} placeholder="例如：0912345678" className="flex-1 p-3 sm:p-4 border border-slate-300 bg-white rounded-xl outline-none focus:border-cyan-500 text-sm sm:text-base text-slate-800 font-bold placeholder-slate-400" />
                          <button onClick={() => runQuery('phone', queryPhone)} className="bg-slate-800 hover:bg-slate-700 text-white font-black px-4 sm:px-6 rounded-xl text-sm sm:text-base transition flex items-center gap-1.5 whitespace-nowrap">
                            <FaSearch/> 搜尋
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest">您的特約預約列表</h4>
                    {isLoading ? (
                      <div className="text-center text-slate-500 py-6 font-bold text-sm">正在連線調取雲端帳簿...</div>
                    ) : queryResults.length > 0 ? (
                      <div className="space-y-3">
                        {queryResults.map((item) => (
                          <div key={item.id} className="bg-white border border-slate-200 p-4 sm:p-6 rounded-xl flex justify-between items-center hover:border-slate-400 transition shadow-sm gap-2">
                            <div>
                              <div className="text-xs sm:text-sm text-slate-400 font-bold mb-1">就診姓名：{item.name}</div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                <span className="text-slate-900 font-black text-base sm:text-xl">{item.date}</span>
                                <span className="text-amber-600 font-black text-base sm:text-xl">{item.time || item.time_slot}</span>
                              </div>
                            </div>
                            <button onClick={() => handleCancelBooking(item.id, `${item.date} ${item.time || item.time_slot}`)} className="bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs sm:text-base font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-rose-200 transition flex items-center gap-1 shrink-0">
                              <FaTrashAlt size={12} className="sm:size-[14px]"/> 取消釋出
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-slate-400 py-10 sm:py-12 border border-dashed border-slate-300 rounded-xl text-sm sm:text-base font-bold bg-slate-50">
                        此範圍內無未來的特約掛號紀錄。
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}