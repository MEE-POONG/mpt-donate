'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    name: '',
    username: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ข้อความของคุณถูกส่งแล้ว!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(authModal === 'login' ? 'เข้าสู่ระบบสำเร็จ!' : 'สมัครสมาชิกสำเร็จ!');
    setAuthModal(null);
    setAuthForm({ email: '', password: '', name: '', username: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                DonateNow
              </h1>
            </div>

            {/* Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-500 transition-colors">หน้าแรก</a>
              <a href="#creators" className="hover:text-purple-500 transition-colors">Creator ยอดนิยม</a>
              <a href="#how-to-use" className="hover:text-purple-500 transition-colors">วิธีใช้งาน</a>
              <a href="#plans" className="hover:text-purple-500 transition-colors">แพลนสำหรับ Creator</a>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setAuthModal('login')}
                className="px-5 py-2 rounded-full font-medium transition-all hover:text-purple-400"
              >
                เข้าสู่ระบบ
              </button>
              <button
                onClick={() => setAuthModal('signup')}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black"></div>

        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                สนับสนุน Creator <br />
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  ที่คุณชื่นชอบ
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                แพลตฟอร์มรับเงินสนับสนุนสำหรับ Creator ทุกประเภท <br />
                สตรีมเมอร์, YouTuber, นักเขียน, ศิลปิน และอื่นๆ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => setAuthModal('signup')}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-xl shadow-purple-500/50"
                >
                  เริ่มต้นเป็น Creator
                </button>
                <a
                  href="#creators"
                  className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 border-2 border-gray-700 text-center"
                >
                  ค้นหา Creator
                </a>
                <a
                  href="#how-to-use"
                  className="bg-gray-800/70 hover:bg-gray-700 px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 border-2 border-gray-700/70 text-center"
                >
                  เรียนรู้วิธีใช้งาน
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden md:block">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🎨</div>
                    <div className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      สร้างรายได้จากผลงานของคุณ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section id="creators" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Creator ยอดนิยม</h2>
            <p className="text-gray-400 text-lg">ค้นพบและสนับสนุน Creator ที่คุณชอบ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Creator 1 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🎮</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">GamerPro</h3>
                    <p className="text-gray-400 text-sm">@gamerpro</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  สตรีมเมอร์เกมออนไลน์ ถ่ายทอดสดทุกวัน
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-purple-400 font-bold">1.2K</span>
                    <span className="text-gray-400"> ผู้สนับสนุน</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 rounded-full font-medium transition-all">
                  สนับสนุน
                </button>
              </div>
            </div>

            {/* Creator 2 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500 transition-all transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-red-600 to-orange-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🎵</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-2xl">
                    🎵
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">MusicMaster</h3>
                    <p className="text-gray-400 text-sm">@musicmaster</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  นักแต่งเพลงและโปรดิวเซอร์มืออาชีพ
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-red-400 font-bold">856</span>
                    <span className="text-gray-400"> ผู้สนับสนุน</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 py-3 rounded-full font-medium transition-all">
                  สนับสนุน
                </button>
              </div>
            </div>

            {/* Creator 3 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-green-600 to-emerald-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">✍️</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-2xl">
                    ✍️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">WriterLife</h3>
                    <p className="text-gray-400 text-sm">@writerlife</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  นักเขียนนิยายและบทความ อัพเดททุกสัปดาห์
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-green-400 font-bold">642</span>
                    <span className="text-gray-400"> ผู้สนับสนุน</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 py-3 rounded-full font-medium transition-all">
                  สนับสนุน
                </button>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full font-medium text-lg transition-all border-2 border-gray-700 hover:border-purple-500">
              ดู Creator ทั้งหมด
            </button>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">วิธีเริ่มต้นเป็น Creator</h2>
            <p className="text-gray-400 text-lg">เริ่มรับเงินสนับสนุนได้ง่ายๆ ใน 4 ขั้นตอน</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all shadow-lg shadow-purple-500/50">
                <span className="text-4xl">📝</span>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl h-full">
                <div className="text-purple-500 font-bold mb-2">ขั้นตอนที่ 1</div>
                <h3 className="text-xl font-semibold mb-2">สมัครสมาชิก</h3>
                <p className="text-gray-400">สร้างบัญชีและตั้งค่าโปรไฟล์ของคุณ</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all shadow-lg shadow-pink-500/50">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl h-full">
                <div className="text-pink-500 font-bold mb-2">ขั้นตอนที่ 2</div>
                <h3 className="text-xl font-semibold mb-2">ปรับแต่งหน้าเพจ</h3>
                <p className="text-gray-400">กำหนดราคา tier และรางวัลพิเศษ</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all shadow-lg shadow-green-500/50">
                <span className="text-4xl">🔗</span>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl h-full">
                <div className="text-green-500 font-bold mb-2">ขั้นตอนที่ 3</div>
                <h3 className="text-xl font-semibold mb-2">แชร์ลิงก์</h3>
                <p className="text-gray-400">แชร์เพจของคุณให้แฟนๆ รู้จัก</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all shadow-lg shadow-blue-500/50">
                <span className="text-4xl">💰</span>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl h-full">
                <div className="text-blue-500 font-bold mb-2">ขั้นตอนที่ 4</div>
                <h3 className="text-xl font-semibold mb-2">รับเงินสนับสนุน</h3>
                <p className="text-gray-400">ถอนเงินได้ทันทีเมื่อถึงยอดขั้นต่ำ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="plans" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">แพลนสำหรับ Creator</h2>
            <p className="text-gray-400 text-lg">เลือกแพลนที่เหมาะกับคุณ รับเงินได้มากขึ้น</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gradient-to-br from-purple-900/50 to-gray-800 p-8 rounded-2xl border-2 border-purple-500/50 hover:border-purple-500 transition-all transform hover:scale-105 shadow-xl">
              <div className="text-center">
                <div className="text-purple-500 text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-2">ฟรี<span className="text-lg text-gray-400"> ตลอดไป</span></div>
                <p className="text-gray-400 mb-6">เหมาะสำหรับ Creator มือใหม่</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  รับเงินสนับสนุนได้ไม่จำกัด
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ค่าธรรมเนียม 5%
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  แดชบอร์ดพื้นฐาน
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  แชร์ลิงก์สาธารณะ
                </li>
                <li className="flex items-center">
                  <span className="text-gray-500 mr-2">✗</span>
                  ไม่มีชื่อโดเมนส่วนตัว
                </li>
              </ul>
              <button
                onClick={() => setAuthModal('signup')}
                className="w-full bg-purple-500/20 hover:bg-purple-500 text-purple-300 hover:text-white py-3 rounded-full font-medium transition-all border border-purple-500/50"
              >
                เริ่มต้นฟรี
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-pink-900/50 to-gray-800 p-8 rounded-2xl border-2 border-pink-500 transition-all transform scale-105 shadow-2xl shadow-pink-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1 rounded-full text-sm font-bold">
                ยอดนิยม
              </div>
              <div className="text-center">
                <div className="text-pink-500 text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">Creator Pro</h3>
                <div className="text-4xl font-bold mb-2">฿199<span className="text-lg text-gray-400">/เดือน</span></div>
                <p className="text-gray-400 mb-6">สำหรับ Creator ที่จริงจัง</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ทุกอย่างในแพลน Starter
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ค่าธรรมเนียมเพียง 3%
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  แดชบอร์ดขั้นสูง + Analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ชื่อโดเมนส่วนตัว
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ระบบ Membership Tiers
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ลบโลโก้ DonateNow
                </li>
              </ul>
              <button
                onClick={() => setAuthModal('signup')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 py-3 rounded-full font-medium transition-all shadow-lg"
              >
                เริ่มใช้งาน Pro
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-gradient-to-br from-red-900/50 to-gray-800 p-8 rounded-2xl border-2 border-red-500/50 hover:border-red-500 transition-all transform hover:scale-105 shadow-xl">
              <div className="text-center">
                <div className="text-red-500 text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <div className="text-4xl font-bold mb-2">฿499<span className="text-lg text-gray-400">/เดือน</span></div>
                <p className="text-gray-400 mb-6">สำหรับทีมและองค์กร</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ทุกอย่างในแพลน Pro
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ค่าธรรมเนียมเพียง 2%
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  API Access
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority Support 24/7
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Multi-user Management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom Integrations
                </li>
              </ul>
              <button
                onClick={() => setAuthModal('signup')}
                className="w-full bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white py-3 rounded-full font-medium transition-all border border-red-500/50"
              >
                ติดต่อฝ่ายขาย
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">ติดต่อเรา</h2>
            <p className="text-gray-400 text-lg">มีคำถาม? ส่งข้อความหาเราได้เลย</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">ชื่อ</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                  placeholder="กรอกชื่อของคุณ"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">อีเมล</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">ข้อความ</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                  placeholder="เขียนข้อความของคุณที่นี่..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-xl shadow-purple-500/50"
              >
                ส่งข้อความ
              </button>
            </form>

            {/* Social Icons */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-center text-gray-400 mb-4">หรือติดต่อผ่าน</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <span className="text-xl">💬</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <span className="text-xl">✉️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      {authModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-md w-full p-8 relative border border-gray-700">
            {/* Close Button */}
            <button
              onClick={() => setAuthModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">
                {authModal === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
              </h2>
              <p className="text-gray-400">
                {authModal === 'login'
                  ? 'ยินดีต้อนรับกลับมา'
                  : 'เริ่มต้นรับเงินสนับสนุนวันนี้'}
              </p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authModal === 'signup' && (
                <>
                  <div>
                    <label htmlFor="auth-name" className="block text-sm font-medium mb-2">
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      type="text"
                      id="auth-name"
                      value={authForm.name}
                      onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                      placeholder="กรอกชื่อ-นามสกุล"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="auth-username" className="block text-sm font-medium mb-2">
                      ชื่อผู้ใช้ (Username)
                    </label>
                    <input
                      type="text"
                      id="auth-username"
                      value={authForm.username}
                      onChange={(e) => setAuthForm({ ...authForm, username: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                      placeholder="@username"
                      required
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="auth-email" className="block text-sm font-medium mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  id="auth-email"
                  value={authForm.email}
                  onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="auth-password" className="block text-sm font-medium mb-2">
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  id="auth-password"
                  value={authForm.password}
                  onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              {authModal === 'login' && (
                <div className="text-right">
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                    ลืมรหัสผ่าน?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 py-3 rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-xl shadow-purple-500/50"
              >
                {authModal === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">หรือ</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 py-3 rounded-lg transition-all border border-gray-700">
                  <span>🔵</span>
                  <span>Facebook</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 py-3 rounded-lg transition-all border border-gray-700">
                  <span>🔴</span>
                  <span>Google</span>
                </button>
              </div>
            </div>

            {/* Toggle Auth Mode */}
            <div className="mt-6 text-center text-sm text-gray-400">
              {authModal === 'login' ? (
                <>
                  ยังไม่มีบัญชี?{' '}
                  <button
                    onClick={() => setAuthModal('signup')}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    สมัครสมาชิก
                  </button>
                </>
              ) : (
                <>
                  มีบัญชีอยู่แล้ว?{' '}
                  <button
                    onClick={() => setAuthModal('login')}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    เข้าสู่ระบบ
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
                DonateNow
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4 md:mb-0">
              <a href="#" className="hover:text-purple-500 transition-colors">นโยบายความเป็นส่วนตัว</a>
              <span>|</span>
              <a href="#" className="hover:text-purple-500 transition-colors">เงื่อนไขการใช้งาน</a>
              <span>|</span>
              <a href="#" className="hover:text-purple-500 transition-colors">คำถามที่พบบ่อย</a>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-gray-500">
            © 2025 DonateNow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
