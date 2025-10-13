import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const numbers = [
  {
    id: 1,
    label: "Numéros",
    title: "Hac ex causa conlaticia stipe",
    phone: "03 20 00 00 00",
  },
  {
    id: 2,
    label: "Numéros",
    title: "Hac ex causa conlaticia stipe",
    phone: "03 20 00 00 00",
  },
  {
    id: 3,
    label: "Arrêté municipal",
    title: "Hac ex causa conlaticia stipe",
    phone: "03 20 00 00 00",
  },
  {
    id: 4,
    label: "Numéros",
    title: "Hac ex causa conlaticia stipe",
    phone: "03 20 00 00 00",
  },
];

export const UsefulNumbers = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl font-bold text-foreground">Numéros utiles</h2>
            <Phone className="w-8 h-8 text-primary" />
            <span className="text-2xl font-semibold text-primary">Et qui appeler ?</span>
          </div>
          <p className="text-muted-foreground">
            Retrouvez tous les contacts importants de votre commune
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {numbers.map((item) => (
            <Card
              key={item.id}
              className="border-[3px] border-primary bg-white hover:shadow-2xl transition-all p-6 space-y-4"
            >
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">{item.label}</span>
              </div>
              
              <h3 className="font-bold text-foreground text-lg leading-tight">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-primary font-semibold">
                <Phone className="w-5 h-5" />
                <span>{item.phone}</span>
              </div>

              <Button className="w-full bg-purple-200 hover:bg-purple-300 text-purple-800 rounded-lg font-semibold">
                Appeler
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 font-semibold shadow-lg text-lg">
            Annuaire
          </Button>
        </div>
      </div>
    </section>
  );
};
