'use client';

import React, { useState, useEffect } from 'react';

// ⚠️ 已自動替換為您專屬最穩定的 Google Apps Script API 網址
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbwa8B_5gmqfCijF3MwgVAQR8wCtkXf0mzIOcrbdV7yEWcwKoqsN05toaZPTTPLZhUDX/exec";

export default function DoctorAdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'list' | 'settings'>('list');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<any[]>([]);
  const [filterDate, setFilterDate] = useState<string>('');
  
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [activeSlots, setActiveSlots] = useState<string[]>([]);
  const [enabledDates, setEnabledDates] = useState<string[]>([]);
  const [isListLoading, setIsListLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const slotsData = {
    morning: [{v:"09:00", t:"09:00 AM"}, {v:"09:30", t:"09:30 AM"}, {v:"10:00", t:"10:00 AM"}, {v:"10:30", t:"10:30 AM"}, {v:"11:00", t:"11:00 AM"}, {v:"11:30", t:"11:30 AM"}],
    afternoon: [{v:"14:00", t:"02:00 PM"}, {v:"14:30", t:"02:30 PM"}, {v:"15:00", t:"03:00 PM"}, {v:"15:30", t:"03:30 PM"}, {v:"16:00", t:"04:00 PM"}, {v:"16:30", t:"04:30 PM"}],
    evening: [{v:"18:00", t:"06:00 PM"}, {v:"18:30", t:"06:30 PM"}, {v:"19:00", t:"07:00 PM"}, {v:"19:30", t:"07:30 PM"}, {v:"20:00", t:"08:00 PM"}, {v:"20:30", t:"08:30 PM"}]
  };

  // 密碼查驗
  const handlePasswordCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '7999') {
      setIsAuthenticated(true);
    } else {
      alert('安全認證金鑰錯誤，請重新輸入！');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAppointments();
      fetchConfiguredDates();
      setSelectedDate(new Date().toISOString().split('T')[0]);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (selectedDate && isAuthenticated) {
      loadDoctorSettingsForDate(selectedDate);
    }
  }, [selectedDate, isAuthenticated]);

  const fetchAppointments = async () => {
    setIsListLoading(true);
    try {
      const res = await fetch(`${GAS_API_URL}?action=getAllAppointments`);
      const data = await res.json();
      setAppointments(data || []);
      setFilteredAppointments(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsListLoading(false);
    }
  };

  const fetchConfiguredDates = async () => {
    try {
      const res = await fetch(`${GAS_API_URL}?action=getInitialBookingData`);
      const data = await res.json();
      setEnabledDates(data.enabledDates || []);
    } catch (err) {
      console.error(err);
    }
  };

  const loadDoctorSettingsForDate = async (dateStr: string) => {
    try {
      const res = await fetch(`${GAS_API_URL}?action=getDoctorSettings&date=${dateStr}`);
      const active = await res.json();
      setActiveSlots(active || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFilterDate(val);
    if (val === '') {
      setFilteredAppointments(appointments);
    } else {
      setFilteredAppointments(appointments.filter(item => item.date === val));
    }
  };

  const handleSlotToggle = (timeText: string) => {
    if (activeSlots.includes(timeText)) {
      setActiveSlots(activeSlots.filter(s => s !== timeText));
    } else {
      setActiveSlots([...activeSlots, timeText]);
    }
  };

  // 🚀 核心修復：加入跨網域傳輸機制，修正同步失敗錯誤
  const saveDoctorSettings = async () => {
    if (!selectedDate) {
      alert('請先選擇維護日期！');
      return;
    }
    setIsSaveLoading(true);
    const payload = {
      action: "saveDoctorSettings",
      date: selectedDate,
      slots: activeSlots
    };
    try {
      const response = await fetch(GAS_API_URL, { 
        method: 'POST', 
        mode: 'cors', // 💡 強制啟用跨網域傳輸安全盾
        headers: {
          'Content-Type': 'text/plain;charset=utf-8' // 💡 使用 text/plain 避免觸發預檢請求，GAS 接收最穩定
        },
        body: JSON.stringify(payload) 
      });
      
      const res = await response.json();
      if (res.status === "success" || response.ok) {
        alert('🏥 自費特約排班表儲存更新成功！');
        fetchConfiguredDates();
      } else {
        alert('同步未成功：' + (res.message || '後端異常'));
      }
    } catch (err) {
      console.error("排班同步失敗錯誤：", err);
      alert('同步失敗，請檢查網路連線或確定 API 部署設定無誤。');
    } finally {
      setIsSaveLoading(false);
    }
  };

  // 指標計算
  const todayStr = new Date().toISOString().split('T')[0];
  const todayCount = appointments.filter(a => a.date === todayStr).length;

  // 1. 安全認證密碼入口
  if (!isAuthenticated) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
        <form onSubmit={handlePasswordCheck} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl max-w-sm w-full space-y-5 text-center">
          <div className="w-16 h-18 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-2xl mx-auto flex items-center justify-center text-xl font-black shadow-inner">🔒</div>
          <div>
            <h2 className="text-xl font-black text-white">院長自費後台排班認證</h2>
            <p className="text-xs text-slate-500 mt-1">請輸入專屬之 4 位數授權安全密碼</p>
          </div>
          <input 
            type="password"
            autoFocus
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="請輸入後台維護密碼..."
            className="w-full text-center tracking-widest text-lg font-bold p-3.5 border border-slate-700 bg-slate-950 rounded-xl outline-none focus:border-teal-500 text-white transition"
          />
          <button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-black py-3.5 rounded-xl shadow-lg transition-colors">確認驗證登入</button>
        </form>
      </div>
    );
  }

  // 2. 正式醫生管理主控台
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <nav className="bg-slate-900/80 border-b border-slate-800 px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-30 backdrop-blur-md">
        <h1 className="text-base font-black text-white flex items-center gap-2">
          <span className="bg-teal-600 text-white px-2 py-1 rounded text-xs">特約</span>
          自費診後台管理 — 林羿辰院長
        </h1>
        <div className="flex space-x-6 text-sm font-bold">
          <button 
            type="button"
            onClick={() => setActiveTab('list')}
            className={`pb-1 border-b-2 transition-all ${activeTab === 'list' ? 'border-teal-500 text-teal-400 font-black' : 'border-transparent text-slate-500'}`}
          >
            預約名單
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`pb-1 border-b-2 transition-all ${activeTab === 'settings' ? 'border-teal-500 text-teal-400 font-black' : 'border-transparent text-slate-500'}`}
          >
            時段設定
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* 摘要數據小卡 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center shadow">
            <div><p className="text-[10px] font-bold text-slate-500 mb-0.5">本日自費就診</p><h4 className="text-xl font-black text-slate-200">{todayCount} 人次</h4></div>
            <span className="p-2 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-lg text-sm">🎯</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center shadow">
            <div><p className="text-[10px] font-bold text-slate-500 mb-0.5">總特約排班天數</p><h4 className="text-xl font-black text-slate-200">{enabledDates.length} 天</h4></div>
            <span className="p-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-sm">🗓️</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center shadow">
            <div><p className="text-[10px] font-bold text-slate-500 mb-0.5">預約建檔庫存</p><h4 className="text-xl font-black text-slate-200">{appointments.length} 筆</h4></div>
            <span className="p-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg text-sm">🗂️</span>
          </div>
        </div>

        {/* TAB 1: 預約名單優先 */}
        {activeTab === 'list' && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="p-5 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h2 className="text-base font-bold text-white">即時自費特約報表</h2>
                <p className="text-[10px] text-slate-500 mt-0.5">點選掛號項目列，可自由摺疊展開完整病歷狀況問卷</p>
              </div>
              
              {/* 日期過濾 */}
              <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl shadow w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-400 whitespace-nowrap">就診過濾:</span>
                <input 
                  type="date"
                  value={filterDate}
                  onChange={handleFilterDateChange}
                  className="outline-none text-xs text-slate-200 bg-transparent font-bold cursor-pointer w-full border-0 focus:ring-0 p-0"
                />
                {filterDate && <button type="button" onClick={() => { setFilterDate(''); setFilteredAppointments(appointments); }} className="text-xs text-rose-400 hover:underline font-bold whitespace-nowrap pl-1">清除</button>}
              </div>

              <button type="button" onClick={fetchAppointments} className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition whitespace-nowrap">刷新名冊</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px]">
                <thead className="bg-slate-950/60 text-slate-400 text-xs font-bold border-b border-slate-800">
                  <tr>
                    <th className="p-4 text-left">排班日期</th>
                    <th className="p-4 text-left">預約時間</th>
                    <th className="p-4 text-left">病患姓名</th>
                    <th className="p-4 text-left">手機號碼 (保留開頭0)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                  {isListLoading ? (
                    <tr><td colSpan={4} className="p-10 text-center text-slate-500">安全連線讀取數據中...</td></tr>
                  ) : filteredAppointments.length > 0 ? (
                    filteredAppointments.map((r, idx) => (
                      <React.Fragment key={idx}>
                        <tr 
                          onClick={() => setExpandedRows(prev => ({...prev, [idx]: !prev[idx]}))}
                          className="hover:bg-slate-800/40 cursor-pointer transition"
                        >
                          <td className="p-4 font-bold text-slate-400">{r.date}</td>
                          <td className="p-4">
                            <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2 py-0.5 rounded font-black">
                              {r.time}
                            </span>
                          </td>
                          <td className="p-4 font-bold text-white">▼ {r.name}</td>
                          <td className="p-4 text-slate-400 font-mono font-bold">{r.phone}</td>
                        </tr>
                        {expandedRows[idx] && (
                          <tr className="bg-slate-950/30">
                            <td colSpan={4} className="p-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900 p-5 rounded-xl border border-slate-800 text-xs max-w-4xl mx-auto">
                                <div>
                                  <span className="font-bold text-slate-500 block mb-1">電子郵件：</span>
                                  <span className="text-slate-300 block bg-slate-950 p-2 rounded border border-slate-800">{r.email}</span>
                                </div>
                                <div>
                                  <span className="font-bold text-slate-500 block mb-1">看診不適部位：</span>
                                  <span className="text-teal-400 font-bold block bg-teal-500/5 p-2 rounded border border-teal-500/20">{r.part}</span>
                                </div>
                                <div className="md:col-span-2">
                                  <span className="font-bold text-slate-500 block mb-1">發生主訴原因：</span>
                                  <div className="text-slate-300 bg-slate-950 p-3 rounded border border-slate-800 whitespace-pre-wrap">{r.reason}</div>
                                </div>
                                <div className="md:col-span-2">
                                  <span className="font-bold text-slate-500 block mb-1">過去病史與放射治療史：</span>
                                  <span className="text-slate-300 bg-slate-950 p-3 rounded border border-slate-800 block">{r.treatment}</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <tr><td colSpan={4} className="p-10 text-center text-slate-600 bg-slate-950/10">當前查無任何特約登記明細。</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: 時段排班 */}
        {activeTab === 'settings' && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl animate-fadeIn">
            <h2 className="text-base font-bold text-white">調整自費排班門診診期</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div>
                <label className="block text-slate-400 font-bold text-xs mb-1.5">1. 選定維護日期 (有排診的日期將存入標記)</label>
                <input 
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="w-full border border-slate-700 bg-slate-950 p-3 rounded-xl font-bold outline-none focus:border-teal-500 text-white cursor-pointer transition text-sm"
                />
                <div className="mt-3 text-[11px] text-teal-400 bg-teal-500/5 p-3 rounded-xl border border-teal-500/10 leading-relaxed">
                  💡 勾選完成後按下下方儲存按鈕，前端網頁預約系統將同步變更，並重新點綴診期藍圈標記。
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <label className="block text-slate-400 font-bold text-xs">2. 勾選當日特約診次時段 (打勾表示對外開放)</label>
                {['morning', 'afternoon', 'evening'].map(group => (
                  <div key={group} className="space-y-1.5">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      {group === 'morning' ? '☀️ 上午診 (09:00 AM - 11:30 AM)' : group === 'afternoon' ? '⛅ 下午診 (02:00 PM - 04:30 PM)' : '🌙 晚上診 (06:00 PM - 08:30 PM)'}
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {slotsData[group as 'morning' | 'afternoon' | 'evening'].map(item => {
                        const isChecked = activeSlots.includes(item.t);
                        return (
                          <label 
                            key={item.v}
                            className={`flex items-center justify-center p-2.5 border rounded-xl cursor-pointer text-xs font-bold transition-all ${isChecked ? 'bg-teal-500/10 border-teal-500 text-teal-400' : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:bg-slate-800/40'}`}
                          >
                            <input 
                              type="checkbox" 
                              checked={isChecked}
                              onChange={() => handleSlotToggle(item.t)}
                              className="hidden"
                            />
                            <span>{item.t}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800">
              <button 
                type="button"
                onClick={saveDoctorSettings}
                disabled={isSaveLoading}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:from-slate-800 disabled:to-slate-800 text-sm tracking-wider"
              >
                {isSaveLoading ? "同步排班數據至雲端活頁簿中..." : "儲存同步此日期開放時段"}
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}