import React from "react";
import { motion } from "framer-motion";
import boombox from "../assets/images/boombox.png";
import heroBackground from "../assets/images/WaxNRhythms Home.png";

function HeroSection({ onStart }) {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      {/* Boombox */}
      <motion.img
        src={boombox}
        alt="Boombox"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-8 w-20 sm:w-24 md:w-28 lg:w-32 max-w-[15%] drop-shadow-lg z-30"
        style={{ transform: "rotate(-5deg)" }}
      />

      {/* CTA Button */}
      <div className="absolute bottom-10 w-full flex justify-center z-30">
        <motion.button
          className="px-6 py-3 bg-subway-gold text-brick-red rounded-xl font-bold hover:bg-vinyl-orange transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
        >
          Enter The Beat
        </motion.button>
      </div>
    </div>
  );
}

export default HeroSection;