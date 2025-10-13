import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trash2, CreditCard, Briefcase, Building, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import logoReference from "@/assets/logo-reference.png";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Inscription accueil et loisirs",
    icon: Users,
    color: "orange",
  },
  {
    id: 2,
    title: "Demander mon Pass'déchetteries",
    icon: Trash2,
    color: "green",
  },
  {
    id: 3,
    title: "Demander ma carte Pass Prév'ailles",
    icon: CreditCard,
    color: "cyan",
  },
  {
    id: 4,
    title: "Trouver un emploi",
    icon: Briefcase,
    color: "purple",
  },
  {
    id: 5,
    title: "Demande d'urbanisme",
    icon: Building,
    color: "brown",
  },
  {
    id: 6,
    title: "Séniors",
    icon: Heart,
    color: "beige",
  },
];

const partners = [
  "Flexi'Pér'villes",
  "Graines de Culture(s)",
  "Peri'school",
  "Services +",
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
    <section className="py-16 px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            La pévèle carembault à porter de clic !
          </h2>
          <p className="text-foreground text-base md:text-lg max-w-3xl mb-6 leading-relaxed">
            Simplifiez votre quotidien avec les services de la Communauté de communes Pévèle Carembault.
            Ici, plus besoin de chercher : tout est réuni pour vous faciliter la vie et profiter pleinement de votre
            territoire. Approche de vous pour rendre chaque service accessible... en un clic depuis Mons-en-
            Pévèle !
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 font-semibold shadow-lg">
            Tout les services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Services Grid - 2 columns on left */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="group hover:scale-105 transition-all cursor-pointer"
              >
                <div
                  className="relative p-6 flex flex-col items-center text-center space-y-3"
                  style={{
                    backgroundColor: 'hsl(var(--secondary))',
                    borderRadius: '40px',
                  }}
                >
                  <div
                    className={`
                      w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform
                      ${service.color === "orange" ? "bg-orange-500" : ""}
                      ${service.color === "green" ? "bg-green-500" : ""}
                      ${service.color === "cyan" ? "bg-cyan-500" : ""}
                      ${service.color === "purple" ? "bg-purple-500" : ""}
                      ${service.color === "brown" ? "bg-amber-600" : ""}
                      ${service.color === "beige" ? "bg-yellow-500" : ""}
                    `}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-sm leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Map Card on right */}
          <div className="lg:col-span-1">
            <div 
              className="h-full rounded-3xl overflow-hidden shadow-lg relative"
              style={{ backgroundColor: 'hsl(var(--primary))' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <p className="text-sm opacity-80">Carte de la région</p>
                  <p className="text-xs opacity-60 mt-2">Pévèle Carembault</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mb-8">
          <p className="text-foreground text-base md:text-lg max-w-3xl leading-relaxed">
            Des démarches plus simples. Un accès plus rapide. La Pévèle Carembault se rapproche de vous pour rendre chaque service accessible... en un clic depuis Mons-en-Pévèle !
          </p>
        </div>

        {/* Logo Pévèle Carembault */}
        <div className="flex justify-end mb-12">
          <img
            src={logoReference}
            alt="Logo Pévèle Carembault"
            className="h-24 w-auto"
          />
        </div>

        {/* Carrousel partenaires */}
        <div className="relative" style={{ perspective: '1500px', perspectiveOrigin: '50% 50%' }}>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevPartners}
              className="p-3 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Partenaires précédents"
            >
              <ChevronLeft className="w-8 h-8 text-foreground" />
            </button>
            
            <div 
              className="flex-1 flex items-center justify-center relative h-48"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {partners.map((partner, index) => {
                // Calculate position relative to current index
                const position = (index - currentPartnerIndex + partners.length) % partners.length;
                const centerPosition = 1; // Center card position
                const distanceFromCenter = position - centerPosition;
                
                // Calculate 3D transformations
                const translateX = distanceFromCenter * 200; // Spacing between cards
                const rotateY = distanceFromCenter * 20; // Rotation
                const translateZ = -Math.abs(distanceFromCenter) * 100; // Depth
                const scale = 1 - Math.abs(distanceFromCenter) * 0.15;
                const opacity = position < 3 ? 1 - Math.abs(distanceFromCenter) * 0.3 : 0;
                const visibility = position < 3 ? 'visible' : 'hidden';
                
                return (
                  <div
                    key={index}
                    className="absolute text-center"
                    style={{
                      transform: `translateX(${translateX}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                      opacity: opacity,
                      visibility: visibility,
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div 
                      className="w-32 h-32 rounded-xl bg-muted/30 flex items-center justify-center mb-2 shadow-lg"
                      style={{
                        boxShadow: position === centerPosition ? '0 20px 60px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.1)',
                      }}
                    >
                      <p className="text-primary font-bold text-sm px-4">{partner}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button
              onClick={nextPartners}
              className="p-3 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Partenaires suivants"
            >
              <ChevronRight className="w-8 h-8 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
