import { motion } from 'motion/react';
import { Briefcase, Users, Heart, Calendar } from 'lucide-react';
import { experiences } from '../../data/portfolio-data';

export function Experience() {
  const internships = experiences.filter((exp) => exp.type === 'internship');
  const positions = experiences.filter((exp) => exp.type === 'position');
  const volunteering = experiences.filter((exp) => exp.type === 'volunteering');
  const coordinators = experiences.filter((exp) => exp.type === 'coordinator');

  const leftColumnData = [...internships, ...positions];
  const rightColumnData = [...volunteering, ...coordinators];

  const ExperienceCard = ({ item, index }: { item: any; index: number }) => {
    const IconComponent = item.type === 'internship' ? Briefcase : item.type === 'position' ? Users : item.type === 'volunteering' ? Heart : Calendar;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group p-7 bg-gradient-to-br from-white to-[hsl(45,30%,98%)] rounded-2xl border-2 border-[hsl(230,15%,85%)] hover:border-[hsl(45,95%,55%)]/50 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-start gap-5 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <IconComponent className="w-6 h-6 text-[hsl(45,95%,55%)]" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl text-[hsl(230,50%,30%)] mb-2 group-hover:text-[hsl(230,50%,25%)] transition-colors">
              {item.title}
            </h3>
            <p className="text-[hsl(230,30%,15%)]/70 mb-1">{item.organization}</p>
            <div className="inline-block px-3 py-1 bg-[hsl(45,95%,55%)]/20 text-[hsl(45,95%,45%)] rounded-full">
              {item.period}
            </div>
          </div>
        </div>
        <p className="text-[hsl(230,30%,15%)] leading-relaxed pl-[68px]">{item.description}</p>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-br from-[hsl(45,40%,95%)] via-[hsl(45,35%,97%)] to-[hsl(45,40%,96%)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[hsl(230,50%,30%)]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[hsl(45,95%,55%)]/10 rounded-full blur-[120px]"></div>
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[hsl(230,50%,30%)]/10 to-[hsl(45,95%,55%)]/10 rounded-full mb-6 border border-[hsl(230,50%,30%)]/20"
            >
              <Briefcase className="w-4 h-4 text-[hsl(230,50%,30%)]" />
              <span className="text-[hsl(230,50%,30%)]">Professional Journey</span>
            </motion.div>
            <h2 className="text-6xl md:text-7xl text-[hsl(230,50%,30%)] mb-4">
              Experience
            </h2>
            <p className="text-[hsl(230,30%,15%)]/70 text-lg">Building skills through diverse roles and responsibilities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-8 p-4 bg-gradient-to-r from-[hsl(230,50%,30%)]/10 to-transparent rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(230,50%,30%)] to-[hsl(230,45%,35%)] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[hsl(45,95%,55%)]" />
                </div>
                <h3 className="text-2xl text-[hsl(230,50%,30%)]">
                  Internships & Positions
                </h3>
              </div>
              <div className="space-y-5">
                {leftColumnData.map((item, index) => (
                  <ExperienceCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8 p-4 bg-gradient-to-r from-[hsl(45,95%,55%)]/10 to-transparent rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl text-[hsl(230,50%,30%)]">
                  Volunteering & Coordination
                </h3>
              </div>
              <div className="space-y-5">
                {rightColumnData.map((item, index) => (
                  <ExperienceCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
