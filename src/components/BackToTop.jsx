import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#0e0f1a]/85 backdrop-blur-lg border border-white/[0.1] text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/20 shadow-xl shadow-black/40 hover:scale-110 active:scale-95 transition-all duration-200 group cursor-pointer"
          aria-label="Back to top"
          id="back-to-top-btn"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-blue-400 group-hover:text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
