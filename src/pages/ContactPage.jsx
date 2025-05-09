import { Header } from "../components/HomeSections/Header";
import { Footer } from "../components/HomeSections/Footer";
import { ContactHero } from "../components/ContactSections/ContactHero";
import { ContactForm } from "../components/ContactSections/ContactForm";
import { ContactFAQ } from "../components/ContactSections/ContactFAQ";
import { ContactCTA } from "../components/ContactSections/ContactCTA";

export const ContactPage = () => {
  return (
    <div className="overflow-x-hidden bg-white h-screen">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
};
