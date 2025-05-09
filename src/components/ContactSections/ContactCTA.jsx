
import { motion, useInView } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useRef } from "react";

export const ContactCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100 relative overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-200 rounded-full opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute right-10 bottom-10 w-20 h-20 bg-teal-300 rounded-full opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
              }}
            ></motion.div>

            <div className="relative z-10">
              <motion.div
                className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-7 w-7 text-teal-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Atención telefónica
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de atención al cliente está disponible para
                resolver tus dudas y ayudarte con cualquier gestión.
              </p>
              <motion.a
                href="tel:+5354942132"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-700 font-medium rounded-lg border border-teal-200 transition-all hover:bg-teal-50 hover:shadow-md group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Llamar ahora: +53 54942132
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute right-10 bottom-10 w-20 h-20 bg-blue-300 rounded-full opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
            ></motion.div>

            <div className="relative z-10">
              <motion.div
                className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MessageCircle className="h-7 w-7 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Chat en vivo
              </h3>
              <p className="text-gray-600 mb-6">
                Chatea con nuestros asesores en tiempo real y obtén respuestas
                inmediatas a todas tus consultas.
              </p>
              <motion.button
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg border border-blue-200 transition-all hover:bg-blue-50 hover:shadow-md group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Iniciar chat
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
