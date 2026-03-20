
import React from 'react';
import Reveal from './Reveal';

const Countdown: React.FC = () => {
  return (
    <section id="invitation" className="w-full bg-white flex flex-col overflow-hidden relative py-12">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="w-full flex flex-col relative z-10 max-w-6xl mx-auto">
        
        {/* 1. Top Images Row */}
        <Reveal animation="fade-up" className="grid grid-cols-3 gap-2 px-4 h-[30vh] shrink-0 mb-10">
           <div className="h-full overflow-hidden rounded-sm shadow-md">
               <img src="/img/LEE08514.webp" alt="Bride" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="h-full overflow-hidden rounded-sm shadow-md translate-y-4">
               <img src="/img/LEE09736.webp" alt="Couple" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="h-full overflow-hidden rounded-sm shadow-md">
               <img src="/img/LEE09459.webp" alt="Groom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
        </Reveal>

        {/* 2. Invitation Text */}
        <div className="flex flex-col items-center text-center px-4 space-y-2 mb-2">
            <Reveal animation="fade-up" delay={200}>
                <h3 className="font-sans text-gray-500 text-xs uppercase tracking-[0.2em] mb-2">TRÂN TRỌNG KÍNH MỜI</h3>
                <h2 className="font-serif text-2xl text-[#790B0B] mb-4 tracking-wider">QUÝ KHÁCH</h2>
                <p className="font-serif text-gray-600 text-sm max-w-xs mx-auto leading-relaxed">
                    Đến dự Bữa Tiệc thân mật cùng Gia Đình chúng Tôi vào lúc
                </p>
            </Reveal>
        </div>

        {/* 3. Date & Time Block */}
        <Reveal animation="zoom" delay={300} className="w-full max-w-2xl mx-auto mb-2 px-4">
            <div className="flex items-center justify-center text-gray-700 relative">
                <div className="flex-1 text-right pr-4 flex flex-col justify-center">
                    <p className="font-serif text-xl text-gray-600 tracking-widest">9h00</p>
                </div>
                <div className="w-[1px] h-16 bg-[#C5A059]"></div>
                <div className="px-6 flex flex-col items-center justify-center">
                    <span className="font-serif text-gray-500 text-xs uppercase tracking-widest mb-1">Chủ nhật</span>
                    <span className="font-serif text-6xl font-bold text-[#790B0B] leading-none mb-1">29</span>
                    <span className="font-serif text-gray-500 text-xs uppercase tracking-widest">Tháng 03</span>
                </div>
                <div className="w-[1px] h-16 bg-[#C5A059]"></div>
                <div className="flex-1 text-left pl-4 flex flex-col justify-center">
                    <p className="font-serif text-xl text-gray-600 tracking-widest">Năm 2026</p>
                </div>
            </div>
            <p className="text-center text-gray-400 text-[10px] mt-4 font-serif italic">
                (Tức ngày 11 tháng 2 năm Bính Ngọ)
            </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Countdown;