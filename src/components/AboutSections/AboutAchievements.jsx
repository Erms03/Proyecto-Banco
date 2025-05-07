"use client";

import { motion } from "motion/react";
import { Award, Shield, Users, TrendingUp } from "lucide-react";

export const AboutAchievements = () => {
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

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-4">
            Reconocimientos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Logros
          </h2>
          <p className="text-lg text-gray-600">
            A lo largo de nuestra trayectoria, hemos recibido importantes
            reconocimientos que avalan nuestro compromiso con la excelencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <achievement.icon className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
