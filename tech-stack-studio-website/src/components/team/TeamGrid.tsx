"use client";

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { teamMembers } from "@/data/team-members";

export default function TeamGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/20 to-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Meet <span className="gradient-text">The Collective</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A symphony of specialized minds working in perfect harmony. Our team
            represents the convergence of human creativity and technological
            precision.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Team Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-6">
              Our Philosophy
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Tech Stack Studio, we believe the future of development lies in
              the perfect synthesis of human vision and computational precision.
              Our team operates as a unified intelligence network, each
              specialist contributing their unique expertise while maintaining
              seamless collaboration.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">
                  Project Success Rate
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Availability</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-white mb-2">0.2s</div>
                <div className="text-gray-400 text-sm">Avg Response Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
