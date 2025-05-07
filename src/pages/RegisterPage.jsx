"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router";
import { PasswordInput } from "../components/PasswordInput";
import { useRegister } from "../hooks/useRegister";
import { useUpdateRegisterForm } from "../hooks/useUpdateRegisterForm";
import { Notification } from "../components/Notification";
import { useNotification } from "../hooks/useNotification";
import { ArrowLeft, User, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const RegisterPage = () => {
  const { dataForm, updateForm, cleanRegisterForm } = useUpdateRegisterForm();
  const { createUser } = useRegister();
  const { notification, startNotification } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [animateForm, setAnimateForm] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    // Animar la entrada del formulario
    setTimeout(() => {
      setAnimateForm(true);
    }, 100);
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataForm.password !== dataForm.confirmPassword) {
      return;
    }

    setIsLoading(true);

    // Simular un tiempo de carga
    setTimeout(() => {
      createUser({ dataForm });
      startNotification({ path: "/login" });
      cleanRegisterForm();
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
    <div className="flex min-h-screen bg-gradient-to-br from-teal-50 to-white relative overflow-hidden">
      {notification && (
        <Notification message={"Se ha registrado correctamente"} />
      )}

      {/* Enlace para volver al inicio - Fijo en la parte superior */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          to="/"
          className="flex items-center text-teal-700 hover:text-teal-800 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span>Volver al inicio</span>
        </Link>
      </motion.div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, -20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      {/* Sección izquierda - Decorativa */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-teal-700 via-emerald-600 to-teal-700"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-white z-10">
          <motion.div
            className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-8"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <svg
                className="w-10 h-10 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 8V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 11H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Únete a Banco Metropolitano
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-8 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Crea tu cuenta y comienza a disfrutar de todos nuestros servicios
            financieros
          </motion.p>
          <motion.div
            className="space-y-6 max-w-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -5, x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Proceso Sencillo</h3>
                <p className="text-sm text-white/80">
                  Regístrate en minutos y comienza a operar inmediatamente
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -5, x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 8L8 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8L16 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Sin Comisiones Ocultas</h3>
                <p className="text-sm text-white/80">
                  Transparencia total en todas nuestras operaciones
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Elementos decorativos */}
        <motion.div
          className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/4 -right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -3, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>

      {/* Sección derecha - Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative">
        <div className="w-full max-w-md pt-16 md:pt-0">
          <motion.div
            className={`w-full transition-all duration-700 transform ${
              animateForm
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-8 text-center" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Crear una cuenta
              </h2>
              <p className="text-gray-600">
                Regístrate para comenzar a usar nuestros servicios
              </p>
            </motion.div>

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
                  isLoading || !passwordMatch
                    ? "opacity-80 cursor-not-allowed"
                    : ""
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
                  <span className="px-2 bg-white text-gray-500">
                    O continúa con
                  </span>
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
                <img
                  src="/Google-logo.png"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};
