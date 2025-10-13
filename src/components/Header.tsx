import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMairie from "@/assets/logo-mairie.png";

export const Header = () => {
  return (
    <header className="relative">
      {/* Top bar - turquoise semi-transparent */}
      <div className="bg-[#2d7178]/90 text-white py-3">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logoMairie}
                alt="Logo Mairie Mons-en-Pévèle"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <div>
                <h1 className="text-xl font-bold">Mons-en-pévèle</h1>
                <p className="text-xs text-white/90">dans le prévèlé Camrembault</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button className="bg-[#d64545] hover:bg-[#c23d3d] text-white font-medium px-6 py-2.5 rounded-full text-sm shadow-lg">
                Réserver salle des fête
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-2.5 rounded-full text-sm">
                Mon espace
              </Button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Recherche"
                  className="pl-4 pr-10 py-2.5 rounded-full bg-transparent text-white placeholder:text-white/90 border-2 border-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-44 text-sm"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
