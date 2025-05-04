import { Link } from "react-router";

export const Menu = ({ isOpen }) => {
  return (
    <div
      className={`absolute top-0 right-0 h-screen w-70 bg-white z-10  duration-500 ease-in-out transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full "
      }`}
    >
      <div
        className={`flex flex-col mt-6 items-start ml-4 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          to={"/login"}
          className="flex items-center gap-2 text-xl cursor-pointer"
        >
          <svg
            className="w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
              clipRule="evenodd"
            />
          </svg>
          Iniciar Sesion
        </Link>
        <ul className="mt-10 flex flex-col gap-5 text-xl ml-12">
          <li>
            <a href="/home">Inicio</a>
          </li>
          <li>
            <a href="/services">Servicios</a>
          </li>
          <li>
            <a href="/about">Nosotros</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
