import { Header } from "../components/HomeSections/Header";
import { Footer } from "../components/HomeSections/Footer";
import { AboutHero } from "../components/AboutSections/AboutHero";
import { AboutMission } from "../components/AboutSections/AboutMission";
import { AboutHistory } from "../components/AboutSections/AboutHistory";
import { AboutTeam } from "../components/AboutSections/AboutTeam";
import { AboutAchievements } from "../components/AboutSections/AboutAchievements";
import { AboutCSR } from "../components/AboutSections/AboutCSR";
import { CTASection } from "../components/HomeSections/CTASection";

export const AboutPage = () => {
  return (
    <div className="overflow-x-hidden bg-white h-screen">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutHistory />
      <AboutTeam />
      <AboutAchievements />
      <AboutCSR />
      <CTASection />
      <Footer />
    </div>
  );
};
