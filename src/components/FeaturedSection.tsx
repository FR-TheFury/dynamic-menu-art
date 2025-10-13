import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import commercantBoulangerie from "@/assets/commercant-boulangerie.jpg";

export const FeaturedSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-foreground">
            À la une
          </h2>
          <div className="w-32 h-1 bg-accent mt-2 rounded-full"></div>
        </div>

        <Card className="border-2 border-primary/20 overflow-hidden shadow-xl">
          <div className="p-2 bg-primary/10 inline-block">
            <span className="text-primary font-semibold text-sm px-3 py-1 bg-primary/20 rounded-full">
              Services et conseils
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={commercantBoulangerie}
                alt="Services"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <p className="text-primary text-lg leading-relaxed">
                Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum recreatus et ut
                veniente eum suscepi contio.
              </p>
              <p className="text-primary text-lg leading-relaxed">
                Adiit dein tribunal eius Ortygius Cyprum profecturus auctor sui ante edictus ob formam
                speciosam mulierum. Et adventante haud longe turba.
              </p>
              <p className="text-primary text-lg leading-relaxed">
                Adveniente turba raptam sibi collegisse unum Alexandrum semiadaptum curru feriis.
                Persequendum vultum tristem cum solitudo quam suscepi contio quid.
              </p>

              <div className="flex justify-end">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 font-semibold shadow-lg">
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
