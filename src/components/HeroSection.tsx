import { useState, useRef } from "react";
import { IdCard, Map, Users, Building2, Users2, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import villageBackground from "@/assets/village-background.jpg";
import logoMairie from "@/assets/logo-mairie.png";

const menuItems = [
  { id: "etatcivile", label: "État civil", icon: IdCard },
  { id: "urbanisme", label: "Urbanisme", icon: Map },
  { id: "perischool", label: "Perishcool", icon: Users },
  { id: "communaute", label: "Communauté de commune", icon: Building2 },
  { id: "seniors", label: "Séniors", icon: Users2 },
];

type TopItem = { id: string; label: string; links: string[] };

const topNav: TopItem[] = [
  {
    id: "monVillage",
    label: "Mon village",
    links: ["Présentation", "Patrimoine", "Vie associative", "Commerces", "Tourisme"],
  },
  {
    id: "mairie",
    label: "Votre mairie",
    links: ["Élus", "Services municipaux", "CR Conseils", "Arrêtés", "Documents"],
  },
  {
    id: "sortir",
    label: "Sortir à mons-en-pévèle",
    links: ["Associations", "Médiathèque", "Loisirs", "Agenda", "Consommons local"],
  },
];

export const HeroSection = () => {
  const [hoveredTop, setHoveredTop] = useState<string | null>(null);
  const [topPos, setTopPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const closeTimer = useRef<number | null>(null);
  const activeTop = topNav.find((t) => t.id === hoveredTop);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setHoveredTop(null), 150);
  };

  const onTopEnter = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const halfMin = 160;
    const clampedX = Math.max(halfMin, Math.min(window.innerWidth - halfMin, centerX));
    cancelClose();
    setHoveredTop(id);
    setTopPos({ x: clampedX, y: rect.bottom });
  };

  return (
    <section 
      className="relative min-h-[550px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${villageBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navigation buttons - positioned above hero image */}
      <div className="absolute top-4 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-4 justify-center">
            {topNav.map((item) => (
              <Button
                key={item.id}
                onMouseEnter={(e) => onTopEnter(item.id, e)}
                onMouseLeave={scheduleClose}
                className="bg-black/40 hover:bg-black/50 text-white border-2 border-white rounded-lg px-6 py-2.5 font-medium transition-all text-sm backdrop-blur-sm"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {activeTop && (
        <div
          data-dropdown
          className="fixed z-[100] bg-background border border-border rounded-xl shadow-2xl p-6 min-w-[300px]"
          style={{ left: topPos.x, top: topPos.y + 4, transform: "translateX(-50%)" }}
          onMouseEnter={() => {
            cancelClose();
            setHoveredTop(activeTop.id);
          }}
          onMouseLeave={scheduleClose}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-b-[12px] border-b-background border-x-[12px] border-x-transparent" />
          <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-b-[12px] border-b-border border-x-[12px] border-x-transparent" />

          <h3 className="text-base font-bold text-primary mb-3">{activeTop.label}</h3>
          <ul className="space-y-1">
            {activeTop.links.map((l, i) => (
              <li
                key={i}
                className="text-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer py-2 border-b border-border/50 last:border-0 text-sm"
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Menu vertical gauche - fond turquoise foncé */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex flex-col">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#2d7178] text-white p-4 shadow-lg hover:bg-[#3a8590] transition-all cursor-pointer flex flex-col items-center gap-2 w-24 border-b border-white/20 first:border-t-0"
          >
            <item.icon className="w-8 h-8" />
            <span className="text-[11px] font-normal text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Contenu central */}
      <div className="relative z-10 text-center">
        <h2 className="font-cursive text-7xl text-white drop-shadow-2xl">
          Bienvenue à Mons-en-pévèle
        </h2>
      </div>

      {/* Icônes sociales en bas - icônes noires sur fond blanc */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        <div className="bg-white hover:bg-white/90 p-3 rounded-full shadow-lg cursor-pointer transition-all hover:scale-110">
          <Facebook className="w-7 h-7 text-black fill-black" />
        </div>
        <div className="bg-white hover:bg-white/90 p-3 rounded-full shadow-lg cursor-pointer transition-all hover:scale-110">
          <Instagram className="w-7 h-7 text-black" />
        </div>
      </div>

      {/* Blason en bas à droite - fond jaune/orange */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="bg-[#f4a532] p-3 rounded-lg shadow-xl">
          <img
            src={logoMairie}
            alt="Blason Mons-en-Pévèle"
            className="h-20 w-auto"
          />
        </div>
      </div>
    </section>
  );
};
