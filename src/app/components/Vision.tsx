import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';
import { vision } from '../../data/portfolio-data';

export function Vision() {
  return (
    <section id="vision" className="py-32 px-6 bg-gradient-to-br from-[hsl(45,40%,95%)] via-[hsl(45,35%,98%)] to-[hsl(45,40%,96%)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[hsl(230,50%,30%)]/10 to-[hsl(45,95%,55%)]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[hsl(230,50%,30%)]/10 to-[hsl(45,95%,55%)]/10 rounded-full mb-8 border border-[hsl(230,50%,30%)]/20"
          >
            <Lightbulb className="w-4 h-4 text-[hsl(45,95%,55%)]" />
            <span className="text-[hsl(230,50%,30%)]">Driving Purpose</span>
          </motion.div>

          <h2 className="text-6xl md:text-7xl text-[hsl(230,50%,30%)] mb-16">Vision</h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(45,95%,55%)]/20 to-[hsl(230,50%,30%)]/10 rounded-3xl blur-xl"></div>
            <blockquote className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl border-2 border-[hsl(230,15%,85%)] shadow-xl">
              <div className="absolute -top-6 left-12 text-8xl text-[hsl(45,95%,55%)]/30 select-none">"</div>
              <p className="text-2xl md:text-3xl text-[hsl(230,30%,15%)] italic leading-relaxed relative z-10">
                {vision.quote}
              </p>
              <div className="absolute -bottom-6 right-12 text-8xl text-[hsl(45,95%,55%)]/30 select-none rotate-180">"</div>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
