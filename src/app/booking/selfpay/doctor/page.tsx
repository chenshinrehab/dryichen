'use client';

import React, { useState, useEffect } from 'react';

export default function DoctorAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'list' | 'settings'>('list');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<any[]>([]);
  
  const [filterDate, setFilterDate] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  
  const [activeSlots, setActiveSlots] = useState<string[]>([]);
  const [allSchedules, setAllSchedules] = useState<Record<string, string[]>>({});
  const [isListLoading, setIsListLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  
  // 日曆月份控制狀態
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const slotsData = {
    morning: [{v:"09:00", t:"09:00 AM"}, {v:"09:30", t:"09:30 AM"}, {v:"10:00", t:"10:00 AM"}, {v:"10:30", t:"10:30 AM"}, {v:"11:00", t:"11:00 AM"}, {v:"11:30", t:"11:30 AM"}],
    afternoon: [{v:"14:00", t:"02:00 PM"}, {v:"14:30", t:"02:30 PM"}, {v:"15:00", t:"03:00 PM"}, {v:"15:30", t:"03:30 PM"}, {v:"16:00", t:"04:00 PM"}, {v:"16:30", t:"04:30 PM"}],
    evening: [{v:"18:00", t:"06:00 PM"}, {v:"18:30", t:"06:30 PM"}, {v:"19:00", t:"07:00 PM"}, {v:"19:30", t:"07:30 PM"}, {v:"20:00", t:"08:00 PM"}, {v:"20:30", t:"08:30 PM"}]
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAppointments();
      fetchConfiguredDates();
      
      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000;
      const localISOTime = (new Date(now.getTime() - offset)).toISOString().split('T')[0];
      setSelectedDate(localISOTime);
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
      const res = await fetch(`/api/reserve?action=getAllAppointments`);
      const data = await res.json();
      setAppointments(data.list || []);
      if (filterDate) {
        setFilteredAppointments((data.list || []).filter((a: any) => a.date === filterDate));
      } else {
        setFilteredAppointments(data.list || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsListLoading(false);
    }
  };

  const fetchConfiguredDates = async () => {
    try {
      const res = await fetch(`/api/doctor-settings`);
      const data = await res.json();
      if (data && data.success) {
        setAllSchedules(data.settings || {});
      }
    } catch (err) {
      console.error(err);
    }
  };

  const loadDoctorSettingsForDate = async (dateStr: string) => {
    try {
      const res = await fetch(`/api/doctor-settings`);
      const data = await res.json();
      if (data && data.success) {
        const schedules = data.settings || {};
        const rawSlots = schedules[dateStr] || [];
        const parsedSlots = typeof rawSlots === 'string' ? JSON.parse(rawSlots) : rawSlots;
        setActiveSlots(parsedSlots || []);
      }
    } catch (err) {
      console.error("載入特定日期排班失敗:", err);
    }
  };

  const handleFilterDateChangeDirect = (dateStr: string) => {
    setFilterDate(dateStr);
    if (dateStr === '') {
      setFilteredAppointments(appointments);
    } else {
      setFilteredAppointments(appointments.filter(item => item.date === dateStr));
    }
  };

  const handleSlotToggle = (timeText: string) => {
    if (activeSlots.includes(timeText)) {
      setActiveSlots(activeSlots.filter(s => s !== timeText));
    } else {
      setActiveSlots([...activeSlots, timeText]);
    }
  };

  const handleGroupSelectAll = (groupKey: 'morning' | 'afternoon' | 'evening', isChecked: boolean) => {
    const groupTexts = slotsData[groupKey].map(item => item.t);
    if (isChecked) {
      const newSlots = Array.from(new Set([...activeSlots, ...groupTexts]));
      setActiveSlots(newSlots);
    } else {
      setActiveSlots(activeSlots.filter(s => !groupTexts.includes(s)));
    }
  };

  const saveDoctorSettings = async () => {
    if (!selectedDate) { alert('請先選擇維護日期！'); return; }
    
    const inputPass = prompt("🏥 變更自費排班設定安全管制：\n請輸入授權金鑰密碼以確認儲存：");
    if (inputPass !== '7999') {
      alert("❌ 安全金鑰錯誤，排班未儲存更新！");
      return;
    }

    setIsSaveLoading(true);
    try {
      const response = await fetch('/api/doctor-settings', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: selectedDate, timeSlots: activeSlots }) 
      });
      const res = await response.json();
      if (res.success || response.ok) {
        alert('🏥 自費特約排班表儲存更新成功！');
        fetchConfiguredDates();
      } else {
        alert('同步未成功：' + (res.error || '後端異常'));
      }
    } catch (err) {
      alert('同步失敗，請檢查網路連線或確定 API 設定無誤。');
    } finally {
      setIsSaveLoading(false);
    }
  };

  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  const todayStr = (new Date(now.getTime() - offset)).toISOString().split('T')[0];
  
  const dashboardDate = activeTab === 'list' ? (filterDate || todayStr) : (selectedDate || todayStr);
  const dashboardPatientCount = appointments.filter(a => a.date === dashboardDate).length;
  
  const getOpenSlotsCountForDate = (dateStr: string) => {
    const raw = allSchedules[dateStr];
    if (!raw) return 0;
    return typeof raw === 'string' ? JSON.parse(raw).length : raw.length;
  };

  const dashboardOpenSlotsCount = activeTab === 'settings' && dashboardDate === selectedDate 
    ? activeSlots.length 
    : getOpenSlotsCountForDate(dashboardDate);

  // 🚀 修正點1 & 2 & 3：公用排班日曆渲染器（支援時段設定的綠圈標記、預約名單的藍圈標記、以及過去日期反灰）
  const renderCalendarWidget = (type: 'list' | 'settings') => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dateObj = new Date(year, month, i);
      const dateStr = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000).toISOString().split('T')[0];
      
      const isPast = dateStr < todayStr;
      
      // 根據當前活頁籤，判斷被點選高亮的目標
      const isSelected = type === 'list' ? filterDate === dateStr : selectedDate === dateStr;
      
      // 檢查此日期是否有病患填寫預約
      const hasPatients = appointments.some(a => a.date === dateStr);
      // 檢查此日期是否有開放時段
      const hasConfiguredSlots = getOpenSlotsCountForDate(dateStr) > 0;

      days.push(
        <button
          key={i}
          type="button"
          disabled={isPast}
          onClick={() => {
            if (type === 'list') {
              handleFilterDateChangeDirect(dateStr);
            } else {
              setSelectedDate(dateStr);
            }
          }}
          className={`h-11 w-11 mx-auto rounded-full flex flex-col items-center justify-center text-sm font-bold transition-all relative
            ${isSelected ? 'bg-teal-600 text-white shadow scale-105' : 
              isPast ? 'text-slate-300 opacity-30 cursor-not-allowed bg-transparent' : 
              'text-slate-700 hover:bg-slate-100 bg-white shadow-sm border border-slate-200'
            }
          `}
        >
          <span>{i}</span>
          
          {/* 時段設定分頁：有開放時段則顯示綠圈 */}
          {type === 'settings' && hasConfiguredSlots && !isSelected && (
            <span className="absolute inset-0.5 rounded-full border-2 border-emerald-500 pointer-events-none animate-pulse" />
          )}

          {/* 🚀 修正點：預約名單分頁：若有病患掛號，在外圍包覆一圈漂亮的深藍色記號圈 */}
          {type === 'list' && hasPatients && !isSelected && (
            <span className="absolute inset-0.5 rounded-full border-2 border-cyan-600 pointer-events-none" />
          )}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      
      <style dangerouslySetInnerHTML={{__html: `
        body, html, main, #__next, .flex-grow {
          background-color: #f8fafc !important;
        }
      `}} />

      <main className="max-w-6xl mx-auto p-4 md:py-6 md:px-10 space-y-5 text-base md:text-lg">
        
        {/* 功能切換按鈕與數據卡片並排 */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex justify-between items-center shadow-sm">
              <div>
                <p className="text-sm font-bold text-slate-500 mb-1">({dashboardDate}) 本日就診人數</p>
                <h4 className="text-3xl font-black text-slate-900">{dashboardPatientCount} 人次</h4>
              </div>
              <span className="p-4 bg-teal-50 text-teal-600 border border-teal-100 rounded-xl text-2xl">🎯</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex justify-between items-center shadow-sm">
              <div>
                <p className="text-sm font-bold text-slate-500 mb-1">({dashboardDate}) 總開放時段數</p>
                <h4 className="text-3xl font-black text-slate-900">{dashboardOpenSlotsCount} 個</h4>
              </div>
              <span className="p-4 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl text-2xl">🗓️</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end min-w-[200px]">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'list' ? 'settings' : 'list')}
              className="w-full md:w-auto px-8 py-5 rounded-2xl text-base font-black text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {activeTab === 'list' ? <>⚙️ 切換至：時段設定</> : <>📋 切換至：預約名單</>}
            </button>
          </div>
        </div>

        {activeTab === 'list' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* 🚀 修正點：將預約名單左側也改為一致的客製化大日曆篩選面板 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xl space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-black text-slate-900">1. 選擇查閱報表日期</h3>
                <p className="text-xs text-slate-400 mt-1">過去無預約日期已反灰；<span className="text-cyan-600 font-bold">藍圈</span>代表有病患特約登記</p>
              </div>

              <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50/60">
                <div className="flex items-center justify-between mb-4">
                  <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))} className="text-slate-500 hover:text-teal-600 font-bold p-1">◀</button>
                  <span className="font-black text-sm text-slate-800">{currentMonth.getFullYear()}年 {currentMonth.getMonth() + 1}月</span>
                  <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))} className="text-slate-500 hover:text-teal-600 font-bold p-1">▶</button>
                </div>
                
                <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
                  {['日','一','二','三','四','五','六'].map(d => <div key={d} className="font-bold text-slate-400 pb-1">{d}</div>)}
                  {renderCalendarWidget('list')}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-500">查閱日期：</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-cyan-600 bg-cyan-50 px-3 py-1 rounded-lg border border-cyan-200">{filterDate || "全部顯示"}</span>
                  {filterDate && <button type="button" onClick={() => handleFilterDateChangeDirect('')} className="text-xs text-rose-500 hover:underline font-bold">重置全部</button>}
                </div>
              </div>
            </div>

            {/* 右側表格：佔據 2 欄寬度 */}
            <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
              <div className="p-6 bg-slate-50 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-1">即時自費特約報表</h2>
                <p className="text-sm text-slate-500">點選以下病患欄位列，可自主摺疊展開完整病歷狀況問卷</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-slate-100 text-slate-700 text-sm font-black border-b border-slate-200">
                    <tr>
                      <th className="p-5 text-left">排班日期</th>
                      <th className="p-5 text-left">預約時間</th>
                      <th className="p-5 text-left">病患姓名</th>
                      <th className="p-5 text-left">手機號碼</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    {isListLoading ? (
                      <tr><td colSpan={4} className="p-10 text-center text-lg text-slate-400 font-bold">資料讀取中...</td></tr>
                    ) : filteredAppointments.length > 0 ? (
                      filteredAppointments.map((r, idx) => (
                        <React.Fragment key={idx}>
                          <tr onClick={() => setExpandedRows(prev => ({...prev, [idx]: !prev[idx]}))} className="hover:bg-slate-50 cursor-pointer transition">
                            <td className="p-5 font-bold text-slate-600">{r.date}</td>
                            <td className="p-5">
                              <span className="bg-teal-50 text-teal-600 border border-teal-200 px-3 py-1 rounded-lg font-black text-sm">
                                {r.time || r.time_slot}
                              </span>
                            </td>
                            <td className="p-5 font-black text-slate-900 text-base">▼ {r.name}</td>
                            <td className="p-5 text-slate-700 font-mono font-bold text-base">{r.phone}</td>
                          </tr>
                          {expandedRows[idx] && (
                            <tr className="bg-slate-50/50">
                              <td colSpan={4} className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200 text-sm max-w-5xl mx-auto shadow-sm">
                                  <div>
                                    <span className="font-black text-slate-400 block mb-2 text-sm">電子郵件：</span>
                                    <span className="text-slate-700 block bg-slate-50 p-3 rounded-lg border border-slate-200 font-bold">{r.email}</span>
                                  </div>
                                  <div>
                                    <span className="font-black text-slate-400 block mb-2 text-sm">看診不適部位：</span>
                                    <span className="text-teal-600 font-black block bg-teal-50 p-3 rounded-lg border border-teal-200">{r.part}</span>
                                  </div>
                                  <div className="md:col-span-2">
                                    <span className="font-black text-slate-400 block mb-2 text-sm">發生主訴原因：</span>
                                    <div className="text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200 font-medium leading-relaxed whitespace-pre-wrap">{r.reason}</div>
                                  </div>
                                  <div className="md:col-span-2">
                                    <span className="font-black text-slate-400 block mb-2 text-sm">過去病史與放射治療史：</span>
                                    <span className="text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200 font-medium block leading-relaxed">{r.treatment}</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      <tr><td colSpan={4} className="p-12 text-center text-slate-400 text-base font-bold bg-white">當前選定日期查無特約登記明細。</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 space-y-8 shadow-xl">
            <h2 className="text-xl font-black text-slate-900 border-b border-slate-200 pb-4">調整自費排班門診診期</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* 時段設定日曆面板 */}
              <div>
                <label className="block text-slate-600 font-black text-sm mb-4">1. 選定維護日期 (支援防呆過去反灰與排診綠圈標記)</label>
                
                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))} className="text-slate-500 hover:text-teal-600 font-bold p-1">◀</button>
                    <span className="font-black text-sm text-slate-800">{currentMonth.getFullYear()}年 {currentMonth.getMonth() + 1}月</span>
                    <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))} className="text-slate-500 hover:text-teal-600 font-bold p-1">▶</button>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
                    {['日','一','二','三','四','五','六'].map(d => <div key={d} className="font-bold text-slate-400 pb-1">{d}</div>)}
                    {renderCalendarWidget('settings')}
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">目前選定維護：</span>
                  <span className="text-sm font-black text-teal-600 bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">{selectedDate || "請選擇"}</span>
                </div>
              </div>

              {/* 右側時段勾選面板 */}
              <div className="md:col-span-2 space-y-6">
                <label className="block text-slate-500 font-black text-sm">2. 勾選當日特約診次時段 (打勾表示對外開放)</label>
                
                {['morning', 'afternoon', 'evening'].map((group) => {
                  const groupKey = group as 'morning' | 'afternoon' | 'evening';
                  const groupTexts = slotsData[groupKey].map(item => item.t);
                  const isAllGroupSelected = groupTexts.every(t => activeSlots.includes(t));

                  return (
                    <div key={group} className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <h3 className="text-sm font-black text-slate-600 uppercase tracking-widest">
                          {group === 'morning' ? '☀️ 上午診 (09:00 AM - 11:30 AM)' : group === 'afternoon' ? '⛅ 下午診 (02:00 PM - 04:30 PM)' : '🌙 晚上診 (06:00 PM - 08:30 PM)'}
                        </h3>
                        
                        <label className="flex items-center gap-2 cursor-pointer text-xs font-black text-teal-600 hover:text-teal-700 bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-sm transition-all select-none">
                          <input 
                            type="checkbox" 
                            checked={isAllGroupSelected && groupTexts.length > 0}
                            onChange={(e) => handleGroupSelectAll(groupKey, e.target.checked)}
                            className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                          />
                          <span>一鍵全選</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {slotsData[groupKey].map(item => {
                          const isChecked = activeSlots.includes(item.t);
                          return (
                            <label key={item.v} className={`flex items-center justify-center p-3.5 border-2 rounded-xl cursor-pointer text-sm font-black transition-all ${isChecked ? 'bg-teal-50 border-teal-500 text-teal-600 shadow-sm' : 'border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:border-slate-400'}`}>
                              <input type="checkbox" checked={isChecked} onChange={() => handleSlotToggle(item.t)} className="hidden" />
                              <span>{item.t}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            <div className="pt-6 border-t border-slate-200 mt-8">
              <button onClick={saveDoctorSettings} disabled={isSaveLoading} className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-black py-5 rounded-2xl shadow-lg transition-all disabled:from-slate-300 disabled:to-slate-300 text-lg tracking-widest">
                {isSaveLoading ? "同步排班數據中..." : "儲存同步此日期開放時段"}
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}