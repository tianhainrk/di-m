import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const DateBlock: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 flex justify-center items-center">
      <Reveal animation="fade-up" className="flex flex-col items-center w-full max-w-3xl px-4">
        <motion.h2 
          className="font-serif text-2xl text-[#8B1A1A] uppercase tracking-widest mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          Lễ Vu Quy
        </motion.h2>
        
        <div className="flex flex-col items-center text-[#8B1A1A] w-full max-w-sm">
          <span className="font-serif uppercase tracking-widest text-lg mb-2">Chủ nhật</span>
          
          <div className="flex items-center justify-center w-full mb-2">
            <div className="flex-1 border-y-[1.5px] border-black py-3 text-center">
              <span className="font-serif uppercase tracking-widest text-lg whitespace-nowrap">Tháng 3</span>
            </div>
            <div className="px-6 mx-2">
              <motion.span 
                className="font-[Arial] text-6xl font-bold leading-none inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                29
              </motion.span>
            </div>
            <div className="flex-1 border-y-[1.5px] border-black py-3 text-center">
              <span className="font-serif uppercase tracking-widest text-lg whitespace-nowrap">Năm 2026</span>
            </div>
          </div>
          
          <span className="font-serif text-3xl mt-1">09:00</span>
        </div>
        
        <p className="text-gray-700 mt-3 font-sans text-lg">
          Nhằm ngày 11 tháng 2 năm Bính Ngọ
        </p>
      </Reveal>
    </section>
  );
};

export default DateBlock;
