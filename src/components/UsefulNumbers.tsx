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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {numbers.map((item, index) => (
            <Card
              key={item.id}
              className="border-[6px] border-primary bg-white hover:shadow-2xl transition-all duration-500 p-7 space-y-4 rounded-[25px] neumorphic hover:scale-105 group"
              style={{ 
                transform: `rotate(${index % 2 === 0 ? '-' : ''}${0.5 + (index % 3)}deg)`,
                transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
              }}
            >
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full shadow-inner">
                <span className="text-primary font-semibold text-sm">{item.label}</span>
              </div>
              
              <h3 className="font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <div className="flex items-center gap-3 text-primary font-semibold bg-primary/5 p-3 rounded-xl">
                <Phone className="w-6 h-6" />
                <span className="text-lg">{item.phone}</span>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-200 to-purple-300 hover:from-purple-300 hover:to-purple-400 text-purple-800 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all py-3">
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
