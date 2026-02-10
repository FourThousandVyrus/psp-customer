'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimateInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

export function AnimateIn({
  children,
  delay = 0,
  className,
  ...rest
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
