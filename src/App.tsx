import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

import { WaxSeal } from './components/WaxSeal';
import { FloralCorner } from './components/FloralCorner';
import { FloatingHearts } from './components/FloatingHearts';
import { FloatingPetals } from './components/FloatingPetals';
import { ScratchCard } from './components/ScratchCard';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // 🔒 Basic Protection
  useEffect(() => {
    // Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable DevTools + View Source shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey &&
          e.shiftKey &&
          ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key.toLowerCase() === 'u')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);

    // Premium transition timing
    setTimeout(() => setShowContent(true), 1500);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-wedding-cream flex flex-col items-center">

      {/* Decorative Background */}
      <FloatingHearts />
      <FloatingPetals />

      <FloralCorner className="fixed top-0 left-0" />
      <FloralCorner className="fixed bottom-0 right-0 rotate-180" />

      {/* Opening Animation Overlay */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            exit={{
              opacity: 0,
              transition: {
                duration: 1.2,
                ease: 'easeInOut',
              },
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fdfcf9]"
          >
            <div className="relative w-[90vw] max-w-lg aspect-[4/3] flex items-center justify-center">

              {/* Envelope Back */}
              <div className="absolute inset-0 bg-[#f7f5f0] rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-black/[0.03]" />

              {/* Invitation Card */}
              <motion.div
                animate={
                  isOpen
                    ? { y: '-65%', opacity: 1, scale: 1.02 }
                    : { y: '0%', opacity: 0, scale: 0.95 }
                }
                transition={{
                  duration: 1.4,
                  delay: 0.4,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="absolute inset-x-8 top-8 bottom-8 bg-white shadow-lg z-20 flex flex-col items-center justify-center p-8 text-center border border-wedding-gold/10"
              >
                <motion.div
                  animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="font-sans uppercase text-[9px] tracking-[0.4em] mb-4 text-wedding-gold/60">
                    Exclusive Invitation
                  </p>

                  <h2 className="font-calligraphy text-5xl mb-2 text-wedding-ink">
                    Arshiya & Shihab
                  </h2>

                  <div className="w-10 h-px bg-wedding-gold/20 mx-auto my-4" />

                  <p className="font-serif italic text-lg text-wedding-sage">
                    We are getting engaged
                  </p>
                </motion.div>
              </motion.div>

              {/* Envelope Flap */}
              <motion.div
                style={{ originY: 0 }}
                animate={
                  isOpen
                    ? { rotateX: 180, zIndex: 10 }
                    : { rotateX: 0, zIndex: 40 }
                }
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 z-40"
              >
                <div
                  className="w-full h-full"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
                    backgroundColor: '#e8e4db',
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)',
                  }}
                />
              </motion.div>

              {/* Envelope Side Flaps */}
              <div
                className="absolute inset-0 z-30"
                style={{
                  clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
                  backgroundColor: '#f0ede6',
                }}
              />

              <div
                className="absolute inset-0 z-30"
                style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
                  backgroundColor: '#f0ede6',
                }}
              />

              <div
                className="absolute inset-0 z-30"
                style={{
                  clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)',
                  backgroundColor: '#f5f2ed',
                }}
              />

              {/* Wax Seal */}
              <WaxSeal onClick={handleOpen} split={isOpen} />
            </div>

            {/* Open Hint */}
            {!isOpen && (
              <motion.div
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute bottom-20 flex flex-col items-center gap-3"
              >
                <span className="font-sans text-[10px] tracking-[0.6em] text-wedding-sage uppercase">
                  Click to open seal
                </span>

                <ChevronDown
                  size={14}
                  className="text-wedding-sage opacity-50"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Invitation */}
      {showContent && (
        <motion.main
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl mx-auto px-4 py-20 flex flex-col items-center z-10"
        >

          {/* Header */}
          <section className="text-center mb-6 md:mb-20 w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 px-4"
            >
              <h1 className="font-luxury text-5xl sm:text-7xl md:text-9xl mb-4 text-wedding-gold drop-shadow-sm leading-tight">
                Arshiya & Shihab
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-wedding-sage font-sans tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">
                <span className="text-lg sm:text-2xl md:text-3xl">
                  The 08th of May
                </span>

                <Heart
                  size={12}
                  className="hidden sm:block fill-wedding-gold stroke-none"
                />

                <span>Two Thousand Twenty Six</span>
              </div>
            </motion.div>
          </section>

          {/* Intro */}
          <section className="max-w-2xl text-center mb-24 md:mb-32 px-6">
            <p className="font-serif text-2xl sm:text-xl md:text-2xl leading-relaxed italic text-opacity-80">
              Two souls, one heart, and a lifetime of forever begins now.
            </p>

            <div className="mt-8 font-sans text-[10px] tracking-[0.4em] uppercase text-wedding-sage">
              Our Story
            </div>
          </section>

          {/* Scratch Card */}
          <section className="w-full mb-24 md:mb-32 text-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="mb-12">
                <h3 className="font-display italic text-2xl md:text-3xl">
                  A special message...
                </h3>

                <p className="font-sans text-[9px] tracking-widest uppercase mt-2 text-wedding-sage opacity-60">
                  Scratch to reveal
                </p>
              </div>

              <div className="scale-90 sm:scale-100 origin-center">
                <ScratchCard onComplete={() => {}} />
              </div>
            </motion.div>
          </section>

          {/* Countdown */}
          <Countdown />

          {/* Event Details */}
          <EventDetails />

          {/* RSVP */}
          <section className="w-full mb-10 md:mb-32 text-center px-4">
            <div className="p-8 sm:p-12 md:p-16 border border-wedding-gold/20 inline-block rounded-[40px] sm:rounded-[60px] md:rounded-[100px] relative w-full max-w-2xl bg-white shadow-xl shadow-black/[0.02]">

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-6 italic leading-snug">
                Forever begins here 💛
              </h2>

              <p className="font-sans text-base tracking-[0.3em] uppercase text-wedding-sage mb-8">
                With love and joy
              </p>

              <button className="w-full sm:w-auto px-8 py-3 bg-wedding-gold text-white font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-wedding-ink transition-all shadow-lg hover:shadow-wedding-gold/30">
                Celebrate With Us
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-10 leading-none opacity-40">
            <span className="italic tracking-widest text-3xl">
              Arshiya & Shihab
            </span>

            <p className="font-sans text-[10px] tracking-[0.5em] mt-4 uppercase">
              Est. 2026
            </p>
          </footer>

          {/* Developer Credit */}
          <div className="bg-[#c5a358] w-full text-center py-2 rounded-t-xl">
            <p className="text-sm font-semibold text-white tracking-wide">
              DEVELOPED BY{' '}
              <a
                href="https://www.instagram.com/awesome__creation"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-[#fff7d6] transition-colors"
              >
                AWESOME CREATION
              </a>
            </p>
          </div>
        </motion.main>
      )}

      {/* Scroll Indicator */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 3 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] flex flex-col items-center gap-2 pointer-events-none opacity-30"
        >
          <span className="font-sans text-[8px] tracking-[0.5em] uppercase">
            Scroll
          </span>

          <ChevronDown size={14} />
        </motion.div>
      )}
    </div>
  );
}