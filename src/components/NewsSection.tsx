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
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-5xl font-bold mb-2">
              <span className="text-foreground">Les actualités </span>
              <span className="text-primary">de mon village</span>
            </h2>
            <p className="text-muted-foreground">
              Restez informé des dernières actualités de votre commune
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Toutes les actualités
          </Button>
        </div>

        {/* Masonry Layout with Exotic Positioning */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[200px]">
          {/* Card 1 - Large Teal */}
          <Card
            className="md:col-span-5 md:row-span-3 border-[8px] border-primary overflow-hidden hover:shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-all duration-700 rounded-[40px] hover:-rotate-2 hover:scale-[1.03] bg-white group relative"
            style={{ 
              transform: 'rotate(-2deg)',
              boxShadow: '0 25px 70px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)'
            }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-bold text-foreground text-2xl leading-tight">
                {newsItems[0].title}
              </h3>
              <p className="text-sm text-primary font-semibold">{newsItems[0].date}</p>
              <p className="text-muted-foreground line-clamp-3">{newsItems[0].description}</p>
              <Button className="w-full bg-white/30 hover:bg-white/50 text-primary border-2 border-primary/40 rounded-xl font-semibold backdrop-blur-sm transition-all hover:scale-105">
                Plus d'infos
              </Button>
            </div>
          </Card>

          {/* Card 2 - Medium Teal */}
          <Card
            className="md:col-span-4 md:row-span-2 border-[8px] border-primary overflow-hidden hover:shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-all duration-700 rounded-[40px] hover:rotate-3 hover:scale-[1.03] bg-white group"
            style={{ 
              transform: 'rotate(3deg)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2), 0 8px 25px rgba(0,0,0,0.12)'
            }}
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={newsItems[1].image}
                alt={newsItems[1].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-foreground text-lg leading-tight">
                {newsItems[1].title}
              </h3>
              <p className="text-xs text-primary font-semibold">{newsItems[1].date}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{newsItems[1].description}</p>
              <Button className="w-full bg-white/30 hover:bg-white/50 text-primary border-2 border-primary/40 rounded-xl font-semibold backdrop-blur-sm text-sm">
                Plus d'infos
              </Button>
            </div>
          </Card>

          {/* Card 3 - Compact Teal */}
          <Card
            className="md:col-span-3 md:row-span-2 border-[8px] border-primary overflow-hidden hover:shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-all duration-700 rounded-[40px] hover:-rotate-3 hover:scale-[1.03] bg-white"
            style={{ 
              transform: 'rotate(4deg)',
              boxShadow: '0 18px 55px rgba(0,0,0,0.22), 0 7px 22px rgba(0,0,0,0.14)'
            }}
          >
            <div className="p-5 space-y-3 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-foreground text-lg leading-tight">
                  {newsItems[2].title}
                </h3>
                <p className="text-xs text-primary font-semibold mt-2">{newsItems[2].date}</p>
                <p className="text-sm text-muted-foreground mt-3 line-clamp-4">{newsItems[2].description}</p>
              </div>
              <Button className="w-full bg-white/30 hover:bg-white/50 text-primary border-2 border-primary/40 rounded-xl font-semibold backdrop-blur-sm text-sm">
                Plus d'infos
              </Button>
            </div>
          </Card>

          {/* Card 4 - Wide Red */}
          <Card
            className="md:col-span-7 md:row-span-2 border-[8px] border-accent overflow-hidden hover:shadow-[0_30px_90px_rgba(239,68,68,0.3)] transition-all duration-700 rounded-[40px] hover:rotate-2 hover:scale-[1.03] bg-white group"
            style={{ 
              transform: 'rotate(-3deg)',
              boxShadow: '0 22px 65px rgba(239,68,68,0.25), 0 9px 28px rgba(239,68,68,0.15)'
            }}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-1/2 h-48 md:h-auto overflow-hidden">
                <img
                  src={newsItems[3].image}
                  alt={newsItems[3].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-foreground text-xl leading-tight">
                    {newsItems[3].title}
                  </h3>
                  <p className="text-sm text-accent font-semibold mt-2">{newsItems[3].date}</p>
                  <p className="text-muted-foreground mt-3 line-clamp-3">{newsItems[3].description}</p>
                </div>
                <Button className="w-full bg-white/30 hover:bg-white/50 text-accent border-2 border-accent/40 rounded-xl font-semibold backdrop-blur-sm mt-4">
                  Plus d'infos
                </Button>
              </div>
            </div>
          </Card>

          {/* Card 5 - Vertical Teal */}
          <Card
            className="md:col-span-5 md:row-span-3 border-[8px] border-primary overflow-hidden hover:shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-all duration-700 rounded-[40px] hover:rotate-3 hover:scale-[1.03] bg-white group"
            style={{ 
              transform: 'rotate(2deg)',
              boxShadow: '0 25px 70px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)'
            }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={newsItems[4].image}
                alt={newsItems[4].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-bold text-foreground text-xl leading-tight">
                {newsItems[4].title}
              </h3>
              <p className="text-sm text-primary font-semibold">{newsItems[4].date}</p>
              <p className="text-muted-foreground line-clamp-4">{newsItems[4].description}</p>
              <Button className="w-full bg-white/30 hover:bg-white/50 text-primary border-2 border-primary/40 rounded-xl font-semibold backdrop-blur-sm">
                Plus d'infos
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
