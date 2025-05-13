"use client";

import { useState } from "react";
import { Nav } from "./HomeSections/Nav";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import {
  X,
  Menu,
  User,
  LogOut,
  Settings,
  CreditCard,
  Shield,
  Bell,
} from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { authenticatedUser, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
          <div className="flex items-center space-x-3 relative">
            <span className="text-gray-700 font-medium">
              {authenticatedUser.name}
            </span>
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors cursor-pointer"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              {authenticatedUser.name.charAt(0).toUpperCase()}
            </div>

            {/* Dropdown menu */}
            {showUserMenu && (
              <div className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">
                    {authenticatedUser.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {authenticatedUser.email}
                  </p>
                </div>
                <ul>
                  <li>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4 mr-3 text-gray-500" />
                      Mi Perfil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accounts"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <CreditCard className="w-4 h-4 mr-3 text-gray-500" />
                      Mis Cuentas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Shield className="w-4 h-4 mr-3 text-gray-500" />
                      Seguridad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/notifications"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Bell className="w-4 h-4 mr-3 text-gray-500" />
                      Notificaciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="w-4 h-4 mr-3 text-gray-500" />
                      Configuración
                    </Link>
                  </li>
                  <li className="border-t border-gray-100 mt-2">
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        handleLogout();
                      }}
                      className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      <LogOut className="w-4 h-4 mr-3 text-red-500" />
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            )}
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
        className={`fixed inset-y-0 right-0 w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
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

            {isAuthenticated && (
              <>
                <div className="border-t border-gray-200 my-2 pt-2"></div>
                <Link
                  to="/profile"
                  className="py-2 text-gray-800 hover:text-green-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Mi Perfil
                </Link>
                <Link
                  to="/accounts"
                  className="py-2 text-gray-800 hover:text-green-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Mis Cuentas
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="py-2 text-red-600 hover:text-red-700 font-medium transition-colors text-left"
                >
                  Cerrar Sesión
                </button>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Overlay para cerrar el dropdown al hacer clic fuera */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
        ></div>
      )}
    </header>
  );
};
