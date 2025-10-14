import { useState, useRef } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import villageBackground from "@/assets/village-background.jpg";
import logoMairie from "@/assets/logo-mairie.png";

const menuItems = [
  { id: "etatcivile", label: "État civil", icon: "/dynamic-menu-art/Image-Mairie/carte-didentite.png" },
  { id: "urbanisme", label: "Urbanisme", icon: "/dynamic-menu-art/Image-Mairie/maison-de-repos.png" },
  { id: "perischool", label: "Perishcool", icon: "/dynamic-menu-art/Image-Mairie/retour-a-lecole.png" },
  { id: "communaute", label: "Communauté de commune", icon: "/dynamic-menu-art/Image-Mairie/mairie.png" },
  { id: "seniors", label: "Séniors", icon: "/dynamic-menu-art/Image-Mairie/personne-agee.png" },
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
      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_60%_55%,rgba(0,0,0,.15),rgba(0,0,0,.55))]"></div>

      {/* Navigation buttons - positioned above hero image */}
      <div className="absolute top-6 left-0 right-0 z-10">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center font-manrope">
            {topNav.map((item) => (
              <Button
                key={item.id}
                onMouseEnter={(e) => onTopEnter(item.id, e)}
                onMouseLeave={scheduleClose}
                className="bg-black/30 hover:bg-black/40 text-white border-2 border-white rounded-full px-7 py-3 font-normal transition-all text-[17px] shadow-lg"
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

      {/* Menu vertical gauche - style simple turquoise */}
      <aside className="hidden md:block absolute left-0 top-0 bottom-0 z-10 w-[105px] bg-[#1a5f66]/95">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`py-6 px-4 text-center hover:bg-white/10 transition-all cursor-pointer text-white font-manrope ${
              index < menuItems.length - 1 ? 'border-b border-white/20' : ''
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
              <div className="text-[13px] leading-tight">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </aside>

      {/* Contenu central */}
      <div className="relative z-0 mx-auto flex max-w-[1200px] items-center px-4 pt-[9vh] md:pt-[12vh]">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,.7)]">
          <span className="opacity-95">Bienvenue à </span>
          <span className="italic">Mons-en-pévèle</span>
        </h1>
      </div>

      {/* Icônes sociales en bas - cercles blancs */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-0 flex gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-white cursor-pointer transition-all hover:bg-white/90">
          <Facebook className="w-7 h-7 text-black fill-black" />
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-full bg-white cursor-pointer transition-all hover:bg-white/90">
          <Instagram className="w-7 h-7 text-black" />
        </div>
      </div>

      {/* Blason en bas à droite - fond jaune/rouge */}
      <div className="absolute bottom-8 right-8 z-0">
        <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-yellow-400 to-red-500 grid place-items-center shadow-xl">
          <img
            src={logoMairie}
            alt="Blason Mons-en-Pévèle"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </section>
  );
};
