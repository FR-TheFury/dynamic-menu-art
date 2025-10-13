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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(decrees.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedDecrees = decrees.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 px-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-6xl font-bold text-white drop-shadow-2xl">Arrêtés municipaux</h2>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full px-10 py-4 font-semibold backdrop-blur-sm shadow-2xl hover:scale-110 transition-all duration-300">
            Plus d'infos
          </Button>
        </div>

        <div className="relative perspective-1000">
          {/* Navigation Arrows with 3D effect */}
          <button
            onClick={prevPage}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 text-primary rounded-full p-5 shadow-2xl transition-all duration-500 hover:scale-125 hover:-rotate-12"
            style={{ 
              boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 4px rgba(255,255,255,0.1)'
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={nextPage}
            className="absolute -right-20 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 text-primary rounded-full p-5 shadow-2xl transition-all duration-500 hover:scale-125 hover:rotate-12"
            style={{ 
              boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 4px rgba(255,255,255,0.1)'
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* 3D Carousel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 preserve-3d">
            {displayedDecrees.map((decree, index) => {
              const isEdge = index === 0 || index === displayedDecrees.length - 1;
              const rotation = index === 0 ? '-rotate-y-15' : index === displayedDecrees.length - 1 ? 'rotate-y-15' : '';
              
              return (
                <Card
                  key={decree.id}
                  className={`
                    bg-white border-0 hover:shadow-2xl transition-all duration-700 p-7 space-y-4 
                    rounded-[25px] group backface-hidden
                    ${isEdge ? 'scale-95 blur-[1px]' : 'scale-100'}
                    hover:scale-105 hover:blur-0 hover:z-20
                  `}
                  style={{
                    transform: isEdge ? `perspective(1000px) ${rotation === '-rotate-y-15' ? 'rotateY(-8deg)' : 'rotateY(8deg)'}` : 'none',
                    transition: 'all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    boxShadow: isEdge 
                      ? '0 10px 40px rgba(0,0,0,0.15)' 
                      : '0 15px 60px rgba(0,0,0,0.25)',
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
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  currentPage === index 
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
