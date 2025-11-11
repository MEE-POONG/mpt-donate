'use client';

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                DonateNow
              </h1>
            </Link>

            {/* Back to Home */}
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              กลับหน้าแรก
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              เงื่อนไขการใช้งาน
            </h1>
            <p className="text-gray-400 text-lg">Terms of Service</p>
            <p className="text-gray-500 mt-2">ปรับปรุงล่าสุด: 11 พฤศจิกายน 2025</p>
          </div>

          {/* Content Container */}
          <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700 space-y-8">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">1. การยอมรับเงื่อนไข</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  ยินดีต้อนรับสู่ DonateNow (&quot;เรา&quot;, &quot;แพลตฟอร์ม&quot;, &quot;บริการ&quot;) เงื่อนไขการใช้งานฉบับนี้เป็นข้อตกลงทางกฎหมายระหว่างคุณ (&quot;ผู้ใช้งาน&quot;, &quot;คุณ&quot;) และแพลตฟอร์มของเรา
                </p>
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                  <p className="text-yellow-200 font-semibold mb-2">สำคัญ:</p>
                  <p className="text-gray-300 text-sm">
                    การใช้บริการของเราถือว่าคุณได้อ่าน เข้าใจ และยอมรับเงื่อนไขทั้งหมดในเอกสารนี้ หากคุณไม่เห็นด้วยกับเงื่อนไขใดๆ โปรดหยุดใช้บริการของเราทันที
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">2. คำจำกัดความ</h2>
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="font-semibold text-pink-400 mb-2">แพลตฟอร์ม / บริการ</h3>
                  <p className="text-gray-300 text-sm">
                    หมายถึง DonateNow แพลตฟอร์มรับบริจาคสำหรับครีเอเตอร์ รวมถึงเว็บไซต์ แอปพลิเคชัน API และบริการที่เกี่ยวข้องทั้งหมด
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="font-semibold text-pink-400 mb-2">ครีเอเตอร์ (Creator)</h3>
                  <p className="text-gray-300 text-sm">
                    หมายถึง ผู้ใช้งานที่สร้างบัญชีเพื่อรับบริจาคจากผู้สนับสนุน เช่น สตรีมเมอร์ YouTuber นักเขียน ศิลปิน หรือผู้สร้างสรรค์คอนเทนต์
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="font-semibold text-pink-400 mb-2">ผู้บริจาค (Donor)</h3>
                  <p className="text-gray-300 text-sm">
                    หมายถึง ผู้ใช้งานที่ให้การสนับสนุนทางการเงินแก่ครีเอเตอร์ผ่านแพลตฟอร์มของเรา
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="font-semibold text-pink-400 mb-2">บัญชีผู้ใช้ (Account)</h3>
                  <p className="text-gray-300 text-sm">
                    หมายถึง บัญชีที่คุณสร้างขึ้นเพื่อใช้งานบริการของเรา ซึ่งมีชื่อผู้ใช้ รหัสผ่าน และข้อมูลส่วนบุคคลที่เกี่ยวข้อง
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="font-semibold text-pink-400 mb-2">เนื้อหา (Content)</h3>
                  <p className="text-gray-300 text-sm">
                    หมายถึง ข้อความ รูปภาพ วิดีโอ ลิงก์ หรือข้อมูลใดๆ ที่ผู้ใช้งานอัพโหลดหรือแสดงบนแพลตฟอร์ม
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">3. การสมัครสมาชิกและบัญชีผู้ใช้</h2>
              <div className="text-gray-300 space-y-4">

                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">3.1 คุณสมบัติของผู้ใช้งาน</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>คุณต้องมีอายุอย่างน้อย 18 ปีบริบูรณ์ หรือได้รับความยินยอมจากผู้ปกครอง</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>คุณต้องให้ข้อมูลที่ถูกต้องและเป็นจริงในการสมัครสมาชิก</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>คุณต้องมีความสามารถตามกฎหมายในการทำนิติกรรมและผูกพันตามสัญญา</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>คุณไม่เคยถูกระงับการใช้งานบริการของเราก่อนหน้านี้</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">3.2 ความรับผิดชอบของบัญชี</h3>
                  <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>คุณมีหน้าที่รักษาความปลอดภัยของชื่อผู้ใช้และรหัสผ่านของคุณ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>คุณต้องรับผิดชอบต่อกิจกรรมทั้งหมดที่เกิดขึ้นภายใต้บัญชีของคุณ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>แจ้งเราทันทีหากพบการใช้งานบัญชีโดยไม่ได้รับอนุญาต</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>ห้ามแบ่งปัน ขาย หรือโอนบัญชีของคุณให้ผู้อื่น</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">3.3 การระงับและยกเลิกบัญชี</h3>
                  <p className="text-sm mb-2">เราขอสงวนสิทธิ์ในการระงับหรือยกเลิกบัญชีของคุณในกรณีดังต่อไปนี้:</p>
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>ฝ่าฝืนเงื่อนไขการใช้งานนี้</li>
                      <li>ให้ข้อมูลเท็จ หรือมีการฉอโกง</li>
                      <li>ใช้บริการในทางที่ผิดกฎหมายหรือไม่เหมาะสม</li>
                      <li>ไม่ชำระค่าบริการตามกำหนด</li>
                      <li>ไม่มีการใช้งานบัญชีเป็นเวลานาน</li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">4. การใช้งานบริการ</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">4.1 สิทธิ์การใช้งาน</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    เรามอบสิทธิ์ที่จำกัด ไม่เฉพาะตัว ไม่สามารถโอนได้ และสามารถเพิกถอนได้ ในการเข้าถึงและใช้งานบริการของเราสำหรับวัตถุประสงค์ส่วนตัวหรือทางธุรกิจที่ชอบด้วยกฎหมาย
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">4.2 พฤติกรรมที่ห้าม</h3>
                  <p className="text-gray-300 text-sm mb-3">คุณตกลงที่จะไม่กระทำการดังต่อไปนี้:</p>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-3">
                      <h4 className="font-semibold text-red-300 text-sm mb-2">การใช้งานที่ผิดกฎหมาย</h4>
                      <ul className="space-y-1 text-xs text-gray-300 list-disc list-inside">
                        <li>ล่วงละเมิดลิขสิทธิ์</li>
                        <li>เผยแพร่เนื้อหาลามกอนาจาร</li>
                        <li>หมิ่นประมาทผู้อื่น</li>
                        <li>ฟอกเงินหรือฉอโกง</li>
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-3">
                      <h4 className="font-semibold text-red-300 text-sm mb-2">การโจมตีระบบ</h4>
                      <ul className="space-y-1 text-xs text-gray-300 list-disc list-inside">
                        <li>แฮ็กหรือเจาะระบบ</li>
                        <li>ส่งไวรัสหรือมัลแวร์</li>
                        <li>โจมตีแบบ DDoS</li>
                        <li>ใช้บอทหรือระบบอัตโนมัติ</li>
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-3">
                      <h4 className="font-semibold text-red-300 text-sm mb-2">การใช้ในทางที่ผิด</h4>
                      <ul className="space-y-1 text-xs text-gray-300 list-disc list-inside">
                        <li>สร้างบัญชีปลอมหลายบัญชี</li>
                        <li>ปลอมแปลงตัวตนผู้อื่น</li>
                        <li>ส่งสแปมหรือข้อความรบกวน</li>
                        <li>เก็บข้อมูลผู้ใช้อื่นโดยไม่ได้รับอนุญาต</li>
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-3">
                      <h4 className="font-semibold text-red-300 text-sm mb-2">เนื้อหาที่ห้าม</h4>
                      <ul className="space-y-1 text-xs text-gray-300 list-disc list-inside">
                        <li>สื่อลามกอนาจาร</li>
                        <li>ความรุนแรงสุดโต่ง</li>
                        <li>แสดงความเกลียดชัง</li>
                        <li>ข้อมูลเท็จที่เป็นอันตราย</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">5. การบริจาคและการชำระเงิน</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">5.1 สำหรับผู้บริจาค</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-200 text-sm">การบริจาคเป็นการสมัครใจ</p>
                        <p className="text-gray-400 text-xs mt-1">การบริจาคเป็นการให้ทุนสนับสนุนโดยสมัครใจ ไม่ได้เป็นการซื้อสินค้าหรือบริการ</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-200 text-sm">ไม่สามารถขอคืนเงินได้</p>
                        <p className="text-gray-400 text-xs mt-1">การบริจาคที่เสร็จสมบูรณ์แล้วไม่สามารถขอคืนเงินได้ เว้นแต่กรณีมีข้อผิดพลาดทางเทคนิค</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-200 text-sm">วิธีการชำระเงิน</p>
                        <p className="text-gray-400 text-xs mt-1">เรายอมรับ PromptPay, Mobile Banking, TrueMoney, ShopeePay และ LINE Pay</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-200 text-sm">ความรับผิดชอบ</p>
                        <p className="text-gray-400 text-xs mt-1">คุณรับผิดชอบในการตรวจสอบความถูกต้องของข้อมูลก่อนยืนยันการบริจาค</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">5.2 สำหรับครีเอเตอร์</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 space-y-3">
                    <div>
                      <h4 className="font-semibold text-purple-300 text-sm mb-2">ค่าธรรมเนียม (Commission)</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs bg-gray-800/50 rounded p-2">
                          <span className="text-gray-400">แผน Free:</span>
                          <span className="text-red-400 font-semibold">5% ต่อธุรกรรม</span>
                        </div>
                        <div className="flex justify-between items-center text-xs bg-gray-800/50 rounded p-2">
                          <span className="text-gray-400">แผน Creator Pro (฿199/เดือน):</span>
                          <span className="text-yellow-400 font-semibold">3% ต่อธุรกรรม</span>
                        </div>
                        <div className="flex justify-between items-center text-xs bg-gray-800/50 rounded p-2">
                          <span className="text-gray-400">แผน Business (฿499/เดือน):</span>
                          <span className="text-green-400 font-semibold">2% ต่อธุรกรรม</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-300 text-sm mb-2">การถอนเงิน</h4>
                      <ul className="space-y-1 text-xs text-gray-300 list-disc list-inside">
                        <li>สามารถถอนเงินได้เมื่อยอดคงเหลือขั้นต่ำ 100 บาท</li>
                        <li>ระยะเวลาการโอนเงิน 3-7 วันทำการ</li>
                        <li>ต้องยืนยันตัวตนและข้อมูลบัญชีธนาคารก่อนถอนเงิน</li>
                        <li>เราขอสงวนสิทธิ์ในการตรวจสอบธุรกรรมที่ผิดปกติ</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-300 text-sm mb-2">ภาษี</h4>
                      <p className="text-xs text-gray-400">
                        ครีเอเตอร์มีหน้าที่รับผิดชอบในการชำระภาษีตามกฎหมาย เราจะออกหลักฐานการจ่ายเงินตามที่กฎหมายกำหนด
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">6. เนื้อหาและทรัพย์สินทางปัญญา</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">6.1 เนื้อหาของคุณ</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 space-y-2 text-sm text-gray-300">
                    <p>คุณยังคงเป็นเจ้าของลิขสิทธิ์ในเนื้อหาที่คุณอัพโหลด อย่างไรก็ตาม:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>คุณให้สิทธิ์เราในการแสดง จัดเก็บ และเผยแพร่เนื้อหาของคุณบนแพลตฟอร์ม</li>
                      <li>คุณรับรองว่าคุณมีสิทธิ์ในเนื้อหาที่อัพโหลดและไม่ละเมิดลิขสิทธิ์ผู้อื่น</li>
                      <li>คุณรับผิดชอบต่อเนื้อหาของคุณเอง</li>
                      <li>เราสามารถลบเนื้อหาที่ฝ่าฝืนเงื่อนไขได้โดยไม่ต้องแจ้งล่วงหน้า</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">6.2 ทรัพย์สินของเรา</h3>
                  <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                    <p className="text-sm text-gray-300 mb-2">
                      บริการ โลโก้ เครื่องหมายการค้า และส่วนต่างๆ ของแพลตฟอร์มเป็นทรัพย์สินของเรา คุณไม่สามารถ:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-xs text-gray-400">
                      <li>คัดลอก แก้ไข หรือทำซ้ำส่วนใดส่วนหนึ่งของบริการ</li>
                      <li>ใช้โลโก้หรือเครื่องหมายการค้าของเราโดยไม่ได้รับอนุญาต</li>
                      <li>ทำวิศวกรรมย้อนกลับ (Reverse engineer) ระบบของเรา</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">7. การจำกัดความรับผิดชอบ</h2>

              <div className="space-y-4">
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-200 mb-2">ข้อจำกัดความรับผิดสำคัญ</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    บริการนี้ให้บริการตามสภาพ (&quot;AS IS&quot;) เราไม่รับประกันว่า:
                  </p>
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span>บริการจะไม่มีข้อผิดพลาดหรือปราศจากไวรัส</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span>บริการจะพร้อมใช้งานตลอดเวลา (อาจมีการหยุดชะงักเพื่อบำรุงรักษา)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span>ผลลัพธ์ที่ได้จะตรงตามความคาดหวัง</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span>ข้อมูลบนแพลตฟอร์มจะถูกต้องแม่นยำ หรือเชื่อถือได้</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                  <h3 className="font-semibold text-red-200 mb-2 text-sm">ข้อจำกัดความเสียหาย</h3>
                  <p className="text-xs text-gray-300">
                    เราจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้หรือไม่สามารถใช้บริการ รวมถึง:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-xs text-gray-400 mt-2">
                    <li>การสูญเสียข้อมูลหรือกำไร</li>
                    <li>การหยุดชะงักของธุรกิจ</li>
                    <li>ความเสียหายทางอ้อม โดยบังเอิญ หรือเป็นผลสืบเนื่อง</li>
                    <li>การกระทำของผู้ใช้รายอื่น</li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-3 italic">
                    ความรับผิดสูงสุดของเราจำกัดอยู่ที่จำนวนเงินที่คุณจ่ายให้เราในช่วง 3 เดือนที่ผ่านมา
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">8. การชดเชยความเสียหาย</h2>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <p className="text-sm text-gray-300">
                  คุณตกลงที่จะชดเชยและปกป้องเรา พนักงาน และพันธมิตรของเราจากค่าเสียหาย ค่าใช้จ่าย และค่าทนายความที่เกิดจากการที่คุณ:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-400 mt-3">
                  <li>ฝ่าฝืนเงื่อนไขการใช้งานนี้</li>
                  <li>ละเมิดสิทธิ์ของบุคคลที่สาม</li>
                  <li>ใช้บริการในทางที่ผิดกฎหมาย</li>
                  <li>อัพโหลดเนื้อหาที่ละเมิดลิขสิทธิ์หรือผิดกฎหมาย</li>
                </ul>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">9. การเปลี่ยนแปลงเงื่อนไข</h2>
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-300 mb-2">
                  เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขการใช้งานนี้เมื่อใดก็ได้ เมื่อมีการเปลี่ยนแปลง:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>เราจะแจ้งให้คุณทราบผ่านอีเมลหรือประกาศบนเว็บไซต์</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>เงื่อนไขใหม่จะมีผลบังคับใช้ทันทีหรือตามที่ระบุ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>การใช้บริการต่อไปถือว่าคุณยอมรับเงื่อนไขใหม่</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>หากไม่เห็นด้วย คุณสามารถยกเลิกบัญชีได้</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">10. การยกเลิกบริการ</h2>
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="font-semibold text-pink-400 mb-2 text-sm">คุณสามารถยกเลิกบัญชีได้ตลอดเวลา</h3>
                  <p className="text-xs text-gray-400">
                    หากต้องการยกเลิก กรุณาติดต่อฝ่ายสนับสนุน ข้อมูลของคุณจะถูกลบตามนโยบายความเป็นส่วนตัวของเรา
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="font-semibold text-pink-400 mb-2 text-sm">เราสามารถยกเลิกบริการได้</h3>
                  <p className="text-xs text-gray-400 mb-2">
                    เราขอสงวนสิทธิ์ในการหยุดให้บริการหรือปิดแพลตฟอร์มได้ตลอดเวลา โดยจะแจ้งให้ทราบล่วงหน้าอย่างน้อย 30 วัน
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    ในกรณีปิดแพลตฟอร์ม คุณจะสามารถถอนยอดเงินคงเหลือได้ภายในระยะเวลาที่กำหนด
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">11. กฎหมายที่ใช้บังคับและการระงับข้อพิพาท</h2>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 space-y-3">
                <div>
                  <h3 className="font-semibold text-purple-300 text-sm mb-2">กฎหมายที่ใช้บังคับ</h3>
                  <p className="text-xs text-gray-300">
                    เงื่อนไขนี้อยู่ภายใต้บังคับของกฎหมายไทย รวมถึง:
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-400 ml-4 mt-1">
                    <li>พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)</li>
                    <li>พระราชบัญญัติว่าด้วยธุรกรรมทางอิเล็กทรอนิกส์</li>
                    <li>ประมวลกฎหมายแพ่งและพาณิชย์</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-300 text-sm mb-2">การระงับข้อพิพาท</h3>
                  <p className="text-xs text-gray-300">
                    หากเกิดข้อพิพาท เราแนะนำให้ติดต่อเราก่อนเพื่อแก้ไขปัญหา หากไม่สามารถตกลงกันได้ ให้นำข้อพิพาทไปยังศาลที่มีเขตอำนาจในประเทศไทย
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">12. บทบัญญัติทั่วไป</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                  <h4 className="font-semibold text-pink-400 text-xs mb-1">ความสมบูรณ์ของข้อตกลง</h4>
                  <p className="text-xs text-gray-400">เงื่อนไขนี้เป็นข้อตกลงที่สมบูรณ์ระหว่างคุณและเรา</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                  <h4 className="font-semibold text-pink-400 text-xs mb-1">การแยกส่วน</h4>
                  <p className="text-xs text-gray-400">หากข้อใดไม่บังคับใช้ได้ ข้ออื่นยังคงมีผลบังคับใช้</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                  <h4 className="font-semibold text-pink-400 text-xs mb-1">การสละสิทธิ์</h4>
                  <p className="text-xs text-gray-400">การไม่บังคับใช้สิทธิ์ใดไม่ถือว่าเป็นการสละสิทธิ์</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                  <h4 className="font-semibold text-pink-400 text-xs mb-1">การโอนสิทธิ์</h4>
                  <p className="text-xs text-gray-400">คุณไม่สามารถโอนสิทธิ์ตามเงื่อนไขนี้ให้ผู้อื่น</p>
                </div>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">13. ติดต่อเรา</h2>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-700/50">
                <p className="text-gray-300 mb-4 text-sm">
                  หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับเงื่อนไขการใช้งานนี้ โปรดติดต่อเรา:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400">อีเมลทั่วไป</p>
                      <p className="text-purple-300 font-medium text-sm">support@donatenow.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400">ฝ่ายกฎหมาย</p>
                      <p className="text-purple-300 font-medium text-sm">legal@donatenow.com</p>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded p-3 mt-4">
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold text-gray-300">DonateNow Platform</span><br />
                      เวลาทำการ: จันทร์-ศุกร์ 9:00-18:00 น. (GMT+7)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <div className="border-t border-gray-700 pt-6">
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-semibold text-green-200">การรับทราบ:</span>
                </p>
                <p className="text-xs text-gray-400">
                  ด้วยการใช้บริการของเรา คุณรับทราบว่าคุณได้อ่านและเข้าใจเงื่อนไขการใช้งานฉบับนี้ และตกลงที่จะปฏิบัติตามข้อกำหนดเหล่านี้
                </p>
              </div>

              <p className="text-center text-gray-400 text-sm mt-6">
                ขอบคุณที่เลือกใช้บริการ DonateNow
              </p>
            </div>

          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              กลับหน้าแรก
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
                DonateNow
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-purple-500 transition-colors">นโยบายความเป็นส่วนตัว</Link>
              <span>|</span>
              <Link href="/terms-of-service" className="hover:text-purple-500 transition-colors">เงื่อนไขการใช้งาน</Link>
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
