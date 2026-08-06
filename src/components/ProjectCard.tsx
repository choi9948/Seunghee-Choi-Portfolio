import React from 'react';
    import { motion } from 'framer-motion';
    import { Github, ExternalLink, Star } from 'lucide-react';

    export interface Project {
      id: string;
      title: string;
      description: string;
      tags: string[];
      stars: number;
      githubUrl: string;
      liveUrl: string;
      image: string;
    }

    interface ProjectCardProps {
      project: Project;
      index: number;
    }

    const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
      return (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group relative bg-[hsl(var(--card))] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="aspect-[16/10] overflow-hidden bg-[hsl(var(--muted))]">
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              width={640}
              height={400}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-bold text-white group-hover:text-[hsl(var(--accent))] transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))] shrink-0">
                <Star className="w-3.5 h-3.5" />
                <span>{project.stars}</span>
              </div>
            </div>

            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-[hsl(var(--muted-foreground))] border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </motion.article>
      );
    };

    export default ProjectCard;