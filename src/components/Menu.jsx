export const Menu = ({ isOpen, handleLogin }) => {
  return (
    <div
      className={`${
        isOpen
          ? "absolute right-0 top-0 translate-0 opacity-100"
          : "absolute right-0 top-0 translate-x-full opacity-0"
      } bg-white w-[80%] h-screen transition-all duration-500 ease-in-out z-10`}
    >
      <div
        className={`flex flex-col mr-28 mt-8 items-center ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className="flex items-center gap-2 text-xl cursor-pointer ml-6"
          onClick={handleLogin}
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
              fill-rule="evenodd"
              d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
              clip-rule="evenodd"
            />
          </svg>
          Iniciar Sesion
        </div>
        <ul className="mt-10 relative flex flex-col gap-5 text-xl ml-3">
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
