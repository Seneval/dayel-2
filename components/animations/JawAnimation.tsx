'use client'

import { motion } from 'framer-motion'

export default function JawAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="jawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#dda0dd" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Perfil lateral */}
        <motion.path
          d="M 100 100 C 100 100, 120 80, 140 80 C 160 80, 180 90, 200 110 L 200 130 L 195 140 L 190 150 L 180 160 L 170 165 L 160 168 L 150 170"
          fill="none"
          stroke="url(#jawGradient)"
          strokeWidth="2"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Maxilar superior (fijo) */}
        <motion.path
          d="M 150 170 L 250 170 L 245 180 L 150 180 Z"
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Dientes superiores */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.rect
            key={`upper-tooth-${i}`}
            x={160 + i * 15}
            y={172}
            width="12"
            height="6"
            fill="#ffffff"
            stroke="#8b5cf6"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
          />
        ))}

        {/* Mandíbula inferior (animada) */}
        <motion.g
          initial={{ x: -20, rotate: -5 }}
          animate={{ x: 0, rotate: 0 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
        >
          <motion.path
            d="M 150 210 L 250 210 L 245 200 L 150 200 Z"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />

          {/* Dientes inferiores */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.rect
              key={`lower-tooth-${i}`}
              x={160 + i * 15}
              y={202}
              width="12"
              height="6"
              fill="#ffffff"
              stroke="#dda0dd"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            />
          ))}
        </motion.g>

        {/* Líneas de referencia */}
        <motion.line
          x1="140"
          y1="150"
          x2="140"
          y2="230"
          stroke="#1e3a8a"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2, duration: 1 }}
        />

        <motion.line
          x1="260"
          y1="150"
          x2="260"
          y2="230"
          stroke="#1e3a8a"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        />

        {/* Indicadores de corrección */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <text x="280" y="175" fill="#1e3a8a" fontSize="12" fontFamily="Inter">
            Clase I
          </text>
          <motion.path
            d="M 270 170 L 275 175 L 270 180"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.g>

        {/* Partículas de transformación */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={200 + Math.random() * 100 - 50}
            cy={190 + Math.random() * 40 - 20}
            r="2"
            fill="#dda0dd"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </motion.svg>

      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <h3 className="text-dayel-blue font-display text-lg mb-2">Corrección Ortognática</h3>
        <p className="text-dayel-purple text-sm">Alineación perfecta</p>
      </motion.div>
    </div>
  )
}