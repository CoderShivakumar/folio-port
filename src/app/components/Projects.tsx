import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Code2 } from 'lucide-react';
import { projects } from '../../data/portfolio-data';

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[hsl(45,40%,95%)] to-[hsl(45,35%,98%)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 
        w-[200px] sm:w-[300px] md:w-[400px] 
        h-[200px] sm:h-[300px] md:h-[400px] 
        bg-[hsl(230,50%,30%)]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-[hsl(230,50%,30%)]/10 rounded-full mb-4 sm:mb-6"
            >
              <Code2 className="w-4 h-4 text-[hsl(230,50%,30%)]" />
              <span className="text-[hsl(230,50%,30%)] text-sm sm:text-base">
                Portfolio
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[hsl(230,50%,30%)] mb-3 sm:mb-4">
              Projects
            </h2>

            <p className="text-[hsl(230,30%,15%)]/70 text-sm sm:text-base md:text-lg px-2">
              Building impactful solutions with modern technologies
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-4 sm:space-y-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-xl sm:rounded-2xl border-2 border-[hsl(230,15%,85%)] overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl hover:border-[hsl(45,95%,55%)]/50 transition-all duration-300"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-7 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-[hsl(230,50%,30%)]/5 hover:to-transparent transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[hsl(230,50%,30%)] group-hover:text-[hsl(230,50%,25%)] transition-colors">
                        {project.title}
                      </h3>

                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] text-white rounded-full shadow-md">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm bg-[hsl(230,50%,30%)]/10 text-[hsl(230,50%,30%)] rounded-md sm:rounded-lg border border-[hsl(230,50%,30%)]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[hsl(45,95%,55%)] transition-transform duration-300 ${
                      expandedId === project.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-7 pt-4 sm:pt-5 md:pt-6 border-t-2 border-[hsl(230,15%,85%)] bg-gradient-to-br from-[hsl(45,30%,98%)] to-white">
                        
                        <p className="text-[hsl(230,30%,15%)] mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base md:text-lg">
                          {project.description}
                        </p>

                        <div className="space-y-2 sm:space-y-3">
                          {project.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2 sm:gap-3"
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] mt-2 flex-shrink-0"></div>
                              <span className="text-[hsl(230,30%,15%)] text-sm sm:text-base leading-relaxed">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
