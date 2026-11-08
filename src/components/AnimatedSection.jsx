import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable scroll-triggered animation wrapper
 * Wraps any section content with a smooth fade-up reveal on viewport entry
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  ...props
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

