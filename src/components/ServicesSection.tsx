import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Trash2, CreditCard, Briefcase, Building, Heart } from "lucide-react";
import logoReference from "@/assets/logo-reference.png";

const services = [
  {
    id: 1,
    title: "Inscription accueil et loisirs",
    icon: Users,
    color: "orange",
  },
  {
    id: 2,
    title: "Demander mon Pass'déchetteries",
    icon: Trash2,
    color: "green",
  },
  {
    id: 3,
    title: "Demander ma carte Pass Prév'ailles",
    icon: CreditCard,
    color: "cyan",
  },
  {
    id: 4,
    title: "Trouver un emploi",
    icon: Briefcase,
    color: "purple",
  },
  {
    id: 5,
    title: "Demande d'urbanisme",
    icon: Building,
    color: "brown",
  },
  {
    id: 6,
    title: "Séniors",
    icon: Heart,
    color: "beige",
  },
];

const partners = [
  "Flexi'Pér'villes",
  "Graines de Culture(s)",
  "Peri'school",
  "Services +",
];

export const ServicesSection = () => {
  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            La pévèle carembault à portée de clic !
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto mb-6">
            Découvrez tous les services de la Communauté de Communes et facilitez vos démarches
            administratives en quelques clics. De l'inscription aux activités jusqu'aux demandes
            d'urbanisme, tout est simplifié.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-semibold shadow-lg">
            Tous les services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-2xl transition-all cursor-pointer border-2 border-border p-8 flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`
                  w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform
                  ${service.color === "orange" ? "bg-orange-100" : ""}
                  ${service.color === "green" ? "bg-green-100" : ""}
                  ${service.color === "cyan" ? "bg-cyan-100" : ""}
                  ${service.color === "purple" ? "bg-purple-100" : ""}
                  ${service.color === "brown" ? "bg-amber-100" : ""}
                  ${service.color === "beige" ? "bg-yellow-50" : ""}
                `}
              >
                <service.icon
                  className={`
                    w-10 h-10
                    ${service.color === "orange" ? "text-orange-600" : ""}
                    ${service.color === "green" ? "text-green-600" : ""}
                    ${service.color === "cyan" ? "text-cyan-600" : ""}
                    ${service.color === "purple" ? "text-purple-600" : ""}
                    ${service.color === "brown" ? "text-amber-600" : ""}
                    ${service.color === "beige" ? "text-yellow-600" : ""}
                  `}
                />
              </div>
              <h3 className="font-bold text-foreground text-lg leading-tight">
                {service.title}
              </h3>
            </Card>
          ))}
        </div>

        {/* Carte stylisée */}
        <div className="relative mb-12">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full"></div>
          <div className="absolute right-20 top-20 w-48 h-48 bg-primary/10 rounded-full"></div>
        </div>

        {/* Logo Pévèle Carembault */}
        <div className="flex justify-end mb-12">
          <img
            src={logoReference}
            alt="Logo Pévèle Carembault"
            className="h-20 w-auto"
          />
        </div>

        {/* Carrousel partenaires */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-primary font-bold text-xl hover:scale-105 transition-transform cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
