import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import newsFete from "@/assets/news-fete.jpg";
import newsMarche from "@/assets/news-marche.jpg";

const events = [
  {
    id: 1,
    title: "Fête du village",
    date: "15 Juin 2025",
    description: "Grande fête annuelle du village avec animations, concerts et feu d'artifice.",
    image: newsFete,
    color: "white",
    size: "small",
  },
  {
    id: 2,
    title: "Marché de Noël",
    date: "20 Décembre 2025",
    description: "Marché de Noël avec artisans locaux et animations pour enfants.",
    image: newsMarche,
    color: "white",
    size: "medium",
  },
  {
    id: 3,
    title: "Concert de printemps",
    date: "25 Mars 2025",
    description: "Concert gratuit de l'orchestre municipal.",
    color: "white",
    size: "small",
  },
  {
    id: 4,
    title: "Forum des associations",
    date: "10 Septembre 2025",
    description: "Venez découvrir toutes les associations de la commune et vous inscrire aux activités.",
    color: "accent",
    size: "wide",
  },
  {
    id: 5,
    title: "Brocante annuelle",
    date: "5 Mai 2025",
    description: "Grande brocante dans les rues du village.",
    color: "white",
    size: "small",
  },
  {
    id: 6,
    title: "Trail de Mons",
    date: "18 Avril 2025",
    description: "Course à pied à travers les chemins de la commune.",
    color: "white",
    size: "small",
  },
];

export const EventsSection = () => {
  return (
    <section className="py-20 px-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-white mb-6">Événements</h2>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full px-10 py-6 font-semibold backdrop-blur-sm">
            Toutes les dates
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[180px]">
          {events.map((event) => (
            <Card
              key={event.id}
              className={`
                ${event.size === "medium" ? "md:row-span-2" : ""}
                ${event.size === "wide" ? "md:col-span-2" : ""}
                ${event.color === "white" ? "bg-white border-white" : "bg-accent border-accent"}
                border-[3px] overflow-hidden group hover:shadow-2xl transition-all cursor-pointer relative
              `}
            >
              {event.image && (
                <div className="absolute inset-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
              )}
              
              <div className={`relative h-full p-6 flex flex-col justify-end ${!event.image ? (event.color === "white" ? "bg-white" : "bg-accent") : ""}`}>
                <div className="space-y-2">
                  <h3 className={`font-bold text-lg leading-tight ${event.image ? "text-white" : (event.color === "white" ? "text-foreground" : "text-white")}`}>
                    {event.title}
                  </h3>
                  <p className={`text-sm font-semibold ${event.image ? "text-white/90" : (event.color === "white" ? "text-primary" : "text-white/90")}`}>
                    {event.date}
                  </p>
                  {event.size !== "small" && (
                    <p className={`text-sm ${event.image ? "text-white/80" : (event.color === "white" ? "text-foreground/70" : "text-white/80")}`}>
                      {event.description}
                    </p>
                  )}
                  <Button
                    size="sm"
                    className={`
                      ${event.color === "white" ? "bg-primary hover:bg-primary/90 text-white" : "bg-white hover:bg-white/90 text-accent"}
                      rounded-full mt-2
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
