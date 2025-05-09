
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ContactHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateMovement = (axis, factor = 30) => {
    const center =
      axis === "x" ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === "x" ? mousePosition.x : mousePosition.y;
    return (position - center) / factor;
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Fondo con gradiente más suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700/90 via-emerald-600/90 to-green-700/90"></div>

      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Elementos decorativos flotantes con parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"
          animate={{
            x: calculateMovement("x", -15),
            y: calculateMovement("y", -15),
          }}
          transition={{ type: "spring", damping: 50 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"
          animate={{
            x: calculateMovement("x", 20),
            y: calculateMovement("y", 20),
          }}
          transition={{ type: "spring", damping: 50 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"
          animate={{
            x: calculateMovement("x", 25),
            y: calculateMovement("y", 25),
          }}
          transition={{ type: "spring", damping: 50 }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium tracking-wide mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Estamos para ayudarte
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="inline-block">
              Contacta{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                con
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                nosotros
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-teal-50 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Nuestro equipo está disponible para responder a todas tus consultas
            y ayudarte con cualquier necesidad financiera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {["Atención", "Rapidez", "Soluciones", "Confianza"].map(
                (word, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {word}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Formas decorativas en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"
            fill="white"
            fillOpacity="0.1"
          ></path>
        </svg>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            fillOpacity="0.1"
          ></path>
        </svg>
      </div>
    </section>
  );
};
