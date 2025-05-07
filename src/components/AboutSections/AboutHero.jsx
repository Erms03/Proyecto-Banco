"use client";

import { motion } from "motion/react";

export const AboutHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-green-800"></div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-4">
            Nuestra Historia
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conócenos
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Más de 25 años de experiencia brindando soluciones financieras
            innovadoras y seguras para individuos y empresas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
