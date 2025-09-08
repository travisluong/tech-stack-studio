"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { Users, Target, Lightbulb, Award, Code2, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const heroControls = useAnimation();
  const storyLeftControls = useAnimation();
  const storyRightControls = useAnimation();

  useEffect(() => {
    // Ensure hero animation triggers on mount
    heroControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1 },
    });

    // Trigger story section animations with slight delay
    setTimeout(() => {
      storyLeftControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      });
      storyRightControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2 },
      });
    }, 600);
  }, [heroControls, storyLeftControls, storyRightControls]);
  const values = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Technical Excellence",
      description:
        "We obsess over clean code, best practices, and cutting-edge technologies to deliver robust solutions.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion-Driven",
      description:
        "Every project is a canvas for our creativity and technical expertise—we build with heart.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Spirit",
      description:
        "Your vision combined with our expertise creates magic. We build partnerships, not just products.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We stay ahead of the curve, always exploring new ways to solve problems and create value.",
    },
  ];

  const timeline = [
    {
      year: "2011-2013",
      title: "The Foundation Years",
      description:
        "Started with jQuery animations and WordPress customizations, building dynamic websites with MySQL databases. DreamHost became our reliable hosting partner as we learned the fundamentals of web development.",
    },
    {
      year: "2014",
      title: "Single-Page Revolution",
      description:
        "Embraced AngularJS to create rich, interactive applications. Discovered the power of Ruby on Rails for rapid backend development and migrated to PostgreSQL for more robust data management on Heroku.",
    },
    {
      year: "2015-2018",
      title: "Full-Stack Mastery",
      description:
        "Refined our AngularJS expertise while exploring Python and Django for backend development. This era was about mastering the art of building complete web applications from database to user interface.",
    },
    {
      year: "2018-2019",
      title: "Mobile & Modern APIs",
      description:
        "Ventured into iOS development with Swift while building lightning-fast APIs using Node.js and Koa. This period expanded our capabilities beyond the web into native mobile experiences.",
    },
    {
      year: "2019-2021",
      title: "Cloud-Native Evolution",
      description:
        "Transitioned to React for modern frontend development and Express.js for robust backends. Embraced containerization with Docker and Kubernetes, scaling applications across Google Cloud Platform and Azure.",
    },
    {
      year: "2021-Present",
      title: "Enterprise & Performance",
      description:
        "Diversified into enterprise technologies with Scala + PlayFramework, Python + FastAPI, and Java + SpringBoot. Mastered AWS cloud architecture while delivering high-performance solutions for demanding clients.",
    },
    {
      year: "2025",
      title: "Modern Excellence",
      description:
        "Today we craft exceptional experiences with Next.js, React, and TypeScript while integrating cutting-edge AI technologies. Our tech stack represents years of evolution, choosing the right tools for each project while maintaining our commitment to quality and innovation.",
    },
  ];

  return (
    <div className="min-h-screen vintage-texture">
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/uploads/media/Subtle_textured_background_with_vintage_paper_tex_7311e1ed-9e13-4dec-97f3-ba062da0e4e1_0.png"
            alt="Vintage texture background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroControls}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">About</span> Tech Stack Studio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;re a passionate team of developers and designers who
              believe that great web experiences are born from the perfect
              marriage of technical expertise and creative vision.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyLeftControls}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Tech Stack Studio was born from a simple belief: that
                  technology should be both powerful and beautiful. What started
                  as late-night coding sessions and weekend design experiments
                  has evolved into a studio that crafts digital experiences that
                  truly make a difference.
                </p>
                <p>
                  We&apos;re not just developers who code—we&apos;re artists who
                  happen to speak JavaScript, designers who think in components,
                  and innovators who see possibilities where others see
                  problems. Every line of code we write, every pixel we place,
                  is intentional and purposeful.
                </p>
                <p>
                  Our vintage-modern aesthetic isn&apos;t just a design
                  choice—it represents our philosophy. We respect the timeless
                  principles of good design and solid engineering, while
                  embracing the cutting-edge technologies that power the modern
                  web.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyRightControls}
              className="relative"
            >
              <Image
                src="/uploads/media/Abstract_representation_of_collaboration_and_crea_b53b3e27-06be-457c-b859-c431e546450c_1.png"
                alt="Abstract representation of collaboration and creativity"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl mb-8"
              />

              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why We Do This
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Mission-Driven</h4>
                      <p>
                        To create web experiences that don&apos;t just meet
                        expectations—they exceed them.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Quality-Obsessed</h4>
                      <p>
                        Every project gets our full attention, from initial
                        concept to final deployment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Always Learning</h4>
                      <p>
                        Technology evolves fast, and we evolve with it, always
                        staying ahead of the curve.
                      </p>
                    </div>
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
              These principles guide every decision we make and every line of
              code we write.
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
                className="glass-effect p-6 rounded-xl hover:border-white/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center text-black">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
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
              From humble beginnings to crafting exceptional digital
              experiences.
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
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-900/10 via-gray-800/5 to-gray-900/10">
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
              Let&apos;s create something amazing that reflects your vision and
              exceeds your expectations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-300 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
