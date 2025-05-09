
import { motion, useInView } from "framer-motion";
import { Heart, Leaf, BookOpen, Home } from "lucide-react";
import { useRef } from "react";

export const AboutCSR = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
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
            Responsabilidad Social
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Nuestro Compromiso con la Sociedad
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            En Banco Metropolitano, creemos firmemente que nuestro éxito está
            ligado al bienestar de las comunidades donde operamos. Por eso,
            desarrollamos diversas iniciativas de responsabilidad social.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="flex gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden"
              variants={index % 2 === 0 ? itemVariants : itemVariantsRight}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Elemento decorativo de fondo */}
              <motion.div
                className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-100 rounded-full opacity-0"
                initial={{ scale: 0, rotate: -20 }}
                whileHover={{ scale: 1, rotate: 0, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>

              <motion.div
                className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <initiative.icon className="h-7 w-7 text-teal-600" />
              </motion.div>
              <div className="relative z-10">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                >
                  {initiative.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.7, duration: 0.5 }}
                >
                  {initiative.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg transition-all hover:bg-teal-700 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Conoce más sobre nuestras iniciativas
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
