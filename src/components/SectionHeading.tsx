import React from 'react';
    import { motion } from 'framer-motion';

    interface SectionHeadingProps {
      eyebrow: string;
      title: string;
      description?: string;
      align?: 'left' | 'center';
    }

    const SectionHeading: React.FC<SectionHeadingProps> = ({
      eyebrow,
      title,
      description,
      align = 'left',
    }) => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          <span className="inline-block font-mono text-xs font-semibold text-[hsl(var(--accent))] tracking-widest uppercase mb-3">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      );
    };

    export default SectionHeading;