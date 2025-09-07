"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Palette, Cpu, Zap, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import SectionDivider from "@/components/ui/SectionDivider";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Home() {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Mastery",
      description:
        "From React frontends to robust Node.js backends, we build complete solutions.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description:
        "Beautiful, intuitive interfaces that users love and remember.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description:
        "Cutting-edge technologies for scalable, future-proof applications.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Optimized performance that keeps users engaged and search engines happy.",
    },
  ];

  return (
    <div className="min-h-screen vintage-texture">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/uploads/Abstract_digital_technology_background_with_vinta_13ea582c-2df9-451b-beec-82a23a390f19_1.png"
            alt="Digital technology background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Logo size="lg" className="justify-center mb-8" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Crafting Digital</span>
              <br />
              <span className="text-white">Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Where technical expertise meets artistic innovation. We build
              full-stack web applications that don&apos;t just work—they
              inspire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-300 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
              >
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="glass-effect px-8 py-4 rounded-full text-lg font-medium text-white hover:text-gray-300 transition-colors duration-300 border border-white/30 hover:border-white/50"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/uploads/Geometric_line_patterns_in_golden_amber_color_art_fe3cbeb1-6c4e-4499-8872-856cb3c2008f_1.png"
            alt="Decorative pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Why Choose</span> Tech Stack
              Studio?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with creative vision to deliver
              exceptional web experiences that drive results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/uploads/Vintage_photography_style_image_of_a_modern_creat_90255fe6-30f1-4359-a2a8-2ab30d597862_0.png"
                alt="Modern workspace with vintage touches"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">
                Where Innovation Meets Craftsmanship
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our workspace reflects our philosophy: modern technology
                enhanced by timeless design principles. Every project is crafted
                with the same attention to detail you see in our environment.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that great code and beautiful design are not separate
                disciplines—they&apos;re complementary arts that together create
                extraordinary digital experiences.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      <SectionDivider />

      <section className="relative py-20 bg-gradient-to-r from-gray-900/10 via-gray-800/5 to-gray-900/10 overflow-hidden">
        <AnimatedBackground />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Ready to Build Something{" "}
              <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and bring your vision to life with
              our expertise.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-300 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
