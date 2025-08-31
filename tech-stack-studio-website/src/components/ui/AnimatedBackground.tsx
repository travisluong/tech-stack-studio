"use client";

import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

export default function AnimatedBackground({
  className = "",
}: AnimatedBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the animation
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-50"
      >
        <source
          src="/uploads/social_Subtle_animated_elements_in_golden_amber_geometri_66382ab6-ea63-4179-8efa-abc2f4008aa4_3.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  );
}
