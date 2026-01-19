import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 200,
        opacity: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Minimal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 dark:to-gray-900/50 pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Large headline inspired by Lenis */}
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tighter"
          >
            ENTERPRISE
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-bold leading-[0.9] tracking-tighter"
          >
            <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-electric-500 bg-clip-text text-transparent">
              SOFTWARE
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            ref={subtitleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body leading-relaxed"
          >
            Transforming ideas into scalable solutions that drive business growth
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#projects"
              className="px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all hover:scale-105"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
            >
              <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
              <ArrowDownIcon className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
