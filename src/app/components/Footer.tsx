import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-data';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[hsl(230,50%,25%)] via-[hsl(230,45%,28%)] to-[hsl(230,50%,22%)] text-white overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 
        w-[200px] sm:w-[300px] md:w-[400px] 
        h-[200px] sm:h-[300px] md:h-[400px] 
        bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          {/* Name + Role */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 font-serif">
              {personalInfo.name}
            </h3>

            <p className="text-[hsl(45,95%,55%)] text-sm sm:text-base md:text-lg lg:text-xl">
              {personalInfo.role}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10">
            <motion.a
              whileHover={{ scale: 1.1, y: -4 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
              rounded-full bg-[hsl(230,50%,35%)]/50 backdrop-blur-sm 
              flex items-center justify-center border-2 border-[hsl(45,95%,55%)]/30 
              hover:border-[hsl(45,95%,55%)] transition-all"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -4 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
              rounded-full bg-[hsl(230,50%,35%)]/50 backdrop-blur-sm 
              flex items-center justify-center border-2 border-[hsl(45,95%,55%)]/30 
              hover:border-[hsl(45,95%,55%)] transition-all"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -4 }}
              href="mailto:shivakumar@example.com"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
              rounded-full bg-[hsl(230,50%,35%)]/50 backdrop-blur-sm 
              flex items-center justify-center border-2 border-[hsl(45,95%,55%)]/30 
              hover:border-[hsl(45,95%,55%)] transition-all"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-20 sm:w-24 md:w-32 h-[2px] bg-gradient-to-r from-transparent via-[hsl(45,95%,55%)] to-transparent mx-auto mb-6 sm:mb-8"></div>

          {/* Text */}
          <p className="text-[hsl(45,40%,90%)]/70 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 flex-wrap">
            Built with 
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[hsl(45,95%,55%)] animate-pulse" /> 
            using React & Tailwind CSS
          </p>

          <p className="text-[hsl(45,40%,90%)]/50 text-xs sm:text-sm mt-3 sm:mt-4">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

        </motion.div>
      </div>
    </footer>
  );
}
