import { MapPin, Clock, Phone, Facebook, Instagram } from "lucide-react";
import logoMairie from "@/assets/logo-mairie.png";
import logoReference from "@/assets/logo-reference.png";

export const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Adresse */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Adresse</h3>
            </div>
            <div className="space-y-2 text-white/90">
              <p className="font-semibold">Mairie de Mons-en-Pévèle</p>
              <p>230 rue du Moulin</p>
              <p>59246 Mons-en-Pévèle</p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Horaires</h3>
            </div>
            <div className="space-y-2 text-white/90">
              <p><span className="font-semibold">Lundi et jeudi :</span> 9h00 à 12h00</p>
              <p><span className="font-semibold">Mardi, mercredi, vendredi :</span></p>
              <p className="pl-4">9h00 à 12h00 et 14h00 à 17h30</p>
              <p><span className="font-semibold">Samedi :</span> 9h00 à 12h00</p>
              <p className="text-sm italic">(1 samedi sur 2)</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Nous contacter</h3>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="tel:0320000000"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bande logos */}
        <div className="border-t border-white/20 pt-8">
          <div className="bg-white rounded-2xl p-6 flex items-center justify-around flex-wrap gap-8">
            <img
              src={logoMairie}
              alt="Logo Mons-en-Pévèle"
              className="h-16 w-auto object-contain"
            />
            <img
              src={logoMairie}
              alt="Blason"
              className="h-16 w-auto object-contain"
            />
            <img
              src={logoReference}
              alt="Logo Pévèle Carembault"
              className="h-16 w-auto object-contain"
            />
            <div className="text-primary font-bold text-xl">
              République Française
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
