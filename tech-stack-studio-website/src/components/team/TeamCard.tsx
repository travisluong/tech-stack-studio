"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { TeamMember } from "@/data/team-members";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Preload video after image loads
  useEffect(() => {
    if (imageLoaded && videoRef.current) {
      // Preload video by setting src and loading metadata
      videoRef.current.load();
    }
  }, [imageLoaded]);

  // Handle video playback based on mobile/desktop and view state
  useEffect(() => {
    if (videoRef.current && imageLoaded) {
      if (isMobile && isInView) {
        // On mobile, play when in view
        videoRef.current.currentTime = 0;
        playPromiseRef.current = videoRef.current.play();
        playPromiseRef.current?.catch(console.error);
      } else if (isMobile && !isInView) {
        // On mobile, pause when out of view
        if (playPromiseRef.current) {
          playPromiseRef.current
            .then(() => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            })
            .catch(() => {});
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        playPromiseRef.current = null;
      }
    }
  }, [isMobile, isInView, imageLoaded]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        playPromiseRef.current = videoRef.current.play();
        playPromiseRef.current?.catch(console.error);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      if (videoRef.current) {
        // Wait for play promise to resolve before pausing
        if (playPromiseRef.current) {
          playPromiseRef.current
            .then(() => {
              if (videoRef.current && !isHovered) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            })
            .catch(() => {
              // Play was already interrupted, no need to pause
            });
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        playPromiseRef.current = null;
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0 
      }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.0 }}
      className="glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:border-white/50 team-card-container"
    >
      {/* Profile Image */}
      <div
        className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Static Image */}
        <Image
          src={member.image}
          alt={`${member.name} - ${member.title}`}
          fill
          className={`object-cover transition-opacity duration-300 team-card-image ${
            (isMobile && isInView) || (!isMobile && isHovered) ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 400px, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3} // Prioritize first 3 images
          onLoad={() => setImageLoaded(true)}
        />

        {/* Video on hover/in-view - preload after image loads */}
        <video
          ref={videoRef}
          src={member.video}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 team-video ${
            (isMobile && isInView) || (!isMobile && isHovered) ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Department Badge */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-xs font-medium">
            {member.department}
          </span>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-gray-300 text-sm font-medium">{member.title}</p>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.specialties.slice(0, 3).map((specialty, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Bio Preview */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {member.bio}
        </p>

        {/* Mysterious Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
          <div className="bg-black/30 rounded-lg p-2">
            <div className="text-gray-400">Experience</div>
            <div className="text-white font-semibold">{member.experience}</div>
          </div>
          <div className="bg-black/30 rounded-lg p-2">
            <div className="text-gray-400">Response Time</div>
            <div className="text-white font-semibold">
              0.{Math.floor(Math.random() * 9) + 1}s
            </div>
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300"
        >
          <span className="text-white text-sm font-medium">
            {isExpanded ? "Show Less" : "Learn More"}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4 text-white" />
          </motion.div>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/10 mt-4">
                {/* Extended Bio */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Background</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.expandedBio}
                  </p>
                </div>

                {/* Philosophy */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Philosophy</h4>
                  <blockquote className="text-gray-300 text-sm italic border-l-2 border-white/20 pl-3">
                    &ldquo;{member.philosophy}&rdquo;
                  </blockquote>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 border border-white/10 text-white text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability Indicator */}
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    Currently available for new projects
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
