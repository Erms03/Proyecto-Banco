import { Header } from "../components/Header";
import { HomeHero } from "../components/HomeSections/HomeHero";
import { StatsSection } from "../components/HomeSections/StatsSection";
import { ServicesSection } from "../components/HomeSections/ServicesSection";
import { MobileAppSection } from "../components/HomeSections/MobileAppSection";
import { TestimonialsSection } from "../components/HomeSections/TestimonialsSections";
import { CTASection } from "../components/HomeSections/CTASection";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="overflow-x-hidden relative h-screen bg-white">
      <Header />
      <HomeHero />
      <StatsSection />
      <ServicesSection />
      <MobileAppSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};
