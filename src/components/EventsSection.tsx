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
    <section className="py-20 px-6 bg-primary relative overflow-hidden perspective-1000">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-7xl font-bold text-white text-center flex-1 drop-shadow-2xl">Événements</h2>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full px-10 py-4 font-semibold backdrop-blur-sm shadow-2xl hover:scale-110 transition-all duration-300">
            Toutes les dates
          </Button>
        </div>

        {/* Masonry Pinterest-style Layout with 3D effects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[180px] preserve-3d">
          {/* Event 1 - Small white card */}
          <Card
            className="md:col-span-3 md:row-span-2 bg-white border-[8px] border-primary hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-700 overflow-hidden rounded-[45px] group hover:-translate-y-6 hover:scale-110 hover:rotate-0 backface-hidden"
            style={{ transform: 'rotate(-4deg)', boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}
          >
            <div className="p-6 space-y-3 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
                  {events[0].title}
                </h3>
                <p className="text-sm text-primary font-semibold mt-2">{events[0].date}</p>
                <p className="text-muted-foreground text-sm mt-3 line-clamp-3">{events[0].description}</p>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition-all">
                Plus d'infos
              </Button>
            </div>
          </Card>

          {/* Event 2 - Medium with image */}
          <Card
            className="md:col-span-4 md:row-span-3 bg-white border-[8px] border-primary hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-700 overflow-hidden rounded-[45px] group hover:-translate-y-8 hover:scale-110 hover:rotate-0 backface-hidden"
            style={{ transform: 'rotate(5deg)', boxShadow: '0 28px 75px rgba(0,0,0,0.28)' }}
          >
            {events[1].image && (
              <div className="relative h-44 overflow-hidden">
                <img
                  src={events[1].image}
                  alt={events[1].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            )}
            <div className="p-6 space-y-3">
              <h3 className="font-bold text-foreground text-xl leading-tight group-hover:text-primary transition-colors">
                {events[1].title}
              </h3>
              <p className="text-sm text-primary font-semibold">{events[1].date}</p>
              <p className="text-muted-foreground line-clamp-3">{events[1].description}</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition-all">
                Plus d'infos
              </Button>
            </div>
          </Card>

          {/* Event 3 - Red accent card */}
          <Card
            className="md:col-span-5 md:row-span-2 bg-accent border-[8px] border-white hover:shadow-[0_40px_100px_rgba(239,68,68,0.4)] transition-all duration-700 overflow-hidden rounded-[45px] group hover:-translate-y-6 hover:scale-110 hover:rotate-0 backface-hidden"
            style={{ transform: 'rotate(-3deg)', boxShadow: '0 25px 70px rgba(239,68,68,0.3)' }}
          >
            <div className="p-6 space-y-3 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-white text-2xl leading-tight">
                  {events[3].title}
                </h3>
                <p className="text-sm text-white/90 font-semibold mt-2">{events[3].date}</p>
                <p className="text-white/80 mt-3 line-clamp-4">{events[3].description}</p>
              </div>
              <Button className="w-full bg-white hover:bg-white/90 text-accent rounded-lg font-semibold shadow-lg hover:scale-105 transition-all">
                Plus d'infos
              </Button>
            </div>
          </Card>

          {/* Event 4 - Tall white card */}
          <Card
            className="md:col-span-3 md:row-span-3 bg-white border-[8px] border-primary hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-700 overflow-hidden rounded-[45px] group hover:-translate-y-8 hover:scale-110 hover:rotate-0 backface-hidden"
            style={{ transform: 'rotate(4deg)', boxShadow: '0 32px 85px rgba(0,0,0,0.32)' }}
          >
            <div className="p-6 space-y-3 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
                  {events[2].title}
                </h3>
                <p className="text-sm text-primary font-semibold mt-2">{events[2].date}</p>
                <p className="text-muted-foreground text-sm mt-3 line-clamp-6">{events[2].description}</p>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition-all">
                Plus d'infos
              </Button>
            </div>
          </Card>

          {/* Event 5 - Wide white card with image */}
          <Card
            className="md:col-span-6 md:row-span-2 bg-white border-[8px] border-primary hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-700 overflow-hidden rounded-[45px] group hover:-translate-y-6 hover:scale-110 hover:rotate-0 backface-hidden"
            style={{ transform: 'rotate(-5deg)', boxShadow: '0 27px 72px rgba(0,0,0,0.27)' }}
          >
            <div className="flex flex-col md:flex-row h-full">
              {events[4].image && (
                <div className="relative md:w-2/5 h-40 md:h-auto overflow-hidden">
                  <img
                    src={events[0].image}
                    alt={events[4].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-5 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
                    {events[4].title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mt-2">{events[4].date}</p>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{events[4].description}</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition-all mt-3">
                  Plus d'infos
                </Button>
              </div>
            </div>
          </Card>

          {/* Event 6 - Small white card */}
          <Card
            className="md:col-span-3 md:row-span-2 bg-white border-[8px] border-primary hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-700 overflow-hidden rounded-[45px] group hover:-translate-y-6 hover:scale-110 hover:rotate-0 backface-hidden"
            style={{ transform: 'rotate(3deg)', boxShadow: '0 26px 68px rgba(0,0,0,0.26)' }}
          >
            <div className="p-6 space-y-3 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
                  {events[5].title}
                </h3>
                <p className="text-sm text-primary font-semibold mt-2">{events[5].date}</p>
                <p className="text-muted-foreground text-sm mt-3 line-clamp-3">{events[5].description}</p>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition-all">
                Plus d'infos
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
