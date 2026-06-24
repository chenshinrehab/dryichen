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
  FaCheckCircle
} from "react-icons/fa";

// ⚠️ 已替換為您提供最新的 Google Apps Script 部署網址
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbwa8B_5gmqfCijF3MwgVAQR8wCtkXf0mzIOcrbdV7yEWcwKoqsN05toaZPTTPLZhUDX/exec";
const LINE_CLIENT_ID = "您的LINE_LOGIN_CHANNEL_ID";

export default function SelfPayBookingPage() {
  const [activeTab, setActiveTab] = useState<'booking' | 'query'>('booking');
  const [lineUserId, setLineUserId] = useState<string>('');
  const [enabledDates, setEnabledDates] = useState<string[]>([]);
  const [cachedSchedule, setCachedSchedule] = useState<Record<string, string[]>>({});
  
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [displaySlots, setDisplaySlots] = useState<string[]>([]);

  // 表單資料欄位狀態
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    part: '',
    reason: '',
    treatment: ''
  });

  // 查詢與取消名額狀態
  const [queryPhone, setQueryPhone] = useState('');
  const [queryResults, setQueryResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  // 初始化：載入排班基礎資料包
  useEffect(() => {
    // 檢查網址列是否有 LINE 回傳的憑證參數
    const params = new URLSearchParams(window.location.search);
    const lineIdParam = params.get('lineUserId');
    if (lineIdParam) {
      setLineUserId(lineIdParam);
      setActiveTab('query');
    }

    // 預先拉取 60 天內排班資料
    fetch(`${GAS_API_URL}?action=getInitialBookingData`)
      .then(res => res.json())
      .then(res => {
        if (res) {
          setEnabledDates(res.enabledDates || []);
          setCachedSchedule(res.schedule || {});
        }
      })
      .catch(err => console.error("掛號系統通訊異常", err));
  }, []);

  useEffect(() => {
    if (lineUserId) {
      runQuery('line', lineUserId);
    }
  }, [lineUserId]);

  // 開啟 LINE 帳號連動授權
  const handleLineAuthRedirect = () => {
    const redirectUri = encodeURIComponent(window.location.origin + window.location.pathname);
    window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${LINE_CLIENT_ID}&redirect_uri=${redirectUri}&state=selfPayVerify&scope=profile`;
  };

  // 病患選定日期，秒級回顯可用時段
  const handleDateSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    setSelectedDate(dateStr);
    setSelectedTime('');
    if (cachedSchedule[dateStr]) {
      setDisplaySlots(cachedSchedule[dateStr]);
    } else {
      setDisplaySlots([]);
    }
  };

  // 清空欄位重置
  const resetFormState = () => {
    setFormData({ name: '', phone: '', email: '', part: '', reason: '', treatment: '' });
    setSelectedDate('');
    setSelectedTime('');
    setDisplaySlots([]);
    setQueryPhone('');
    setQueryResults([]);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  // 門診掛號提交：已修改為同步打到自建的 Next.js API 連接 Google Sheets 試算表
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || formData.phone.length < 9) {
      alert('請正確填寫姓名與手機號碼！');
      return;
    }
    if (!selectedDate || !selectedTime) {
      alert('請選擇預約日期與時間時段！');
      return;
    }
    setIsSubmitLoading(true);

    // 建構要傳入後台 Google 試算表的資料格式包
    const reservationData = {
      date: selectedDate,
      timeSlot: selectedTime,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      part: formData.part,
      reason: formData.reason,
      treatment: formData.treatment,
      lineUserId: lineUserId || '未關聯',
      service: '自費門診特約' // 預設的預約服務類別項目
    };

    try {
      // 呼叫專案內的 Next.js 後端 API 路由
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData)
      });
      
      const res = await response.json();
      if (res.success) {
        alert("🎉 門診特約預約成功！已同步登錄雲端試算表。");
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

  // 查詢掛號明細
  const runQuery = async (type: 'phone' | 'line', value: string) => {
    if (type === 'phone' && !value) {
      alert('請輸入手機號碼！');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`${GAS_API_URL}?action=queryAppointments&type=${type}&value=${value}`);
      const list = await response.json();
      setQueryResults(list || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // 線上取消釋出名額
  const handleCancelBooking = async (id: string, label: string) => {
    if (!confirm(`確定要取消並釋出於 ${label} 的特約看診名額嗎？`)) return;
    try {
      const response = await fetch(GAS_API_URL, {
        method: 'POST',
        body: JSON.stringify({ action: "cancelAppointment", id: id })
      });
      const json = await response.json();
      alert(json.message);
      resetFormState();
      window.location.reload();
    } catch (err) {
      alert("連線失敗，請洽診所人員。");
    }
  };

  // Schema SEO 數據包
  const jsonLdBooking = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'name': '特約自費診預約掛號系統 | 林羿辰醫師',
    'description': '提供林羿辰醫師自費門診特約數位掛號服務，可自主選擇時段、查詢與取消掛號。',
    'provider': {
      '@type': ['Person', 'Physician'],
      'name': '林羿辰 醫師',
      'jobTitle': '宸新復健科診所 院長'
    }
  };

  return (
    <>
      <JsonLd data={jsonLdBooking} />
      <ScrollAnimation />

      <div className="flex-grow pt-8 pb-16 px-4 bg-slate-900 min-h-screen text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* 頂部頁籤 */}
          <div className="flex justify-center p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700 max-w-md mx-auto backdrop-blur">
            <button 
              onClick={() => setActiveTab('booking')}
              className={`flex-1 py-3 text-center text-sm font-bold rounded-xl transition-all duration-200 ${activeTab === 'booking' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              特約掛號預約
            </button>
            <button 
              onClick={() => setActiveTab('query')}
              className={`flex-1 py-3 text-center text-sm font-bold rounded-xl transition-all duration-200 ${activeTab === 'query' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              查詢 / 取消預約
            </button>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* 左側資訊欄：等比例照片 */}
            <div className="md:w-1/3 bg-slate-800/40 p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-slate-700/60">
              <div className="w-full max-w-[180px] rounded-2xl border-4 border-slate-700 shadow-2xl overflow-hidden mb-6 bg-slate-950">
                <img 
                  src="https://duk.tw/US4zLW.jpg" 
                  alt="林羿辰醫師" 
                  className="w-full object-contain aspect-[1366/2084]"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-black text-white mb-1">林羿辰 醫師</h1>
                <p className="text-cyan-400 text-xs font-bold tracking-widest mb-6">自費門診特約預約</p>
                <div className="text-left bg-slate-950/40 border border-slate-700 p-4 rounded-xl space-y-2 text-xs text-slate-400 leading-relaxed">
                  <p className="flex items-start gap-1.5"><span className="text-cyan-400">✦</span> 點選指定日期後，下方將直接回顯目前可用的診次時間。</p>
                  <p className="flex items-start gap-1.5"><span className="text-cyan-400">✦</span> 特約門診採高精準防衝突鎖定，確保您掛號的名額權益。</p>
                </div>
              </div>
            </div>

            {/* 右側操作面板 */}
            <div className="md:w-2/3 p-6 md:p-12">
              
              {/* TAB 1: 掛號表單 */}
              {activeTab === 'booking' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-base font-bold text-slate-300 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs font-black">1</span>
                      選擇預約掛號日期
                    </h2>
                    {/* 🚀 關鍵修復：加入 onClick 觸發 showPicker() 確保點選整列框直接強制跳出下拉日曆選單 */}
                    <input 
                      type="date"
                      onChange={handleDateSelection}
                      onClick={(e) => {
                        try {
                          (e.target as any).showPicker();
                        } catch (err) {
                          console.log("瀏覽器不支援自動展開");
                        }
                      }}
                      value={selectedDate}
                      className="w-full border border-slate-700 bg-slate-950/50 rounded-xl p-4 text-white outline-none focus:border-cyan-500 transition font-bold cursor-pointer"
                    />
                  </div>

                  {selectedDate && (
                    <div className="space-y-3">
                      <h2 className="text-base font-bold text-slate-300 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs font-black">2</span>
                        可選取的特約時間
                      </h2>
                      {displaySlots.length > 0 ? (
                        <div className="grid grid-cols-3 gap-2">
                          {displaySlots.map(slot => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`py-3 border text-xs font-bold rounded-xl transition-all ${selectedTime === slot ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-400 text-white shadow-lg font-black' : 'border-slate-700 bg-slate-950/40 text-slate-300 hover:border-slate-500'}`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-rose-400 font-bold py-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs">
                          當日門診時段已額滿，或林醫師無此自費排班
                        </div>
                      )}
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <form onSubmit={handleBookingSubmit} className="space-y-5 pt-5 border-t border-slate-700/60 border-dashed">
                      <h2 className="text-base font-bold text-slate-300 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs font-black">3</span>
                        填寫就診基本問卷
                      </h2>

                      {/* LINE 連動區塊 */}
                      <div className="bg-slate-950/60 border border-slate-700 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <FaLine className="text-[#06C755] text-3xl shrink-0" />
                          <div className="text-center sm:text-left">
                            <h4 className="font-bold text-sm text-slate-200">連結 LINE 帳號管理看診</h4>
                            <p className="text-xs text-slate-500 mt-0.5">綁定後一鍵調取紀錄、自主取消，免輸入電話</p>
                          </div>
                        </div>
                        {lineUserId ? (
                          <span className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"><FaCheckCircle/>已成功連結</span>
                        ) : (
                          <button 
                            type="button"
                            onClick={handleLineAuthRedirect}
                            className="bg-[#06C755] hover:bg-[#05b04b] text-white text-xs font-bold py-2 px-4 rounded-lg shadow transition-colors whitespace-nowrap"
                          >
                            一鍵綁定登入
                          </button>
                        )}
                      </div>

                      {/* 姓名與電話 (並排) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-400 mb-1.5">病患真實姓名 <span className="text-rose-500">*</span></label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-4 text-slate-600 text-xs" />
                            <input 
                              type="text"
                              required
                              value={formData.name}
                              onChange={e => setFormData({...formData, name: e.target.value})}
                              placeholder="請輸入繁體中文真實大名"
                              className="w-full p-3.5 pl-10 border border-slate-700 bg-slate-950/30 rounded-xl outline-none focus:border-cyan-500 transition text-sm text-slate-200"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 mb-1.5">手機號碼 (將完整保留開頭0) <span className="text-rose-500">*</span></label>
                          <div className="relative">
                            <FaPhoneAlt className="absolute left-4 top-4 text-slate-600 text-xs" />
                            <input 
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={e => setFormData({...formData, phone: e.target.value})}
                              placeholder="例如：0912345678"
                              className="w-full p-3.5 pl-10 border border-slate-700 bg-slate-950/30 rounded-xl outline-none focus:border-cyan-500 transition text-sm text-slate-200"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 mb-1.5">電子郵件 (選填)</label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-4 top-4 text-slate-600 text-xs" />
                          <input 
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            placeholder="yourname@gmail.com"
                            className="w-full p-3.5 pl-10 border border-slate-700 bg-slate-950/30 rounded-xl outline-none focus:border-cyan-500 transition text-sm text-slate-200"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-400 mb-1.5">本次看診不適部位？</label>
                          <div className="relative">
                            <FaMapMarkerAlt className="absolute left-4 top-4 text-slate-600 text-xs" />
                            <input 
                              type="text"
                              value={formData.part}
                              onChange={e => setFormData({...formData, part: e.target.value})}
                              placeholder="例如：right knee (右側膝蓋)、腰椎..."
                              className="w-full p-3.5 pl-10 border border-slate-700 bg-slate-950/30 rounded-xl outline-none focus:border-cyan-500 transition text-sm text-slate-200"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 mb-1.5">不適發生原因？ (可詳細述敘)</label>
                          <div className="relative">
                            <FaFileAlt className="absolute left-4 top-4 text-slate-600 text-xs" />
                            <textarea 
                              rows={3}
                              value={formData.reason}
                              onChange={e => setFormData({...formData, reason: e.target.value})}
                              placeholder="請描述疼痛情況、不適過程或受傷經過..."
                              className="w-full p-3.5 pl-10 border border-slate-700 bg-slate-950/30 rounded-xl outline-none focus:border-cyan-500 transition text-sm text-slate-200 resize-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 mb-1.5">先前曾接受過哪些治療或放射檢查嗎？</label>
                          <div className="relative">
                            <FaHistory className="absolute left-4 top-4 text-slate-600 text-xs" />
                            <input 
                              type="text"
                              value={formData.treatment}
                              onChange={e => setFormData({...formData, treatment: e.target.value})}
                              placeholder="例如：照過X光、曾做過復健、藥物治療、皆無..."
                              className="w-full p-3.5 pl-10 border border-slate-700 bg-slate-950/30 rounded-xl outline-none focus:border-cyan-500 transition text-sm text-slate-200"
                            />
                          </div>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitLoading}
                        className="w-full py-4.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-black text-sm tracking-widest shadow-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all transform hover:scale-[1.01] disabled:bg-slate-700"
                      >
                        {isSubmitLoading ? "雲端排班加鎖並確認中..." : "確認送出特約自費掛號"}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* TAB 2: 查詢與取消 */}
              {activeTab === 'query' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-black text-white">掛號明細自主查詢</h3>
                  
                  <div className="p-5 bg-slate-950/40 border border-slate-700 rounded-xl space-y-4">
                    {lineUserId ? (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-xs font-bold text-slate-300">
                          <i className="fa-brands fa-line text-green-500 mr-1.5"></i>已關聯您的 LINE 身分帳號
                        </span>
                        <button 
                          onClick={() => runQuery('line', lineUserId)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-xs font-bold rounded-lg transition shadow"
                        >
                          同步 LINE 預約項目
                        </button>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-bold text-slate-400 mb-1.5">請輸入掛號填寫的手機號碼進行檢索：</label>
                        <div className="flex gap-2">
                          <input 
                            type="tel"
                            value={queryPhone}
                            onChange={e => setQueryPhone(e.target.value)}
                            placeholder="例如：0912345678"
                            className="flex-1 p-3 border border-slate-700 bg-slate-950/20 rounded-xl outline-none focus:border-cyan-500 text-sm text-slate-200"
                          />
                          <button 
                            onClick={() => runQuery('phone', queryPhone)}
                            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 rounded-xl text-xs whitespace-nowrap transition flex items-center gap-1.5"
                          >
                            <FaSearch/> 搜尋
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">您的特約預約列表</h4>
                    {isLoading ? (
                      <div className="text-center text-slate-400 py-6 text-xs">正在連線調取雲端帳簿...</div>
                    ) : queryResults.length > 0 ? (
                      <div className="space-y-2">
                        {queryResults.map((item) => (
                          <div key={item.id} className="bg-slate-950/30 border border-slate-700/60 p-4 rounded-xl flex justify-between items-center hover:border-slate-500 transition">
                            <div>
                              <div className="text-[10px] text-slate-400 font-bold mb-0.5">就診姓名：{item.name}</div>
                              <div className="flex items-center gap-2">
                                <span className="text-white font-black text-sm">{item.date}</span>
                                <span className="bg-blue-500/10 text-blue-400 font-bold text-[10px] px-2 py-0.5 rounded border border-blue-500/20">{item.time}</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => handleCancelBooking(item.id, `${item.date} ${item.time}`)}
                              className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-bold px-3 py-2 rounded-lg border border-rose-500/20 transition flex items-center gap-1"
                            >
                              <FaTrashAlt size={10}/> 取消釋出
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-slate-500 py-8 border border-dashed border-slate-700 rounded-xl text-xs">
                        開立此範圍內無未來的特約掛號紀錄。
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