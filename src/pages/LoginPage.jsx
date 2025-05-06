"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { PasswordInput } from "../components/PasswordInput";
import { useRegister } from "../hooks/useRegister";
import { useAuth } from "../context/AuthContext";
import { Notification } from "../components/Notification";
import { useNotification } from "../hooks/useNotification";
import { useUpdateRegisterForm } from "../hooks/useUpdateRegisterForm";
import { ArrowLeft, Mail } from "lucide-react";

export const LoginPage = () => {
  const { dataForm, updateForm } = useUpdateRegisterForm();
  const { users } = useRegister();
  const { login } = useAuth();
  const { notification, startNotification } = useNotification();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    // Animar la entrada del formulario
    setTimeout(() => {
      setAnimateForm(true);
    }, 100);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simular un tiempo de carga
    setTimeout(() => {
      const user = users.find(
        (user) =>
          user.email === dataForm.email && user.password === dataForm.password
      );

      if (user) {
        login(user);
        startNotification({ path: "/home" });
      } else {
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        startNotification({ path: null });
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 to-white">
      {notification && (
        <Notification
          message={"Ha iniciado sesión correctamente"}
          error={error}
        />
      )}

      {/* Sección izquierda - Decorativa */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-green-700 to-green-900">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-white z-10">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 transition-transform animate-scale-grow">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
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
                  d="M12 17V11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">
            Banco Metropolitano
          </h1>
          <p className="text-xl text-center mb-8 max-w-md">
            Accede a tu cuenta para gestionar tus finanzas de manera segura y
            eficiente
          </p>
          <div className="space-y-6 max-w-md">
            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 8L2 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 15H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Seguridad Avanzada</h3>
                <p className="text-sm text-white/80">
                  Protegemos tus datos con los más altos estándares de seguridad
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
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
                    d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H9.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9H15.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Experiencia Personalizada</h3>
                <p className="text-sm text-white/80">
                  Servicios adaptados a tus necesidades financieras
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Sección derecha - Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative">
        <Link
          to="/home"
          className="absolute top-6 left-6 flex items-center text-green-700 hover:text-green-800 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span>Volver al inicio</span>
        </Link>

        <div
          className={`w-full max-w-md transition-all duration-700 transform mt-10 ${
            animateForm
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Bienvenido de nuevo
            </h2>
            <p className="text-gray-600">
              Inicia sesión para acceder a tu cuenta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Correo electrónico"
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  value={dataForm.email}
                  onChange={updateForm}
                />
              </div>

              <PasswordInput
                label=""
                name="password"
                value={dataForm.password}
                handleChange={updateForm}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                />
                <span>Recordarme</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-green-600 hover:text-green-700 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                isLoading ? "opacity-80 cursor-not-allowed" : ""
              }`}
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
            </button>

            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  O continúa con
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <img
                src="/Google-logo.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              <span>Iniciar sesión con Google</span>
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/register"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Regístrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
