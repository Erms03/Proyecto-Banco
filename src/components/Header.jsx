import { useState } from "react";
import { Menu } from "./Menu";
import { Nav } from "./Nav";
import { Link, useNavigate } from "react-router";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="h-20 w-full flex items-center justify-between md:px-16 px-6 bg-white/40 shadow-md z-10 top-0 sticky backdrop-blur-sm">
      <img
        src="/images.png"
        alt="Page Logo"
        className="h-16 w-56 md:w-auto md:h-auto"
      />

      <div className="md:flex space-x-4 items-center hidden">
        <Nav />
        <button
          className="py-2 px-4 border-1 border-black ml-10 cursor-pointer hover:bg-black hover:text-white transition-colors duration-100"
          onClick={handleLogin}
        >
          Iniciar Sesion
        </button>
        <Link
          className="py-2 px-4 hover:bg-black hover:text-white cursor-pointer border-1 border-black transition-color duration-100 "
          to="/register"
        >
          Registrarse
        </Link>
      </div>

      <div
        className="block md:hidden cursor-pointer z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`w-11 h-11 text-gray-800 dark:text-white ${
            isOpen ? "hidden" : "block"
          }`}
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
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
        <svg
          className={`w-11 h-11 text-gray-800 dark:text-white ${
            isOpen ? "block" : "hidden"
          }`}
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
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      </div>
      <Menu isOpen={isOpen} handleLogin={handleLogin} />
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-40"></div>
      )}
    </header>
  );
};
