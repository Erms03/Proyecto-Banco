"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { User, Mail } from "lucide-react";
import { PasswordInput } from "../PasswordInput";
import { useRegister } from "../../hooks/useRegister";
import { useUpdateRegisterForm } from "../../hooks/useUpdateRegisterForm";
import { RegisterSideFeatures } from "./AuthSideContent";

export const RegisterForm = ({ startNotification }) => {
  const { dataForm, updateForm, cleanRegisterForm } = useUpdateRegisterForm();
  const { createUser } = useRegister();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si las contraseñas coinciden
    if (dataForm.confirmPassword) {
      setPasswordMatch(dataForm.password === dataForm.confirmPassword);
    }

    // Calcular la fortaleza de la contraseña
    if (dataForm.password) {
      let strength = 0;
      // Longitud mínima
      if (dataForm.password.length >= 8) strength += 1;
      // Contiene números
      if (/\d/.test(dataForm.password)) strength += 1;
      // Contiene letras minúsculas y mayúsculas
      if (/[a-z]/.test(dataForm.password) && /[A-Z]/.test(dataForm.password))
        strength += 1;
      // Contiene caracteres especiales
      if (/[^a-zA-Z0-9]/.test(dataForm.password)) strength += 1;

      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [dataForm.password, dataForm.confirmPassword]);

  // Modificar la función handleSubmit para asegurar que las notificaciones funcionen correctamente
  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataForm.password !== dataForm.confirmPassword) {
      return;
    }

    setIsLoading(true);

    // Simular un tiempo de carga
    setTimeout(() => {
      createUser({ dataForm });
      startNotification({
        message: "Se ha registrado correctamente. Ahora puede iniciar sesión.",
        path: "/login",
      });
      cleanRegisterForm();
      setIsLoading(false);
      // Usar setTimeout para asegurar que la notificación se muestre antes de la navegación
      setTimeout(() => {
        navigate("/login");
      }, 1000);
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
      <form onSubmit={handleSubmit} className="space-y-5">
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Nombre completo"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                value={dataForm.name}
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
                transition={{ duration: 0.8, delay: 0.3 }}
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

          {/* Indicador de fortaleza de contraseña */}
          {dataForm.password && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  Fortaleza de la contraseña
                </span>
                <span className="text-xs font-medium">
                  {passwordStrength === 0 && "Muy débil"}
                  {passwordStrength === 1 && "Débil"}
                  {passwordStrength === 2 && "Media"}
                  {passwordStrength === 3 && "Fuerte"}
                  {passwordStrength === 4 && "Muy fuerte"}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full transition-all duration-300 ${
                    passwordStrength === 0
                      ? "w-1/4 bg-red-500"
                      : passwordStrength === 1
                      ? "w-2/4 bg-orange-500"
                      : passwordStrength === 2
                      ? "w-3/4 bg-yellow-500"
                      : passwordStrength === 3
                      ? "w-full bg-teal-500"
                      : "w-full bg-teal-600"
                  }`}
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      passwordStrength === 0
                        ? "25%"
                        : passwordStrength === 1
                        ? "50%"
                        : passwordStrength === 2
                        ? "75%"
                        : "100%",
                  }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            <PasswordInput
              label=""
              name="confirmPassword"
              value={dataForm.confirmPassword}
              handleChange={updateForm}
            />
          </motion.div>

          {/* Mensaje de error si las contraseñas no coinciden */}
          {dataForm.confirmPassword && !passwordMatch && (
            <motion.p
              className="text-sm text-red-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Las contraseñas no coinciden
            </motion.p>
          )}
        </motion.div>

        <motion.button
          type="submit"
          disabled={isLoading || !passwordMatch}
          className={`w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
            isLoading || !passwordMatch ? "opacity-80 cursor-not-allowed" : ""
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
              Creando cuenta...
            </span>
          ) : (
            "Crear cuenta"
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
          <span>Registrarse con Google</span>
        </motion.button>

        <motion.p
          className="text-center text-sm text-gray-600 mt-6"
          variants={itemVariants}
        >
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Inicia sesión
          </Link>
        </motion.p>
      </form>

      {/* Añadimos las características en el lado del formulario para dispositivos móviles */}
      <div className="mt-10 lg:hidden">
        <RegisterSideFeatures />
      </div>
    </motion.div>
  );
};
