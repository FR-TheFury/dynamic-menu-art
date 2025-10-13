import { FileText, Map, Users, Building2, Heart, Facebook, Instagram } from "lucide-react";
import villageBackground from "@/assets/village-background.jpg";
import logoMairie from "@/assets/logo-mairie.png";

const menuItems = [
  { id: "etatcivile", label: "État civil", icon: FileText },
  { id: "urbanisme", label: "Urbanisme", icon: Map },
  { id: "perischool", label: "Périschool", icon: Users },
  { id: "communaute", label: "Communauté de commune", icon: Building2 },
  { id: "seniors", label: "Séniors", icon: Heart },
];

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${villageBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Menu vertical gauche */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white/95 hover:bg-white backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-primary/20 hover:border-primary flex flex-col items-center gap-2 w-32"
          >
            <item.icon className="w-8 h-8 text-primary" />
            <span className="text-xs font-semibold text-foreground text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Contenu central */}
      <div className="relative z-10 text-center">
        <h2 className="font-cursive text-7xl text-white drop-shadow-2xl mb-8">
          Bienvenue à Mons-en-Pévèle
        </h2>
      </div>

      {/* Icônes sociales en bas */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        <div className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg cursor-pointer transition-all hover:scale-110">
          <Facebook className="w-6 h-6 text-primary" />
        </div>
        <div className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg cursor-pointer transition-all hover:scale-110">
          <Instagram className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Blason en bas à droite */}
      <div className="absolute bottom-8 right-8 z-10">
        <img
          src={logoMairie}
          alt="Blason Mons-en-Pévèle"
          className="h-24 w-auto drop-shadow-xl"
        />
      </div>
    </section>
  );
};
