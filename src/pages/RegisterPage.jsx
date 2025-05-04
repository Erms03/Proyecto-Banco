import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { PasswordInput } from "../components/PasswordInput";
import { useRegister } from "../hooks/useRegister";
import { useUpdateRegisterForm } from "../hooks/useUpdateRegisterForm";

export const RegisterPage = () => {
  const { dataForm, updateRegisterForm, cleanRegisterForm } =
    useUpdateRegisterForm();
  const { createUser } = useRegister();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataForm.password !== dataForm.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    createUser({ dataForm });
    cleanRegisterForm();
    navigate("/login");
  };

  return (
    <div className="flex justify-center md:items-center min-h-screen md:px-4 bg-gray-100">
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
      <div className="px-5 py-6 shadow-2xl md:rounded-lg w-full md:max-w-md bg-white flex flex-col items-center justify-center">
        <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
              onChange={updateRegisterForm}
              value={dataForm.name}
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
              onChange={updateRegisterForm}
              value={dataForm.email}
            />
          </div>

          {/* Campo de Contraseña */}
          <PasswordInput
            label={"Contraseña"}
            handleChange={updateRegisterForm}
            value={dataForm.password}
          ></PasswordInput>

          {/* Campo de Confirmar Contraseña */}
          <PasswordInput
            label={"Confirmar contraseña"}
            value={dataForm.confirmPassword}
            handleChange={updateRegisterForm}
          ></PasswordInput>

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
