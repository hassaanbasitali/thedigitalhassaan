"use client";

import { MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingContactBar = () => {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/923001181588"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center transition-all duration-300 hover:bg-[#39FF14] hover:scale-110 group shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle 
          className="text-white group-hover:text-[#1A1A1A] transition-colors duration-300" 
          size={24} 
        />
      </motion.a>

      {/* Email Button */}
      <motion.a
        href="mailto:hassaanbasitali@gmail.com"
        className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center transition-all duration-300 hover:bg-[#39FF14] hover:scale-110 group shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail 
          className="text-white group-hover:text-[#1A1A1A] transition-colors duration-300" 
          size={24} 
        />
      </motion.a>
    </div>
  );
};
