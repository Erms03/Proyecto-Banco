import { Link } from "react-router";

export const CTASection = () => {
  return (
    <section className="py-20 bg-green-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-600/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comienza tu viaje financiero hoy mismo
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Únete a miles de clientes satisfechos que confían en Banco
            Metropolitano para alcanzar sus metas financieras.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/abrir-cuenta"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-800 font-medium rounded-lg transition-all hover:bg-green-50 hover:shadow-lg text-lg"
            >
              Abrir una cuenta
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white/30 transition-all hover:bg-white/10 hover:shadow-lg text-lg"
            >
              Contactar un asesor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
