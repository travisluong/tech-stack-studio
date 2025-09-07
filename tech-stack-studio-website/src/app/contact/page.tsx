"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Toast, { ToastType } from "@/components/ui/Toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    project: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: ToastType;
    message: string;
    isVisible: boolean;
  }>({
    type: "success",
    message: "",
    isVisible: false,
  });

  const showToast = (type: ToastType, message: string) => {
    setToast({ type, message, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Client-side validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.project.trim() ||
        !formData.message.trim()
      ) {
        showToast("error", "Please fill in all required fields.");
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        showToast(
          "success",
          result.message ||
            "Thank you for your message! We will get back to you within 24 hours."
        );

        // Reset form data
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
          project: "",
        });
      } else {
        // Handle validation errors
        if (result.errors && Array.isArray(result.errors)) {
          const errorMessages = result.errors
            .map((error: { field: string; message: string }) => error.message)
            .join(", ");
          showToast("error", `Please fix the following: ${errorMessages}`);
        } else {
          showToast(
            "error",
            result.error || "Something went wrong. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showToast(
        "error",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    // {
    //   icon: <Mail className="w-6 h-6" />,
    //   title: 'Email',
    //   info: 'hello@techstackstudio.com',
    //   link: 'mailto:hello@techstackstudio.com'
    // },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: 'Phone',
    //   info: '+1 (555) 123-4567',
    //   link: 'tel:+15551234567'
    // },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Remote & Global",
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      info: "Within 24 hours",
      link: null,
    },
  ];

  const projectTypes = [
    "New Website",
    "Web Application",
    "E-commerce",
    "API Development",
    "Mobile App",
    "Redesign",
    "Maintenance",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Let's discuss",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen vintage-texture flex items-center justify-center">
        <Toast
          type={toast.type}
          message={toast.message}
          isVisible={toast.isVisible}
          onClose={hideToast}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <CheckCircle className="w-20 h-20 text-amber-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold gradient-text mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-md">
            We&apos;ve received your message and will get back to you within 24
            hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                budget: "",
                message: "",
                project: "",
              });
            }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen vintage-texture">
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/uploads/Translucent_glass_effect_backgrounds_with_subtle__c237b576-5f32-4fe8-98dd-4d3805568f89_2.png"
            alt="Glass effect background"
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
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Get in touch with us to
              discuss your project and discover how we can help you achieve your
              goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                <span className="gradient-text">Get In Touch</span>
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-black">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-amber-400 font-semibold">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-300 hover:text-amber-400 transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.info}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass-effect p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-amber-400 mb-4">
                  Why Choose Tech Stack Studio?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>100% Client Satisfaction Rate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Fast Turnaround Times</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Modern Technology Stack</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Ongoing Support & Maintenance</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Start Your Project
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-amber-400 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-400 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-amber-400 font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-amber-400 font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-amber-400 font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-amber-400 font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-gray-600 disabled:to-gray-700 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-900/10 via-amber-800/5 to-amber-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>

            <div className="max-w-3xl mx-auto text-left">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">
                    How long does a typical project take?
                  </h3>
                  <p className="text-gray-300">
                    Project timelines vary based on complexity. Simple websites
                    take 2-4 weeks, while full web applications can take 6-12
                    weeks. We&apos;ll provide a detailed timeline during our
                    initial consultation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">
                    Do you provide ongoing support after launch?
                  </h3>
                  <p className="text-gray-300">
                    Yes! All our packages include support and maintenance.
                    We&apos;re here to help with updates, bug fixes, and feature
                    additions long after your project goes live.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">
                    Can you work with our existing team?
                  </h3>
                  <p className="text-gray-300">
                    Absolutely! We love collaborating with in-house teams and
                    can integrate seamlessly with your existing workflows and
                    development processes.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
