
import React from 'react';
import Reveal from './Reveal';

const photos = [
  "/img/LEE00171.webp",
  "/img/LEE08514.webp",
  "/img/LEE08798.webp",
  "/img/LEE09177.webp",
  "/img/LEE09459.webp",
  "/img/LEE09665.webp",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="min-h-screen w-full bg-white flex flex-col py-16">
      <div className="w-full h-full flex flex-col p-4 max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-row items-center justify-center gap-4 h-40 mb-12 shrink-0">
            <Reveal animation="zoom" className="h-full aspect-[3/4] relative p-1 bg-[#4A6FA5] shadow-lg rotate-[-3deg]">
                <div className="w-full h-full border-[2px] border-white overflow-hidden bg-gray-200">
                    <img src={photos[0]} alt="Couple Portrait" className="w-full h-full object-cover" loading="eager" />
                </div>
            </Reveal>

            <Reveal animation="fade-up" delay={200} className="flex flex-col items-start justify-center text-[#4A6FA5]">
                <h2 className="font-script text-4xl leading-none ml-2">Kỷ niệm</h2>
                <span className="font-serif italic text-xs text-gray-500 self-center my-1">của</span>
                <h2 className="font-script text-4xl leading-none ml-8">Chúng mình</h2>
            </Reveal>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 gap-3">
          {photos.map((photo, index) => (
            <Reveal 
              key={index} 
              animation={index % 2 === 0 ? "slide-left" : "slide-right"} 
              delay={100 * (index % 4)}
              className="aspect-[3/4] bg-white rounded-lg shadow-md overflow-hidden border-2 border-white p-1"
            >
              <img 
                src={photo} 
                alt={`Memory ${index + 1}`} 
                className="w-full h-full object-cover rounded-sm"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;