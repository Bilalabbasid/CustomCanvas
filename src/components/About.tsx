import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation on scroll
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-32 bg-white dark:bg-black overflow-hidden"
    >
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <span className="text-[20vw] font-display font-bold whitespace-nowrap text-gray-900 dark:text-white">
          WHO WE ARE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-gray-900 dark:text-white mb-12 leading-tight"
        >
          WE BUILD
          <br />
          <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-electric-500 bg-clip-text text-transparent">
            DIGITAL FUTURE
          </span>
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-body text-gray-600 dark:text-gray-400 leading-relaxed">
            We partner with enterprises to build scalable software solutions. From AI integration to cloud architecture, we deliver technology that drives growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-display font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 border-t border-gray-200 dark:border-gray-800 pt-16"
        >
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-12">
            TECHNOLOGY STACK
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
            {['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'MongoDB', 'Next.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Vue.js', 'Go', 'Terraform', 'Vercel', 'AI Integration', 'Kafka'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ 
                  delay: 0.7 + index * 0.08, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  rotateY: 15,
                  rotateX: 10,
                  scale: 1.1,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="relative py-8 px-6 border border-gray-200 dark:border-gray-800 rounded-xl text-center font-mono text-gray-900 dark:text-white hover:border-primary-500 dark:hover:border-primary-500 transition-all cursor-pointer group"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear"
                  }}
                  style={{ transform: 'translateZ(1px)' }}
                />
                
                {/* Tech name */}
                <span className="relative z-10 text-lg font-semibold" style={{ transform: 'translateZ(20px)' }}>
                  {tech}
                </span>
                
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-accent-500/0 to-electric-500/0 group-hover:from-primary-500/10 group-hover:via-accent-500/10 group-hover:to-electric-500/10 rounded-xl transition-all duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
