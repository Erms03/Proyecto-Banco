"use client";

import { motion } from "motion/react";
import { Linkedin, Twitter } from "lucide-react";

export const AboutTeam = () => {
  const team = [
    {
      name: "Carlos Rodríguez",
      position: "Director General",
      bio: "Con más de 25 años de experiencia en el sector financiero, Carlos ha liderado la transformación de Banco Metropolitano hacia la era digital.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "María González",
      position: "Directora de Operaciones",
      bio: "Especialista en optimización de procesos bancarios, María ha implementado sistemas que han mejorado significativamente la eficiencia operativa del banco.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Javier Martínez",
      position: "Director de Tecnología",
      bio: "Pionero en la implementación de soluciones fintech, Javier ha sido clave en la transformación digital de nuestros servicios bancarios.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Laura Sánchez",
      position: "Directora de Experiencia al Cliente",
      bio: "Con un enfoque centrado en el cliente, Laura ha revolucionado la forma en que interactuamos con nuestros usuarios, mejorando significativamente la satisfacción.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Liderazgo con Visión
          </h2>
          <p className="text-lg text-gray-600">
            Conoce a los profesionales que lideran nuestra institución,
            combinando experiencia, innovación y compromiso con la excelencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 right-0 p-2 flex space-x-2">
                  <a
                    href="#"
                    className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
