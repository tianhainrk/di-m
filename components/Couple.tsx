
import React from 'react';
import Reveal from './Reveal';

const Couple: React.FC = () => {
  return (
    <section id="couple" className="min-h-screen w-full bg-white flex flex-col relative overflow-hidden py-12">
      <div className="w-full h-full flex flex-col p-4">
        
        <Reveal animation="fade-up" className="text-center mb-8 flex-shrink-0">
          <h2 className="text-wedding-gold font-serif uppercase tracking-widest text-[10px] mb-1">The Happy Couple</h2>
          <h1 className="font-serif text-3xl text-gray-800">Cô Dâu & Chú Rể</h1>
        </Reveal>

        <div className="flex-1 flex flex-col items-center justify-center gap-8 min-h-0">
          
          {/* Groom (Nam) */}
          <Reveal animation="slide-left" delay={200} className="flex flex-row items-center gap-4 w-full h-full justify-center">
             <div className="text-right flex-1">
                <img src="https://assets.cinelove.me/templates/assets/428a253a-0bb7-412b-8861-ec12c5f06582/4d0b61d0-f9f4-4464-844b-c0f08ee19594.png" alt="Chú Rể" className="h-4 object-contain mb-1 ml-auto" />
                <h2 className="font-dancing-script text-4xl text-gray-800 leading-none mb-1 font-semibold">Tú Nam</h2>
                <div className="font-serif text-gray-600 text-[10px] leading-tight space-y-0.5">
                    <p>Bố: NGUYỄN NHƯ KHƯƠNG</p>
                    <p>Mẹ: NGUYỄN THỊ HỢP</p>
                </div>
             </div> 
             
             <div className="relative w-[45%] aspect-[2/3] overflow-hidden shadow-lg rounded-sm group flex-shrink-0">
               <img 
                 src="/img/LEE00364.webp" 
                 alt="Nguyễn Ngọc" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 border-[1px] border-white/20 m-2 pointer-events-none"></div>
             </div>
          </Reveal>

          {/* Bride (An) */}
          <Reveal animation="slide-right" delay={400} className="flex flex-row-reverse items-center gap-4 w-full h-full justify-center">
             <div className="text-left flex-1">
                <img src="https://assets.cinelove.me/templates/assets/428a253a-0bb7-412b-8861-ec12c5f06582/c05f1b73-52d7-4db5-b1b7-ebe97abdb927.png" alt="Cô Dâu" className="h-4 object-contain mb-1 mr-auto" />
                <h2 className="font-dancing-script text-4xl text-gray-800 leading-none mb-1 font-semibold">Thúy An</h2>
                <div className="font-serif text-gray-600 text-[10px] leading-tight space-y-0.5">
                    <p>Bố: DƯƠNG VĂN HẢI</p>
                    <p>Mẹ: DƯƠNG THỊ MƯỢT</p>
                </div>
             </div>

             <div className="relative w-[45%] aspect-[2/3] overflow-hidden shadow-lg rounded-sm group flex-shrink-0">
               <img 
                 src="/img/LEE00334.webp" 
                 alt="Dương Diễm" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 border-[1px] border-white/20 m-2 pointer-events-none"></div>
             </div>
          </Reveal>
        </div>

        <Reveal animation="zoom" delay={600} className="mt-8 text-center w-full flex-shrink-0">
          <p className="font-serif italic text-sm text-gray-600 leading-tight px-4">
            "Hạnh phúc là khi được cùng người mình yêu đi đến cuối cuộc đời."
          </p>
          <div className="w-8 h-[1px] bg-wedding-gold mx-auto mt-4"></div>
        </Reveal>
      </div>
    </section>
  );
};

export default Couple;