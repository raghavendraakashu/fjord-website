
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface LogoMarkProps {
  className?: string;
  size?: number;
}

const LogoMark: React.FC<LogoMarkProps> = ({ className = "", size = 40 }) => {
  // Animation settings for a premium, calm feel on load
  const transition = {
    duration: 1.5,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  };

  // Continuous horizontal ripple motion for water lines
  const rippleTransition = {
    duration: 8,
    ease: "easeInOut" as const,
    repeat: Infinity,
    repeatType: "reverse" as const,
  };

  // Continuous vertical wave motion for water lines
  const waveYTransition = {
    duration: 6,
    ease: "easeInOut" as const,
    repeat: Infinity,
    repeatType: "reverse" as const,
  };

  // Main floating and breathing variants for the entire SVG
  const svgVariants: Variants = {
    initial: {},
    animate: {},
    floating: {
      y: [0, -6, 0],
      scale: [1, 1.01, 1],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="initial"
      animate={["animate", "floating"]}
      variants={svgVariants}
    >
      {/* Circle Background - Off White */}
      <motion.circle
        cx="200"
        cy="165"
        r="150"
        fill="#FDFCF0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...transition, delay: 0.1 }}
      />

      {/* Mountains - Staggered Rise */}
      <g clipPath="url(#logo-circle-clip)">
        {/* Distant Mountain Peak */}
        <motion.path
          d="M200 65L350 315H50L200 65Z"
          fill="#4EA0C1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.3 }}
        />
        {/* Main Central Peak (Left side darker) */}
        <motion.path
          d="M175 110L250 315H100L175 110Z"
          fill="#006094"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.4 }}
        />
        {/* Main Central Peak (Right side shadow) */}
        <motion.path
          d="M175 110L250 315H175V110Z"
          fill="#004A73"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.45 }}
        />
        {/* Right Peak */}
        <motion.path
          d="M280 150L380 315H180L280 150Z"
          fill="#4EA0C1"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.5 }}
        />
      </g>

      {/* Water Section */}
      <g>
        {/* Water Line 1 - Steady Base with Very Subtle Swell */}
        <motion.rect
          x="60"
          y="260"
          width="280"
          height="16"
          rx="8"
          fill="#4EA0C1"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: 1, 
            opacity: 1,
            y: [0, 2, 0]
          }}
          transition={{ 
            scaleX: { ...transition, delay: 0.6 },
            opacity: { ...transition, delay: 0.6 },
            y: { ...waveYTransition, duration: 8 }
          }}
        />
        {/* Water Line 2 - Ripple + Wave effect */}
        <motion.path
          d="M70 290C100 290 120 310 150 310C180 310 200 290 230 290C260 290 280 310 310 310C330 310 350 300 350 300"
          stroke="#4EA0C1"
          strokeWidth="16"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            x: [-5, 5],
            y: [-2, 2]
          }}
          transition={{ 
            pathLength: { ...transition, delay: 0.7 },
            opacity: { ...transition, delay: 0.7 },
            x: rippleTransition,
            y: waveYTransition
          }}
        />
        {/* Water Line 3 - Subtle Wave + Offset Ripple */}
        <motion.path
          d="M100 335C130 335 150 345 180 345C210 345 230 335 260 335C280 335 300 345 320 345"
          stroke="#4EA0C1"
          strokeWidth="16"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            x: [3, -3],
            y: [1, -3]
          }}
          transition={{ 
            pathLength: { ...transition, delay: 0.8 },
            opacity: { ...transition, delay: 0.8 },
            x: rippleTransition,
            y: { ...waveYTransition, delay: 1 }
          }}
        />
      </g>

      <defs>
        <clipPath id="logo-circle-clip">
          <circle cx="200" cy="165" r="150" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default LogoMark;
