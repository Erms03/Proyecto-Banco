import React, { useState } from "react";
import { Link } from "react-router";

export const LoginPage = () => {
  const [revealPassword, setRevealPassword] = useState(false);

  const handleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };

  return (
    <div className="flex justify-center md:items-center min-h-screen md:px-4 bg-gray-100">
      <div className="px-6 py-8 bg-white shadow-2xl rounded-lg w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center justify-center md:block">
        <form action="" className="flex flex-col gap-6">
          {/* Título */}
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              Iniciar Sesión
            </h3>
            <p className="font-light text-gray-500 text-sm md:text-md tracking-wide text-center">
              Bienvenido de nuevo. Introduzca sus datos
            </p>
          </div>

          {/* Campo de Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm md:text-base font-medium">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="example@gmail.com"
              id="email"
              className="border border-black/10 shadow px-3 py-2 rounded-lg focus:outline-none text-sm md:text-base"
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm md:text-base font-medium"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                type={revealPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="********"
                minLength={8}
                className="border border-black/10 shadow px-3 py-2 rounded-lg focus:outline-none w-full text-sm md:text-base"
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

          {/* Recordarme y Olvidaste tu contraseña */}
          <div className="flex justify-between items-center text-sm md:text-base">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" />
              Recordarme
            </label>
            <Link
              to="/forgot-password"
              className="text-emerald-700 hover:text-emerald-800"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Botones */}
          <section className="flex flex-col gap-4">
            <button
              className="bg-black text-white border border-black cursor-pointer py-2 px-4 transition-all duration-300 rounded-lg text-sm md:text-base"
              type="submit"
            >
              Iniciar Sesión
            </button>
            <div className="flex items-center justify-center gap-2 border py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <img
                src="/Google-logo.png"
                alt="Logo Google"
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <button className="text-sm md:text-base">
                Iniciar Sesión con Google
              </button>
            </div>
          </section>

          {/* Registro */}
          <section className="flex gap-2 justify-center items-center text-sm md:text-base">
            <p className="text-center">¿No tienes cuenta?</p>
            <Link
              to="/register"
              className="text-emerald-700 hover:text-emerald-800"
            >
              Regístrate
            </Link>
          </section>
        </form>
      </div>
    </div>
  );
};
