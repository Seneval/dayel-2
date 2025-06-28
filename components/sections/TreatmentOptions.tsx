'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Treatment {
  id: string
  title: string
  description: string
  benefits: string[]
  icon: string
  gradient: string
}

const treatments: Treatment[] = [
  {
    id: 'ortognatica',
    title: 'Cirugía Ortognática',
    description: 'Corrección de deformidades maxilofaciales para mejorar función y estética',
    benefits: ['Mejora función masticatoria', 'Armonía facial', 'Corrección de mordida'],
    icon: '🦷',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    id: 'rinoplastia',
    title: 'Rinoplastia',
    description: 'Cirugía estética y funcional de nariz',
    benefits: ['Mejora respiración', 'Armonía facial', 'Corrección estructural'],
    icon: '👃',
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    id: 'implantes',
    title: 'Implantes Dentales',
    description: 'Rehabilitación dental con tecnología de vanguardia',
    benefits: ['Solución permanente', 'Aspecto natural', 'Función completa'],
    icon: '✨',
    gradient: 'from-green-400 to-green-600'
  },
  {
    id: 'bichectomia',
    title: 'Bichectomía',
    description: 'Reducción de mejillas para un rostro más estilizado',
    benefits: ['Rostro definido', 'Procedimiento mínimo', 'Recuperación rápida'],
    icon: '💫',
    gradient: 'from-pink-400 to-pink-600'
  },
  {
    id: 'hialuronico',
    title: 'Ácido Hialurónico',
    description: 'Rejuvenecimiento facial sin cirugía',
    benefits: ['Resultados inmediatos', 'Sin tiempo de recuperación', 'Natural'],
    icon: '💉',
    gradient: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 'traumatismo',
    title: 'Traumatismo Facial',
    description: 'Reconstrucción integral post-trauma',
    benefits: ['Atención especializada', 'Técnicas avanzadas', 'Recuperación funcional'],
    icon: '🏥',
    gradient: 'from-red-400 to-red-600'
  }
]

export default function TreatmentOptions() {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null)

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
            Tratamientos <span className="text-gradient">especializados</span>
          </h2>
          <p className="text-lg text-dayel-gray max-w-2xl mx-auto">
            Procedimientos de vanguardia con tecnología de última generación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedTreatment(treatment.id === selectedTreatment ? null : treatment.id)}
              className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-300 ${
                selectedTreatment === treatment.id
                  ? `bg-gradient-to-br ${treatment.gradient} text-white shadow-2xl scale-105`
                  : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className={`text-5xl mb-4 text-center ${selectedTreatment === treatment.id ? 'animate-bounce' : ''}`}>
                {treatment.icon}
              </div>
              
              <h3 className={`font-display text-2xl mb-3 text-center ${
                selectedTreatment === treatment.id ? 'text-white' : 'text-dayel-blue'
              }`}>
                {treatment.title}
              </h3>
              
              <p className={`mb-4 text-center ${
                selectedTreatment === treatment.id ? 'text-white/90' : 'text-dayel-gray'
              }`}>
                {treatment.description}
              </p>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedTreatment === treatment.id ? 'auto' : 0,
                  opacity: selectedTreatment === treatment.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/30">
                  <p className="font-semibold mb-2">Beneficios:</p>
                  <ul className="space-y-1">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className={`absolute bottom-4 right-4 ${
                  selectedTreatment === treatment.id ? 'opacity-100' : 'opacity-0'
                }`}
                animate={{ rotate: selectedTreatment === treatment.id ? 180 : 0 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-dayel-gray mb-6">
            Cada tratamiento es personalizado según las necesidades específicas del paciente
          </p>
          <motion.a
            href="https://wa.me/528713860450"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-dayel-blue to-dayel-purple text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Solicitar información
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}