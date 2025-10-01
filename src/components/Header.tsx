import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoRef from "@/assets/logo-reference.png";

export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoRef} 
              alt="Logo Mons-en-pévèle" 
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold">Mons-en-pévèle</h1>
              <p className="text-xs text-white/80">dans le prévôté Camrembault</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6"
            >
              Réserver salle des fête
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Mon espace
            </Button>
            <Button 
              variant="outline"
              size="icon"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-primary/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8"
            >
              Mon village
            </Button>
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8"
            >
              Votre mairie
            </Button>
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8"
            >
              Sortir à mons-en-pévèle
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
