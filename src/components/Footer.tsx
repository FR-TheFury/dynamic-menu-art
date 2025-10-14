import { Facebook, Instagram, Phone } from "lucide-react";
import logoMairie from "@/assets/logo-mairie.png";
import logoReference from "@/assets/logo-pevele-carembault.png";

export const Footer = () => {
  return (
    <footer className="bg-[#4A7C8C] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 divide-x-0 md:divide-x divide-white/30">
          {/* Adresse */}
          <div className="text-center md:text-left px-8">
            <h3 className="text-2xl font-bold mb-6">Adresse</h3>
            <div className="space-y-1 text-white">
              <p className="font-medium">Mairie de</p>
              <p className="font-medium">Mons-en-Pévèle</p>
              <p>230 rue du Moulin</p>
              <p>59246 Mons-en-Pévèle</p>
            </div>
          </div>

          {/* Horaires */}
          <div className="text-center px-8">
            <h3 className="text-2xl font-bold mb-6">Horraires</h3>
            <div className="space-y-1 text-white">
              <p>Lundi et jeudi</p>
              <p>de 9h00 à 12h00</p>
              <p className="mt-3">Mardi, mercredi,</p>
              <p>vendredi</p>
              <p>de 9h00 à 12h00 et</p>
              <p>de 14h00 à 17h30</p>
              <p className="mt-3">Samedi 9h00 à 12h00.</p>
              <p>1 samedi sur 2.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right px-8">
            <h3 className="text-2xl font-bold mb-6">Nous contactez</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="#"
                className="bg-white p-4 rounded-full transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 text-[#4A7C8C]" />
              </a>
              <a
                href="#"
                className="bg-white p-4 rounded-full transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-[#4A7C8C]" />
              </a>
              <a
                href="tel:0320000000"
                className="bg-white p-4 rounded-full transition-all hover:scale-110"
                aria-label="Téléphone"
              >
                <img src="/dynamic-menu-art/Image-Mairie/appel.png" alt="Téléphone" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bande logos */}
        <div className="border-t border-white/30 pt-8">
          <div className="bg-white rounded-none p-8 flex items-center justify-between flex-wrap gap-8">
            <img
              src={logoMairie}
              alt="Logo Mons-en-Pévèle"
              className="h-20 w-auto object-contain"
            />
            <img
              src={logoMairie}
              alt="Blason Mons-en-Pévèle"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/dynamic-menu-art/Image-Mairie/logo_ccpc.png"
              alt="Logo Pévèle Carembault"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/dynamic-menu-art/Image-Mairie/Logo_de_la_République_française_(1999).svg"
              alt="République Française"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
