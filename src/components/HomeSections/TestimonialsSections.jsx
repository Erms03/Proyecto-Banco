export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Emprendedora",
      quote:
        "El apoyo financiero y la asesoría que recibí de Banco Metropolitano fueron fundamentales para hacer crecer mi negocio. Su plataforma digital me permite gestionar todo sin complicaciones.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Profesional",
      quote:
        "Llevo más de 10 años como cliente y la evolución digital del banco ha sido impresionante. La app móvil me permite hacer todo lo que necesito sin visitar una sucursal.",
    },
    {
      name: "Laura Martínez",
      role: "Estudiante universitaria",
      quote:
        "Abrí mi primera cuenta con ellos y el proceso fue muy sencillo. Las herramientas de control de gastos me ayudan a administrar mejor mi presupuesto mensual.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600">
            Miles de personas confían en Banco Metropolitano para gestionar sus
            finanzas personales y empresariales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
