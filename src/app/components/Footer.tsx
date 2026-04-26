import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-data';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[hsl(230,50%,25%)] via-[hsl(230,45%,28%)] to-[hsl(230,50%,22%)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl mb-3 font-serif">{personalInfo.name}</h3>
            <p className="text-[hsl(45,95%,55%)] text-xl">{personalInfo.role}</p>
          </div>

          <div className="flex items-center justify-center gap-6 mb-10">
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[hsl(230,50%,35%)]/50 backdrop-blur-sm flex items-center justify-center border-2 border-[hsl(45,95%,55%)]/30 hover:border-[hsl(45,95%,55%)] transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[hsl(230,50%,35%)]/50 backdrop-blur-sm flex items-center justify-center border-2 border-[hsl(45,95%,55%)]/30 hover:border-[hsl(45,95%,55%)] transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="mailto:shivakumar@example.com"
              className="w-12 h-12 rounded-full bg-[hsl(230,50%,35%)]/50 backdrop-blur-sm flex items-center justify-center border-2 border-[hsl(45,95%,55%)]/30 hover:border-[hsl(45,95%,55%)] transition-all"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[hsl(45,95%,55%)] to-transparent mx-auto mb-8"></div>

          <p className="text-[hsl(45,40%,90%)]/70 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-[hsl(45,95%,55%)] animate-pulse" /> using React & Tailwind CSS
          </p>

          <p className="text-[hsl(45,40%,90%)]/50 mt-4">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
