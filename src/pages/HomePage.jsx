import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <>
      <div className="h-screen relative overflow-y-auto bg-white">
        <Header />
        <main className="h-[calc(100vh-5rem)] relative">
          <div className="relative h-full bg-[url(/background.png)] bg-cover bg-center flex items-center md:justify-start px-8 justify-center">
            {/* Superposición oscura */}
            <div className="absolute inset-0 bg-black/30"></div>
            <section className="relative text-white md:max-w-2xl md:ml-20 ">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-shadow-lg/50 text-center animate-fade-in-left">
                Bienvenido al Banco Metropolitano
              </h1>
              <p className="animate-fade-in-down text-xl md:text-2xl mb-8 leading-relaxed text-shadow-lg/20 text-center">
                Tu confianza es nuestro mayor activo. Gestiona tus finanzas de
                manera segura y eficiente con nosotros.
              </p>
            </section>
          </div>
        </main>
        <div className="bg-blue-600 h-[1000px]"></div>
      </div>
    </>
  );
};
