'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, text: 'text-lg' },
    md: { width: 48, height: 48, text: 'text-2xl' },
    lg: { width: 64, height: 64, text: 'text-3xl' }
  };

  const currentSize = sizes[size];

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox="0 0 64 64"
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b8941f" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
          
          <motion.rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="12"
            fill="url(#logoGradient)"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.rect
            x="8"
            y="8"
            width="48"
            height="48"
            rx="8"
            fill="url(#logoGradientDark)"
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.path
            d="M16 20 L32 20 L32 24 L24 24 L24 44 L20 44 Z"
            fill="#000000"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.8 }}
          />
          
          <motion.path
            d="M36 32 L44 20 L48 20 L40 32 L48 44 L44 44 L36 32 Z"
            fill="#000000"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.8 }}
          />
          
          <motion.circle
            cx="28"
            cy="28"
            r="2"
            fill="#000000"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.2 }}
          />
          
          <motion.circle
            cx="36"
            cy="36"
            r="2"
            fill="#000000"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <span className={`font-bold gradient-text ${currentSize.text}`}>
          Tech Stack
        </span>
        <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
          Studio
        </span>
      </div>
    </motion.div>
  );
}