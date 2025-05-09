
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const infoRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.3 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Resetear el estado después de mostrar el mensaje
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+53 54942132", "+53 7861-3410"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contacto@bancometropolitano.com",
        "soporte@bancometropolitano.com",
      ],
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Principal 123", "La Habana, Cuba"],
      color: "bg-rose-100 text-rose-600",
    },
  ];

  const formAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const infoAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            ref={formRef}
            className="space-y-6 md:space-y-8"
            variants={formAnimation}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemAnimation}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                Ponte en contacto
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Completa el formulario y un asesor se pondrá en contacto contigo
                a la brevedad.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div className="relative" variants={itemAnimation}>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 mb-1 block"
                  >
                    Nombre completo
                  </label>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-teal-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>

                <motion.div className="relative" variants={itemAnimation}>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-1 block"
                  >
                    Correo electrónico
                  </label>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-teal-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div className="relative" variants={itemAnimation}>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 mb-1 block"
                  >
                    Teléfono
                  </label>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="+53 XXXXXXXX"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-teal-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>

                <motion.div className="relative" variants={itemAnimation}>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700 mb-1 block"
                  >
                    Asunto
                  </label>
                  <div className="relative overflow-hidden rounded-lg">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-teal-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div className="relative" variants={itemAnimation}>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 mb-1 block"
                >
                  Mensaje
                </label>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare size={18} className="text-gray-500" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-teal-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex items-center"
                variants={itemAnimation}
              >
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  Acepto la{" "}
                  <a href="#" className="text-teal-600 hover:underline">
                    política de privacidad
                  </a>{" "}
                  y el tratamiento de mis datos.
                </label>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 md:py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center text-sm md:text-base ${
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
                variants={itemAnimation}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje <Send size={18} className="ml-2" />
                  </>
                )}
              </motion.button>
            </form>

            {submitted && (
              <motion.div
                className="bg-teal-50 border border-teal-200 text-teal-700 px-4 py-3 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos
                pondremos en contacto contigo pronto.
              </motion.div>
            )}
          </motion.div>

          <motion.div
            ref={infoRef}
            className="space-y-6 md:space-y-8 mt-8 md:mt-0"
            variants={infoAnimation}
            initial="hidden"
            animate={isInfoInView ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-gray-50 rounded-2xl p-5 md:p-8 border border-gray-100 shadow-sm"
              variants={itemAnimation}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemAnimation}
                    whileHover={{
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center mr-4 flex-shrink-0`}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <item.icon size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {item.title}
                      </h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden border border-gray-200 h-64 md:h-80 shadow-sm"
              variants={itemAnimation}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.9554643854513!2d-82.38402372414287!3d23.137810911279766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd79b9ae9c2443%3A0x4c2c97f58a4d3d56!2sLa%20Habana%2C%20Cuba!5e0!3m2!1ses!2ses!4v1683893721159!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Banco Metropolitano"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
