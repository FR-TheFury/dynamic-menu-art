import { useState, useRef } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMairie from "@/assets/logo-mairie.png";

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

export const Header = () => {
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
    <header className="relative bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logoMairie}
              alt="Logo Mairie Mons-en-Pévèle"
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">Mons-en-Pévèle</h1>
              <p className="text-sm text-white/90">dans le prévôté Camrembault</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all">
              Réserver salle des fêtes
            </Button>
            <Button className="bg-muted hover:bg-muted/90 text-foreground font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all">
              Mon espace
            </Button>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2.5 rounded-lg bg-white/95 text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navigation with dropdowns */}
      <div className="bg-primary/95 border-t border-white/10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex gap-6 justify-center">
            {topNav.map((item) => (
              <Button
                key={item.id}
                onMouseEnter={(e) => onTopEnter(item.id, e)}
                onMouseLeave={scheduleClose}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 rounded-full px-8 py-2.5 font-semibold transition-all"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

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
    </header>
  );
};
