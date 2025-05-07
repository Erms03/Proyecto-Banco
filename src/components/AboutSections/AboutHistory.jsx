"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export const AboutHistory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
    hidden: { opacity: 0, y: 50 },
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

  const timelineEvents = [
    {
      year: "1998",
      title: "Fundación",
      description:
        "Banco Metropolitano fue fundado con la visión de crear una institución financiera que combinara la solidez tradicional con un enfoque innovador. Desde el primer día, nos comprometimos a ofrecer servicios financieros accesibles y de calidad para todos los sectores de la población.",
      imagePosition: "left",
    },
    {
      year: "2005",
      title: "Expansión Nacional",
      description:
        "Tras consolidar nuestra presencia en la capital, iniciamos un ambicioso plan de expansión nacional, abriendo sucursales en las principales ciudades del país. Esta etapa marcó el comienzo de nuestra transformación en una entidad financiera de referencia a nivel nacional.",
      imagePosition: "right",
    },
    {
      year: "2015",
      title: "Transformación Digital",
      description:
        "Reconociendo la importancia de la tecnología en el sector financiero, iniciamos un profundo proceso de transformación digital. Lanzamos nuestra primera aplicación móvil y renovamos completamente nuestros sistemas para ofrecer una experiencia bancaria más ágil, segura y accesible.",
      imagePosition: "left",
    },
    {
      year: "Actualidad",
      title: "Liderando la Innovación",
      description:
        "Hoy, Banco Metropolitano se posiciona como una entidad financiera líder en innovación y servicio al cliente. Continuamos desarrollando soluciones financieras que se adaptan a las necesidades cambiantes de nuestros clientes, manteniendo siempre nuestro compromiso con la excelencia, la seguridad y la responsabilidad social.",
      imagePosition: "right",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
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
            Nuestra Historia
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Trayectoria de Excelencia
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Desde nuestros inicios, hemos evolucionado constantemente para
            ofrecer los mejores servicios financieros, manteniendo siempre
            nuestro compromiso con la excelencia y la innovación.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal-500 z-10 origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${
                  event.imagePosition === "left"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } gap-8 items-center relative`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Punto en la línea de tiempo */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full z-20 hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-teal-500 rounded-full"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    style={{ opacity: 0.3 }}
                  ></motion.div>
                </motion.div>

                <div className="md:w-1/2">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-70"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 1, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 8,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt={`${event.title}`}
                      className="rounded-xl relative z-10 w-full h-auto shadow-lg"
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: event.imagePosition === "left" ? 30 : -30,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      className="text-xl md:text-2xl font-bold text-teal-600 mb-1"
                      whileHover={{
                        x: event.imagePosition === "left" ? 5 : -5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      {event.year}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
