"use client";

import { motion } from "motion/react";

export const AboutHistory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-4">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trayectoria de Excelencia
          </h2>
          <p className="text-lg text-gray-600">
            Desde nuestros inicios, hemos evolucionado constantemente para
            ofrecer los mejores servicios financieros, manteniendo siempre
            nuestro compromiso con la excelencia y la innovación.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <motion.div
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-70"></div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Fundación del Banco Metropolitano"
                    className="rounded-xl relative z-10 w-full h-auto shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  1998 - Fundación
                </h3>
                <p className="text-gray-600">
                  Banco Metropolitano fue fundado con la visión de crear una
                  institución financiera que combinara la solidez tradicional
                  con un enfoque innovador. Desde el primer día, nos
                  comprometimos a ofrecer servicios financieros accesibles y de
                  calidad para todos los sectores de la población.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-70"></div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Expansión nacional"
                    className="rounded-xl relative z-10 w-full h-auto shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  2005 - Expansión Nacional
                </h3>
                <p className="text-gray-600">
                  Tras consolidar nuestra presencia en la capital, iniciamos un
                  ambicioso plan de expansión nacional, abriendo sucursales en
                  las principales ciudades del país. Esta etapa marcó el
                  comienzo de nuestra transformación en una entidad financiera
                  de referencia a nivel nacional.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl blur-xl opacity-70"></div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Transformación digital"
                    className="rounded-xl relative z-10 w-full h-auto shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  2015 - Transformación Digital
                </h3>
                <p className="text-gray-600">
                  Reconociendo la importancia de la tecnología en el sector
                  financiero, iniciamos un profundo proceso de transformación
                  digital. Lanzamos nuestra primera aplicación móvil y renovamos
                  completamente nuestros sistemas para ofrecer una experiencia
                  bancaria más ágil, segura y accesible.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl blur-xl opacity-70"></div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Actualidad"
                    className="rounded-xl relative z-10 w-full h-auto shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Actualidad - Liderando la Innovación
                </h3>
                <p className="text-gray-600">
                  Hoy, Banco Metropolitano se posiciona como una entidad
                  financiera líder en innovación y servicio al cliente.
                  Continuamos desarrollando soluciones financieras que se
                  adaptan a las necesidades cambiantes de nuestros clientes,
                  manteniendo siempre nuestro compromiso con la excelencia, la
                  seguridad y la responsabilidad social.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
