import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  // Floating tech symbols data
  const techSymbols = [
    { symbol: '<>', x: '10%', y: '20%', delay: 0, duration: 20, size: 'text-5xl' },
    { symbol: '{ }', x: '80%', y: '15%', delay: 2, duration: 25, size: 'text-6xl' },
    { symbol: '</>', x: '15%', y: '70%', delay: 1, duration: 22, size: 'text-4xl' },
    { symbol: 'λ', x: '85%', y: '75%', delay: 3, duration: 18, size: 'text-5xl' },
    { symbol: 'Σ', x: '25%', y: '40%', delay: 1.5, duration: 24, size: 'text-6xl' },
    { symbol: '∞', x: '70%', y: '45%', delay: 2.5, duration: 21, size: 'text-5xl' },
    { symbol: 'π', x: '50%', y: '10%', delay: 0.5, duration: 23, size: 'text-4xl' },
    { symbol: '0x', x: '40%', y: '80%', delay: 1.8, duration: 19, size: 'text-5xl' },
    { symbol: '[]', x: '90%', y: '35%', delay: 2.2, duration: 20, size: 'text-6xl' },
    { symbol: '()', x: '5%', y: '50%', delay: 0.8, duration: 26, size: 'text-4xl' },
    { symbol: '=>', x: '60%', y: '25%', delay: 1.2, duration: 22, size: 'text-5xl' },
    { symbol: '!=', x: '30%', y: '85%', delay: 2.8, duration: 24, size: 'text-4xl' },
    { symbol: '&&', x: '75%', y: '60%', delay: 1.6, duration: 21, size: 'text-6xl' },
    { symbol: '||', x: '20%', y: '30%', delay: 2.4, duration: 23, size: 'text-5xl' },
    { symbol: '++', x: '65%', y: '70%', delay: 0.6, duration: 25, size: 'text-4xl' },
  ];

  // Geometric shapes
  const shapes = [
    { type: 'circle', x: '12%', y: '35%', delay: 0, size: 80 },
    { type: 'square', x: '78%', y: '50%', delay: 1, size: 60 },
    { type: 'triangle', x: '35%', y: '15%', delay: 2, size: 70 },
    { type: 'circle', x: '88%', y: '80%', delay: 1.5, size: 50 },
    { type: 'square', x: '18%', y: '60%', delay: 0.5, size: 65 },
    { type: 'triangle', x: '65%', y: '12%', delay: 2.5, size: 55 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
      {/* Animated tech symbols floating in background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Tech Symbols */}
        {techSymbols.map((item, index) => (
          <motion.div
            key={`symbol-${index}`}
            className={`absolute ${item.size} font-mono font-bold text-primary-500/30 dark:text-primary-400/20 select-none`}
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.symbol}
          </motion.div>
        ))}

        {/* Geometric Shapes */}
        {shapes.map((shape, index) => (
          <motion.div
            key={`shape-${index}`}
            className="absolute"
            style={{ left: shape.x, top: shape.y }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + index * 2,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {shape.type === 'circle' && (
              <div
                className="rounded-full border-4 border-accent-400/40 dark:border-accent-500/30"
                style={{ width: shape.size, height: shape.size }}
              />
            )}
            {shape.type === 'square' && (
              <div
                className="border-4 border-electric-400/40 dark:border-electric-500/30 rotate-45"
                style={{ width: shape.size, height: shape.size }}
              />
            )}
            {shape.type === 'triangle' && (
              <div
                className="border-4 border-primary-400/40 dark:border-primary-500/30"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${shape.size / 2}px solid transparent`,
                  borderRight: `${shape.size / 2}px solid transparent`,
                  borderBottom: `${shape.size}px solid currentColor`,
                  borderBottomColor: 'rgb(139 92 246 / 0.4)',
                }}
              />
            )}
          </motion.div>
        ))}
        
        {/* Gradient orbs */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-32 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -left-32 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-1/3 w-96 h-96 bg-electric-400/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.5 }}
            className="flex items-center justify-center space-x-2 text-primary-600 dark:text-primary-400"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <SparklesIcon className="h-5 w-5" />
            </motion.div>
            <motion.span 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm font-medium tracking-wide uppercase"
            >
              Software Development Agency
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            <motion.span 
              className="block"
              initial={{ x: -100, opacity: 0, rotateY: -90 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            >
              Code
            </motion.span>
            <motion.span 
              className="block text-primary-500"
              initial={{ x: 100, opacity: 0, rotateY: 90 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            >
              World
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We build smart software for a smarter future.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Delivering scalable, AI-powered, and data-driven software solutions for startups and enterprises worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 10px 30px rgba(255, 51, 102, 0.3)",
                  "0 15px 40px rgba(255, 51, 102, 0.5)",
                  "0 10px 30px rgba(255, 51, 102, 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity } 
              }}
              className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRightIcon className="h-5 w-5" />
              </motion.div>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border-2 border-accent-500 hover:border-accent-600 hover:shadow-xl"
            >
              See Our Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;