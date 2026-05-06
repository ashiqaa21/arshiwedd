"use client";

import { motion } from "motion/react";

export const WaxSeal = ({
  onClick,
  split,
}: {
  onClick: () => void;
  split: boolean;
}) => {
  const renderBeads = (side: "left" | "right") => (
    <motion.div
      animate={split ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
      className={`absolute top-1/2 -translate-y-1/2 flex gap-1 ${
        side === "left"
          ? "right-full -translate-x-[2px]"
          : "left-full translate-x-[2px]"
      }`}
    >
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-white shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.1),1px_1px_2px_rgba(255,255,255,0.8)]"
        />
      ))}
    </motion.div>
  );

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        {renderBeads("left")}
        {renderBeads("right")}

        <motion.div
          onClick={onClick}
          initial={{ scale: 1 }}
          animate={{
            scale: split ? [1, 1.05, 0.85] : 1,
            opacity: split ? 0 : 1,
            rotate: split ? [0, 4, -4, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
        >
          <div className="relative flex items-center justify-center">

            {/* Pearl Line */}
            <div className="absolute w-full flex justify-between px-4 pointer-events-none">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.1),1px_1px_2px_rgba(255,255,255,0.8)]"
                  style={{ opacity: i > 9 && i < 15 ? 0 : 1 }}
                />
              ))}
            </div>

            {/* GOLD SEAL */}
            <div
              className="relative z-10 w-34 h-34 rounded-full flex items-center justify-center p-[6px]
              bg-gradient-to-br from-[#d4af37] via-[#f6e27a] to-[#b8962e]
              shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-30" />

              {/* INNER GOLD */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center
                bg-gradient-to-br from-[#fff6d5] via-[#f1d77a] to-[#caa93a]
                shadow-inner border border-white/40 overflow-hidden"
              >
                {/* TEXT */}
                <span
                  className="font-luxury text-[2.4rem] text-[#6b5200]
                  select-none italic leading-none
                  translate-y-[1px] -translate-x-[4px]"
                >
                  A&S
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};