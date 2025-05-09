
import { motion, useInView } from "framer-motion";
import { Target, Award, Heart } from "lucide-react";
import { useRef } from "react";

export const AboutMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div
                className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-100 rounded-full opacity-20"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              ></motion.div>

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <value.icon className="h-7 w-7 text-teal-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
