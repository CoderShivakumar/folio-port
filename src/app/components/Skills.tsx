import { motion } from 'motion/react';
import {
  Database,
  Server,
  Workflow,
  Layout,
  GitBranch,
  Cpu,
} from 'lucide-react';

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';

import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiJavascript,
} from 'react-icons/si';

import { skills } from '../../data/portfolio-data';

// 🔥 Strong branding icon map
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  java: FaJava,
  react: FaReact,
  node: FaNodeJs,
  mongodb: SiMongodb,
  mysql: SiMysql,
  express: SiExpress,
  javascript: SiJavascript,
  git: FaGitAlt,

  // fallback system icons
  database: Database,
  server: Server,
  workflow: Workflow,
  layout: Layout,
  'git-branch': GitBranch,
  cpu: Cpu,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[hsl(230,50%,25%)] via-[hsl(230,45%,28%)] to-[hsl(230,50%,22%)] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 
        w-[250px] sm:w-[400px] md:w-[500px] 
        h-[250px] sm:h-[400px] md:h-[500px] 
        bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>

        <div className="absolute bottom-0 left-0 
        w-[300px] sm:w-[450px] md:w-[600px] 
        h-[300px] sm:h-[450px] md:h-[600px] 
        bg-[hsl(230,50%,40%)]/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 sm:px-6 py-2 bg-[hsl(45,95%,55%)]/20 rounded-full mb-4 sm:mb-6"
            >
              <span className="text-[hsl(45,95%,55%)] text-sm sm:text-base">
                Technical Expertise
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[hsl(45,40%,95%)] mb-3 sm:mb-4">
              Skills
            </h2>

            <p className="text-[hsl(45,40%,90%)]/80 text-sm sm:text-base md:text-lg">
              Technologies I work with
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Cpu;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="group relative flex flex-col items-center justify-center 
                  p-4 sm:p-6 md:p-8 
                  bg-gradient-to-br from-[hsl(230,50%,35%)]/60 to-[hsl(230,50%,30%)]/40 
                  backdrop-blur-sm rounded-2xl border-2 border-[hsl(45,95%,55%)]/20 
                  hover:border-[hsl(45,95%,55%)]/60 transition-all duration-300 
                  shadow-lg hover:shadow-[hsl(45,95%,55%)]/20 hover:shadow-2xl"
                >
                  {/* Glow Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,95%,55%)]/0 to-[hsl(45,95%,55%)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[hsl(45,95%,55%)] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />

                  {/* Name */}
                  <p className="text-[hsl(45,40%,95%)] text-xs sm:text-sm md:text-base text-center relative z-10">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
