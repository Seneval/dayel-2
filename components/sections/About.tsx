'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const leftTranslateY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rightTranslateY = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const credentials = [
    { title: "Certificado CONACEM", detail: "#762", icon: "🏆" },
    { title: "Especialista UNAM/IMSS", detail: "Cirugía Maxilofacial", icon: "🎓" },
    { title: "Maestría UAdeC", detail: "Investigación", icon: "📚" },
    { title: "Doctorado UAdeC", detail: "Ciencias Biomédicas", icon: "🔬" },
    { title: "Posgrado Barcelona", detail: "Microcirugía Reconstructiva", icon: "🌍" },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dayel-cream via-white to-dayel-blue/5" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-6xl text-dayel-blue mb-4">
            Especialista <span className="text-gradient">certificado CONACEM</span>
          </h2>
          <p className="text-lg text-dayel-gray max-w-2xl mx-auto">
            Acude con especialistas certificados y actualizados en las técnicas más avanzadas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            style={{ y: leftTranslateY, opacity }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 lg:p-12">
              <h3 className="font-display text-2xl sm:text-3xl text-dayel-blue mb-8 text-center lg:text-left">
                Dr. Dayel Gerardo Rosales Díaz Mirón
              </h3>
              
              <div className="space-y-4">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dayel-blue to-dayel-purple flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform">
                      {cred.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dayel-blue">{cred.title}</h4>
                      <p className="text-sm text-dayel-gray">{cred.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-4 bg-dayel-purple/10 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm text-center text-dayel-purple font-medium">
                  +15 años de experiencia transformando vidas
                </p>
              </motion.div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-dayel-purple/20 to-dayel-blue/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          <motion.div 
            style={{ y: rightTranslateY, opacity }}
            className="relative"
          >
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-dayel-blue via-dayel-purple to-dayel-blue p-12 flex items-center justify-center">
              <div className="relative z-10 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-5xl font-bold">15+</span>
                  </div>
                </motion.div>
                
                <h3 className="font-display text-3xl mb-4">Años de Experiencia</h3>
                <p className="text-lg mb-8 opacity-90">Transformando vidas con precisión y arte</p>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                  >
                    <span className="text-3xl font-bold">1000+</span>
                    <p className="text-sm opacity-80">Cirugías exitosas</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                  >
                    <span className="text-3xl font-bold">5</span>
                    <p className="text-sm opacity-80">Certificaciones</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                  >
                    <span className="text-3xl font-bold">3</span>
                    <p className="text-sm opacity-80">Ubicaciones</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                  >
                    <span className="text-3xl font-bold">100%</span>
                    <p className="text-sm opacity-80">Personalizado</p>
                  </motion.div>
                </div>
              </div>

              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-48 h-48 bg-dayel-purple/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 5,
                  delay: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5 10" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}