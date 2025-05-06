import { BarChart3, CreditCard, Shield, Users } from "lucide-react";
import { ServiceCard } from "./ServicesCard";

export const ServicesSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Tarjetas de Crédito",
      description:
        "Tarjetas con beneficios exclusivos, tecnología contactless y seguridad avanzada.",
      link: "/tarjetas",
    },
    {
      icon: BarChart3,
      title: "Inversiones",
      description:
        "Opciones de inversión personalizadas para hacer crecer tu patrimonio.",
      link: "/inversiones",
    },
    {
      icon: Shield,
      title: "Seguros",
      description:
        "Protección integral para ti, tu familia y tu patrimonio con coberturas flexibles.",
      link: "/seguros",
    },
    {
      icon: Users,
      title: "Banca Empresarial",
      description:
        "Soluciones financieras para empresas de todos los tamaños y sectores.",
      link: "/empresas",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Financieros
          </h2>
          <p className="text-lg text-gray-600">
            Soluciones bancarias diseñadas para satisfacer todas tus necesidades
            financieras con la máxima seguridad y eficiencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
