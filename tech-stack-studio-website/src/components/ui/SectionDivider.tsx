"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({
  className = "",
}: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`relative h-16 w-full flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/uploads/Geometric_line_patterns_in_golden_amber_color_art_fe3cbeb1-6c4e-4499-8872-856cb3c2008f_1.png"
          alt="Decorative pattern"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          className="opacity-30"
        />
      </div>
      <div className="relative w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent" />
    </motion.div>
  );
}
