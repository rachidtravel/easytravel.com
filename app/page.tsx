'use client';
import { useState } from 'react';

export default function Home() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [showPinModal, setShowPinModal] = useState(false);
  const [lang, setLang] = useState('ar');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinCode === '1986') {
      setIsAdminMode(true);
      setShowPinModal(false);
      setPinCode('');
    } else {
      alert('الرمز السري غير صحيح! ❌');
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) {
      alert('المرجو إدخال نقطة الانطلاقة والوجهة');
      return;
    }
    setBookingStatus('جاري البحث عن أقرب سائق في سلا والرباط... 🚗');
    setTimeout(() => {
      setBookingStatus('تم العثور على سائق! سيصلك في غضون 3 دقائق ✅');
    }, 2000);
  };

  if (isAdminMode) {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800 p-6 font-sans" dir="rtl">
        <header className="bg-blue-900 text-white shadow-md p-4 rounded-xl flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3 space-x-reverse">
            <span className="text-2xl">🔐</span>
            <h1 className="text-xl font-bold">Easy Travel <span className="text-green-400 text-sm">| لوحة التحكم السرية للمدير</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm bg-blue-800 px-3 py-1.5 rounded-lg">المدير: <b>رشيد الحداد</b></span>
            <button onClick={() => setIsAdminMode(false)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">خروج 🚪</button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <p className="text-xs text-gray-500 font-bold mb-1">السائقون النشطون</p>
              <h3 className="text-2xl font-bold text-blue-900">12 سائق</h3>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <p className="text-xs text-gray-500 font-bold mb-1">رحلات اليوم</p>
              <h3 className="text-2xl font-bold text-green-600">34 رحلة</h3>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <p className="text-xs text-gray-500 font-bold mb-1">إجمالي العمولات (5%)</p>
              <h3 className="text-2xl font-bold text-blue-600">170 درهم</h3>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <p className="text-xs text-gray-500 font-bold mb-1">طلبات الشحن المعلقة</p>
              <h3 className="text-2xl font-bold text-orange-500">1 طلب</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold text-blue-900 mb-4">أرصدة السائقين الحالية (Solde 5%)</h3>
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 border-b">
                    <th className="p-3">السائق</th>
                    <th className="p-3">الهاتف</th>
                    <th className="p-3">الرصيد</th>
                    <th className="p-3">الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-bold">يوسف العلوي</td>
                    <td className="p-3">0612345678</td>
                    <td className="p-3 text-green-600 font-bold">60.00 درهم</td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">نشط</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold">حمزة الفيلالي</td>
                    <td className="p-3">0698765432</td>
                    <td className="p-3 text-orange-600 font-bold">103.00 درهم (مؤقت)</td>
                    <td className="p-3"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">قيد المراجعة ⚠️</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold text-blue-900 mb-2">مراجعة الشحن الليلية وحماية التلاعب 🛡️</h3>
              <p className="text-xs text-gray-500 mb-4">العمليات التي تمت أثناء نومك:</p>
              <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm text-blue-900">السائق: حمزة الفيلالي</span>
                    <span className="bg-orange-200 text-orange-900 text-[10px] px-2 py-0.5 rounded font-bold">ليلي 🌙</span>
                  </div>
                  <p className="text-xs text-gray-600">المبلغ المدعى: <span className="font-bold text-black">100 درهم (Wafacash #WF-9921)</span></p>
                </div>
                <div className="flex gap-2 pt-2 border-t border-orange-200">
                  <button onClick={() => alert('تم تثبيت الرصيد نهائياً للسائق ✅')} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded text-xs font-bold">تثبيت نهائي ✅</button>
                  <button onClick={() => alert('تم اكتشاف تلاعب! خصم الرصيد وحظر السائق ❌')} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded text-xs font-bold">كشف تلاعب / خصم وحظر ❌</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col justify-between" dir="rtl">
      <nav className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
        <div className="flex items-center space-x-2 space-x-reverse">
          <span className="text-xl">🚕</span>
          <h1 className="font-bold text-lg text-green-400">Easy Travel</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setLang('ar')} className={`px-2.5 py-1 rounded text-xs ${lang === 'ar' ? 'bg-green-600' : 'bg-slate-700'}`}>العربية</button>
          <button onClick={() => setLang('fr')} className={`px-2.5 py-1 rounded text-xs ${lang === 'fr' ? 'bg-green-600' : 'bg-slate-700'}`}>Français</button>
        </div>
      </nav>

      <main className="max-w-md mx-auto p-6 w-full flex-1 flex flex-col justify-center">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">{lang === 'ar' ? 'رحلات آمنة في سلا والرباط' : 'Trajets sûrs à Salé & Rabat'}</h2>
          <p className="text-xs text-slate-400">{lang === 'ar' ? 'احجز سيارتك بكل سهولة وراحة' : 'Réservez votre course facilement'}</p>
        </div>

        <form onSubmit={handleBooking} className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-4 shadow-lg">
          <div>
            <label className="block text-xs text-slate-300 mb-1">📍 {lang === 'ar' ? 'مكان الانطلاق' : 'Point de départ'}</label>
            <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="مثال: كريمة، سلا" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-green-500" />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">🏁 {lang === 'ar' ? 'الوجهة' : 'Destination'}</label>
            <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="مثال: أكدال، الرباط" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-green-500" />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-slate-950 font-bold py-3 rounded-xl transition text-sm">
            {lang === 'ar' ? 'اطلب السيارة الآن 🚖' : 'Commander maintenant 🚖'}
          </button>
        </form>

        {bookingStatus && (
          <div className="mt-4 p-3 bg-slate-800 border border-green-500/50 rounded-xl text-center text-xs text-green-300 animate-pulse">
            {bookingStatus}
          </div>
        )}
      </main>

      {/* Footer مع زر سري بمساحة نُقر كبيرة وواضحة */}
      <footer className="p-4 bg-slate-800 border-t border-slate-700 flex justify-between items-center text-xs text-slate-400">
        <p>&copy; 2026 Easy Travel - Salé & Rabat</p>
        
        <button 
          onClick={() => setShowPinModal(true)} 
          className="opacity-15 hover:opacity-100 transition p-3 text-slate-400 cursor-pointer" 
          title="Admin"
        >
          <span className="text-base">🚗</span>
        </button>
      </footer>

      {showPinModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 max-w-xs w-full space-y-4">
            <h3 className="text-sm font-bold text-center text-green-400">🔐 تسجيل دخول المدير</h3>
            <form onSubmit={handleAdminLogin} className="space-y-3">
              <input 
                type="password" 
                value={pinCode} 
                onChange={(e) => setPinCode(e.target.value)} 
                placeholder="أدخل الرمز السري..." 
                className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-sm tracking-widest text-white focus:outline-none focus:border-green-500"
                autoFocus
              />
              <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-green-500 hover:bg-green-600 text-slate-950 py-2 rounded-lg text-xs font-bold">دخول</button>
                <button type="button" onClick={() => setShowPinModal(false)} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-xs">إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
