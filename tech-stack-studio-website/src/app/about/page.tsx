'use client';

import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, Code2, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Technical Excellence',
      description: 'We obsess over clean code, best practices, and cutting-edge technologies to deliver robust solutions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion-Driven',
      description: 'Every project is a canvas for our creativity and technical expertise—we build with heart.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Spirit',
      description: 'Your vision combined with our expertise creates magic. We build partnerships, not just products.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, always exploring new ways to solve problems and create value.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Started as a passion project, building websites for local businesses and learning the craft.'
    },
    {
      year: '2020',
      title: 'Going Full-Stack',
      description: 'Expanded into backend development, APIs, and database architecture to offer complete solutions.'
    },
    {
      year: '2021',
      title: 'Creative Evolution',
      description: 'Merged technical skills with artistic vision, focusing on user experience and beautiful design.'
    },
    {
      year: '2023',
      title: 'Modern Era',
      description: 'Embraced cutting-edge technologies like Next.js, TypeScript, and cloud architecture.'
    },
    {
      year: '2025',
      title: 'Present Day',
      description: 'Now crafting exceptional web experiences for clients who demand both beauty and performance.'
    }
  ];

  return (
    <div className="min-h-screen vintage-texture">
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">About</span> Tech Stack Studio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;re a passionate team of developers and designers who believe that great web experiences 
              are born from the perfect marriage of technical expertise and creative vision.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Tech Stack Studio was born from a simple belief: that technology should be both powerful and beautiful. 
                  What started as late-night coding sessions and weekend design experiments has evolved into a studio 
                  that crafts digital experiences that truly make a difference.
                </p>
                <p>
                  We&apos;re not just developers who code—we&apos;re artists who happen to speak JavaScript, designers who 
                  think in components, and innovators who see possibilities where others see problems. Every line of code 
                  we write, every pixel we place, is intentional and purposeful.
                </p>
                <p>
                  Our vintage-modern aesthetic isn&apos;t just a design choice—it represents our philosophy. We respect 
                  the timeless principles of good design and solid engineering, while embracing the cutting-edge 
                  technologies that power the modern web.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Why We Do This</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Mission-Driven</h4>
                    <p>To create web experiences that don&apos;t just meet expectations—they exceed them.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Quality-Obsessed</h4>
                    <p>Every project gets our full attention, from initial concept to final deployment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Always Learning</h4>
                    <p>Technology evolves fast, and we evolve with it, always staying ahead of the curve.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-6 rounded-xl hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-black">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-400 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to crafting exceptional digital experiences.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2">
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="text-4xl font-bold gradient-text mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-amber-400 mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-900/10 via-amber-800/5 to-amber-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Ready to Work <span className="gradient-text">Together</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing that reflects your vision and exceeds your expectations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}