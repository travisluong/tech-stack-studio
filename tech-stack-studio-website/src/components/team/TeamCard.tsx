"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TeamMember } from "@/data/team-members";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:border-white/50"
    >
      {/* Profile Image */}
      <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-black">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>

        {/* Placeholder for future profile image */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-xs font-medium">
            {member.department}
          </span>
        </div>
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
