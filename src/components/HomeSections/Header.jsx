import { useState } from "react";
import { Nav } from "./Nav";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { X, Menu, User } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { authenticatedUser, isAuthenticated } = useAuth();

  return (
    <header className="h-16 w-full flex items-center justify-between px-4 md:px-6 lg:px-16 bg-white/95 shadow-sm z-50 top-0 sticky backdrop-blur-sm">
      <Link to="/" className="flex items-center">
        <img
          src="/Banco-Logo.png"
          alt="Banco Metropolitano"
          className="h-12 w-auto"
        />
      </Link>

      <div className="md:flex items-center space-x-8 hidden">
        <Nav />
        {isAuthenticated ? (
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 font-medium">
              {authenticatedUser.name}
            </span>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors cursor-pointer">
              {authenticatedUser.name.charAt(0).toUpperCase()}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="py-2 px-4 text-green-700 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Registrarse
            </Link>
          </div>
        )}
      </div>

      {/* Botón de menú móvil */}
      <button
        className="block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Menú móvil */}
      <div
        className={`fixed inset-y-0 right-0 w-72 h-screen bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {isAuthenticated ? (
            <div className="flex items-center space-x-3 mb-8 mt-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white">
                {authenticatedUser.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-gray-800 font-medium">
                {authenticatedUser.name}
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mb-8 mt-4">
              <Link
                to="/login"
                className="flex items-center gap-2 py-2 px-4 text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-5 h-5" />
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="py-2 px-4 bg-green-600 text-white rounded-lg text-center hover:bg-green-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Registrarse
              </Link>
            </div>
          )}

          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="py-2 text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="py-2 text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/nosotros"
              className="py-2 text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className="py-2 text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isOpen && (
        <div
          className="fixed h-screen inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};
