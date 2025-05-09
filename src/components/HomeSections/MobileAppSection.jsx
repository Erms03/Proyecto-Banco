
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const MobileAppSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    "Transferencias inmediatas sin comisiones",
    "Pago de servicios y tarjetas",
    "Control de gastos y presupuestos",
    "Notificaciones en tiempo real",
    "Bloqueo y desbloqueo de tarjetas",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
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

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4,
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
        <div ref={ref} className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 md:pr-12 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium tracking-wide mb-6"
              variants={itemVariants}
            >
              Banca Móvil
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Tu banco en la palma de tu mano
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={itemVariants}
            >
              Descarga nuestra aplicación móvil y disfruta de todas las
              funcionalidades bancarias desde cualquier lugar y en cualquier
              momento.
            </motion.p>

            <motion.ul className="space-y-4 mb-8" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center mt-1"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </motion.div>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="https://www.apklis.cu/application/cu.etecsa.cubacel.tr.tm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-2xl w-40 justify-center"
                >
                  <img
                    src="/Apklis.png"
                    alt="Apkalis logo"
                    className="w-6 h-6 mr-2"
                  />
                  Apklis
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="https://t.me/TransfermovilCuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-black text-white shadow-2xl px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-40 justify-center cursor-pointer"
                >
                  <img
                    src="/Telegram-Logo.png"
                    alt="Telegram Logo"
                    className="h-6 w-6 mr-2"
                  />
                  Telegram
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-70"
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
            <div className="relative">
              <motion.img
                src="/PhoneApp.webp"
                alt="Aplicación móvil"
                className="mx-auto rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />

              {/* Elementos flotantes decorativos */}
              <motion.div
                className="absolute -right-10 top-20 bg-white rounded-xl shadow-xl p-4 w-40"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-medium text-gray-900">
                      Transferencia
                    </p>
                    <p className="text-xs text-gray-500">Exitosa</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold text-gray-900">$1,250.00</p>
                  <p className="text-xs text-gray-500">Ahora</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-12 bottom-32 bg-white rounded-xl shadow-xl p-4 w-44"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-gray-900">
                    Balance Total
                  </p>
                  <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900">$24,156.00</p>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-teal-600">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-xs ml-1">+2.5%</span>
                  </div>
                  <p className="text-xs text-gray-500 ml-2">este mes</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
