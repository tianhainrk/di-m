import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

const Events: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Thêm state để kiểm tra xem đã đến giờ G chưa
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    // Lưu ý: Tháng trong JavaScript bắt đầu từ 0. Tháng 3 sẽ là số 2.
    // Cài đặt mốc thời gian: Năm 2026, Tháng 2 (tức tháng 3), Ngày 29, 09 giờ, 00 phút, 00 giây
    const targetDate = new Date(2026, 2, 29, 9, 0, 0).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setIsTimeUp(true);
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const calendarDays = [];
  const daysInMonth = 31;
  // Ngày 1/3/2026 là Chủ Nhật, tương ứng với index 0
  const startDay = 0; 
  
  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <section id="events" className="min-h-screen w-full relative overflow-hidden flex flex-col bg-gray-900">
       <div className="absolute inset-0 z-0">
          <img 
            src="/img/LEE09177.webp" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30"></div>
       </div>

       <div className="relative z-10 flex-1 flex flex-col px-6 py-16 text-white">
          <div className="flex flex-col items-center w-full mb-12">
             <Reveal animation="fade-up" className="text-right mb-8">
               <h1 className="font-script text-5xl drop-shadow-lg text-white">Wedding</h1>
               <p className="font-serif text-wedding-gold tracking-[0.3em] uppercase text-xs mt-2">Tháng 03 . 2026</p>
             </Reveal>

             <Reveal animation="zoom" delay={200} className="w-full max-w-xs">
               <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center font-serif text-sm font-medium">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={i} className="text-gray-300 font-bold">{d}</div>
                  ))}
                  {calendarDays.map((day, idx) => {
                    if (!day) return <div key={idx}></div>;
                    const isWeddingDay = day === 29;
                    return (
                      <div key={idx} className="relative flex items-center justify-center h-8 w-8 mx-auto">
                         {isWeddingDay && (
                          <div className="absolute inset-0 transform scale-150 -translate-y-1">
                             <svg viewBox="0 0 32 32" className="w-full h-full fill-red-600 drop-shadow-md opacity-90">
                               <path d="M16,28.261c0,0-14-9.2-14-15.6s10.8-7.2,14-0.8c3.2-6.4,14-7.2,14,0.8S16,28.261,16,28.261z"/>
                             </svg>
                          </div>
                        )}
                        <span className={`relative z-10 ${isWeddingDay ? 'text-white font-bold' : 'text-gray-100'}`}>
                          {day}
                        </span>
                      </div>
                    );
                  })}
               </div>
             </Reveal>
          </div>

          <div className="mt-auto mb-12 w-full">
             <Reveal animation="slide-left" delay={300} className="flex flex-col items-center gap-4 justify-center">
                {isTimeUp ? (
                  <h3 className="font-serif text-2xl text-center text-white drop-shadow-md px-4">
                    Hôm nay là ngày vui của chúng mình!
                  </h3>
                ) : (
                  <>
                    <h3 className="font-script text-4xl mb-2 text-white drop-shadow-md">Chỉ còn....</h3>
                    <div className="flex gap-3">
                       {[
                         { label: 'ngày', value: timeLeft.days },
                         { label: 'giờ', value: timeLeft.hours },
                         { label: 'phút', value: timeLeft.minutes },
                         { label: 'giây', value: timeLeft.seconds }
                       ].map((item, idx) => (
                          <div key={idx} className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-md p-2 w-[65px] flex flex-col items-center shadow-xl">
                             <span className="text-xl font-bold font-serif leading-none mb-1">{item.value}</span>
                             <span className="text-[10px] uppercase tracking-wider text-gray-500">{item.label}</span>
                          </div>
                       ))}
                    </div>
                  </>
                )}
             </Reveal>
          </div>
       </div>

       <div className="relative z-10 bg-white/95 backdrop-blur-md px-6 py-8 text-center shrink-0 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          <Reveal animation="fade-up" delay={400}>
            <p className="font-serif text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto">
              Hữu duyên nên nghĩa vợ chồng, 
<br/>Trăm năm giữ trọn tấm lòng cùng nhau
            </p>
          </Reveal>
       </div>
    </section>
  );
};

export default Events;