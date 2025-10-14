import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import logoReference from "@/assets/logo-pevele-carembault.png";
import partnerFlexipervilles from "@/assets/partner-flexipervilles.png";
import partnerGraines from "@/assets/partner-graines.png";
import partnerPerischool from "@/assets/partner-perischool.png";
import partnerServicesPlus from "@/assets/partner-services-plus.png";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Inscription accueil et loisirs",
    icon: "/Image-Mairie/famille.png",
    color: "orange",
  },
  {
    id: 2,
    title: "Demander mon Pass'déchetteries",
    icon: "/Image-Mairie/poubelle-de-recyclage.png",
    color: "green",
  },
  {
    id: 3,
    title: "Demander ma carte Pass Prév'ailles",
    icon: "/Image-Mairie/cartes-de-poker.png",
    color: "cyan",
  },
  {
    id: 4,
    title: "Trouver un emploi",
    icon: "/Image-Mairie/mallette.png",
    color: "purple",
  },
  {
    id: 5,
    title: "Demande d'urbanisme",
    icon: "/Image-Mairie/immeubles.png",
    color: "brown",
  },
  {
    id: 6,
    title: "Séniors",
    icon: "/Image-Mairie/personne-agee.png",
    color: "beige",
  },
];

const partners = [
  { name: "Flexi'Pér'villes", image: partnerFlexipervilles },
  { name: "Graines de Culture(s)", image: partnerGraines },
  { name: "Peri'school", image: partnerPerischool },
  { name: "Services +", image: partnerServicesPlus },
];

export const ServicesSection = () => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  
  const nextPartners = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % partners.length);
  };
  
  const prevPartners = () => {
    setCurrentPartnerIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#267884] mb-2">
              La pévèle carembault à porter de clic !
            </h2>
            <div className="w-full max-w-[600px] h-1 bg-[#d64545]"></div>
          </div>
          <p className="text-[#267884] text-base md:text-lg max-w-4xl mb-6 leading-relaxed">
            Simplifiez votre quotidien avec les services de la Communauté de communes Pévèle Carembault.
            Ici, plus besoin de chercher : tout est réuni pour vous faciliter la vie et profiter pleinement de votre
            territoire. Approche de vous pour rendre chaque service accessible... en un clic depuis Mons-en-
            Pévèle !
          </p>
          <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-6 py-2.5 font-semibold shadow-lg">
            Tout les services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Services Grid with Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Services Grid - 8 columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="group hover:scale-105 transition-all cursor-pointer bg-[#9CC5CC] rounded-[32px] p-6 flex flex-col items-center text-center space-y-4 shadow-md"
              >
                <div
                  className={`
                    w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg
                    ${service.color === "orange" ? "bg-[#E8974F]" : ""}
                    ${service.color === "green" ? "bg-[#6BB344]" : ""}
                    ${service.color === "cyan" ? "bg-[#4EBDC6]" : ""}
                    ${service.color === "purple" ? "bg-[#C45BA0]" : ""}
                    ${service.color === "brown" ? "bg-[#9B7F5B]" : ""}
                    ${service.color === "beige" ? "bg-[#D4AF6A]" : ""}
                  `}
                >
                  <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="font-bold text-white text-sm leading-tight">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Map Card - 4 columns */}
          <div className="lg:col-span-4">
            <div className="h-full bg-[#267884] rounded-[32px] overflow-hidden shadow-md relative min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path 
                    d="M200 50 L350 150 L350 300 L200 380 L50 300 L50 150 Z" 
                    fill="#1a5f66" 
                    opacity="0.5"
                  />
                  <text x="200" y="200" textAnchor="middle" fill="white" fontSize="16" opacity="0.7">
                    Pévèle Carembault
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Text and Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <p className="text-[#267884] text-base md:text-lg font-bold leading-relaxed">
              Des démarches plus simples. Un accès plus rapide. La Pévèle Carembault se rapproche de vous pour rendre chaque service accessible... en un clic depuis Mons-en-Pévèle !
            </p>
          </div>
          <div className="flex justify-end">
            <img
              src={logoReference}
              alt="Logo Pévèle Carembault"
              className="h-28 w-auto"
            />
          </div>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between gap-8">
            <button
              onClick={prevPartners}
              className="flex-shrink-0 p-2 rounded-full hover:bg-muted/30 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Partenaires précédents"
            >
              <ChevronLeft className="w-12 h-12 text-[#267884]" strokeWidth={3} />
            </button>
            
            <div className="flex-1 flex items-center justify-center gap-8 overflow-hidden">
              {partners.map((partner, index) => {
                const position = (index - currentPartnerIndex + partners.length) % partners.length;
                const isVisible = position < 3;
                const isCurrent = position === 0;
                
                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0 hidden'
                    } ${isCurrent ? 'scale-100' : 'scale-90'}`}
                  >
                    <div className="w-48 h-32 bg-white rounded-lg flex items-center justify-center p-4 shadow-md">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button
              onClick={nextPartners}
              className="flex-shrink-0 p-2 rounded-full hover:bg-muted/30 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Partenaires suivants"
            >
              <ChevronRight className="w-12 h-12 text-[#267884]" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
