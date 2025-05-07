"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
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
            Preguntas Frecuentes
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Respuestas a tus dudas
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios y productos financieros.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
            >
              <motion.button
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        },
                        opacity: { duration: 0.25, delay: 0.15 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.25 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 pb-4 text-gray-600"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
