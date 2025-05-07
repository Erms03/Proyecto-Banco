"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: "María González",
      role: "Emprendedora",
      quote:
        "El apoyo financiero y la asesoría que recibí de Banco Metropolitano fueron fundamentales para hacer crecer mi negocio. Su plataforma digital me permite gestionar todo sin complicaciones.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Profesional",
      quote:
        "Llevo más de 10 años como cliente y la evolución digital del banco ha sido impresionante. La app móvil me permite hacer todo lo que necesito sin visitar una sucursal.",
    },
    {
      name: "Laura Martínez",
      role: "Estudiante universitaria",
      quote:
        "Abrí mi primera cuenta con ellos y el proceso fue muy sencillo. Las herramientas de control de gastos me ayudan a administrar mejor mi presupuesto mensual.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, -20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium tracking-wide mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Testimonios
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Miles de personas confían en Banco Metropolitano para gestionar sus
            finanzas personales y empresariales.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Elemento decorativo de fondo */}
              <motion.div
                className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-100 rounded-full opacity-0 group-hover:opacity-10"
                initial={{ scale: 0, rotate: -20 }}
                whileHover={{ scale: 1, rotate: 0, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>

              <div className="relative z-10">
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-teal-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.6, duration: 0.5 }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.span
                      key={star}
                      className="text-yellow-400"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 * index + 0.6 + star * 0.1,
                        duration: 0.3,
                      }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.p
                  className="text-gray-600 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.8, duration: 0.5 }}
                >
                  "{testimonial.quote}"
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
