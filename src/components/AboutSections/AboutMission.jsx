"use client";

import { motion } from "motion/react";
import { Target, Award, Heart } from "lucide-react";

export const AboutMission = () => {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Proporcionar soluciones financieras innovadoras y accesibles que impulsen el desarrollo económico de nuestros clientes y comunidades, garantizando la máxima seguridad y confianza en cada operación.",
    },
    {
      icon: Award,
      title: "Visión",
      description:
        "Ser reconocidos como la institución financiera líder en innovación y servicio al cliente, estableciendo nuevos estándares de excelencia en el sector bancario y contribuyendo activamente al progreso económico y social.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Integridad, transparencia, innovación, excelencia en el servicio, responsabilidad social y compromiso con nuestros clientes, empleados y comunidades son los pilares fundamentales que guían nuestras acciones diarias.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
