import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Trophy, Award, Sparkles } from 'lucide-react';
import { achievements } from '../../data/portfolio-data';

export function Achievements() {
  return (
    <section
      id="achievements"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[hsl(45,40%,95%)] via-[hsl(45,35%,97%)] to-[hsl(45,40%,95%)] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 
        w-[250px] sm:w-[400px] md:w-[500px] 
        h-[250px] sm:h-[400px] md:h-[500px] 
        bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>

        <div className="absolute bottom-1/4 right-1/4 
        w-[300px] sm:w-[450px] md:w-[600px] 
        h-[300px] sm:h-[450px] md:h-[600px] 
        bg-[hsl(230,50%,30%)]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-gradient-to-r from-[hsl(45,95%,55%)]/20 to-[hsl(230,50%,30%)]/10 rounded-full mb-4 sm:mb-6 border border-[hsl(45,95%,55%)]/30"
            >
              <Sparkles className="w-4 h-4 text-[hsl(45,95%,55%)]" />
              <span className="text-[hsl(230,50%,30%)] text-sm sm:text-base">
                Milestones & Recognition
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[hsl(230,50%,30%)] mb-3 sm:mb-4">
              Achievements
            </h2>

            <p className="text-[hsl(230,30%,15%)]/70 text-sm sm:text-base md:text-lg px-2">
              Celebrating excellence and success
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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

                      {/* Badge */}
                      {isTopAchievement && (
                        <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                          bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] 
                          rounded-full flex items-center justify-center shadow-md sm:shadow-lg animate-pulse">
                            <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Card */}
                      <div className="h-full p-4 sm:p-6 md:p-7 
                      bg-gradient-to-br from-white via-white to-[hsl(45,30%,98%)] 
                      rounded-xl sm:rounded-2xl 
                      border-2 border-[hsl(230,15%,85%)] 
                      group-hover:border-[hsl(45,95%,55%)] 
                      transition-all duration-300 
                      group-hover:shadow-xl sm:group-hover:shadow-2xl 
                      group-hover:shadow-[hsl(45,95%,55%)]/20 
                      sm:group-hover:-translate-y-2 
                      cursor-pointer overflow-hidden relative">

                        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,95%,55%)]/0 via-[hsl(45,95%,55%)]/0 to-[hsl(45,95%,55%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative z-10">
                          {/* Title */}
                          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-5">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl 
                            bg-gradient-to-br from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] 
                            flex items-center justify-center flex-shrink-0 
                            group-hover:scale-110 transition-transform duration-300 shadow-md sm:shadow-lg">
                              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[hsl(45,95%,55%)]" />
                            </div>

                            <h3 className="text-base sm:text-lg md:text-xl text-[hsl(230,50%,30%)] leading-tight group-hover:text-[hsl(230,50%,25%)] transition-colors">
                              {achievement.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-[hsl(230,30%,15%)]/80 text-sm sm:text-base leading-relaxed">
                            {achievement.shortDescription}
                          </p>

                          {/* Footer */}
                          <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-[hsl(230,15%,85%)]">
                            <span className="text-[hsl(45,95%,55%)] text-sm sm:text-base group-hover:underline">
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
