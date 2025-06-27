'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Location {
  id: string
  name: string
  address: string
  phone: string
  schedule?: string
  coordinates: { lat: number; lng: number }
  mapUrl: string
}

const locations: Location[] = [
  {
    id: 'torreon-consultorio',
    name: 'Consultorio Principal',
    address: 'Alfonso Estrada 322, Col. Nueva Los Ángeles, Torreón, Coahuila',
    phone: '(871) 714 434',
    schedule: 'Lun-Vie: 9:00-19:00, Sáb: 9:00-14:00',
    coordinates: { lat: 25.5428, lng: -103.4067 },
    mapUrl: 'https://maps.google.com/?q=Alfonso+Estrada+322+Torreon'
  },
  {
    id: 'gomez-palacio',
    name: 'Sanatorio San José',
    address: 'Gómez Palacio, Durango',
    phone: '(871) 705 1910',
    schedule: 'Previa cita',
    coordinates: { lat: 25.5698, lng: -103.4954 },
    mapUrl: 'https://maps.google.com/?q=Sanatorio+San+Jose+Gomez+Palacio'
  },
  {
    id: 'hospital-angeles',
    name: 'Hospital Ángeles Torreón',
    address: 'Consultorio 840, Torre de Especialidades, Torreón, Coahuila',
    phone: '222 54 50 / 729 0400 ext. 7840',
    schedule: 'Previa cita',
    coordinates: { lat: 25.5488, lng: -103.4130 },
    mapUrl: 'https://maps.google.com/?q=Hospital+Angeles+Torreon'
  }
]

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<string>(locations[0].id)
  const activeLocation = locations.find(loc => loc.id === selectedLocation)!

  return (
    <section className="py-20 bg-gradient-to-b from-white to-dayel-cream relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-6xl text-dayel-blue mb-4">
            Estamos <span className="text-gradient">cerca de ti</span>
          </h2>
          <p className="text-lg text-dayel-gray max-w-2xl mx-auto">
            Tres ubicaciones estratégicas para tu comodidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedLocation(location.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all ${
                  selectedLocation === location.id
                    ? 'bg-gradient-to-r from-dayel-blue to-dayel-purple text-white shadow-xl'
                    : 'bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      selectedLocation === location.id
                        ? 'bg-white/20'
                        : 'bg-dayel-blue/10'
                    }`}
                    animate={{ 
                      scale: selectedLocation === location.id ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className={`w-6 h-6 ${
                        selectedLocation === location.id
                          ? 'text-white'
                          : 'text-dayel-blue'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </motion.div>

                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-1 ${
                      selectedLocation === location.id ? 'text-white' : 'text-dayel-blue'
                    }`}>
                      {location.name}
                    </h3>
                    <p className={`text-sm mb-2 ${
                      selectedLocation === location.id ? 'text-white/90' : 'text-dayel-gray'
                    }`}>
                      {location.address}
                    </p>
                    <div className={`flex items-center gap-2 text-sm ${
                      selectedLocation === location.id ? 'text-white/80' : 'text-dayel-gray'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{location.phone}</span>
                    </div>
                    {location.schedule && (
                      <p className={`text-xs mt-2 ${
                        selectedLocation === location.id ? 'text-white/70' : 'text-dayel-gray'
                      }`}>
                        {location.schedule}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dayel-blue/20 to-dayel-purple/20 z-10" />
            
            <div className="relative w-full h-full bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mb-4"
                  >
                    <svg className="w-24 h-24 mx-auto text-dayel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </motion.div>
                  
                  <h4 className="font-display text-2xl text-dayel-blue mb-4">
                    {activeLocation.name}
                  </h4>
                  
                  <p className="text-dayel-gray mb-6 max-w-sm">
                    {activeLocation.address}
                  </p>

                  <div className="space-y-3">
                    <motion.a
                      href={activeLocation.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-dayel-blue text-white rounded-full font-medium hover:bg-dayel-blue/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Ver en Google Maps
                    </motion.a>

                    <div className="text-sm text-dayel-gray">
                      <p>📞 {activeLocation.phone}</p>
                      {activeLocation.schedule && (
                        <p>🕐 {activeLocation.schedule}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-64 h-64 rounded-full border-4 border-dayel-purple/30" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/528713860450"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-dayel-purple hover:text-dayel-purple/80 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="font-medium">WhatsApp: 871 386 0450</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}