
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

// Modificar la definición de props para incluir sideFeatures
export const AuthLayout = ({
  children,
  title,
  subtitle,
  sideContent,
  sideTitle,
  sideDescription,
  sideFeatures,
}) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-teal-50 to-white relative overflow-hidden">
      {/* Enlace para volver al inicio - Fijo en la parte superior */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          to="/"
          className="flex items-center text-white hover:text-gray-200 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span>Volver al inicio</span>
        </Link>
      </motion.div>

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

      {/* Sección izquierda - Decorativa */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-teal-700 via-emerald-600 to-teal-700"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-white z-10">
          <motion.div
            className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-8"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {sideContent}
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {sideTitle}
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-8 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {sideDescription}
          </motion.p>

          {/* Añadir las características del lado izquierdo */}
          {sideFeatures && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {sideFeatures}
            </motion.div>
          )}
        </div>

        {/* Elementos decorativos */}
        <motion.div
          className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/4 -right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -3, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>

      {/* Sección derecha - Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative">
        <div className="w-full max-w-md pt-16 md:pt-0">
          <motion.div
            className="w-full transition-all duration-700 transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-600">{subtitle}</p>
            </motion.div>

            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
