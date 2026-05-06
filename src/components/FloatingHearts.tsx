import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; size: number; color: string; delay: number }[]>([]);

  useEffect(() => {
    const initialHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 10,
      size: 10 + Math.random() * 20,
      color: ['#ffd700', '#ff69b4', '#ffffff', '#c5a358'][Math.floor(Math.random() * 4)],
      delay: Math.random() * 20
    }));
    setHearts(initialHearts);

    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-25),
        { 
          id: Date.now(), 
          left: Math.random() * 100, 
          duration: 15 + Math.random() * 10, 
          size: 8 + Math.random() * 15,
          color: ['#ffd700', '#ff69b4', '#ffffff', '#c5a358'][Math.floor(Math.random() * 4)],
          delay: 0
        }
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', opacity: 0, x: `${heart.left}vw` }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 0.8, 0], 
            x: `${heart.left + (Math.sin(heart.id) * 10)}vw`,
            scale: [1, 1.2, 0.8, 1.1, 1]
          }}
          transition={{ 
            duration: heart.duration, 
            delay: heart.delay,
            ease: 'linear',
            scale: { duration: 2, repeat: Infinity }
          }}
          className="absolute"
        >
          <div className="relative">
            <Heart 
              size={heart.size} 
              style={{ color: heart.color, fill: heart.color }} 
              className="opacity-40 blur-[1px]"
            />
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: Math.random() }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sparkles size={heart.size * 0.6} className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
