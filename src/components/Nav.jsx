import React from "react";
import { Link } from "react-router";

export const Nav = () => {
  return (
    <nav className="space-x-6 flex text-lg transform">
      <Link to="/user" className="hover:scale-105 transition-transform">
        Inicio
      </Link>

      <div className="relative group">
        <div className="flex items-center gap-1 group-hover:scale-105 transition-transform cursor-pointer">
          <p>Operaciones</p>
          <svg
            className="w-4 h-4 text-gray-800 dark:text-white"
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
              d="m19 9-7 7-7-7"
            />
          </svg>
        </div>

        <div className="hidden bg-white text-back absolute top-6 -left-2 w-40 group-hover:block cursor-pointer rounded-sm overflow-hidden shadow-2xl">
          <ul>
            <li className="p-2 hover:bg-emerald-400 transition-all">
              Actualizar datos
            </li>
            <li className="p-2 hover:bg-emerald-400 transition-all">
              Enviar quejas/sugerencias
            </li>
            <li className="p-2 hover:bg-emerald-400 transition-all">
              Transferir Dinero
            </li>
          </ul>
        </div>
      </div>

      <Link to="/transactions" className="hover:scale-105 transition-transform">
        Transacciones
      </Link>
      <Link to="/complaints" className="hover:scale-105 transition-transform">
        Quejas
      </Link>
      <Link to="/profile" className="hover:scale-105 transition-transform">
        Perfil
      </Link>
    </nav>
  );
};
