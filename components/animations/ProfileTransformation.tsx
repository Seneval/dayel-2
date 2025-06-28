'use client'

import { motion } from 'framer-motion'

export default function ProfileTransformation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-4">
      <motion.svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        className="w-full h-full mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="profileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#dda0dd" stopOpacity="0.5" />
          </linearGradient>
          
          <linearGradient id="profileGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.7" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <mask id="profileMask">
            <rect width="500" height="500" fill="white"/>
          </mask>
        </defs>

        {/* Círculo de fondo */}
        <motion.circle
          cx="250"
          cy="250"
          r="200"
          fill="none"
          stroke="url(#profileGradient)"
          strokeWidth="1"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Perfil "antes" - retrognatismo */}
        <motion.path
          d="M 200 150 
             C 200 150, 210 140, 230 140
             C 250 140, 260 145, 270 155
             L 275 165
             L 278 175
             L 280 185
             L 280 195
             L 278 205
             L 275 215
             L 270 225
             L 260 235
             L 245 245
             L 225 250
             L 210 255
             L 195 258
             L 185 260
             L 180 265
             L 178 275
             L 180 285
             L 185 295
             L 195 305
             L 210 315
             L 230 320
             L 250 322
             L 270 320"
          fill="none"
          stroke="url(#profileGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, repeatType: "reverse" }
          }}
        />

        {/* Perfil "después" - corregido */}
        <motion.path
          d="M 200 150 
             C 200 150, 210 140, 230 140
             C 250 140, 260 145, 270 155
             L 275 165
             L 278 175
             L 280 185
             L 280 195
             L 278 205
             L 275 215
             L 270 225
             L 265 235
             L 260 245
             L 255 255
             L 250 265
             L 248 275
             L 250 285
             L 255 295
             L 265 305
             L 275 310
             L 285 315
             L 295 318
             L 305 320"
          fill="none"
          stroke="url(#profileGradient2)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: [0, 1, 0.7]
          }}
          transition={{ 
            pathLength: { duration: 2, delay: 1, ease: "easeInOut" },
            opacity: { duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }
          }}
        />

        {/* Líneas guía verticales */}
        <motion.line
          x1="200"
          y1="120"
          x2="200"
          y2="350"
          stroke="#1e3a8a"
          strokeWidth="1"
          strokeDasharray="3,3"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2, duration: 1 }}
        />

        <motion.line
          x1="305"
          y1="120"
          x2="305"
          y2="350"
          stroke="#8b5cf6"
          strokeWidth="1"
          strokeDasharray="3,3"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        />

        {/* Flecha de transformación */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <path
            d="M 320 250 L 360 250 L 355 245 M 360 250 L 355 255"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
          />
        </motion.g>

        {/* Puntos de referencia anatómicos */}
        {[
          { x: 270, y: 155, delay: 1.5 }, // Frente
          { x: 280, y: 195, delay: 1.7 }, // Nariz
          { x: 250, y: 265, delay: 1.9 }, // Mentón antes
          { x: 295, y: 318, delay: 2.1 }, // Mentón después
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#dda0dd"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ delay: point.delay, duration: 0.5 }}
          />
        ))}

        {/* Partículas decorativas */}
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={250 + Math.cos(i * 0.31) * 150}
            cy={250 + Math.sin(i * 0.31) * 150}
            r="2"
            fill="#dda0dd"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.15,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </motion.svg>

      <motion.div
        className="absolute bottom-4 sm:bottom-10 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <h3 className="text-dayel-blue font-display text-lg sm:text-xl mb-2">Tu perfil ideal</h3>
          <p className="text-dayel-purple text-xs sm:text-sm">Armonía y balance facial</p>
        </motion.div>
      </motion.div>
    </div>
  )
}