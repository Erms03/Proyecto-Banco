
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const productLinks = [
    "Cuentas",
    "Tarjetas",
    "Préstamos",
    "Inversiones",
    "Seguros",
  ];
  const serviceLinks = [
    "Banca Personal",
    "Banca Empresarial",
    "Banca Digital",
    "Pagos y Transferencias",
    "Asesoría Financiera",
  ];
  const socialLinks = ["facebook", "twitter", "instagram", "linkedin"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex items-center justify-center mr-3">
                <img
                  src="/metro-logo.jpg"
                  alt="Logo Banco Metropolitano"
                  className="rounded-md"
                />
              </div>
              <span className="text-white font-bold text-xl">
                Banco Metropolitano
              </span>
            </div>
            <p className="mb-6 text-gray-400 max-w-md">
              Más de 25 años brindando soluciones financieras innovadoras y
              seguras para individuos y empresas en todo el país.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon =
                  social === "facebook"
                    ? Facebook
                    : social === "twitter"
                    ? Twitter
                    : social === "instagram"
                    ? Instagram
                    : Linkedin;

                return (
                  <motion.a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{social}</span>
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>
          <div className="mt-2 sm:mt-0">
            <h3 className="text-white font-bold text-lg mb-4">Productos</h3>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          {/* Enlaces de servicios */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          {/* Información de contacto */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-gray-400">Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="text-gray-400">+53 54942132</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-gray-400 break-all">
                  contacto@bancometropolitano.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Banco Metropolitano. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Seguridad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
