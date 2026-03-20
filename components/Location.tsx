
import React from 'react';
import Reveal from './Reveal';

const Location: React.FC = () => {
  const iframeSrc = "https://maps.google.com/maps?q=20.619881, 105.873079&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="w-full bg-white relative flex flex-col items-center justify-center py-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-2 items-center px-2">
        
        {/* Left Image */}
        <Reveal animation="slide-left" className="w-full h-[300px] relative rounded-sm overflow-hidden">
          <img 
            src="/img/LEE09719.webp" 
            alt="Couple" 
            className="w-full h-full object-cover" 
          />
        </Reveal>
        
        {/* Right Content */}
        <Reveal animation="slide-right" className="flex flex-col h-full items-center text-center justify-center py-2">
          <img 
            src="https://assets.cinelove.me/templates/assets/428a253a-0bb7-412b-8861-ec12c5f06582/9c01aa31-3bae-48ba-aa73-64b67b69668a.png" 
            alt="Address" 
            className="w-24 mb-2 object-contain shrink-0" 
          />
          <h2 className="font-serif text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide shrink-0">
            Tư Gia Nhà Gái
          </h2>
          <p className="text-gray-600 mb-3 font-sans text-xs shrink-0">
            Phường Lê Hổ - Tỉnh Ninh Bình
          </p>
          
          <div className="w-full max-w-[200px] border border-[#8B1A1A] p-0.5 bg-white h-[120px] relative">
            <iframe 
              title="Wedding Location"
              width="100%" 
              height="100%" 
              id="gmap_canvas" 
              src={iframeSrc}
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              className="absolute inset-0 w-full h-full p-0.5"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Location;
