import React from "react";
import { motion } from "framer-motion";
import boombox from "../assets/images/boombox.png";
import heroBackground from "../assets/images/WaxNRhythms Home.png";

function HeroSection({ onStart }) {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-no-repeat bg-left-top bg-[length:100%_auto] flex flex-col items-center justify-end pb-10"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <motion.button
        className="mb-16 px-6 py-3 bg-subway-gold text-brick-red rounded-xl font-bold hover:bg-vinyl-orange transition-all shadow-lg z-30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
      >
        Enter The Beat
      </motion.button>
      <motion.img
        src={boombox}
        alt="Boombox"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-4 left-4 w-16 sm:w-20 md:w-24 max-w-[20vw] drop-shadow-lg z-30"
        style={{ transform: "rotate(-5deg)" }}
      />
    </div>
  );
}

export default HeroSection;
