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
    <section className="py-20 px-6 bg-primary relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl font-bold text-white">Arrêtés municipaux</h2>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full px-8 py-3 font-semibold backdrop-blur-sm">
            Plus d'infos
          </Button>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-white/90 text-primary rounded-full p-4 shadow-2xl transition-all hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextPage}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-white/90 text-primary rounded-full p-4 shadow-2xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedDecrees.map((decree) => (
              <Card
                key={decree.id}
                className="bg-white border-2 border-white hover:shadow-2xl transition-all p-6 space-y-4"
              >
                <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold text-xs">Arrêté municipal</span>
                </div>

                <h3 className="font-bold text-foreground text-lg leading-tight min-h-[56px]">
                  {decree.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3">
                  {decree.description}
                </p>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
