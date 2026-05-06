import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export const ScratchCard = ({
  onComplete,
}: {
  onComplete: () => void;
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleReveal = () => {
    if (isOpened) return;

    setIsOpened(true);
    onComplete();
  };

  return (
    <div className="relative w-[300px] h-[190px] sm:w-80 sm:h-52 mx-auto">

      {/* Revealed Content */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-inner flex flex-col items-center justify-center border border-wedding-gold/20 overflow-hidden px-4">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isOpened ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-romantic text-4xl text-wedding-gold mb-2">
            Arshiya & Shihab
          </p>

          <div className="w-12 h-px bg-wedding-gold/30 mx-auto mb-3" />

          <p className="font-sans text-[13px] tracking-[0.4em] uppercase text-wedding-gold/70 mb-1">
            Friday
          </p>

          <p className="font-display text-3xl font-bold tracking-tight text-wedding-ink">
            08 MAY 2026
          </p>

          <p className="font-serif italic text-wedding-sage mt-3">
            Save our date
          </p>
        </motion.div>
      </div>

      {/* Gold Cover */}
      <AnimatePresence>
        {!isOpened && (
          <motion.button
            type="button"
            onClick={handleReveal}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              absolute
              inset-0
              rounded-2xl
              z-10
              overflow-hidden
              bg-gradient-to-br
              from-[#c5a358]
              via-[#e5be6e]
              to-[#a68a4a]
              shadow-xl
              flex
              items-center
              justify-center
              transform-gpu
              will-change-transform
            "
          >
            {/* Glitter */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full"
                  style={{
                    top: `${(i * 13) % 100}%`,
                    left: `${(i * 29) % 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Center Content */}
            <div className="relative flex flex-col items-center">

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="relative"
              >
                <Heart
                  size={40}
                  className="fill-white text-white drop-shadow-lg"
                />

                <Sparkles
                  size={18}
                  className="absolute -top-2 -right-2 text-white"
                />
              </motion.div>

              <p className="mt-4 text-white uppercase tracking-[0.35em] text-[10px] font-semibold">
                Tap to Reveal
              </p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};