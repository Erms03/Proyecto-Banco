
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Elemento decorativo de fondo */}
      <motion.div
        className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-100 rounded-full opacity-0 group-hover:opacity-20"
        initial={{ scale: 0, rotate: -20 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div className="relative z-10">
        <motion.div
          className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors"
        >
          Conocer más
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};
