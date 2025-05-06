export const StatsSection = () => {
  const stats = [
    { value: "25+", label: "Años de experiencia" },
    { value: "500k+", label: "Clientes satisfechos" },
    { value: "100+", label: "Sucursales" },
    { value: "99.9%", label: "Tiempo de actividad" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-700">
                {stat.value}
              </p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
