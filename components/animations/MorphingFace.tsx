'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function MorphingFace() {
  const pathRef = useRef<SVGPathElement>(null)

  const asymmetricPath = "M150 50 Q100 50 80 100 Q60 150 80 200 Q100 250 150 250 Q200 250 220 200 Q240 150 220 100 Q200 50 150 50"
  const symmetricPath = "M150 50 Q100 50 80 100 Q60 150 80 200 Q100 250 150 250 Q200 250 220 200 Q240 150 220 100 Q200 50 150 50"
  const perfectPath = "M150 50 Q125 50 100 100 Q75 150 100 200 Q125 250 150 250 Q175 250 200 200 Q225 150 200 100 Q175 50 150 50"

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#dda0dd" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <motion.path
          ref={pathRef}
          d={asymmetricPath}
          fill="none"
          stroke="url(#faceGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            d: [asymmetricPath, symmetricPath, perfectPath, symmetricPath, asymmetricPath]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            d: {
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
        />

        <motion.circle
          cx="120"
          cy="120"
          r="5"
          fill="#1e3a8a"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1, duration: 0.5 }}
        />

        <motion.circle
          cx="180"
          cy="120"
          r="5"
          fill="#1e3a8a"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />

        <motion.path
          d="M130 180 Q150 190 170 180"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={150 + Math.cos(i * 0.5) * 100}
            cy={150 + Math.sin(i * 0.5) * 100}
            r="1"
            fill="#dda0dd"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25]
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </motion.svg>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="text-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h3 className="text-dayel-blue font-display text-lg mb-2">Tu transformación</h3>
          <p className="text-dayel-purple text-sm">comienza aquí</p>
        </motion.div>
      </motion.div>
    </div>
  )
}