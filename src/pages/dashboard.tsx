'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Mock user data
  const userData = {
    name: 'GamerPro',
    username: '@gamerpro',
    email: 'gamer@example.com',
    plan: 'Creator Pro',
    avatar: '🎮'
  };

  const handleLogout = () => {
    if (confirm('คุณต้องการออกจากระบบหรือไม่?')) {
      alert('ออกจากระบบสำเร็จ!');
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full bg-gray-800 border-b border-gray-700 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Menu Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                DonateNow
              </h1>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-white">
                <span className="text-2xl">🔔</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-lg transition-all"
                >
                  <div className="text-3xl">{userData.avatar}</div>
                  <div className="hidden sm:block">
                    <div className="font-semibold">{userData.name}</div>
                    <div className="text-sm text-gray-400">{userData.username}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden z-50">
                    <div className="p-3 border-b border-gray-700">
                      <div className="font-semibold">{userData.name}</div>
                      <div className="text-sm text-gray-400">{userData.email}</div>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          setActiveTab('overview');
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-all text-left"
                      >
                        <span className="text-lg">👤</span>
                        <span>โปรไฟล์</span>
                      </button>

                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          setActiveTab('plan');
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-all text-left"
                      >
                        <span className="text-lg">⚙️</span>
                        <span>ตั้งค่า</span>
                      </button>

                      <a
                        href="/"
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-all"
                      >
                        <span className="text-lg">🏠</span>
                        <span>หน้าแรก</span>
                      </a>
                    </div>

                    <div className="border-t border-gray-700">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-600/20 text-red-400 hover:text-red-300 transition-all text-left"
                      >
                        <span className="text-lg">🚪</span>
                        <span>ออกจากระบบ</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-gray-800 border-r border-gray-700 z-30 pt-16 lg:pt-0`}>
          <div className="h-full overflow-y-auto py-6">
            {/* Section 1: บัญชีและแพลน */}
            <div className="px-4 mb-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                บัญชีของฉัน
              </h3>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'overview'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">👤</span>
                  <span>บัญชีผู้ใช้</span>
                </button>
                <button
                  onClick={() => setActiveTab('plan')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'plan'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">🚀</span>
                  <span>แพลนและการใช้งาน</span>
                </button>
                <button
                  onClick={() => setActiveTab('plan-history')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'plan-history'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">📋</span>
                  <span>ประวัติการสมัครแพลน</span>
                </button>
              </nav>
            </div>

            {/* Section 2: จัดการรับเงิน */}
            <div className="px-4 mb-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                จัดการรับเงิน
              </h3>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('payment-account')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'payment-account'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">💳</span>
                  <span>จัดการบัญชี</span>
                </button>
                <button
                  onClick={() => setActiveTab('donation-page')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'donation-page'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">🎨</span>
                  <span>หน้ารับเงิน</span>
                </button>
                <button
                  onClick={() => setActiveTab('widgets')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'widgets'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">🔔</span>
                  <span>ตั้งค่าวิดเจ็ต</span>
                </button>
                <button
                  onClick={() => setActiveTab('donation-history')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'donation-history'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">💰</span>
                  <span>ประวัติการรับเงิน</span>
                </button>
              </nav>
            </div>

            {/* Section 3: ช้อปปิ้ง */}
            <div className="px-4 mb-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                อื่นๆ
              </h3>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('shop')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'shop'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">🛍️</span>
                  <span>ช้อปปิ้ง</span>
                </button>
              </nav>
            </div>

            {/* Back to Home */}
            <div className="px-4">
              <a
                href="/"
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-all"
              >
                <span className="text-xl">🏠</span>
                <span>กลับหน้าแรก</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">แก้ไขบัญชีผู้ใช้</h2>

              {/* Profile Section */}
              <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">โปรไฟล์</h3>

                <div className="flex items-start gap-6 mb-6 pb-6 border-b border-gray-700">
                  <div className="relative">
                    <div className="text-8xl">{userData.avatar}</div>
                    <button className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                      <span className="text-xl">📷</span>
                    </button>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-2xl font-bold">{userData.name}</h4>
                      <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full text-xs font-medium">
                        {userData.plan}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-1">{userData.username}</p>
                    <p className="text-sm text-gray-500">เข้าร่วมเมื่อ: 15 พฤศจิกายน 2024</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Username</label>
                    <input
                      type="text"
                      defaultValue={userData.username}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">ชื่อที่แสดง</label>
                    <input
                      type="text"
                      defaultValue={userData.name}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">Bio / คำอธิบาย</label>
                    <textarea
                      rows={3}
                      defaultValue="สตรีมเมอร์เกมออนไลน์ ถ่ายทอดสดทุกวัน"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Account Management */}
              <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">จัดการบัญชี</h3>

                <div className="space-y-4">
                  {/* Email Verification */}
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <div className="font-medium">อีเมล</div>
                        <div className="text-sm text-gray-400">{userData.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-sm flex items-center gap-1">
                        <span>✓</span> ยืนยันแล้ว
                      </span>
                      <button className="text-purple-400 hover:text-purple-300 text-sm">เปลี่ยน</button>
                    </div>
                  </div>

                  {/* Phone Verification */}
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <div className="font-medium">เบอร์โทรศัพท์</div>
                        <div className="text-sm text-gray-400">099-XXX-XX45</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-sm flex items-center gap-1">
                        <span>✓</span> ยืนยันแล้ว
                      </span>
                      <button className="text-purple-400 hover:text-purple-300 text-sm">เปลี่ยน</button>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔒</span>
                      <div>
                        <div className="font-medium">รหัสผ่าน</div>
                        <div className="text-sm text-gray-400">••••••••</div>
                      </div>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 text-sm">เปลี่ยนรหัสผ่าน</button>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">ข้อมูลส่วนตัว</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">ชื่อจริง</label>
                    <input
                      type="text"
                      placeholder="กรอกชื่อจริง"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">นามสกุล</label>
                    <input
                      type="text"
                      placeholder="กรอกนามสกุล"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">วันเกิด</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">เพศ</label>
                    <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all">
                      <option>เลือกเพศ</option>
                      <option>ชาย</option>
                      <option>หญิง</option>
                      <option>ไม่ระบุ</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">โซเชียลมีเดีย</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-lg">📘</span> Facebook
                    </label>
                    <input
                      type="text"
                      placeholder="https://facebook.com/username"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-lg">📷</span> Instagram
                    </label>
                    <input
                      type="text"
                      placeholder="https://instagram.com/username"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-lg">🎵</span> TikTok
                    </label>
                    <input
                      type="text"
                      placeholder="https://tiktok.com/@username"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-lg">🐦</span> Twitter (X)
                    </label>
                    <input
                      type="text"
                      placeholder="https://twitter.com/username"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-lg">🎮</span> Twitch
                    </label>
                    <input
                      type="text"
                      placeholder="https://twitch.tv/username"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-lg">📺</span> YouTube
                    </label>
                    <input
                      type="text"
                      placeholder="https://youtube.com/@username"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">ที่อยู่</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">ที่อยู่</label>
                    <textarea
                      rows={2}
                      placeholder="บ้านเลขที่, ซอย, ถนน"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">จังหวัด</label>
                      <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all">
                        <option>เลือกจังหวัด</option>
                        <option>กรุงเทพมหานคร</option>
                        <option>เชียงใหม่</option>
                        <option>ภูเก็ต</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">เขต/อำเภอ</label>
                      <input
                        type="text"
                        placeholder="กรอกเขต/อำเภอ"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">แขวง/ตำบล</label>
                      <input
                        type="text"
                        placeholder="กรอกแขวง/ตำบล"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">รหัสไปรษณีย์</label>
                      <input
                        type="text"
                        placeholder="10XXX"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end gap-4">
                <button className="px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition-all">
                  ยกเลิก
                </button>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all shadow-lg shadow-purple-500/50">
                  บันทึกการเปลี่ยนแปลง
                </button>
              </div>
            </div>
          )}

          {/* Plan Tab */}
          {activeTab === 'plan' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">แพลนและการใช้งาน</h2>

              {/* Current Plan */}
              <div className="bg-gradient-to-br from-pink-900/50 to-gray-800 rounded-2xl p-6 border-2 border-pink-500 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">แพลนปัจจุบัน</div>
                    <h3 className="text-3xl font-bold mb-2">Creator Pro</h3>
                    <p className="text-gray-300">ค่าธรรมเนียมเพียง 3% + Analytics</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-pink-500">฿199</div>
                    <div className="text-sm text-gray-400">/เดือน</div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">วันต่ออายุถัดไป</span>
                    <span className="font-medium">15 มกราคม 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">สถานะการชำระเงิน</span>
                    <span className="text-green-400 font-medium">✓ เปิดใช้งาน</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-pink-600 hover:bg-pink-700 py-3 rounded-lg font-medium transition-all">
                    อัพเกรดแพลน
                  </button>
                  <button className="px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition-all">
                    ยกเลิกแพลน
                  </button>
                </div>
              </div>

              {/* Usage Stats */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">สถิติการใช้งานเดือนนี้</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">การรับเงิน</span>
                      <span>89 / ∞</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">ผู้สนับสนุนใหม่</span>
                      <span>124 / ∞</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-pink-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Storage ที่ใช้</span>
                      <span>2.4 GB / 10 GB</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Plan History Tab */}
          {activeTab === 'plan-history' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">ประวัติการสมัครแพลน</h2>

              <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-900">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">วันที่</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">แพลน</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">ราคา</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">สถานะ</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">ใบเสร็จ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {[
                        { date: '01 ม.ค. 2025', plan: 'Creator Pro', price: '฿199', status: 'ชำระแล้ว' },
                        { date: '01 ธ.ค. 2024', plan: 'Creator Pro', price: '฿199', status: 'ชำระแล้ว' },
                        { date: '01 พ.ย. 2024', plan: 'Starter', price: '฿0', status: 'ฟรี' },
                      ].map((item, index) => (
                        <tr key={index} className="hover:bg-gray-700/50">
                          <td className="px-6 py-4">{item.date}</td>
                          <td className="px-6 py-4 font-medium">{item.plan}</td>
                          <td className="px-6 py-4">{item.price}</td>
                          <td className="px-6 py-4">
                            <span className="inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-purple-400 hover:text-purple-300">ดาวน์โหลด</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Payment Account Tab */}
          {activeTab === 'payment-account' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">จัดการบัญชี</h2>
              <p className="text-gray-400 mb-6">เพิ่มช่องทางการรับเงินของคุณ</p>

              {/* Payment Methods */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* PromptPay */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
                  <div className="text-4xl mb-4">💸</div>
                  <h3 className="text-xl font-bold mb-2">พร้อมท์เพย์</h3>
                  <p className="text-gray-400 text-sm mb-4">เชื่อมต่อด้วยเบอร์โทรหรือบัตรประชาชน</p>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-medium transition-all">
                    เพิ่มพร้อมท์เพย์
                  </button>
                </div>

                {/* Mobile Banking */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-500 transition-all">
                  <div className="text-4xl mb-4">🏦</div>
                  <h3 className="text-xl font-bold mb-2">โมบายแบงค์กิ้ง</h3>
                  <p className="text-gray-400 text-sm mb-4">เชื่อมต่อบัญชีธนาคารโดยตรง</p>
                  <button className="w-full bg-pink-600 hover:bg-pink-700 py-3 rounded-lg font-medium transition-all">
                    เพิ่มบัญชีธนาคาร
                  </button>
                </div>

                {/* Wallet */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
                  <div className="text-4xl mb-4">👛</div>
                  <h3 className="text-xl font-bold mb-2">วอลเล็ท</h3>
                  <p className="text-gray-400 text-sm mb-4">TrueMoney, ShopeePay, LINE Pay</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium transition-all">
                    เพิ่มวอลเล็ท
                  </button>
                </div>
              </div>

              {/* Connected Accounts */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">บัญชีที่เชื่อมต่อแล้ว</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">💸</div>
                      <div>
                        <div className="font-medium">พร้อมท์เพย์</div>
                        <div className="text-sm text-gray-400">099-XXX-XX45</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-sm">✓ เชื่อมต่อแล้ว</span>
                      <button className="text-red-400 hover:text-red-300">ลบ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Donation Page Tab */}
          {activeTab === 'donation-page' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">หน้ารับเงิน</h2>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Customization Panel */}
                <div>
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-6">
                    <h3 className="text-xl font-bold mb-4">ปรับแต่งหน้าของคุณ</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">ชื่อหน้า</label>
                        <input
                          type="text"
                          defaultValue="สนับสนุน GamerPro"
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">คำอธิบาย</label>
                        <textarea
                          rows={3}
                          defaultValue="ขอบคุณที่สนับสนุนการสตรีมของผม! เงินทุกบาทจะนำไปพัฒนาคอนเทนต์"
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">สีธีม</label>
                        <div className="flex gap-3">
                          {['bg-purple-600', 'bg-pink-600', 'bg-blue-600', 'bg-green-600', 'bg-red-600'].map((color, i) => (
                            <button
                              key={i}
                              className={`w-12 h-12 ${color} rounded-lg border-2 border-transparent hover:border-white transition-all`}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">จำนวนเงินแนะนำ</label>
                        <div className="grid grid-cols-3 gap-2">
                          {['50', '100', '200', '500', '1000', 'อื่นๆ'].map((amount, i) => (
                            <button
                              key={i}
                              className="py-2 bg-gray-900 hover:bg-purple-600 border border-gray-700 rounded-lg transition-all"
                            >
                              ฿{amount}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-lg font-medium text-lg transition-all">
                    บันทึกการเปลี่ยนแปลง
                  </button>
                </div>

                {/* Preview */}
                <div>
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 sticky top-6">
                    <h3 className="text-xl font-bold mb-4">ตัวอย่าง</h3>

                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 mb-4">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎮</div>
                        <h3 className="text-2xl font-bold mb-2">สนับสนุน GamerPro</h3>
                        <p className="text-purple-100">ขอบคุณที่สนับสนุนการสตรีมของผม!</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {['50', '100', '200'].map((amount) => (
                        <button key={amount} className="py-3 bg-gray-900 hover:bg-purple-600 rounded-lg transition-all">
                          ฿{amount}
                        </button>
                      ))}
                    </div>

                    <input
                      type="text"
                      placeholder="จำนวนเงิน (฿)"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg mb-3"
                    />

                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-medium">
                      สนับสนุนเลย
                    </button>

                    <div className="mt-4 text-center">
                      <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                        donatenow.com/@gamerpro
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Widgets Tab */}
          {activeTab === 'widgets' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">ตั้งค่าวิดเจ็ต</h2>
              <p className="text-gray-400 mb-6">เพิ่มวิดเจ็ตแจ้งเตือนและเอฟเฟกต์พิเศษในสตรีม</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Donation Alert */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🔔</div>
                    <div>
                      <h3 className="text-xl font-bold">แจ้งเตือนโดเนท</h3>
                      <p className="text-sm text-gray-400">แสดงชื่อผู้บริจาคบนสตรีม</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span>แสดงชื่อผู้บริจาค</span>
                      <input type="checkbox" className="w-5 h-5" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span>เล่นเสียงแจ้งเตือน</span>
                      <input type="checkbox" className="w-5 h-5" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                      <span>แสดงข้อความ</span>
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-medium transition-all">
                    คัดลอก URL
                  </button>
                </div>

                {/* Gift Animation */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🎁</div>
                    <div>
                      <h3 className="text-xl font-bold">เอฟเฟกต์ของขวัญ</h3>
                      <p className="text-sm text-gray-400">แอนิเมชั่นเมื่อได้รับเงิน</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-gray-900 rounded-lg hover:bg-purple-600/20 cursor-pointer transition-all">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎉</span>
                        <div>
                          <div className="font-medium">Confetti</div>
                          <div className="text-xs text-gray-400">เหมาะกับโดเนทจำนวนมาก</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-900 rounded-lg hover:bg-purple-600/20 cursor-pointer transition-all">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💖</span>
                        <div>
                          <div className="font-medium">Hearts</div>
                          <div className="text-xs text-gray-400">สำหรับทุกยอด</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-900 rounded-lg hover:bg-purple-600/20 cursor-pointer transition-all">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">⭐</span>
                        <div>
                          <div className="font-medium">Stars</div>
                          <div className="text-xs text-gray-400">ดาวเคลื่อนไหว</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Donation History Tab */}
          {activeTab === 'donation-history' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">ประวัติการรับเงิน</h2>

              {/* Summary Cards */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 mb-1">วันนี้</div>
                  <div className="text-2xl font-bold text-purple-400">฿850</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 mb-1">สัปดาห์นี้</div>
                  <div className="text-2xl font-bold text-pink-400">฿3,240</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 mb-1">เดือนนี้</div>
                  <div className="text-2xl font-bold text-blue-400">฿12,450</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 mb-1">ทั้งหมด</div>
                  <div className="text-2xl font-bold text-green-400">฿48,920</div>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                  <h3 className="font-bold">รายการล่าสุด</h3>
                  <button className="text-purple-400 hover:text-purple-300 text-sm">ดาวน์โหลดทั้งหมด</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-900">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">วันที่-เวลา</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">ผู้บริจาค</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">จำนวนเงิน</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">ข้อความ</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">สถานะ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {[
                        { time: '14:32', name: 'Anonymous', amount: '฿100', message: 'สู้ๆนะครับ!', status: 'สำเร็จ' },
                        { time: '13:15', name: 'กิต', amount: '฿200', message: 'เล่นเก่งมาก', status: 'สำเร็จ' },
                        { time: '12:48', name: 'มิว', amount: '฿50', message: '', status: 'สำเร็จ' },
                        { time: '11:22', name: 'ปอนด์', amount: '฿500', message: 'เทพมาก ตาโต!', status: 'สำเร็จ' },
                        { time: '10:05', name: 'Anonymous', amount: '฿1000', message: 'ซื้อไมค์ใหม่นะ', status: 'สำเร็จ' },
                      ].map((item, index) => (
                        <tr key={index} className="hover:bg-gray-700/50">
                          <td className="px-6 py-4 text-sm text-gray-400">{item.time}</td>
                          <td className="px-6 py-4 font-medium">{item.name}</td>
                          <td className="px-6 py-4 font-bold text-green-400">{item.amount}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{item.message || '-'}</td>
                          <td className="px-6 py-4">
                            <span className="inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Shop Tab */}
          {activeTab === 'shop' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">ช้อปปิ้ง</h2>
              <p className="text-gray-400 mb-6">ซื้อไอเทมตกแต่งโปรไฟล์และเพจของคุณ</p>

              {/* Categories */}
              <div className="flex gap-3 mb-6 overflow-x-auto">
                {['ทั้งหมด', 'กรอบโปรไฟล์', 'เอฟเฟกต์', 'ธีม', 'ป้ายชื่อ', 'Badge'].map((cat) => (
                  <button
                    key={cat}
                    className="px-6 py-2 bg-gray-800 hover:bg-purple-600 rounded-full whitespace-nowrap transition-all"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { icon: '🌟', name: 'กรอบทอง', price: '฿99', type: 'กรอบโปรไฟล์' },
                  { icon: '💎', name: 'กรอบเพชร', price: '฿199', type: 'กรอบโปรไฟล์' },
                  { icon: '🔥', name: 'เอฟเฟกต์ไฟ', price: '฿149', type: 'เอฟเฟกต์' },
                  { icon: '⚡', name: 'เอฟเฟกต์ฟ้าผ่า', price: '฿149', type: 'เอฟเฟกต์' },
                  { icon: '🎨', name: 'ธีมสายรุ้ง', price: '฿249', type: 'ธีม' },
                  { icon: '🌙', name: 'ธีมกลางคืน', price: '฿199', type: 'ธีม' },
                  { icon: '👑', name: 'Badge VIP', price: '฿299', type: 'Badge' },
                  { icon: '🏆', name: 'Badge แชมป์', price: '฿399', type: 'Badge' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all group"
                  >
                    <div className="h-40 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <div className="text-6xl transform group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-gray-400 mb-1">{item.type}</div>
                      <h3 className="font-bold mb-2">{item.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-purple-400">{item.price}</span>
                        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-all">
                          ซื้อ
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Overlay for user menu */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </div>
  );
}
