import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { PasswordInput } from "../components/PasswordInput";
import { useRegister } from "../hooks/useRegister";
import { useAuth } from "../context/AuthContext";

export const LoginPage = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const { users } = useRegister();
  const { login, authenticatedUser } = useAuth();
  const navigate = useNavigate();

  const updateLoginForm = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
    console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) =>
        user.email === dataForm.email && user.password === dataForm.password
    );

    if (user) {
      alert("Inicio de sesión exitoso");
      login(user);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen md:px-4 bg-gray-100 relative">
      <Link to={"/home"}>
        <svg
          className="w-10 h-10 text-gray-500 hover:text-gray-800 dark:text-white absolute top-0 left-0 m-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
      </Link>

      <div className=" py-8 bg-white shadow-2xl md:rounded-lg w-full md:max-w-md lg:max-w-lg flex flex-col items-center justify-center md:block px-16">
        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
              value={dataForm.email}
              onChange={updateLoginForm}
            />
          </div>

          {/* Campo de Contraseña */}
          <PasswordInput
            label={"Contraseña"}
            value={dataForm.password}
            handleChange={updateLoginForm}
          />

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
            <Link className="flex items-center justify-center gap-2 border py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <img
                src="/Google-logo.png"
                alt="Logo Google"
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <button className="text-sm md:text-base cursor-pointer">
                Iniciar Sesión con Google
              </button>
            </Link>
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
