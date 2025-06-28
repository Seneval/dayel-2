'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  details: string[]
  beforeAfter?: boolean
}

const services: Service[] = [
  {
    id: 'ortognatica',
    title: 'Cirugía Ortognática',
    description: 'Corrección de deformidades maxilofaciales para mejorar función y estética',
    icon: '🦷',
    gradient: 'from-blue-400 to-blue-600',
    details: ['Corrección de mordida', 'Armonía facial', 'Mejora respiración'],
    beforeAfter: true
  },
  {
    id: 'rinoplastia',
    title: 'Rinoplastia',
    description: 'Cirugía estética y funcional de nariz',
    icon: '👃',
    gradient: 'from-purple-400 to-purple-600',
    details: ['Estética nasal', 'Función respiratoria', 'Armonía facial']
  },
  {
    id: 'implantes',
    title: 'Implantes Dentales',
    description: 'Rehabilitación dental con la más alta tecnología',
    icon: '🦷',
    gradient: 'from-green-400 to-green-600',
    details: ['Implantes inmediatos', 'Regeneración ósea', 'Estética dental']
  },
  {
    id: 'bichectomia',
    title: 'Bichectomía',
    description: 'Reducción de mejillas para un rostro más estilizado',
    icon: '✨',
    gradient: 'from-pink-400 to-pink-600',
    details: ['Rostro definido', 'Procedimiento mínimo', 'Resultados naturales']
  },
  {
    id: 'hialuronico',
    title: 'Ácido Hialurónico',
    description: 'Rejuvenecimiento facial sin cirugía',
    icon: '💉',
    gradient: 'from-indigo-400 to-indigo-600',
    details: ['Relleno de arrugas', 'Hidratación profunda', 'Volumen labial']
  },
  {
    id: 'traumatismo',
    title: 'Traumatismo Facial',
    description: 'Reconstrucción integral post-trauma',
    icon: '🏥',
    gradient: 'from-red-400 to-red-600',
    details: ['Fracturas faciales', 'Reconstrucción', 'Urgencias 24/7']
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  const handleCardClick = (serviceId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-dayel-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-6xl text-dayel-blue mb-4">
            Servicios de <span className="text-gradient">excelencia</span>
          </h2>
          <p className="text-lg text-dayel-gray max-w-2xl mx-auto">
            Transformamos vidas con tecnología de vanguardia y experiencia comprobada
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="perspective-1000"
            >
              <div
                className={`relative h-96 preserve-3d cursor-pointer transition-transform duration-700 ${
                  flippedCards.has(service.id) ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleCardClick(service.id)}
              >
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="h-full p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex justify-center mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl transform hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-display text-2xl text-dayel-blue mb-3 text-center">
                      {service.title}
                    </h3>
                    
                    <p className="text-dayel-gray mb-6 text-center">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-sm text-dayel-gray">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="text-center text-sm text-dayel-purple font-medium">
                        Click para más información →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden">
                  <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${service.gradient} text-white shadow-xl`}>
                    <h3 className="font-display text-2xl mb-6">{service.title}</h3>
                    
                    {service.beforeAfter && (
                      <div className="mb-6">
                        <p className="text-sm mb-2 opacity-90">Resultados comprobados:</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/20 rounded-lg p-2 text-center">
                            <p className="text-xs opacity-75">Antes</p>
                            <div className="text-2xl font-bold">→</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-2 text-center">
                            <p className="text-xs opacity-75">Después</p>
                            <div className="text-2xl font-bold">✨</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <p className="text-sm opacity-90">Este procedimiento incluye:</p>
                      <ul className="space-y-2 text-sm">
                        <li>• Consulta personalizada</li>
                        <li>• Plan de tratamiento</li>
                        <li>• Seguimiento post-operatorio</li>
                        <li>• Garantía de satisfacción</li>
                      </ul>
                    </div>
                    
                    <div className="absolute bottom-8 left-8 right-8">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium hover:bg-white/30 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open('https://wa.me/528713860450', '_blank')
                        }}
                      >
                        Agendar Consulta
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
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
            ¿No encuentras el servicio que buscas?
          </p>
          <motion.a
            href="https://wa.me/528713860450"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-dayel-blue to-dayel-purple text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Consulta Personalizada
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}