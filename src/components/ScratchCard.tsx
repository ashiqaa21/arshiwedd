import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ScratchCard = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDone, setIsDone] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.globalCompositeOperation = 'source-over';

    // Premium Gold Gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#c5a358');
    gradient.addColorStop(0.5, '#e5be6e');
    gradient.addColorStop(1, '#a68a4a');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Glitter texture
    for (let i = 0; i < 200; i++) {
       ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
       ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
    }

    ctx.globalCompositeOperation = 'destination-out';
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const triggerReveal = (x: number, y: number) => {
    if (isDone) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Draw a massive "reveal" circle at the point of contact
    ctx.beginPath();
    ctx.arc(x, y, 150, 0, Math.PI * 2); // Massive radius for "single tap" reveal
    ctx.fill();

    // 2. Immediately trigger completion state
    setIsDone(true);
    onComplete();
    
    // 3. Fire the "Big" Confetti blast
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
const defaults = {
  startVelocity: 25,
  spread: 360,
  ticks: 80,
  zIndex: 100,
  scalar: 1.2,
  colors: ['#D4AF37', '#FFD700', '#E5C100', '#F7E7A9'],
};
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || isDone) return;

    let x, y;
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = (e as React.MouseEvent).clientX - rect.left;
      y = (e as React.MouseEvent).clientY - rect.top;
    }

    triggerReveal(x, y);
  };

  const updatePointer = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPointerPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="relative w-80 h-52 mx-auto group select-none">
      {/* Background Content (Revealed) */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-inner flex flex-col items-center justify-center border-2 border-wedding-gold/20 overflow-hidden px-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={isDone ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <p className="font-romantic text-4xl text-wedding-gold mb-2">Arshiya & Shihab</p>
          <div className="w-12 h-px bg-wedding-gold/30 mx-auto mb-3" />
          <p className="font-sans text-[15px] tracking-[0.4em] uppercase text-wedding-gold/70 mb-1">Friday</p>
          <p className="font-display text-3xl font-bold tracking-tighter text-wedding-ink">08 MAY 2026</p>
          <p className="font-sans text-[17px] tracking-widest text-wedding-sage mt-3 italic">Save our date!</p>
        </motion.div>
      </div>

      {/* Scratch Layer */}
      <motion.canvas
        ref={canvasRef}
        width={320}
        height={208}
        animate={isDone ? { opacity: 0, scale: 1.2, pointerEvents: 'none' } : { opacity: 1 }}
        transition={{ duration: 0.5 }}
        onMouseDown={handleInteraction}
        onTouchStart={handleInteraction}
        onMouseMove={updatePointer}
        className="absolute inset-0 rounded-2xl cursor-none z-10 touch-none shadow-xl"
      />

      {/* Floating Heart Cursor */}
      {!isDone && (
        <motion.div 
          className="absolute pointer-events-none z-20"
          style={{ left: 0, top: 0 }}
          animate={{ x: pointerPos.x, y: pointerPos.y }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="absolute -top-10 -left-4 flex flex-col items-center">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="relative"
            >
              <Heart size={32} className="fill-wedding-gold text-white stroke-[1px] drop-shadow-md" />
              <Sparkles size={16} className="absolute -top-2 -right-2 text-white animate-pulse" />
            </motion.div>
            <span className="font-sans text-[9px] tracking-widest uppercase text-white drop-shadow-lg mt-1 font-bold">
              Tap to Open
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};