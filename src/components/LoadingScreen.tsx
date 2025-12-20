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
    // Check if loading screen has already been shown in this session
    const hasShownLoading = sessionStorage.getItem("hasShownLoading");
    
    // Only show loading screen if it hasn't been shown yet
    if (!hasShownLoading) {
      setLoading(true);
      
      // Simulate loading progress
      const duration = 2000; // Slightly faster for better performance feel
      const interval = 20;
      const steps = duration / interval;
      const increment = 100 / steps;

      const timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment;
          if (next >= 100) {
            clearInterval(timer);
            // Small delay at 100% for satisfaction
            setTimeout(() => {
              setLoading(false);
              sessionStorage.setItem("hasShownLoading", "true");
            }, 300);
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
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#39FF14]/5 rounded-full blur-[120px]" />
          </div>

          <div className="flex flex-col items-center gap-8 px-6 relative z-10">
            {/* Profile Image with Rotating Ring */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-32 h-32 md:w-48 md:h-48"
            >
              {/* Rotating Border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#39FF14] via-transparent to-[#39FF14] animate-spin" 
                   style={{ animationDuration: "2s" }} />
              
              {/* Inner Glow */}
              <div className="absolute -inset-2 rounded-full border border-[#39FF14]/20 animate-pulse" />
              
              {/* Profile Image Container */}
              <div className="absolute inset-1 rounded-full overflow-hidden bg-black border-2 border-black">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Portfolio-Main-Image-1763069686185.jpg?width=800&height=800&resize=contain"
                  alt="thedigitalhassaan"
                  fill
                  className="object-cover scale-110"
                  priority
                />
              </div>
            </motion.div>

            {/* Name with Letter Spacing Animation */}
            <div className="overflow-hidden flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-white"
              >
                <span className="text-white">THEDIGITAL</span>
                <span className="text-[#39FF14]">HASSAAN</span>
              </motion.h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                className="h-[1px] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent mt-2 opacity-50"
              />
            </div>

            {/* Loading Bar Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-64 md:w-96 flex flex-col items-center"
            >
              {/* Progress Bar Background */}
              <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                {/* Progress Bar Fill */}
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#39FF14] rounded-full shadow-[0_0_25px_rgba(57,255,20,0.8)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
                
                {/* Dynamic Shimmer Effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    left: ["-10rem", "100%"],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Progress Percentage */}
              <div className="mt-4 flex items-baseline gap-1">
                <motion.span 
                  className="text-[#39FF14] text-2xl font-black italic tracking-tighter"
                >
                  {Math.round(progress)}
                </motion.span>
                <span className="text-[#39FF14]/50 text-sm font-bold">%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
