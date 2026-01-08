import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  delay = 0,
  direction = 'up'
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
