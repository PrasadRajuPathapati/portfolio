import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import grainImage from "./grain.jpg"; // Make sure grain.jpg is in /src

const name = "Welcome To My Portfolio";
const subtitle = "PrasadRaju";

export default function SplashCinematic({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 8000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Vignette background */}
          <div className="absolute inset-0 bg-black">
            <div className="w-full h-full bg-gradient-radial from-transparent via-transparent to-black opacity-80 pointer-events-none" />
          </div>

          {/* Film grain overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url(${grainImage})`, backgroundSize: "cover" }}
          />

          {/* Spotlights */}
          <>
            <motion.div
              className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 
                         rounded-full bg-gradient-radial from-white/10 via-green-400/40 to-transparent blur-3xl opacity-50"
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            <motion.div
              className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-white via-white/30 to-transparent blur-3xl opacity-25"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
            />

            <motion.div
              className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-white via-white/30 to-transparent blur-3xl opacity-25"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
            />
          </>

          {/* Central name and subtitle */}
          <motion.div
            className="relative text-center"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 6, ease: "easeInOut" }}
          >
            <div className="text-4xl sm:text-6xl font-bold text-green-300 tracking-widest relative z-10 drop-shadow-lg">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="mt-4 text-xl text-green-100 tracking-wide relative z-10 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1.5 }}
            >
              {subtitle}
            </motion.div>
          </motion.div>

          {/* Loading spinner */}
          <motion.div
            className="absolute bottom-8 flex items-center justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <div className="w-6 h-6 border-4 border-green-300 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
