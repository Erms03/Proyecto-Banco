"use client";

import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-green-200 rounded-full opacity-50"></div>
            <div className="absolute right-10 bottom-10 w-20 h-20 bg-green-300 rounded-full opacity-30"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Atención telefónica
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de atención al cliente está disponible para
                resolver tus dudas y ayudarte con cualquier gestión.
              </p>
              <a
                href="tel:+5354942132"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-medium rounded-lg border border-green-200 transition-all hover:bg-green-50 hover:shadow-md"
              >
                Llamar ahora: +53 54942132
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute right-10 bottom-10 w-20 h-20 bg-blue-300 rounded-full opacity-30"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Chat en vivo
              </h3>
              <p className="text-gray-600 mb-6">
                Chatea con nuestros asesores en tiempo real y obtén respuestas
                inmediatas a todas tus consultas.
              </p>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg border border-blue-200 transition-all hover:bg-blue-50 hover:shadow-md">
                Iniciar chat
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
