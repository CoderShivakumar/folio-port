import { motion } from 'motion/react';
import { Link, useRoute } from 'wouter';
import { ArrowLeft, Trophy, Users, Info, Award } from 'lucide-react';
import { achievements } from '../../data/portfolio-data';

export function AchievementDetail() {
  const [, params] = useRoute('/achievements/:id');
  const achievement = achievements.find((a) => a.id === params?.id);

  if (!achievement) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(45,40%,95%)] to-[hsl(45,35%,96%)]">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-[hsl(45,95%,55%)]" />
          </div>
          <h2 className="text-4xl text-[hsl(230,50%,30%)] mb-4">Achievement not found</h2>
          <Link href="/">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] text-white rounded-full hover:shadow-lg transition-all">
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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[hsl(230,50%,30%)]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[hsl(45,95%,55%)]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm text-[hsl(230,50%,30%)] hover:text-[hsl(45,95%,55%)] rounded-full border-2 border-[hsl(230,15%,85%)] hover:border-[hsl(45,95%,55%)] transition-all mb-10 hover:shadow-lg">
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </a>
          </Link>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-[hsl(230,15%,85%)]">
            <div className="relative bg-gradient-to-br from-[hsl(230,50%,30%)] via-[hsl(230,45%,32%)] to-[hsl(230,50%,35%)] p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[hsl(45,95%,55%)]/10 rounded-full blur-[80px]"></div>

              <div className="relative z-10 flex items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] flex items-center justify-center flex-shrink-0 shadow-2xl">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Award className="w-4 h-4" />
                    <span>Achievement</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl mb-3 leading-tight">{achievement.title}</h1>
                  <p className="text-[hsl(45,40%,95%)] text-xl">{achievement.shortDescription}</p>
                </div>
              </div>
            </div>

            <div className="p-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] flex items-center justify-center">
                    <Info className="w-5 h-5 text-[hsl(45,95%,55%)]" />
                  </div>
                  <h2 className="text-3xl text-[hsl(230,50%,30%)]">Description</h2>
                </div>
                <p className="text-[hsl(230,30%,15%)] leading-relaxed text-lg pl-14">
                  {achievement.description}
                </p>
              </motion.div>

              {achievement.teamContributions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-3xl text-[hsl(230,50%,30%)]">Team Contributions</h2>
                  </div>
                  <p className="text-[hsl(230,30%,15%)] leading-relaxed text-lg pl-14">
                    {achievement.teamContributions}
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[hsl(45,30%,98%)] to-[hsl(45,35%,96%)] p-8 rounded-2xl border-2 border-[hsl(230,15%,85%)]"
              >
                <h3 className="text-2xl text-[hsl(230,50%,30%)] mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)]"></div>
                  Context
                </h3>
                <p className="text-[hsl(230,30%,15%)] leading-relaxed text-lg">
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
