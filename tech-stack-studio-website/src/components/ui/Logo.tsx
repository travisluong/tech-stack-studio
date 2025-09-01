"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, text: "text-lg" },
    md: { width: 48, height: 48, text: "text-2xl" },
    lg: { width: 64, height: 64, text: "text-3xl" },
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
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <linearGradient
              id="logoGradientDark"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#b8941f" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>

          {/* 3-Layer Stack Silhouette */}
          <g>
            {/* Bottom layer (uniform size) */}
            <motion.path
              d="M12 44 L32 54 L52 44 L32 34 Z"
              fill="url(#logoGradient)"
              initial={{ y: 2, opacity: 0 }}
              animate={{ y: 0, opacity: 0.95 }}
              whileHover={{ y: 1 }}
              transition={{ duration: 0.35 }}
            />
            {/* Middle layer */}
            <motion.path
              d="M12 32 L32 42 L52 32 L32 22 Z"
              fill="url(#logoGradientDark)"
              initial={{ y: 2, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            />
            {/* Top layer */}
            <motion.path
              d="M12 20 L32 30 L52 20 L32 10 Z"
              fill="url(#logoGradient)"
              initial={{ y: 2, opacity: 0 }}
              animate={{ y: 0, opacity: 0.85 }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            />
            {/* Subtle vertical glow line down center */}
            <motion.line
              x1="32"
              y1="10"
              x2="32"
              y2="54"
              stroke="#fbbf24"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ opacity: 0.25 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />
            {/* Ambient outline (silhouette) */}
            <motion.path
              d="M12 44 L32 54 L52 44 L52 44 L52 32 L52 20 L32 10 L12 20 L12 32 Z"
              fill="none"
              stroke="#f59e0b"
              strokeOpacity="0.15"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />
          </g>
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
