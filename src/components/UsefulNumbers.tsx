import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const numbers = [
  {
    id: 1,
    label: "Numéros",
    subtitle: "Arrêter municipal",
    title: "Hac ex causa conlaticia stipe",
    phone: "06 24 52 23 46",
  },
  {
    id: 2,
    label: "Numéros",
    subtitle: "Arrêter municipal",
    title: "Hac ex causa conlaticia stipe",
    phone: "06 24 52 23 46",
  },
  {
    id: 3,
    label: "Numéros",
    subtitle: "Arrêter municipal",
    title: "Hac ex causa conlaticia stipe",
    phone: "06 24 52 23 46",
  },
  {
    id: 4,
    label: "Numéros",
    subtitle: "Arrêter municipal",
    title: "Hac ex causa conlaticia stipe",
    phone: "06 24 52 23 46",
  },
];

export const UsefulNumbers = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src="/dynamic-menu-art/Image-Mairie/appel.png" alt="Téléphone" className="w-12 h-12" />
            <h2 className="text-5xl font-bold text-foreground inline-block">
              <span className="relative">
                Numéros utiles
                <span className="absolute bottom-0 left-0 w-full h-1.5 bg-accent"></span>
              </span>
            </h2>
            <span className="text-3xl font-semibold text-primary">Et qui appeler ?</span>
          </div>
          <p className="text-foreground max-w-3xl mx-auto">
            Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {numbers.map((item) => (
            <Card
              key={item.id}
              className="bg-primary text-white p-6 space-y-4 rounded-3xl shadow-xl border-0"
            >
              <div className="text-sm font-semibold opacity-90">
                {item.label}
              </div>
              
              <div className="text-sm font-semibold">
                {item.subtitle}
              </div>

              <h3 className="font-bold text-base leading-tight">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 pt-2">
                <img src="/dynamic-menu-art/Image-Mairie/appel.png" alt="Téléphone" className="w-5 h-5" />
                <span className="font-semibold">{item.phone}</span>
              </div>

              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 rounded-full font-semibold py-2.5">
                Appeler
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-3 font-semibold shadow-lg">
            Annuaire
          </Button>
        </div>
      </div>
    </section>
  );
};
