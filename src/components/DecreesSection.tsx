import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

const decrees = [
  {
    id: 1,
    title: "Arrêté municipal circulation",
    description: "Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum.",
  },
  {
    id: 2,
    title: "Arrêté municipal travaux",
    description: "Adiit dein tribunal eius Ortygius Cyprum profecturus auctor sui ante edictus ob formam.",
  },
  {
    id: 3,
    title: "Arrêté municipal stationnement",
    description: "Et adventante haud longe turba raptam sibi collegisse unum Alexandrum semiadaptum.",
  },
  {
    id: 4,
    title: "Arrêté municipal manifestation",
    description: "Persequendum vultum tristem cum solitudo quam suscepi contio quid adveniente turba.",
  },
  {
    id: 5,
    title: "Arrêté municipal urbanisme",
    description: "Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum.",
  },
  {
    id: 6,
    title: "Arrêté municipal sécurité",
    description: "Adiit dein tribunal eius Ortygius Cyprum profecturus auctor sui ante edictus ob formam.",
  },
  {
    id: 7,
    title: "Arrêté municipal environnement",
    description: "Et adventante haud longe turba raptam sibi collegisse unum Alexandrum semiadaptum.",
  },
  {
    id: 8,
    title: "Arrêté municipal voirie",
    description: "Persequendum vultum tristem cum solitudo quam suscepi contio quid adveniente turba.",
  },
];

export const DecreesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % decrees.length);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + decrees.length) % decrees.length);
  };

  return (
    <section className="py-20 px-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-6xl font-bold text-white drop-shadow-2xl">Arrêtés municipaux</h2>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full px-10 py-4 font-semibold backdrop-blur-sm shadow-2xl hover:scale-110 transition-all duration-300">
            Plus d'infos
          </Button>
        </div>

        <div className="relative">
          {/* Navigation Arrows with 3D effect */}
          <button
            onClick={prevPage}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 text-primary rounded-full p-6 shadow-2xl transition-all duration-500 hover:scale-125"
            style={{ 
              boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 0 6px rgba(255,255,255,0.15), 0 0 40px rgba(76,175,180,0.3)'
            }}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button
            onClick={nextPage}
            className="absolute -right-20 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 text-primary rounded-full p-6 shadow-2xl transition-all duration-500 hover:scale-125"
            style={{ 
              boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 0 6px rgba(255,255,255,0.15), 0 0 40px rgba(76,175,180,0.3)'
            }}
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* 3D Carousel */}
          <div 
            className="relative flex justify-center items-center h-[480px]"
            style={{ 
              perspective: '2000px',
              perspectiveOrigin: '50% 50%',
              transformStyle: 'preserve-3d',
            }}
          >
            {decrees.map((decree, index) => {
              // Calculate position relative to current index
              const position = (index - currentIndex + decrees.length) % decrees.length;
              const centerPosition = Math.floor(4 / 2); // Show 4 cards
              const distanceFromCenter = position - centerPosition;
              
              // Calculate 3D transformations
              const translateX = distanceFromCenter * 320; // Spacing between cards
              const rotateY = distanceFromCenter * 15; // Rotation
              const translateZ = -Math.abs(distanceFromCenter) * 100; // Depth
              const scale = 1 - Math.abs(distanceFromCenter) * 0.15;
              const opacity = position < 5 ? 1 - Math.abs(distanceFromCenter) * 0.2 : 0;
              const visibility = position < 5 ? 'visible' : 'hidden';
              
              return (
                <Card
                  key={decree.id}
                  className="bg-white border-0 hover:shadow-2xl p-7 space-y-4 rounded-[35px] group absolute w-72"
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                    opacity: opacity,
                    visibility: visibility,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 25px 80px rgba(0,0,0,0.35)',
                  }}
                >
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                    <span className="text-primary font-semibold text-xs">Arrêté municipal</span>
                  </div>

                  <h3 className="font-bold text-foreground text-lg leading-tight min-h-[56px] group-hover:text-primary transition-colors">
                    {decree.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {decree.description}
                  </p>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all py-3">
                    <Download className="w-5 h-5" />
                    Télécharger
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {decrees.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  currentIndex === index 
                    ? 'w-12 bg-white shadow-lg' 
                    : 'w-3 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
