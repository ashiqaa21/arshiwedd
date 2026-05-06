"use client";

import { Calendar, Clock, MapPin, Music } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const EventDetails = () => {
  const [opened, setOpened] = useState(false);

  const ceremonyLocation =
    "https://maps.google.com/?q=Riverside+Estate+Sonoma";
  const celebrationLocation =
    "https://maps.google.com/?q=Great+Barn+Hall+Sonoma";

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24 md:mb-32 px-4 max-w-6xl mx-auto items-start mt-16 md:mt-24">
      
      {/* ================= CARD 1 ================= */}
      <div className="relative pt-20">

        {/* ✨ INTERACTIVE BLENDED BOW */}
        <motion.div
          onClick={() => setOpened(!opened)}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] md:w-[210px] z-20 cursor-pointer"
          initial={{ y: 0 }}
          whileHover={{ y: -6, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: opened ? 6 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          {/* Ribbon strip (blending effect) */}
          <div className="absolute inset-x-[-40px] top-1/2 h-[28px] -translate-y-1/2 
            bg-gradient-to-r from-[#d4af37]/40 via-[#f5e6a8]/50 to-[#d4af37]/40 
            blur-[1px] opacity-70 rounded-full" 
          />

          {/* Bow image */}
          <motion.img
            src="/boww.png"
            alt="Gold Bow"
            className="w-full h-auto select-none
              [filter:drop-shadow(0_10px_18px_rgba(134,113,46,0.25))]
              mix-blend-multiply"
            whileHover={{
              filter:
                "drop-shadow(0 14px 22px rgba(134,113,46,0.35)) brightness(1.1)",
            }}
          />
        </motion.div>

        {/* 💌 MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-[#fffdfa] p-8 md:p-12 md:pt-24 rounded-sm shadow-[0_15px_45px_rgba(184,134,11,0.08)] border border-[#d4af37]/20 text-center overflow-hidden"
        >
          {/* Glow behind bow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#d4af37]/10 blur-[60px] -translate-y-1/2" />

          {/* <Calendar className="text-[#b38728] mx-auto mb-6 opacity-60" size={24} strokeWidth={1} /> */}

          <h3 className="font-serif italic text-xl md:text-4xl text-[#86712e] mb-4">
            In the name of Allah, the Most Gracious, the Most Merciful.
          </h3>

<div className="mb-8 font-serif text-[#86712e]/90 italic leading-relaxed text-center space-y-6">

  {/* Main Invitation Text */}
  <div className="space-y-2">
    <p className="text-xl md:text-xl ">
      A beautiful promise, a journey of forever, and a celebration of love.
    Together with our families, we invite you
      to witness the Engagement of
  </p>
  </div>

  {/* ✨ Highlight Names */}
  <div className="pt-2">
    <span className="block font-semibold text-3xl md:text-5xl tracking-wide whitespace-nowrap text-[#6b5a25]">
      Arshiya & Shihab
    </span>

    {/* Elegant Divider */}
    <div className="w-20 h-[1px] bg-[#d4af37]/50 mx-auto mt-3"></div>
  </div>

</div>
          {/* <div className="space-y-4 font-serif text-[#b38728] border-y border-[#d4af37]/10 py-8 my-6">
            <div className="flex items-center justify-center gap-3">
              <Clock size={16} className="opacity-50" />
              <span className="tracking-[0.2em] uppercase text-[10px] md:text-xs font-semibold text-[#86712e]">
                Saturday, 4:00 PM
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin size={16} className="opacity-50" />
              <span className="tracking-[0.2em] uppercase text-[10px] md:text-xs font-semibold text-[#86712e]">
                Riverside Estate, Sonoma
              </span>
            </div>
          </div> */}

          <a
            // href={ceremonyLocation}
            // target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full py-4 bg-[#86712e] text-[#fffdfa] font-serif text-[10px] tracking-[0.4em] uppercase transition-all shadow-md rounded-sm active:scale-[0.98] hover:bg-[#6b5a25]"
          >
          Be Part Of Our Day
          </a>
        </motion.div>
      </div>

  <motion.img
  src="/r.png"
  alt=""
  className="w-full h-auto select-none -  mb-10
    opacity-70
    mix-blend-multiply
    [filter:drop-shadow(0_10px_18px_rgba(134,113,46,0.25))]"

/>
      {/* ================= CARD 2 ================= */}
 {/* ================= CARD 2 (PREMIUM GOLD LOCATION) ================= */}
<div className="relative mt-5 w-screen left-1/2 -translate-x-1/2">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1, duration: 0.6 }}
    className="relative text-center p-10 md:p-14 
               bg-gradient-to-b from-[#b38728] via-[#a0781f] to-[#6b5a25]
               text-white overflow-hidden"
  >

    {/* ✨ subtle glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

    {/* Title */}
    <h3 className="font-serif text-3xl md:text-4xl mb-2 tracking-wide">
      The Venue
    </h3>

    {/* Location Name */}


    {/* Divider */}
    <div className="w-16 h-[1px] bg-white/40 mx-auto my-2" />

    {/* Description */}
    <p className="text-white/80   text-2xl md:text-2xl italic max-w-md mx-auto  mb-7">
Rahmaniya hotel | Manikoth Madiyan ,Kanhangad  <br/> Friday - After jumah </p>

    {/* White Premium Button */}
 <a
href="https://www.google.com/maps/place/Rahmaniya+Bakery+%26+Restaurent/@12.3512166,75.0726053,17z/data=!4m14!1m7!3m6!1s0x3ba47d2250e2c6d7:0xe1f0f408d8966c8c!2sRahmaniya+Bakery+%26+Restaurent!8m2!3d12.3512166!4d75.0726053!16s%2Fg%2F11s8tmdfl4!3m5!1s0x3ba47d2250e2c6d7:0xe1f0f408d8966c8c!8m2!3d12.3512166!4d75.0726053!16s%2Fg%2F11s8tmdfl4?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"  target="_blank"
  rel="noopener noreferrer"
  className="relative z-30 inline-flex items-center justify-center gap-2 
             px-7 py-4 bg-white text-[#6b5a25] 
             text-[10px] tracking-[0.4em] uppercase 
             font-bold rounded-sm shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] 
             hover:shadow-[0_6px_20px_rgba(184,134,11,0.15)]
             hover:-translate-y-0.5 active:scale-95
             transition-all duration-200 cursor-pointer"
>
  <MapPin size={14} className="opacity-70" />
  View Location
</a>
  </motion.div>

</div>
    </section>
  );
};