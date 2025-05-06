import { Link } from "react-router";

export const MobileAppSection = () => {
  const features = [
    "Transferencias inmediatas sin comisiones",
    "Pago de servicios y tarjetas",
    "Control de gastos y presupuestos",
    "Notificaciones en tiempo real",
    "Bloqueo y desbloqueo de tarjetas",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-6">
              Banca Móvil
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tu banco en la palma de tu mano
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Descarga nuestra aplicación móvil y disfruta de todas las
              funcionalidades bancarias desde cualquier lugar y en cualquier
              momento.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4">
              <Link
                to="#"
                className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-7 h-7 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 8.42 7.31c1.33.07 2.25.7 3.01.72.96-.04 2.03-.8 3.02-.77 3.56.3 5.23 3.68 5.23 3.68-3.25 1.57-2.72 5.3.37 6.75-.92 1.65-2.13 3.29-3 3.59zm-3.2-15.5c.83-1.17.89-2.24.66-3.28-1.25.13-2.68.9-3.42 1.97-.66.94-1.1 2.22-.9 3.37 1.19.05 2.47-.59 3.66-2.06z" />
                </svg>
                App Store
              </Link>
              <Link
                to="#"
                className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 5.371l2.97-1.715 7.995 4.63c.825.478 1.1 1.377.594 2.123-.044.063-.094.124-.148.182l-8.233 4.811-3.073-1.75L24 12l-9.5-4.815z" />
                </svg>
                Google Play
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-70"></div>
            <div className="relative">
              <img
                src="/PhonePhoto.webp"
                alt="Aplicación móvil"
                className="mx-auto rounded-3xl shadow-2xl"
              />

              {/* Elementos flotantes decorativos */}
              <div className="absolute -right-10 top-20 bg-white rounded-xl shadow-xl p-4 w-40 animate-float">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-medium text-gray-900">
                      Transferencia
                    </p>
                    <p className="text-xs text-gray-500">Exitosa</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold text-gray-900">$1,250.00</p>
                  <p className="text-xs text-gray-500">Ahora</p>
                </div>
              </div>

              <div className="absolute -left-12 bottom-32 bg-white rounded-xl shadow-xl p-4 w-44 animate-float-delay">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-gray-900">
                    Balance Total
                  </p>
                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900">$24,156.00</p>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-green-600">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-xs ml-1">+2.5%</span>
                  </div>
                  <p className="text-xs text-gray-500 ml-2">este mes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
