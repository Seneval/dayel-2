'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

export default function HeroSimple() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden gradient-mesh">
      <div className="absolute inset-0 bg-gradient-to-br from-dayel-cream via-white to-dayel-purple/10" />
      
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-dayel-purple/20 blur-3xl"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left w-full max-w-lg mx-auto lg:max-w-none lg:mx-0"
          >
            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-7xl text-dayel-blue mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Tu rostro,
              <br />
              <span className="text-gradient">tu salud,</span>
              <br />
              tu transformación
            </motion.h1>

            <motion.p
              className="text-xl text-dayel-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Dr. Dayel Rosales
              <br />
              <span className="text-lg text-dayel-purple">Cirujano Maxilofacial Certificado</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/528713860450"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agenda tu cita
              </a>
              <button className="px-8 py-4 border-2 border-dayel-blue text-dayel-blue font-semibold rounded-full transition-all duration-300 hover:bg-dayel-blue hover:text-white">
                Conoce más
              </button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[
                  { id: 1, src: getImagePath('/imagenes/patient1.jpg'), name: 'María G.' },
                  { id: 2, src: getImagePath('/imagenes/patient2.jpg'), name: 'Laura M.' },
                  { id: 3, src: getImagePath('/imagenes/patient3.jpg'), name: 'Carlos R.' },
                  { id: 4, src: getImagePath('/imagenes/patient4.jpg'), name: 'Roberto S.' }
                ].map((patient) => (
                  <motion.div
                    key={patient.id}
                    className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + patient.id * 0.1 }}
                  >
                    <Image
                      src={patient.src}
                      alt={patient.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-dayel-gray">
                <span className="font-semibold">+1000</span> pacientes satisfechos
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-lg mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dayel-blue/10 via-transparent to-dayel-purple/10 rounded-3xl" />
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={getImagePath("/imagenes/acercade.jpg")}
                alt="Dr. Dayel Rosales"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dayel-blue/20 via-transparent to-transparent" />
              
              <motion.div
                className="absolute bottom-8 left-8 right-8 text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h3 className="font-display text-2xl mb-2">Certificado CONACEM #762</h3>
                <p className="text-sm opacity-90">Especialista en cirugía ortognática y reconstructiva</p>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-dayel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}