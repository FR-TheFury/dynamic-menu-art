import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { UsefulNumbers } from "@/components/UsefulNumbers";
import { EventsSection } from "@/components/EventsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DecreesSection } from "@/components/DecreesSection";
import { Footer } from "@/components/Footer";
import { OrganicShapes } from "@/components/OrganicShapes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <OrganicShapes />
      <Header />
      <HeroSection />
      <NewsSection />
      <FeaturedSection />
      <UsefulNumbers />
      <EventsSection />
      <ServicesSection />
      <DecreesSection />
      <Footer />
    </div>
  );
};

export default Index;
