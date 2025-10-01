import { useState } from "react";
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
  const activeTop = topNav.find((t) => t.id === hoveredTop);

  const onTopEnter = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredTop(id);
    setTopPos({ x: rect.left + rect.width / 2, y: rect.bottom + window.scrollY });
  };

  const closeTop = () => setHoveredTop(null);

  return (
    <header className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logoMairie}
              alt="Logo Mons-en-Pévèle"
              className="h-20 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">Mons-en-Pévèle</h1>
              <p className="text-sm text-white/90">dans le prévôté Camrembault</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Réserver salle des fêtes
            </Button>
            <Button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 font-semibold px-6 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              Mon espace
            </Button>
            <Button size="icon" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 h-12 w-12">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sub Navigation with dropdowns */}
      <div className="bg-primary/90 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex gap-6 justify-center">
            {topNav.map((item) => (
              <Button
                key={item.id}
                onMouseEnter={(e) => onTopEnter(item.id, e)}
                className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40 rounded-full px-10 py-6 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {activeTop && (
        <div
          className="fixed z-50 bg-white border border-dropdown-border rounded-2xl shadow-2xl p-6 min-w-[360px]"
          style={{ left: topPos.x, top: topPos.y + 12, transform: "translateX(-50%)" }}
          onMouseLeave={closeTop}
          onMouseEnter={() => setHoveredTop(activeTop.id)}
        >
          {/* Upward triangle */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-b-[16px] border-b-white border-x-[16px] border-x-transparent"
          />
          <div
            className="absolute -top-[17px] left-1/2 -translate-x-1/2 w-0 h-0 border-b-[16px] border-b-dropdown-border border-x-[16px] border-x-transparent"
          />

          <h3 className="text-lg font-semibold text-primary mb-4">{activeTop.label}</h3>
          <ul className="space-y-2">
            {activeTop.links.map((l, i) => (
              <li key={i} className="text-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 cursor-pointer py-2 border-b border-border last:border-0">
                - {l}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
