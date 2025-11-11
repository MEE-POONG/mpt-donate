'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
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
              นโยบายความเป็นส่วนตัว
            </h1>
            <p className="text-gray-400 text-lg">Privacy Policy</p>
            <p className="text-gray-500 mt-2">ปรับปรุงล่าสุด: 11 พฤศจิกายน 2025</p>
          </div>

          {/* Content Container */}
          <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700 space-y-8">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">1. บทนำ</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  ยินดีต้อนรับสู่ DonateNow แพลตฟอร์มรับบริจาคสำหรับครีเอเตอร์ เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของข้อมูลส่วนบุคคลของคุณ นโยบายความเป็นส่วนตัวฉบับนี้อธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้ เปิดเผย และปกป้องข้อมูลของคุณเมื่อคุณใช้บริการของเรา
                </p>
                <p>
                  การใช้บริการของเราถือว่าคุณยอมรับนโยบายความเป็นส่วนตัวนี้ หากคุณไม่เห็นด้วยกับนโยบายใดๆ โปรดหยุดใช้บริการของเราทันที
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">2. ข้อมูลที่เราเก็บรวบรวม</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">2.1 ข้อมูลที่คุณให้แก่เราโดยตรง</h3>

                  <div className="space-y-4">
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-purple-300 mb-2">สำหรับผู้ใช้งานทั่วไป (Donors):</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                        <li>ชื่อ (หากไม่เลือกบริจาคแบบไม่ระบุตัวตน)</li>
                        <li>ที่อยู่อีเมล</li>
                        <li>ข้อความที่แนบกับการบริจาค</li>
                        <li>จำนวนเงินบริจาค</li>
                        <li>วันที่และเวลาที่บริจาค</li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-purple-300 mb-2">สำหรับครีเอเตอร์ (Creators):</h4>
                      <div className="text-gray-300 space-y-2">
                        <p className="font-medium text-pink-300">ข้อมูลบัญชีผู้ใช้:</p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          <li>ชื่อผู้ใช้ (Username)</li>
                          <li>ชื่อจริงและนามสกุล</li>
                          <li>ที่อยู่อีเมล</li>
                          <li>รหัสผ่าน (เข้ารหัสและไม่สามารถอ่านได้)</li>
                          <li>วันเกิด</li>
                          <li>เพศ</li>
                        </ul>

                        <p className="font-medium text-pink-300 pt-2">ข้อมูลโปรไฟล์:</p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          <li>ชื่อแสดง (Display name)</li>
                          <li>คำอธิบายตัวเอง (Bio)</li>
                          <li>รูปโปรไฟล์/อวาตาร์</li>
                          <li>ลิงก์โซเชียลมีเดีย (Facebook, Instagram, TikTok, Twitter/X, Twitch, YouTube)</li>
                        </ul>

                        <p className="font-medium text-pink-300 pt-2">ข้อมูลที่อยู่:</p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          <li>ที่อยู่เต็ม</li>
                          <li>จังหวัด</li>
                          <li>เขต/อำเภอ</li>
                          <li>แขวง/ตำบล</li>
                          <li>รหัสไปรษณีย์</li>
                        </ul>

                        <p className="font-medium text-pink-300 pt-2">ข้อมูลการรับเงิน:</p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          <li>หมายเลขโทรศัพท์สำหรับ PromptPay</li>
                          <li>ข้อมูลบัญชีธนาคาร</li>
                          <li>ข้อมูลกระเป๋าเงินดิจิทัล (TrueMoney, ShopeePay, LINE Pay)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">2.2 ข้อมูลที่เก็บอัตโนมัติ</h3>
                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                    <p className="text-yellow-200 font-semibold mb-2">หมายเหตุสำคัญ:</p>
                    <p className="text-gray-300 mb-2">
                      ในเวอร์ชันปัจจุบัน เราไม่ได้เก็บข้อมูลการใช้งานอัตโนมัติ ไม่มีการใช้คุกกี้ (Cookies) หรือเครื่องมือติดตามพฤติกรรม (Analytics/Tracking) ใดๆ
                    </p>
                    <p className="text-gray-400 text-sm">
                      เราจะแจ้งให้ทราบล่วงหน้าและอัพเดทนโยบายนี้ก่อนเริ่มเก็บข้อมูลดังกล่าว
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">3. วิธีการใช้ข้อมูลของคุณ</h2>
              <div className="text-gray-300 space-y-4">
                <p>เราใช้ข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้:</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-purple-300 mb-2">การให้บริการ</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>จัดการบัญชีผู้ใช้</li>
                      <li>ประมวลผลการบริจาค</li>
                      <li>แสดงข้อมูลบนโปรไฟล์</li>
                      <li>จัดการการถอนเงิน</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-purple-300 mb-2">การสื่อสารกับผู้ใช้</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>ส่งอีเมลยืนยัน</li>
                      <li>แจ้งข้อมูลธุรกรรม</li>
                      <li>ตอบกลับคำถาม</li>
                      <li>แจ้งฟีเจอร์ใหม่</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-purple-300 mb-2">การปรับปรุงบริการ</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>วิเคราะห์การใช้งาน</li>
                      <li>ทดสอบฟีเจอร์ใหม่</li>
                      <li>แก้ไขปัญหาทางเทคนิค</li>
                      <li>พัฒนาฟังก์ชันใหม่</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-purple-300 mb-2">ความปลอดภัย</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>ตรวจจับการฉอโกง</li>
                      <li>ปกป้องแพลตฟอร์ม</li>
                      <li>บังคับใช้ข้อกำหนด</li>
                      <li>ปฏิบัติตามกฎหมาย</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">4. การเปิดเผยข้อมูลให้บุคคลที่สาม</h2>
              <div className="text-gray-300 space-y-4">
                <p className="font-semibold text-pink-300">
                  เราจะไม่ขาย แบ่งปัน หรือเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่บุคคลที่สาม ยกเว้นในกรณีดังต่อไปนี้:
                </p>

                <div className="space-y-3">
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-purple-300 mb-2">ผู้ให้บริการที่เชื่อถือได้</h4>
                    <p className="text-sm mb-2">เช่น ผู้ให้บริการชำระเงิน:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-900/30 px-3 py-1 rounded-full text-xs">PromptPay</span>
                      <span className="bg-purple-900/30 px-3 py-1 rounded-full text-xs">Mobile Banking</span>
                      <span className="bg-purple-900/30 px-3 py-1 rounded-full text-xs">TrueMoney</span>
                      <span className="bg-purple-900/30 px-3 py-1 rounded-full text-xs">ShopeePay</span>
                      <span className="bg-purple-900/30 px-3 py-1 rounded-full text-xs">LINE Pay</span>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-purple-300 mb-2">ข้อมูลสาธารณะ</h4>
                    <p className="text-sm">ข้อมูลที่คุณเลือกเผยแพร่จะแสดงต่อสาธารณะ เช่น ชื่อครีเอเตอร์ รูปโปรไฟล์ และลิงก์โซเชียลมีเดีย</p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-purple-300 mb-2">การปฏิบัติตามกฎหมาย</h4>
                    <p className="text-sm">เมื่อกฎหมายกำหนดให้ต้องเปิดเผย หรือได้รับคำสั่งศาล หรือจำเป็นเพื่อป้องกันการฉอโกง</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">5. การจัดเก็บและความปลอดภัยของข้อมูล</h2>
              <div className="space-y-4">
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">สถานะการจัดเก็บปัจจุบัน</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    ในเวอร์ชันปัจจุบัน (MVP): ข้อมูลที่กรอกในฟอร์มจะเก็บไว้ชั่วคราวในเบราว์เซอร์เท่านั้น ไม่มีการบันทึกข้อมูลลงฐานข้อมูลถาวร
                  </p>
                  <p className="text-gray-400 text-xs">
                    เมื่อระบบพัฒนาเสร็จสมบูรณ์ ข้อมูลจะถูกเก็บในฐานข้อมูลที่มีการเข้ารหัสและปลอดภัย
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-purple-300 mb-3">มาตรการความปลอดภัย</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">การเข้ารหัสรหัสผ่าน</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">HTTPS/SSL Encryption</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">การซ่อนข้อมูลละเอียดอ่อน</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">การตรวจสอบสิทธิ์</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">6. สิทธิของคุณ</h2>
              <div className="text-gray-300 space-y-3">
                <p>คุณมีสิทธิดังต่อไปนี้เกี่ยวกับข้อมูลส่วนบุคคลของคุณ:</p>

                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'สิทธิในการเข้าถึงข้อมูล',
                    'สิทธิในการแก้ไขข้อมูล',
                    'สิทธิในการลบข้อมูล',
                    'สิทธิในการคัดค้านการประมวลผล',
                    'สิทธิในการถอนความยินยอม',
                    'สิทธิในการโอนย้ายข้อมูล',
                  ].map((right, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                      <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{right}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <span className="font-semibold text-purple-300">วิธีการใช้สิทธิของคุณ:</span> ติดต่อเราผ่านช่องทางที่ระบุในส่วน &quot;ติดต่อเรา&quot; เราจะดำเนินการภายใน 30 วันนับจากวันที่ได้รับคำขอของคุณ
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">7. คุกกี้และเทคโนโลยีติดตาม</h2>
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">เราไม่ได้ใช้คุกกี้หรือเครื่องมือติดตามใดๆ ในขณะนี้</h3>
                    <p className="text-gray-300 text-sm">
                      แพลตฟอร์มของเรา (เวอร์ชันปัจจุบัน) ไม่มีการใช้ Cookies, Google Analytics, Facebook Pixel หรือเครื่องมือติดตามพฤติกรรมผู้ใช้
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      หากเราตัดสินใจใช้ในอนาคต เราจะแจ้งให้คุณทราบล่วงหน้าและขอความยินยอมก่อนเก็บคุกกี้ที่ไม่จำเป็น
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">8. การปฏิบัติตามกฎหมายไทย (PDPA)</h2>
              <div className="text-gray-300 space-y-3">
                <p>
                  บริการของเราปฏิบัติตาม <span className="font-semibold text-pink-300">พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)</span> ของประเทศไทย
                </p>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-purple-300 mb-2">ฐานในการประมวลผลข้อมูล:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>ความยินยอม - คุณให้ความยินยอมในการเก็บและใช้ข้อมูล</li>
                    <li>การปฏิบัติตามสัญญา - จำเป็นเพื่อให้บริการตามที่คุณร้องขอ</li>
                    <li>ประโยชน์โดยชอบด้วยกฎหมาย - จำเป็นเพื่อประโยชน์ของธุรกิจที่ชอบด้วยกฎหมาย</li>
                    <li>การปฏิบัติตามกฎหมาย - จำเป็นเพื่อปฏิบัติตามกฎหมาย</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                  <p className="text-sm">
                    <span className="font-semibold text-yellow-200">หมายเหตุ:</span> เราไม่ได้เก็บรวบรวมข้อมูลส่วนบุคคลที่มีความอ่อนไหว เช่น ข้อมูลศาสนา เชื้อชาติ หรือประวัติอาชญากรรม
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">9. ติดต่อเรา</h2>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-700/50">
                <p className="text-gray-300 mb-4">
                  หากคุณมีคำถาม ข้อสงสัย หรือต้องการใช้สิทธิของคุณเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราผ่านช่องทางดังนี้:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">อีเมล</p>
                      <p className="text-purple-300 font-medium">privacy@donatenow.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)</p>
                      <p className="text-purple-300 font-medium">dpo@donatenow.com</p>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded p-3 mt-4">
                    <p className="text-xs text-gray-400">
                      เวลาทำการ: จันทร์-ศุกร์ 9:00-18:00 น. (GMT+7)<br />
                      เราจะตอบกลับคำถามหรือคำร้องขอของคุณภายใน 30 วัน
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="border-t border-gray-700 pt-6 text-center">
              <p className="text-gray-400 text-sm mb-2">
                ขอบคุณที่ไว้วางใจและใช้บริการ DonateNow
              </p>
              <p className="text-gray-500 text-xs">
                เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของคุณเป็นอย่างยิ่ง
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
