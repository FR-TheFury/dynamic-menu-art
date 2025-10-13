import { IdCard, Map, Users, Building2, Users2, Facebook, Instagram } from "lucide-react";
import villageBackground from "@/assets/village-background.jpg";
import logoMairie from "@/assets/logo-mairie.png";

const menuItems = [
  { id: "etatcivile", label: "État civil", icon: IdCard },
  { id: "urbanisme", label: "Urbanisme", icon: Map },
  { id: "perischool", label: "Perishcool", icon: Users },
  { id: "communaute", label: "Communauté de commune", icon: Building2 },
  { id: "seniors", label: "Séniors", icon: Users2 },
];

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[550px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${villageBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Menu vertical gauche */}
      <div className="absolute left-0 top-0 z-20 space-y-0">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-primary text-white p-3 shadow-lg hover:bg-primary/90 transition-all cursor-pointer flex flex-col items-center gap-1.5 w-20 border-b border-white/10"
          >
            <item.icon className="w-7 h-7" />
            <span className="text-[10px] font-medium text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Contenu central */}
      <div className="relative z-10 text-center mt-8">
        <h2 className="font-cursive text-6xl text-white drop-shadow-2xl">
          Bienvenue à Mons-en-pévèle
        </h2>
      </div>

      {/* Icônes sociales en bas */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        <div className="bg-white hover:bg-white/90 p-3 rounded-full shadow-lg cursor-pointer transition-all hover:scale-110">
          <Facebook className="w-6 h-6 text-primary" />
        </div>
        <div className="bg-white hover:bg-white/90 p-3 rounded-full shadow-lg cursor-pointer transition-all hover:scale-110">
          <Instagram className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Blason en bas à droite */}
      <div className="absolute bottom-6 right-6 z-10">
        <div className="bg-accent p-3 rounded-lg shadow-xl">
          <img
            src={logoMairie}
            alt="Blason Mons-en-Pévèle"
            className="h-16 w-auto"
          />
        </div>
      </div>
    </section>
  );
};
