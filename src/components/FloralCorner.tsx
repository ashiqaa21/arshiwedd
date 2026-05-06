import { motion } from 'motion/react';

export const FloralCorner = ({ className }: { className?: string }) => (
  <div className={`pointer-events-none opacity-30 ${className}`}>
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="blur">
        <feGaussianBlur stdDeviation="15" />
      </filter>
      
      {/* Soft watercolor blurs */}
      <circle cx="100" cy="100" r="80" fill="#849483" fillOpacity="0.1" filter="url(#blur)" />
      <circle cx="150" cy="50" r="60" fill="#c5a358" fillOpacity="0.08" filter="url(#blur)" />
      
      {/* Hand-drawn style leaves */}
      <path d="M50 0C60 60 40 120 100 160C140 180 180 160 220 200" stroke="#849483" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M0 50C60 60 120 40 160 100C180 140 160 180 200 220" stroke="#849483" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      
      {/* Abstract flowers */}
      <motion.g
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M40 40C45 30 55 30 60 40C70 45 70 55 60 60C55 70 45 70 40 60C30 55 30 45 40 40Z" fill="#c5a358" fillOpacity="0.15" />
        <circle cx="50" cy="50" r="3" fill="#c5a358" fillOpacity="0.3" />
      </motion.g>
      
      <circle cx="80" cy="120" r="2" fill="#849483" fillOpacity="0.2" />
      <circle cx="120" cy="80" r="1.5" fill="#c5a358" fillOpacity="0.2" />
    </svg>
  </div>
);
