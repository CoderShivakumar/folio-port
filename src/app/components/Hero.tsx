import { motion } from 'motion/react';
import { personalInfo } from '../../data/portfolio-data';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[hsl(230,50%,25%)] via-[hsl(230,45%,30%)] to-[hsl(230,50%,35%)]"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[hsl(45,95%,55%)]/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(230,50%,50%)]/40 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[hsl(45,95%,65%)]/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[hsl(45,95%,55%)] rounded-full"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-[hsl(45,95%,55%)] rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-[hsl(45,95%,55%)] rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-[hsl(45,95%,55%)] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-9xl text-[hsl(45,40%,95%)] mb-8 tracking-tight drop-shadow-2xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-48 h-1.5 bg-gradient-to-r from-transparent via-[hsl(45,95%,55%)] to-transparent mx-auto mb-10"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-3xl md:text-4xl text-[hsl(45,95%,55%)] mb-6 tracking-wide"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-[hsl(45,40%,90%)] italic max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(45,40%,95%)] via-[hsl(45,40%,95%)]/50 to-transparent"></div>
    </section>
  );
}
