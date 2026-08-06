import React from 'react';
    import { motion } from 'framer-motion';
    import { Briefcase } from 'lucide-react';

    export interface Experience {
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
      achievements: string[];
      stack: string[];
    }

    interface ExperienceCardProps {
      experience: Experience;
      index: number;
    }

    const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
      return (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative pl-12 pb-12 last:pb-0"
        >
          <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[hsl(var(--card))] border border-white/10 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-[hsl(var(--accent))]" />
          </div>
          <div className="absolute left-[18px] top-9 bottom-0 w-px bg-white/5 last:hidden" />

          <div className="bg-[hsl(var(--card))] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-white">{experience.role}</h3>
              <span className="text-xs font-mono text-[hsl(var(--accent))]">
                {experience.period}
              </span>
            </div>
            <p className="text-sm font-medium text-[hsl(var(--muted-foreground))] mb-4">
              {experience.company}
            </p>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
              {experience.description}
            </p>
            <ul className="space-y-2 mb-4">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <span className="text-[hsl(var(--accent))] mt-1.5 shrink-0">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-[hsl(var(--muted-foreground))] border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      );
    };

    export default ExperienceCard;