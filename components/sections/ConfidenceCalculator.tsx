'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Concern {
  id: string
  label: string
  icon: string
  treatments: string[]
}

const concerns: Concern[] = [
  {
    id: 'asimetria',
    label: 'Asimetría facial',
    icon: '😕',
    treatments: ['Cirugía Ortognática', 'Análisis 3D']
  },
  {
    id: 'mandibula',
    label: 'Problemas de mandíbula',
    icon: '😬',
    treatments: ['Cirugía Ortognática', 'TMJ Treatment']
  },
  {
    id: 'nariz',
    label: 'Forma de nariz',
    icon: '👃',
    treatments: ['Rinoplastia', 'Análisis facial']
  },
  {
    id: 'mejillas',
    label: 'Volumen de mejillas',
    icon: '😊',
    treatments: ['Bichectomía', 'Ácido Hialurónico']
  },
  {
    id: 'arrugas',
    label: 'Líneas de expresión',
    icon: '😌',
    treatments: ['Ácido Hialurónico', 'Rejuvenecimiento']
  },
  {
    id: 'dientes',
    label: 'Pérdida dental',
    icon: '🦷',
    treatments: ['Implantes Dentales', 'Rehabilitación oral']
  }
]

export default function ConfidenceCalculator() {
  const [selectedConcerns, setSelectedConcerns] = useState<Set<string>>(new Set())
  const [showResults, setShowResults] = useState(false)
  const [confidence, setConfidence] = useState(50)

  const toggleConcern = (concernId: string) => {
    setSelectedConcerns(prev => {
      const newSet = new Set(prev)
      if (newSet.has(concernId)) {
        newSet.delete(concernId)
      } else {
        newSet.add(concernId)
      }
      return newSet
    })
  }

  const calculateConfidence = () => {
    if (selectedConcerns.size === 0) return
    const newConfidence = Math.max(95 - selectedConcerns.size * 10, 50)
    setConfidence(newConfidence)
    setShowResults(true)
  }

  const getRecommendedTreatments = () => {
    const treatments = new Set<string>()
    selectedConcerns.forEach(concernId => {
      const concern = concerns.find(c => c.id === concernId)
      concern?.treatments.forEach(t => treatments.add(t))
    })
    return Array.from(treatments)
  }

  const generateWhatsAppMessage = () => {
    const concernsList = Array.from(selectedConcerns)
      .map(id => concerns.find(c => c.id === id)?.label)
      .join(', ')
    
    const message = `Hola Dr. Dayel, me gustaría agendar una consulta. Mis preocupaciones son: ${concernsList}`
    return `https://wa.me/528713860450?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="py-20 bg-gradient-to-b from-dayel-cream to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-dayel-purple/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-dayel-blue/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 10 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-6xl text-dayel-blue mb-4">
            Tu <span className="text-gradient">confianza importa</span>
          </h2>
          <p className="text-lg text-dayel-gray max-w-2xl mx-auto">
            Selecciona tus preocupaciones y descubre cómo podemos ayudarte a sentirte mejor
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="calculator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {concerns.map((concern) => (
                    <motion.button
                      key={concern.id}
                      onClick={() => toggleConcern(concern.id)}
                      className={`p-6 rounded-2xl border-2 transition-all ${
                        selectedConcerns.has(concern.id)
                          ? 'border-dayel-purple bg-dayel-purple/10'
                          : 'border-gray-200 bg-white hover:border-dayel-blue/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-4xl mb-2">{concern.icon}</div>
                      <p className="text-sm font-medium text-dayel-gray">
                        {concern.label}
                      </p>
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selectedConcerns.size > 0 ? 1 : 0.5 }}
                  className="text-center"
                >
                  <button
                    onClick={calculateConfidence}
                    disabled={selectedConcerns.size === 0}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Calcular mi plan de transformación
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass rounded-3xl p-8 lg:p-12"
              >
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-block"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="#e5e7eb"
                          strokeWidth="16"
                          fill="none"
                        />
                        <motion.circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="url(#gradient)"
                          strokeWidth="16"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: confidence / 100 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          strokeDasharray="1"
                          pathLength={confidence / 100}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e3a8a" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-4xl font-bold text-gradient"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {confidence}%
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="font-display text-3xl text-dayel-blue mb-4">
                    Tu nivel de confianza puede mejorar
                  </h3>
                  <p className="text-dayel-gray mb-8">
                    Con los tratamientos adecuados, podemos ayudarte a alcanzar tu máximo potencial
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-dayel-blue mb-4">
                    Tratamientos recomendados:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {getRecommendedTreatments().map((treatment, index) => (
                      <motion.div
                        key={treatment}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-dayel-purple/10 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-dayel-purple rounded-full" />
                        <span className="text-sm font-medium text-dayel-gray">
                          {treatment}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-primary text-center"
                  >
                    Agendar consulta personalizada
                  </motion.a>
                  <motion.button
                    onClick={() => {
                      setShowResults(false)
                      setSelectedConcerns(new Set())
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-4 border-2 border-dayel-blue text-dayel-blue font-semibold rounded-full hover:bg-dayel-blue hover:text-white transition-all"
                  >
                    Volver a calcular
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}