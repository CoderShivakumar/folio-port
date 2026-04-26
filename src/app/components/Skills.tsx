import { motion } from 'motion/react';
import {
  Database,
  Server,
  Workflow,
  Code,
  Coffee,
  Layout,
  GitBranch,
  Cpu,
} from 'lucide-react';
import { skills } from '../../data/portfolio-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: Code,
  database: Database,
  server: Server,
  workflow: Workflow,
  code: Code,
  coffee: Coffee,
  layout: Layout,
  'git-branch': GitBranch,
  cpu: Cpu,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-gradient-to-br from-[hsl(230,50%,25%)] via-[hsl(230,45%,28%)] to-[hsl(230,50%,22%)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[hsl(230,50%,40%)]/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-[hsl(45,95%,55%)]/20 rounded-full mb-6"
            >
              <span className="text-[hsl(45,95%,55%)]">Technical Expertise</span>
            </motion.div>
            <h2 className="text-6xl md:text-7xl text-[hsl(45,40%,95%)] mb-4">
              Skills
            </h2>
            <p className="text-[hsl(45,40%,90%)]/80 text-lg">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Code;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[hsl(230,50%,35%)]/60 to-[hsl(230,50%,30%)]/40 backdrop-blur-sm rounded-2xl border-2 border-[hsl(45,95%,55%)]/20 hover:border-[hsl(45,95%,55%)]/60 transition-all duration-300 shadow-lg hover:shadow-[hsl(45,95%,55%)]/20 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,95%,55%)]/0 to-[hsl(45,95%,55%)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon className="w-14 h-14 text-[hsl(45,95%,55%)] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-[hsl(45,40%,95%)] text-center relative z-10">{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
