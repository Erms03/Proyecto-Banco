"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo abrir una cuenta en Banco Metropolitano?",
      answer:
        "Puedes abrir una cuenta visitando cualquiera de nuestras sucursales con tu documento de identidad y comprobante de domicilio. También ofrecemos la opción de iniciar el proceso online a través de nuestra web o aplicación móvil.",
    },
    {
      question: "¿Cuáles son los horarios de atención al cliente?",
      answer:
        "Nuestras sucursales atienden de lunes a viernes de 8:30 AM a 4:00 PM. El servicio de atención telefónica está disponible de lunes a domingo de 8:00 AM a 10:00 PM. La banca online y móvil está disponible 24/7.",
    },
    {
      question: "¿Cómo puedo reportar la pérdida de mi tarjeta?",
      answer:
        "Para reportar una tarjeta perdida o robada, comunícate inmediatamente a nuestra línea de emergencia al +53 7861-3410, disponible las 24 horas. También puedes bloquear tu tarjeta desde nuestra aplicación móvil o banca en línea.",
    },
    {
      question: "¿Ofrecen préstamos personales? ¿Cuáles son los requisitos?",
      answer:
        "Sí, ofrecemos préstamos personales con tasas competitivas. Los requisitos básicos incluyen: ser mayor de edad, presentar identificación oficial, comprobantes de ingresos de los últimos 3 meses y tener buen historial crediticio. Puedes solicitar una evaluación personalizada en cualquiera de nuestras sucursales.",
    },
    {
      question: "¿Cómo puedo actualizar mis datos personales?",
      answer:
        "Puedes actualizar tus datos personales a través de nuestra banca en línea en la sección 'Mi perfil', mediante nuestra aplicación móvil o visitando cualquiera de nuestras sucursales con tu identificación oficial.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Respuestas a tus dudas
          </h2>
          <p className="text-lg text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios y productos financieros.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
