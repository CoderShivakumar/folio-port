import { motion } from 'motion/react';
import { personalInfo } from '../../data/portfolio-data';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[hsl(230,50%,25%)] via-[hsl(230,45%,30%)] to-[hsl(230,50%,35%)]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 
        w-[250px] sm:w-[400px] md:w-[600px] 
        h-[250px] sm:h-[400px] md:h-[600px] 
        bg-[hsl(45,95%,55%)]/30 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-1/4 right-1/4 
        w-[200px] sm:w-[350px] md:w-[500px] 
        h-[200px] sm:h-[350px] md:h-[500px] 
        bg-[hsl(230,50%,50%)]/40 rounded-full blur-[100px]"></div>

        <div className="absolute top-1/2 left-1/2 
        w-[150px] sm:w-[250px] md:w-[400px] 
        h-[150px] sm:h-[250px] md:h-[400px] 
        bg-[hsl(45,95%,65%)]/20 rounded-full blur-[80px]"></div>
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[hsl(45,95%,55%)] rounded-full"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-[hsl(45,95%,55%)] rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-[hsl(45,95%,55%)] rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-[hsl(45,95%,55%)] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-[hsl(45,40%,95%)] mb-6 sm:mb-8 tracking-tight drop-shadow-2xl"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-24 sm:w-32 md:w-48 h-1 bg-gradient-to-r from-transparent via-[hsl(45,95%,55%)] to-transparent mx-auto mb-6 sm:mb-10"
          ></motion.div>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-[hsl(45,95%,55%)] mb-4 sm:mb-6 tracking-wide"
          >
            {personalInfo.role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm sm:text-base md:text-xl lg:text-2xl text-[hsl(45,40%,90%)] italic max-w-3xl mx-auto leading-relaxed px-2"
          >
            {personalInfo.tagline}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-[hsl(45,40%,95%)] via-[hsl(45,40%,95%)]/50 to-transparent"></div>
    </section>
  );
}
