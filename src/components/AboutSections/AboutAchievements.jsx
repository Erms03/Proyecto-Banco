"use client";

import { motion, useInView } from "framer-motion";
import { Award, Shield, Users, TrendingUp } from "lucide-react";
import { useRef } from "react";

export const AboutAchievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: Award,
      title: "Premio a la Excelencia Bancaria 2022",
      description:
        "Reconocimiento otorgado por la Asociación de Bancos por nuestro compromiso con la innovación y calidad de servicio.",
    },
    {
      icon: Shield,
      title: "Certificación ISO 27001",
      description:
        "Certificación internacional que avala nuestros altos estándares en seguridad de la información y protección de datos.",
    },
    {
      icon: Users,
      title: "Mejor Lugar para Trabajar 2023",
      description:
        "Reconocidos por crear un ambiente laboral excepcional que fomenta el desarrollo profesional y personal.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Sostenido",
      description:
        "Más de una década de crecimiento continuo en activos y base de clientes, consolidando nuestra posición en el mercado.",
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
    <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-40 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
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
            Reconocimientos
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Nuestros Logros
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A lo largo de nuestra trayectoria, hemos recibido importantes
            reconocimientos que avalan nuestro compromiso con la excelencia.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Elemento decorativo de fondo */}
              <motion.div
                className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-100 rounded-full opacity-0"
                initial={{ scale: 0, rotate: -20 }}
                whileHover={{ scale: 1, rotate: 0, opacity: 0.2 }}
                transition={{ duration: 0.5 }}
              ></motion.div>

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <achievement.icon className="h-7 w-7 text-teal-600" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                >
                  {achievement.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.7, duration: 0.5 }}
                >
                  {achievement.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
