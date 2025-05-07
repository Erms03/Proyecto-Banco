"use client";

import { motion } from "motion/react";
import { Heart, Leaf, BookOpen, Home } from "lucide-react";

export const AboutCSR = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Compromiso Ambiental",
      description:
        "Implementamos prácticas sostenibles en todas nuestras operaciones, reduciendo nuestra huella de carbono y promoviendo la conservación del medio ambiente.",
    },
    {
      icon: BookOpen,
      title: "Educación Financiera",
      description:
        "Desarrollamos programas de educación financiera para comunidades vulnerables, empoderando a las personas con conocimientos para tomar mejores decisiones financieras.",
    },
    {
      icon: Home,
      title: "Vivienda Accesible",
      description:
        "Colaboramos con organizaciones locales para facilitar el acceso a viviendas dignas a familias de bajos recursos a través de programas de financiamiento especiales.",
    },
    {
      icon: Heart,
      title: "Apoyo Comunitario",
      description:
        "Participamos activamente en iniciativas comunitarias, apoyando proyectos locales que promueven el desarrollo social y económico de las comunidades donde operamos.",
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
            Responsabilidad Social
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Compromiso con la Sociedad
          </h2>
          <p className="text-lg text-gray-600">
            En Banco Metropolitano, creemos firmemente que nuestro éxito está
            ligado al bienestar de las comunidades donde operamos. Por eso,
            desarrollamos diversas iniciativas de responsabilidad social.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="flex gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <initiative.icon className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg transition-all hover:bg-green-700 hover:shadow-lg"
          >
            Conoce más sobre nuestras iniciativas
          </a>
        </motion.div>
      </div>
    </section>
  );
};
