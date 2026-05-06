"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Floating Petals
const FloatingPetal = ({
  delay,
  xPos,
}: {
  delay: number;
  xPos: string;
}) => (
  <motion.div
    initial={{ y: -40, opacity: 0, rotate: 0 }}
    animate={{
      y: [0, 800],
      x: [0, 30, -30, 20, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
    style={{ left: xPos }}
    className="absolute top-0 z-0"
  >
    <div className="w-3 h-4 bg-gradient-to-b from-[#f8d7da] to-[#f1b6c1] rounded-t-full rounded-b-[40%] rotate-45 shadow-sm opacity-70" />
  </motion.div>
);

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  const weddingDate = new Date("2026-05-08T16:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        mins: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        secs: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="relative overflow-hidden w-full px-4 pt-6 pb-24 -mt-10">
      {/* Floating Petals Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <FloatingPetal
            key={i}
            delay={i * 1.5}
            xPos={`${5 + i * 8}%`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          relative
          max-w-6xl
          mx-auto
          rounded-[45px]
          border
          border-[#ecd9a4]
          bg-[#fffaf2]/90
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(212,175,55,0.12)]
          overflow-hidden
          px-6
py-7
md:py-14        
  md:px-14
        "
      >
        {/* Soft Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.07)_0%,_transparent_70%)] pointer-events-none" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-7 relative z-10"
        >
          <p className="uppercase tracking-[0.5em] text-[#c7a74d] text-xs mb-4 font-medium">
            The Journey Begins In
          </p>

          <h2 className="font-serif text-2xl md:text-5xl text-[#8a6d1c] italic">
            Counting Down to Forever
          </h2>

          <div className="flex justify-center items-center gap-3 mt-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />

            <div className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.6)]" />

            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </motion.div>

        {/* Countdown Circles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative z-10">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              className="flex justify-center"
            >
              <div
                className="
                  relative
w-24
h-24
sm:w-28
sm:h-28
md:w-36
md:h-36
                  rounded-full
                  border-[3px]
                  border-[#e8d39b]
                  bg-gradient-to-b
                  from-[#fffdf8]
                  via-[#fff7e8]
                  to-[#fdf1cf]
                  shadow-[0_12px_40px_rgba(212,175,55,0.15)]
                  flex
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                {/* Rotating Shine */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    w-[140%]
                    h-[140%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    rotate-12
                  "
                />

                {/* Decorative Ring */}
                <div className="absolute inset-3 rounded-full border border-[#d4af37]/20" />

                {/* Number */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="
                      relative
                      z-10
text-3xl
sm:text-4xl
md:text-5xl
                      font-semibold
                      tracking-tight
                      text-[#b38728]
                    "
                  >
                    {value.toString().padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>

                {/* Label */}
                <span
                  className="
                    relative
                    z-10
                    mt-1.5
                    uppercase
                    tracking-[0.35em]
                    text-[10px]
                    md:text-xs
                    text-[#b38728]
                    font-medium
                  "
                >
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center relative z-10"
        >
          <p className="text-[#a38745] italic text-lg md:text-xl font-serif">
            “Together is a beautiful place to be.”
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};