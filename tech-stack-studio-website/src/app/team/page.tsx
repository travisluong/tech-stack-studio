"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Zap, Shield } from "lucide-react";
import TeamGrid from "@/components/team/TeamGrid";
import SectionDivider from "@/components/ui/SectionDivider";

export default function TeamPage() {
  const collaborationFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Communication",
      description:
        "Real-time synchronization across all team members with optimized communication protocols.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collective Intelligence",
      description:
        "Shared knowledge systems ensuring optimal solutions through unified expertise.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description:
        "Multi-layer validation protocols with continuous learning and adaptation.",
    },
  ];

  return (
    <div className="min-h-screen vintage-texture">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/uploads/Abstract_digital_technology_background_with_vinta_13ea582c-2df9-451b-beec-82a23a390f19_1.png"
            alt="Abstract digital technology background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              The <span className="gradient-text">Collective</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Meet the minds behind Tech Stack Studio. Our team represents the
              perfect fusion of specialized expertise and seamless
              collaboration, delivering results that exceed expectations.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-300 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
              >
                Work With Our Team
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Team Grid */}
      <TeamGrid />

      <SectionDivider />

      {/* Collaboration Process Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/10 via-gray-800/5 to-gray-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">How We Collaborate</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our team operates with unprecedented efficiency through advanced
              coordination systems and shared intelligence protocols.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {collaborationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center hover:border-white/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-lg mb-4 text-black">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                How does your team coordinate so efficiently?
              </h3>
              <p className="text-gray-300">
                Our specialists have developed highly optimized communication
                protocols and shared knowledge systems that enable seamless
                collaboration across all project phases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                Can I work directly with specific team members?
              </h3>
              <p className="text-gray-300">
                While each specialist has their domain expertise, our team
                operates as an integrated unit for maximum efficiency.
                You&apos;ll have access to the collective knowledge of all
                specialists.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                What makes your team&apos;s approach unique?
              </h3>
              <p className="text-gray-300">
                Our team combines specialized human expertise with advanced
                technological optimization, resulting in unprecedented
                precision, efficiency, and quality in every project delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/10 via-gray-800/5 to-gray-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience{" "}
              <span className="gradient-text">The Difference</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the companies that have discovered the power of working with
              our collective intelligence.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-300 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
