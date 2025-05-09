"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { PasswordInput } from "../PasswordInput";
import { useRegister } from "../../hooks/useRegister";
import { useAuth } from "../../context/AuthContext";
import { useUpdateRegisterForm } from "../../hooks/useUpdateRegisterForm";
import { LoginSideFeatures } from "./AuthSideContent";

export const LoginForm = ({ startNotification }) => {
  const { dataForm, updateForm } = useUpdateRegisterForm();
  const { users } = useRegister();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Modificar la función handleSubmit para asegurar que las notificaciones funcionen correctamente
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular un tiempo de carga
    setTimeout(() => {
      const user = users.find(
        (user) =>
          user.email === dataForm.email && user.password === dataForm.password
      );

      if (user) {
        login(user);
        startNotification({
          message: "Ha iniciado sesión correctamente",
          path: "/profile",
        });
        // Usar setTimeout para asegurar que la notificación se muestre antes de la navegación
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      } else {
        startNotification({
          error: "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
          path: null,
        });
      }
      setIsLoading(false);
    }, 800);
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail size={18} className="text-gray-500" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Correo electrónico"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                value={dataForm.email}
                onChange={updateForm}
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

          <motion.div variants={itemVariants}>
            <PasswordInput
              label=""
              name="password"
              value={dataForm.password}
              handleChange={updateForm}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-between"
          variants={itemVariants}
        >
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
            />
            <span>Recordarme</span>
          </label>
          <Link
            to="/forgot-password"
            className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </motion.div>

        <motion.button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
            isLoading ? "opacity-80 cursor-not-allowed" : ""
          }`}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
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
              Iniciando sesión...
            </span>
          ) : (
            "Iniciar Sesión"
          )}
        </motion.button>

        <motion.div
          className="relative flex items-center justify-center my-6"
          variants={itemVariants}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">O continúa con</span>
          </div>
        </motion.div>

        <motion.button
          type="button"
          className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          variants={itemVariants}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <img src="/Google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
          <span>Iniciar sesión con Google</span>
        </motion.button>

        <motion.p
          className="text-center text-sm text-gray-600 mt-6"
          variants={itemVariants}
        >
          ¿No tienes una cuenta?{" "}
          <Link
            to="/register"
            className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Regístrate
          </Link>
        </motion.p>
      </form>

      {/* Añadimos las características en el lado del formulario para dispositivos móviles */}
      <div className="mt-10 lg:hidden">
        <LoginSideFeatures />
      </div>
    </motion.div>
  );
};
