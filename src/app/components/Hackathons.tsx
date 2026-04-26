import { motion } from 'motion/react';
import { Award, MapPin, Code } from 'lucide-react';
import { hackathons } from '../../data/portfolio-data';

export function Hackathons() {
  return (
    <section id="hackathons" className="py-32 px-6 bg-gradient-to-br from-[hsl(230,50%,25%)] via-[hsl(230,45%,28%)] to-[hsl(230,50%,30%)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[hsl(230,50%,40%)]/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-[hsl(45,95%,55%)]/20 rounded-full mb-6 border border-[hsl(45,95%,55%)]/30"
            >
              <Code className="w-4 h-4 text-[hsl(45,95%,55%)]" />
              <span className="text-[hsl(45,40%,95%)]">Innovation Challenges</span>
            </motion.div>
            <h2 className="text-6xl md:text-7xl text-[hsl(45,40%,95%)] mb-4">
              Hackathons
            </h2>
            <p className="text-[hsl(45,40%,90%)]/80 text-lg">Competing and innovating at national-level events</p>
          </div>

          <div className="grid gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group p-8 bg-gradient-to-br from-[hsl(230,50%,35%)]/60 to-[hsl(230,50%,30%)]/40 backdrop-blur-sm rounded-2xl border-2 border-[hsl(45,95%,55%)]/30 hover:border-[hsl(45,95%,55%)]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[hsl(45,95%,55%)]/20"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl text-[hsl(45,40%,95%)] group-hover:text-[hsl(45,95%,55%)] transition-colors">
                        {hackathon.name}
                      </h3>
                      <span className="px-5 py-2 bg-gradient-to-r from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] text-white rounded-full whitespace-nowrap shadow-lg">
                        {hackathon.status}
                      </span>
                    </div>

                    {hackathon.location && (
                      <div className="flex items-center gap-2 text-[hsl(45,40%,95%)]/80 mb-3">
                        <MapPin className="w-4 h-4 text-[hsl(45,95%,55%)]" />
                        <p>{hackathon.location}</p>
                      </div>
                    )}

                    <div className="bg-[hsl(230,50%,35%)]/40 backdrop-blur-sm p-4 rounded-xl border border-[hsl(45,95%,55%)]/20">
                      <p className="text-[hsl(45,40%,95%)]">
                        <span className="text-[hsl(45,95%,55%)]">Project:</span>{' '}
                        <span className="italic">{hackathon.project}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
