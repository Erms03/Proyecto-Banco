import { Header } from "../components/HomeSections/Header";
import { Hero } from "../components/HomeSections/Hero";
import { StatsSection } from "../components/HomeSections/StatsSection";
import { ServicesSection } from "../components/HomeSections/ServicesSection";
import { MobileAppSection } from "../components/HomeSections/MobileAppSection";
import { TestimonialsSection } from "../components/HomeSections/TestimonialsSections";
import { CTASection } from "../components/HomeSections/CTASection";
import { Footer } from "../components/HomeSections/Footer";

export const HomePage = () => {
  return (
    <div className="overflow-x-hidden relative h-screen bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <MobileAppSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};
