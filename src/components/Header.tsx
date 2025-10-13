import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMairie from "@/assets/logo-mairie.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      {/* Top bar - turquoise gradient with glassmorphism */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1400px] h-full rounded-b-2xl bg-gradient-to-r from-[#0e5b63] via-[#0f6a73] to-[#0a3c44]/95 shadow-[0_10px_30px_rgba(0,0,0,.35)]" />
        <div className="relative max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between font-manrope">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/10 ring-1 ring-white/20">
                <img
                  src={logoMairie}
                  alt="Logo Mairie Mons-en-Pévèle"
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
              </div>
              <div className="leading-tight">
                <h1 className="text-[22px] font-bold tracking-tight">Mons-en-pévèle</h1>
                <p className="text-xs opacity-80">dans le prévèle Camrembault</p>
              </div>
            </div>

            {/* Center CTA */}
            <div className="hidden md:flex">
              <Button className="bg-[#ea3a30] hover:bg-[#d3322a] text-white font-semibold px-6 py-3 rounded-full text-[15px] shadow-[0_6px_16px_rgba(0,0,0,.3)] ring-1 ring-black/10 transition active:translate-y-[1px]">
                Réserver salle des fête
              </Button>
            </div>

            {/* Right tools */}
            <div className="flex items-center gap-3">
              <Button className="hidden md:inline-flex items-center rounded-full border border-white/[0.18] bg-white/[0.08] backdrop-blur-md px-5 py-2.5 text-[15px] shadow-[0_2px_10px_rgba(0,0,0,.15)] hover:bg-white/[0.12]">
                Mon espace
              </Button>
              <div className="flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.08] backdrop-blur-md px-4 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,.15)]">
                <input
                  type="text"
                  placeholder="Recherche"
                  className="w-44 bg-transparent text-[15px] outline-none placeholder:text-white/80"
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
