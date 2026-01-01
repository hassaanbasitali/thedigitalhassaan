"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasShownLoading = sessionStorage.getItem("hasShownLoading");
    
    if (!hasShownLoading) {
      setLoading(true);
      
      const duration = 1800;
      const interval = 16;
      const steps = duration / interval;
      const increment = 100 / steps;

      const timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment;
          if (next >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setLoading(false);
              sessionStorage.setItem("hasShownLoading", "true");
            }, 200);
            return 100;
          }
          return next;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#39FF14]/8 rounded-full blur-[100px]" 
            />
          </div>

          <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 relative z-10 w-full max-w-md sm:max-w-lg">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            >
              <motion.div 
                className="absolute -inset-1 sm:-inset-1.5 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #39FF14, transparent 120deg, transparent 240deg, #39FF14)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="absolute -inset-3 sm:-inset-4 rounded-full border border-[#39FF14]/15"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="absolute inset-0.5 sm:inset-1 rounded-full overflow-hidden bg-black border-2 border-[#39FF14]/30">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Portfolio-Main-Image-1763069686185.jpg?width=800&height=800&resize=contain"
                  alt="thedigitalhassaan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <div className="overflow-hidden flex flex-col items-center w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-white text-center whitespace-nowrap"
              >
                <span className="text-white">THEDIGITAL</span>
                <span className="text-[#39FF14]">HASSAAN</span>
              </motion.h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="h-px w-3/4 bg-gradient-to-r from-transparent via-[#39FF14]/50 to-transparent mt-3 origin-center"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-xs flex flex-col items-center"
            >
              <div className="relative w-full h-1 sm:h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#39FF14] to-[#39FF14]/80 rounded-full"
                  style={{ 
                    width: `${progress}%`,
                    boxShadow: "0 0 20px rgba(57,255,20,0.6), 0 0 40px rgba(57,255,20,0.3)"
                  }}
                  transition={{ duration: 0.05, ease: "linear" }}
                />
                
                <motion.div
                  className="absolute top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <motion.div 
                className="mt-3 sm:mt-4 flex items-baseline gap-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-[#39FF14] text-lg sm:text-xl md:text-2xl font-bold tabular-nums">
                  {Math.round(progress)}
                </span>
                <span className="text-[#39FF14]/40 text-xs sm:text-sm font-medium">%</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
