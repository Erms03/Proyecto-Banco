import { Link } from "react-router";

export const Nav = () => {
  return (
    <nav className="flex items-center space-x-8 mr-30">
      <Link
        to="/"
        className="text-gray-800 hover:text-green-600 font-medium transition-colors"
      >
        Inicio
      </Link>
      <Link
        to="/servicios"
        className="text-gray-800 hover:text-green-600 font-medium transition-colors"
      >
        Servicios
      </Link>
      <Link
        to="/nosotros"
        className="text-gray-800 hover:text-green-600 font-medium transition-colors"
      >
        Nosotros
      </Link>
      <Link
        to="/contacto"
        className="text-gray-800 hover:text-green-600 font-medium transition-colors"
      >
        Contacto
      </Link>
    </nav>
  );
};
