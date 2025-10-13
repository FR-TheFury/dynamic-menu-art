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
      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_60%_55%,rgba(0,0,0,.15),rgba(0,0,0,.55))]"></div>

      {/* Navigation buttons - positioned above hero image */}
      <div className="absolute top-5 left-0 right-0 z-10">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center font-manrope">
            {topNav.map((item) => (
              <Button
                key={item.id}
                onMouseEnter={(e) => onTopEnter(item.id, e)}
                onMouseLeave={scheduleClose}
                className="bg-white/[0.08] hover:bg-white/[0.12] text-white border border-white/[0.18] rounded-full px-6 py-3 font-semibold transition-all text-[18px] backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,.20)]"
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

      {/* Menu vertical gauche - glassmorphism style */}
      <aside className="hidden md:block fixed left-4 top-[140px] z-10 w-[92px] rounded-2xl bg-[linear-gradient(180deg,rgba(7,52,58,.9),rgba(7,52,58,.75))] p-3 ring-1 ring-white/15">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="mb-3 last:mb-0 rounded-xl p-2 text-center hover:bg-white/5 transition-all cursor-pointer text-white font-manrope"
          >
            <div className="mx-auto mb-1 grid h-12 w-12 place-items-center rounded-lg bg-white/10">
              <item.icon className="w-5 h-5" />
            </div>
            <div className="text-[12px] leading-[1.05] opacity-95">
              {item.label}
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

      {/* Icônes sociales en bas - glassmorphism style */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-0 flex gap-6">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/30 cursor-pointer transition-all hover:bg-white/20">
          <Facebook className="w-6 h-6 text-white fill-white" />
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/30 cursor-pointer transition-all hover:bg-white/20">
          <Instagram className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Blason en bas à droite - gradient style */}
      <div className="absolute bottom-4 right-6 z-0">
        <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-yellow-400 to-red-600 opacity-90 ring-1 ring-white/30 grid place-items-center">
          <img
            src={logoMairie}
            alt="Blason Mons-en-Pévèle"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
};
