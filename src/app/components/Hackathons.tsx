import { motion } from 'motion/react';
import { Award, MapPin, Code } from 'lucide-react';
import { hackathons } from '../../data/portfolio-data';

export function Hackathons() {
  return (
    <section
      id="hackathons"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[hsl(230,50%,25%)] via-[hsl(230,45%,28%)] to-[hsl(230,50%,30%)] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 
        w-[250px] sm:w-[400px] md:w-[500px] 
        h-[250px] sm:h-[400px] md:h-[500px] 
        bg-[hsl(45,95%,55%)]/20 rounded-full blur-[100px]"></div>

        <div className="absolute bottom-0 right-0 
        w-[300px] sm:w-[450px] md:w-[600px] 
        h-[300px] sm:h-[450px] md:h-[600px] 
        bg-[hsl(230,50%,40%)]/30 rounded-full blur-[120px]"></div>
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
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-[hsl(45,95%,55%)]/20 rounded-full mb-4 sm:mb-6 border border-[hsl(45,95%,55%)]/30"
            >
              <Code className="w-4 h-4 text-[hsl(45,95%,55%)]" />
              <span className="text-[hsl(45,40%,95%)] text-sm sm:text-base">
                Innovation Challenges
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[hsl(45,40%,95%)] mb-3 sm:mb-4">
              Hackathons
            </h2>

            <p className="text-[hsl(45,40%,90%)]/80 text-sm sm:text-base md:text-lg px-2">
              Competing and innovating at national-level events
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="group p-4 sm:p-6 md:p-8 
                bg-gradient-to-br from-[hsl(230,50%,35%)]/60 to-[hsl(230,50%,30%)]/40 
                backdrop-blur-sm rounded-xl sm:rounded-2xl 
                border-2 border-[hsl(45,95%,55%)]/30 
                hover:border-[hsl(45,95%,55%)]/60 
                transition-all duration-300 
                hover:shadow-xl sm:hover:shadow-2xl 
                hover:shadow-[hsl(45,95%,55%)]/20"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl 
                    bg-gradient-to-br from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] 
                    flex items-center justify-center shadow-lg 
                    group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">

                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[hsl(45,40%,95%)] group-hover:text-[hsl(45,95%,55%)] transition-colors">
                        {hackathon.name}
                      </h3>

                      <span className="self-start sm:self-auto px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm 
                      bg-gradient-to-r from-[hsl(45,95%,55%)] to-[hsl(45,95%,65%)] 
                      text-white rounded-full whitespace-nowrap shadow-md">
                        {hackathon.status}
                      </span>
                    </div>

                    {hackathon.location && (
                      <div className="flex items-center gap-2 text-[hsl(45,40%,95%)]/80 mb-2 sm:mb-3 text-sm sm:text-base">
                        <MapPin className="w-4 h-4 text-[hsl(45,95%,55%)]" />
                        <p>{hackathon.location}</p>
                      </div>
                    )}

                    <div className="bg-[hsl(230,50%,35%)]/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[hsl(45,95%,55%)]/20">
                      <p className="text-[hsl(45,40%,95%)] text-sm sm:text-base">
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
