
import React from 'react';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer className="h-screen w-full bg-white flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/LEE09665.webp" 
          alt="Couple" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 mt-auto mb-16 px-6 text-center">
        <Reveal animation="fade-up" delay={300} className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-3">
            <p className="text-[#790B0B] font-serif italic text-lg tracking-wide drop-shadow-sm">
              Cảm ơn bạn đã dành tình cảm cho chúng mình!
            </p>
            <div className="w-8 h-[1px] bg-[#790B0B]/40 mx-auto"></div>
            <p className="text-[#790B0B]/80 font-serif text-xs leading-relaxed max-w-sm mx-auto drop-shadow-sm px-4">
              Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được cùng bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.
            </p>
          </div>
          <div className="pt-4">
            <h2 className="font-serif text-6xl text-[#790B0B] tracking-tighter drop-shadow-sm opacity-90 select-none">
              Thankyou!
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 origin-bottom rotate-90 z-20">
         <p className="text-[9px] text-[#790B0B]/40 font-serif tracking-[0.4em] uppercase whitespace-nowrap">
          HAPPY FOREVER 
         </p>
      </div>

      <div className="absolute inset-6 border border-[#790B0B]/10 pointer-events-none z-10"></div>
    </footer>
  );
};

export default Footer;