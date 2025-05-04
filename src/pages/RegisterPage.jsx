import React, { useState } from "react";
import { Link } from "react-router";

export const RegisterPage = () => {
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirmPassword, setRevealConfirmPassword] = useState(false);

  const handleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };

  const handleRevealConfirmPassword = () => {
    setRevealConfirmPassword(!revealConfirmPassword);
  };

  return (
    <div className="flex justify-center md:items-center min-h-screen md:px-4 bg-gray-100">
      <div className="px-5 py-6 shadow-2xl md:rounded-lg w-full md:max-w-md bg-white flex flex-col items-center justify-center">
        <form action="" className="flex flex-col gap-5">
          {/* Título */}
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-lg font-bold text-center">Crear Cuenta</h3>
            <p className="font-light text-gray-500 text-sm tracking-wide text-center">
              Regístrate para comenzar a usar nuestros servicios
            </p>
          </div>

          {/* Campo de Nombre */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Tu nombre"
              id="name"
              className="border border-black/10 shadow px-3 py-2 rounded-md focus:outline-none text-sm"
            />
          </div>

          {/* Campo de Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="example@gmail.com"
              id="email"
              className="border border-black/10 shadow px-3 py-2 rounded-md focus:outline-none text-sm"
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={revealPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="********"
                minLength={8}
                className="border border-black/10 shadow px-3 py-2 rounded-md focus:outline-none w-full text-sm"
              />
              {revealPassword ? (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={handleRevealPassword}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={handleRevealPassword}
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Campo de Confirmar Contraseña */}
          <div className="flex flex-col gap-1">
            <label htmlFor="confirm-password" className="text-sm font-medium">
              Confirmar Contraseña
            </label>
            <div className="relative">
              <input
                type={revealConfirmPassword ? "text" : "password"}
                name="confirm-password"
                id="confirm-password"
                placeholder="********"
                minLength={8}
                className="border border-black/10 shadow px-3 py-2 rounded-md focus:outline-none w-full text-sm"
              />
              {revealPassword ? (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={handleRevealPassword}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={handleRevealPassword}
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Botones */}
          <section className="flex flex-col gap-3">
            <button
              className="bg-black text-white border border-black cursor-pointer py-2 px-4 transition-all duration-300 rounded-md text-sm"
              type="submit"
            >
              Registrarse
            </button>
            <div className="flex items-center justify-center gap-2 border py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <img
                src="/Google-logo.png"
                alt="Logo Google"
                className="w-5 h-5"
              />
              <button className="text-sm">Registrarse con Google</button>
            </div>
          </section>

          {/* Iniciar sesión */}
          <section className="flex gap-2 justify-center items-center text-sm">
            <p className="text-center">¿Ya tienes cuenta?</p>
            <Link
              to="/login"
              className="text-emerald-700 hover:text-emerald-800"
            >
              Inicia Sesión
            </Link>
          </section>
        </form>
      </div>
    </div>
  );
};
