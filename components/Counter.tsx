import React, { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ 
  value, 
  duration = 2, 
  suffix = "", 
  className 
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration });
    }
  }, [isInView, value, duration, motionValue]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [motionValue, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
};

export default Counter;
