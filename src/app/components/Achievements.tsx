import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Trophy, Award, Sparkles } from 'lucide-react';
import { achievements } from '../../data/portfolio-data';

export function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 bg-gradient-to-br from-[hsl(45,40%,95%)] via-[hsl(45,35%,97%)] to-[hsl(45,40%,95%)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[hsl(230,50%,30%)]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[hsl(45,95%,55%)]/20 to-[hsl(230,50%,30%)]/10 rounded-full mb-6 border border-[hsl(45,95%,55%)]/30"
            >
              <Sparkles className="w-4 h-4 text-[hsl(45,95%,55%)]" />
              <span className="text-[hsl(230,50%,30%)]">Milestones & Recognition</span>
            </motion.div>
            <h2 className="text-6xl md:text-7xl text-[hsl(230,50%,30%)] mb-4">
              Achievements
            </h2>
            <p className="text-[hsl(230,30%,15%)]/70 text-lg">Celebrating excellence and success</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => {
              const isTopAchievement = index < 3;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <Link href={`/achievements/${achievement.id}`}>
                    <a className="group block h-full relative">
                      {isTopAchievement && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="h-full p-7 bg-gradient-to-br from-white via-white to-[hsl(45,30%,98%)] rounded-2xl border-2 border-[hsl(230,15%,85%)] group-hover:border-[hsl(45,95%,55%)] transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[hsl(45,95%,55%)]/20 group-hover:-translate-y-2 cursor-pointer overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,95%,55%)]/0 via-[hsl(45,95%,55%)]/0 to-[hsl(45,95%,55%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-5">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <Trophy className="w-7 h-7 text-[hsl(45,95%,55%)]" />
                            </div>
                            <h3 className="text-xl text-[hsl(230,50%,30%)] leading-tight group-hover:text-[hsl(230,50%,25%)] transition-colors">
                              {achievement.title}
                            </h3>
                          </div>
                          <p className="text-[hsl(230,30%,15%)]/80 leading-relaxed">
                            {achievement.shortDescription}
                          </p>

                          <div className="mt-5 pt-4 border-t border-[hsl(230,15%,85%)]">
                            <span className="text-[hsl(45,95%,55%)] group-hover:underline transition-all">
                              View Details →
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
