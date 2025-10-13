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
    <header className="relative">
      {/* Top bar */}
      <div className="bg-primary/95 text-white py-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logoMairie}
                alt="Logo Mairie Mons-en-Pévèle"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h1 className="text-xl font-bold">Mons-en-pévèle</h1>
                <p className="text-xs text-white/90">dans le prévèlé Camrembault</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-2.5 rounded-full text-sm">
                Réserver salle des fête
              </Button>
              <Button className="bg-muted/60 hover:bg-muted/70 text-white font-medium px-6 py-2.5 rounded-full text-sm">
                Mon espace
              </Button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Recherche"
                  className="pl-4 pr-10 py-2.5 rounded-full bg-transparent text-white placeholder:text-white/90 border border-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-44 text-sm"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons - positioned over hero */}
      <div className="absolute top-full left-0 right-0 z-20 pt-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-4 justify-center">
            {topNav.map((item) => (
              <Button
                key={item.id}
                onMouseEnter={(e) => onTopEnter(item.id, e)}
                onMouseLeave={scheduleClose}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-lg px-6 py-2 font-medium transition-all text-sm"
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
