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
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-5xl font-bold">
              <span className="text-foreground">Les actualités </span>
              <span className="text-primary">de mon village</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Restez informé de toutes les nouveautés de notre commune
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 font-semibold shadow-lg">
            Toutes les actualités
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className={`
                ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${item.size === "medium" ? "md:row-span-2" : ""}
                ${item.size === "wide" ? "md:col-span-2" : ""}
                ${item.size === "tall" ? "md:row-span-2" : ""}
                ${item.color === "primary" ? "border-primary" : "border-accent"}
                border-[3px] overflow-hidden group hover:shadow-2xl transition-all cursor-pointer relative
              `}
            >
              {item.image && (
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
              )}
              
              <div className={`relative h-full p-6 flex flex-col justify-end ${!item.image ? (item.color === "primary" ? "bg-primary/5" : "bg-accent/5") : ""}`}>
                <div className="space-y-2">
                  <h3 className={`font-bold text-lg leading-tight ${item.image ? "text-white" : "text-foreground"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${item.image ? "text-white/80" : "text-muted-foreground"}`}>
                    {item.date}
                  </p>
                  {item.size !== "small" && (
                    <p className={`text-sm ${item.image ? "text-white/90" : "text-foreground/80"}`}>
                      {item.description}
                    </p>
                  )}
                  <Button
                    size="sm"
                    className={`
                      ${item.color === "primary" ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"}
                      text-white rounded-full mt-2
                    `}
                  >
                    Plus d'infos
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
