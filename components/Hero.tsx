
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-white p-0">
      
      {/* Iframe Canva phủ kín toàn bộ diện tích trang đầu tiên */}
      <div className="w-full h-full">
        <iframe 
          loading="lazy" 
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none', 
            padding: 0, 
            margin: 0,
            display: 'block'
          }}
          src="https://www.canva.com/design/DAG_ya6cjBc/FQRqIjTBvtpxRA9D4hiIiA/view?embed" 
          allowFullScreen={true}
          allow="fullscreen"
          title="Thiệp Cưới Dương Diễm & Ngyễn Ngọc"
        >
        </iframe>
      </div>

      {/* Chỉ dẫn cuộn tinh tế để người dùng biết có thể kéo xuống */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20 pointer-events-none z-10">
        <div className="w-px h-8 bg-black"></div>
      </div>
      
      <style>{`
        /* Đảm bảo không có khoảng trắng thừa xung quanh iframe */
        #home iframe {
          height: 100vh !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;