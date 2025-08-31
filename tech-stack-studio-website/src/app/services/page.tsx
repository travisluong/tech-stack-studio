'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Search,
  Zap,
  ArrowRight,
  Check
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Complete web applications from frontend to backend, built with modern frameworks and best practices.',
      features: [
        'React & Next.js Applications',
        'Node.js Backend Development',
        'RESTful API Design',
        'Database Architecture',
        'Authentication Systems',
        'Real-time Features'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love, backed by solid user experience principles.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Wireframing & Prototyping',
        'Design Systems',
        'Responsive Design',
        'Accessibility Standards'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Tailwind CSS', 'Framer Motion', 'CSS3', 'HTML5']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend & APIs',
      description: 'Robust server architectures and APIs that scale with your business needs.',
      features: [
        'RESTful API Development',
        'GraphQL Implementation',
        'Database Design & Optimization',
        'Third-party Integrations',
        'Payment Processing',
        'Data Migration Services'
      ],
      technologies: ['Express.js', 'Fastify', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for modern applications.',
      features: [
        'Cloud Architecture Design',
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Monitoring & Analytics',
        'Performance Optimization',
        'Security Implementation'
      ],
      technologies: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Terraform', 'Kubernetes']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile-First Development',
      description: 'Responsive web applications that work perfectly across all devices and screen sizes.',
      features: [
        'Progressive Web Apps (PWA)',
        'Mobile-Responsive Design',
        'Touch-Friendly Interfaces',
        'Offline Functionality',
        'Performance Optimization',
        'Cross-Browser Compatibility'
      ],
      technologies: ['PWA', 'Service Workers', 'Responsive Design', 'Mobile Testing', 'Touch Events', 'Webkit']
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO & Performance',
      description: 'Optimized applications that rank well in search engines and load lightning-fast.',
      features: [
        'Technical SEO Optimization',
        'Performance Auditing',
        'Core Web Vitals',
        'Page Speed Optimization',
        'Meta Tags & Schema',
        'Analytics Integration'
      ],
      technologies: ['Next.js SEO', 'Lighthouse', 'Google Analytics', 'Search Console', 'GTM', 'Structured Data']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, goals, and requirements through detailed consultation.',
      icon: <Search className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes to visualize the solution.',
      icon: <Palette className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your application with clean code, thorough testing, and regular updates.',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploying to production and providing ongoing support and maintenance.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom Website Design',
        'Up to 5 Pages',
        'Mobile Responsive',
        'Basic SEO Setup',
        'Contact Form',
        '3 Months Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing businesses',
      features: [
        'Full Web Application',
        'Custom Backend API',
        'User Authentication',
        'Database Integration',
        'Advanced SEO',
        'Payment Processing',
        '6 Months Support',
        'Analytics Setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For complex projects and large organizations',
      features: [
        'Scalable Architecture',
        'Custom Integrations',
        'Advanced Security',
        'Performance Optimization',
        'Cloud Infrastructure',
        'Ongoing Maintenance',
        'Priority Support',
        'Team Training'
      ],
      popular: false
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide comprehensive full-stack development services 
              that bring your digital vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-8 rounded-xl hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-black">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-400 mb-3">What&apos;s Included:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-amber-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto">
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
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
              <span className="gradient-text">Pricing</span> Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the package that best fits your needs. All packages include our commitment 
              to quality and ongoing support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`glass-effect p-8 rounded-xl relative transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-amber-400/50 ring-2 ring-amber-400/30' 
                    : 'hover:border-amber-400/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-amber-400 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-2">{pkg.price}</div>
                  <p className="text-gray-300">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black'
                      : 'border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black'
                  }`}
                >
                  Get Started
                </Link>
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
              Ready to Start <span className="gradient-text">Your Project</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create a custom solution that fits your needs perfectly.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}