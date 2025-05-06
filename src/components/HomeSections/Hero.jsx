import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Fondo con gradiente moderno en tonos verdes más suaves */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-green-800"></div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/background.png"
          alt="Fondo bancario"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center mt-8 lg:mt-0">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide">
            Banca Digital Confiable
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Bienvenido al{" "}
            <span className="text-green-200">Banco Metropolitano</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-xl">
            Tu confianza es nuestro mayor activo. Gestiona tus finanzas de
            manera segura y eficiente con nuestra plataforma digital avanzada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/registro"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-800 font-medium rounded-lg transition-all hover:bg-green-50 hover:shadow-lg group"
            >
              Abrir Cuenta
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg border border-green-500 transition-all hover:bg-green-700 hover:shadow-lg"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="relative p-6">
              <img
                src="/HeroPhoto.png"
                alt="Banca móvil"
                className="w-full h-auto rounded-lg animate-float-card transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
