import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import commercantBoulangerie from "@/assets/commercant-boulangerie.jpg";

export const FeaturedSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-foreground inline-block">
            À <span className="relative">
              la une
              <span className="absolute bottom-0 left-0 w-full h-1.5 bg-accent"></span>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 md:h-96 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={commercantBoulangerie}
              alt="Featured"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-6 py-2 bg-primary text-white rounded-full font-semibold text-sm">
                Services et conseils
              </span>
            </div>
            
            <p className="text-primary text-lg leading-relaxed">
              Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.
            </p>

            <p className="text-primary text-lg leading-relaxed">
              Adolescebat autem obstinatum propositum erga haec et similia multa scrutanda, stimulos admovente regina, quae abrupte mariti fortunas trudebat in exitium praeceps, cum eum potius lenitate feminea
            </p>

            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-3 font-semibold shadow-lg">
                Plus d'infos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
