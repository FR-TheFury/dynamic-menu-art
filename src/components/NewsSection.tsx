import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import newsConseil from "@/assets/news-conseil.jpg";
import newsEcole from "@/assets/news-ecole.jpg";
import newsTravaux from "@/assets/news-travaux.jpg";

const newsItems = [
  {
    id: 1,
    title: "Compte rendu du conseil municipal",
    date: "15 Janvier 2025",
    description: "Retrouvez le compte rendu détaillé de la dernière séance du conseil municipal.",
    image: newsConseil,
    color: "primary",
    size: "large",
  },
  {
    id: 2,
    title: "Inscriptions scolaires 2025-2026",
    date: "10 Janvier 2025",
    description: "Les inscriptions pour l'année scolaire prochaine sont ouvertes.",
    image: newsEcole,
    color: "primary",
    size: "medium",
  },
  {
    id: 3,
    title: "Rénovation de la place",
    date: "8 Janvier 2025",
    description: "Les travaux de rénovation de la place centrale débuteront en février.",
    color: "primary",
    size: "small",
  },
  {
    id: 4,
    title: "Travaux rue principale",
    date: "5 Janvier 2025",
    description: "Circulation alternée sur la rue principale pendant 3 semaines pour réfection de la chaussée.",
    image: newsTravaux,
    color: "accent",
    size: "wide",
  },
  {
    id: 5,
    title: "Nouvelle cantine scolaire",
    date: "3 Janvier 2025",
    description: "La nouvelle cantine de l'école primaire sera inaugurée le mois prochain.",
    image: newsEcole,
    color: "primary",
    size: "tall",
  },
];

export const NewsSection = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Decorative dotted line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-primary/30 -translate-x-1/2" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-5xl font-bold mb-4 relative inline-block">
              <span className="text-foreground">Les actualités </span>
              <span className="text-primary">de mon village</span>
              <div className="absolute -bottom-2 left-0 w-[400px] h-1 bg-accent" />
            </h2>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-semibold shadow-lg transition-all">
            Toutes les actualités
          </Button>
        </div>
        
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Card 1 - Large left - Teal border */}
          <div className="lg:col-span-5 lg:row-span-2 border-[12px] border-primary rounded-[40px] overflow-hidden bg-primary shadow-2xl">
            <div className="relative h-64">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3 bg-primary text-white">
              <h3 className="font-bold text-2xl">Lorem ipsum</h3>
              <p className="text-sm opacity-90">29/09/2025</p>
              <p className="text-sm opacity-90 leading-relaxed">
                Vita est illis semper in fuga uxoresque mercenariae conductae
              </p>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 rounded-full px-6 py-2 font-semibold backdrop-blur-sm">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Card 2 - Medium center - Teal border */}
          <div className="lg:col-span-4 lg:row-span-2 border-[12px] border-primary rounded-[40px] overflow-hidden bg-primary shadow-2xl">
            <div className="relative h-48">
              <img
                src={newsItems[1].image}
                alt={newsItems[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 space-y-3 bg-primary text-white">
              <h3 className="font-bold text-xl">Lorem ipsum</h3>
              <p className="text-sm opacity-90">25/09/2025</p>
              <p className="text-sm opacity-90 leading-relaxed line-clamp-3">
                Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque
              </p>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 rounded-full px-6 py-2 font-semibold backdrop-blur-sm text-sm">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Card 3 - Text only right - Teal background */}
          <div className="lg:col-span-3 lg:row-span-2 border-[12px] border-primary rounded-[40px] overflow-hidden bg-primary shadow-2xl">
            <div className="p-6 space-y-3 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl mb-3">Lorem ipsum</h3>
                <p className="text-sm opacity-90 mb-4">01/10/2025</p>
                <p className="text-sm opacity-90 leading-relaxed">
                  Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species matrimonii
                </p>
              </div>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 rounded-full px-6 py-2 font-semibold backdrop-blur-sm text-sm mt-4">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Card 4 - Wide bottom left - RED border */}
          <div className="lg:col-span-7 lg:row-span-2 border-[12px] border-accent rounded-[40px] overflow-hidden bg-accent shadow-2xl">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-1/2 h-48 md:h-auto">
                <img
                  src={newsItems[3].image}
                  alt={newsItems[3].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between bg-accent text-white">
                <div>
                  <h3 className="font-bold text-2xl mb-3">Lorem ipsum</h3>
                  <p className="text-sm opacity-90 mb-4">28/09/2025</p>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species matrimonii, vita est illis semper in fuga
                  </p>
                </div>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 rounded-full px-6 py-2 font-semibold backdrop-blur-sm mt-4">
                  Plus d'infos
                </Button>
              </div>
            </div>
          </div>

          {/* Card 5 - Vertical right bottom - Teal border */}
          <div className="lg:col-span-5 lg:row-span-2 border-[12px] border-primary rounded-[40px] overflow-hidden bg-primary shadow-2xl">
            <div className="relative h-56">
              <img
                src={newsItems[4].image}
                alt={newsItems[4].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3 bg-primary text-white">
              <h3 className="font-bold text-xl">Lorem ipsum</h3>
              <p className="text-sm opacity-90">26/09/2025</p>
              <p className="text-sm opacity-90 leading-relaxed line-clamp-3">
                Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque. Vita est illis semper in fuga
              </p>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 rounded-full px-6 py-2 font-semibold backdrop-blur-sm">
                Plus d'infos
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
