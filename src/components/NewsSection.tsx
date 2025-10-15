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
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-4xl font-bold">
              <span className="text-foreground">Les actualités </span>
              <span className="text-primary">de mon village</span>
            </h2>
            <div className="w-24 h-1 bg-accent mt-3 mb-3"></div>
            <p className="text-muted-foreground max-w-2xl text-sm">
              Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-semibold shadow-lg transition-all">
            Toutes les actualités
          </Button>
        </div>

        {/* Grid - 2 rows of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          {/* Row 1 - Card 1: Large with image */}
          <div className="border-[8px] border-primary rounded-[32px] overflow-hidden bg-primary shadow-xl">
            <div className="relative h-48">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-full object-cover rounded-t-[24px]"
              />
            </div>
            <div className="p-6 space-y-2 bg-primary text-white">
              <h3 className="font-bold text-xl">Lorem ipsum</h3>
              <p className="text-xs opacity-80">29/09/2025</p>
              <p className="text-sm opacity-90 leading-relaxed">
                Vita est illis semper in fuga uxoresque mercenariae conductae
              </p>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-sm mt-3">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Row 1 - Card 2: Medium with image */}
          <div className="border-[8px] border-primary rounded-[32px] overflow-hidden bg-primary shadow-xl">
            <div className="relative h-48">
              <img
                src={newsItems[1].image}
                alt={newsItems[1].title}
                className="w-full h-full object-cover rounded-t-[24px]"
              />
            </div>
            <div className="p-6 space-y-2 bg-primary text-white">
              <h3 className="font-bold text-xl">Lorem ipsum</h3>
              <p className="text-xs opacity-80">25/09/2025</p>
              <p className="text-sm opacity-90 leading-relaxed">
                Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex
              </p>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-sm mt-3">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Row 1 - Card 3: Text only */}
          <div className="border-[8px] border-primary rounded-[32px] overflow-hidden bg-primary shadow-xl">
            <div className="p-6 space-y-2 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl">Lorem ipsum</h3>
                <p className="text-xs opacity-80 mt-2">01/10/2025</p>
                <p className="text-sm opacity-90 leading-relaxed mt-3">
                  Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species matrimonii
                </p>
              </div>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-sm mt-4">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Row 2 - Card 4: Wide with image (red/accent) */}
          <div className="md:col-span-2 border-[8px] border-accent rounded-[32px] overflow-hidden bg-accent shadow-xl">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-2/5 h-48 md:h-auto">
                <img
                  src={newsItems[3].image}
                  alt={newsItems[3].title}
                  className="w-full h-full object-cover rounded-tl-[24px] md:rounded-bl-[24px] md:rounded-tr-none"
                />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between bg-accent text-white">
                <div>
                  <h3 className="font-bold text-xl">Lorem ipsum</h3>
                  <p className="text-xs opacity-80 mt-2">28/09/2025</p>
                  <p className="text-sm opacity-90 leading-relaxed mt-3">
                    Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species matrimonii
                  </p>
                </div>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-sm mt-4">
                  Plus d'infos
                </Button>
              </div>
            </div>
          </div>

          {/* Row 2 - Card 5: Vertical with image */}
          <div className="border-[8px] border-primary rounded-[32px] overflow-hidden bg-primary shadow-xl">
            <div className="relative h-48">
              <img
                src={newsItems[4].image}
                alt={newsItems[4].title}
                className="w-full h-full object-cover rounded-t-[24px]"
              />
            </div>
            <div className="p-6 space-y-2 bg-primary text-white">
              <h3 className="font-bold text-xl">Lorem ipsum</h3>
              <p className="text-xs opacity-80">26/09/2025</p>
              <p className="text-sm opacity-90 leading-relaxed">
                Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, in fuga
              </p>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-sm mt-3">
                Plus d'infos
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
