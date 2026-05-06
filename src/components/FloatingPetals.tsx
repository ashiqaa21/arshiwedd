import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const FloatingPetals = () => {
  const [petals, setPetals] = useState<{ id: number; left: number; duration: number; size: number; delay: number; rotate: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals((prev) => [
        ...prev.slice(-10),
        { 
          id: Date.now(), 
          left: Math.random() * 100, 
          duration: 10 + Math.random() * 10, 
          size: 15 + Math.random() * 15,
          delay: Math.random() * 5,
          rotate: Math.random() * 360
        }
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: '-10vh', opacity: 0, x: `${petal.left}vw`, rotate: petal.rotate }}
          animate={{ 
            y: '110vh', 
            opacity: [0, 0.6, 0], 
            x: `${petal.left + (Math.sin(petal.id) * 20)}vw`,
            rotate: petal.rotate + 360 
          }}
          transition={{ duration: petal.duration, delay: petal.delay, ease: 'linear' }}
          className="absolute"
        >
          <div 
            className="rounded-full bg-pink-100/40 border border-pink-200/20"
            style={{ width: petal.size, height: petal.size * 0.8, borderRadius: '60% 40% 70% 30% / 40% 70% 30% 60%' }}
          />
        </motion.div>
      ))}
    </div>
  );
};
