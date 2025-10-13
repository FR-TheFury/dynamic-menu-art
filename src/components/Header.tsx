import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMairie from "@/assets/logo-mairie.png";

export const Header = () => {
  return (
    <header className="relative z-20">
      {/* Top bar - turquoise uni */}
      <div className="bg-[#267884] text-white py-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between font-manrope">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logoMairie}
                alt="Logo Mairie Mons-en-Pévèle"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <div className="leading-tight">
                <h1 className="text-xl font-bold tracking-tight">Mons-en-pévèle</h1>
                <p className="text-[13px] opacity-90">dans le prévèle Camrembault</p>
              </div>
            </div>

            {/* Center CTA */}
            <div className="hidden md:flex">
              <Button className="bg-[#d64545] hover:bg-[#c23d3d] text-white font-semibold px-6 py-2.5 rounded-full text-[15px] shadow-lg">
                Réserver salle des fête
              </Button>
            </div>

            {/* Right tools */}
            <div className="flex items-center gap-3">
              <Button className="hidden md:inline-flex items-center rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm px-5 py-2.5 text-[15px] hover:bg-white/30 text-white">
                Mon espace
              </Button>
              <div className="flex items-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-4 py-2 text-white">
                <input
                  type="text"
                  placeholder="Recherche"
                  className="w-32 bg-transparent text-[15px] outline-none placeholder:text-white/90"
                />
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
