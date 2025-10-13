import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import commercantBoulangerie from "@/assets/commercant-boulangerie.jpg";

export const FeaturedSection = () => {
  return (
    <section className="py-16 px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-10">
          <h2 className="text-5xl font-bold text-foreground mb-2">
            À la une
            <span className="block w-32 h-2 bg-accent mt-3 rounded-full shadow-lg"></span>
          </h2>
        </div>

        <Card 
          className="overflow-hidden border-[6px] border-primary hover:shadow-2xl transition-all duration-700 rounded-[30px] neumorphic group"
          style={{ 
            transform: 'rotate(-0.5deg)',
            transition: 'all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img
                src={commercantBoulangerie}
                alt="Featured"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="p-10 flex flex-col justify-center space-y-6 bg-gradient-to-br from-white to-primary/5">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full w-fit shadow-inner">
                <span className="text-primary font-semibold text-sm">Services et conseils</span>
              </div>
              
              <p className="text-primary text-lg leading-relaxed font-medium">
                Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum 
                ad aerarium nec lecta sunt quae poterant e proque omni bellica sed quae poterant e 
                proque omni bellica sed quae poterant aerarium. Nec lecta sunt quae poterant e 
                proque omni bellica fortuna.
              </p>

              <div className="flex justify-end">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-10 py-4 font-semibold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
                  Plus d'infos
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
