import { motion } from 'motion/react';
import { Link, useRoute } from 'wouter';
import { ArrowLeft, Trophy, Users, Info, Award } from 'lucide-react';
import { achievements } from '../../data/portfolio-data';

export function AchievementDetail() {
  const [, params] = useRoute('/achievements/:id');
  const achievement = achievements.find((a) => a.id === params?.id);

  if (!achievement) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(45,40%,95%)] to-[hsl(45,35%,96%)] px-4">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[hsl(45,95%,55%)]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl text-[hsl(230,50%,30%)] mb-3 sm:mb-4">
            Achievement not found
          </h2>

          <Link href="/">
            <a className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] text-white rounded-full hover:shadow-lg transition-all text-sm sm:text-base">
              <ArrowLeft className="w-4 h-4" />
              Return to Portfolio
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(45,40%,95%)] via-[hsl(45,35%,97%)] to-[hsl(45,40%,96%)] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 
        w-[250px] sm:w-[400px] md:w-[500px] 
        h-[250px] sm:h-[400px] md:h-[500px] 
        bg-[hsl(230,50%,30%)]/10 rounded-full blur-[100px]"></div>

        <div className="absolute bottom-1/4 right-1/4 
        w-[300px] sm:w-[450px] md:w-[600px] 
        h-[300px] sm:h-[450px] md:h-[600px] 
        bg-[hsl(45,95%,55%)]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Back Button */}
          <Link href="/">
            <a className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/80 backdrop-blur-sm text-[hsl(230,50%,30%)] hover:text-[hsl(45,95%,55%)] rounded-full border-2 border-[hsl(230,15%,85%)] hover:border-[hsl(45,95%,55%)] transition-all mb-6 sm:mb-10 text-sm sm:text-base">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Portfolio
            </a>
          </Link>

          {/* Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border-2 border-[hsl(230,15%,85%)]">

            {/* Header */}
            <div className="relative bg-gradient-to-br from-[hsl(230,50%,30%)] via-[hsl(230,45%,32%)] to-[hsl(230,50%,35%)] p-5 sm:p-8 md:p-10 text-white overflow-hidden">

              <div className="absolute top-0 right-0 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">

                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] flex items-center justify-center flex-shrink-0 shadow-lg sm:shadow-2xl">
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>

                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 text-xs sm:text-sm">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Achievement</span>
                  </div>

                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 leading-tight">
                    {achievement.title}
                  </h1>

                  <p className="text-[hsl(45,40%,95%)] text-sm sm:text-base md:text-xl">
                    {achievement.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-7 md:p-10 space-y-6 sm:space-y-8">

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] flex items-center justify-center">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(45,95%,55%)]" />
                  </div>

                  <h2 className="text-lg sm:text-xl md:text-3xl text-[hsl(230,50%,30%)]">
                    Description
                  </h2>
                </div>

                <p className="text-[hsl(230,30%,15%)] text-sm sm:text-base md:text-lg leading-relaxed pl-0 sm:pl-12 md:pl-14">
                  {achievement.description}
                </p>
              </motion.div>

              {/* Team Contributions */}
              {achievement.teamContributions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] flex items-center justify-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>

                    <h2 className="text-lg sm:text-xl md:text-3xl text-[hsl(230,50%,30%)]">
                      Team Contributions
                    </h2>
                  </div>

                  <p className="text-[hsl(230,30%,15%)] text-sm sm:text-base md:text-lg leading-relaxed pl-0 sm:pl-12 md:pl-14">
                    {achievement.teamContributions}
                  </p>
                </motion.div>
              )}

              {/* Context */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[hsl(45,30%,98%)] to-[hsl(45,35%,96%)] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-[hsl(230,15%,85%)]"
              >
                <h3 className="text-base sm:text-lg md:text-2xl text-[hsl(230,50%,30%)] mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)]"></div>
                  Context
                </h3>

                <p className="text-[hsl(230,30%,15%)] text-sm sm:text-base md:text-lg leading-relaxed">
                  {achievement.context}
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
