import { Facebook, Instagram, Phone } from "lucide-react";
import logoMonsVert from "@/assets/logo-mons-blanc.png";
import ecussonBlason from "@/assets/ecusson.png";

export const Footer = () => {
  return (
    <footer className="bg-[#3d6d7a]">
      {/* Bande blanche supérieure */}
      <div className="bg-white h-2"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Adresse */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6 text-white">Adresse</h3>
            <div className="space-y-1 text-white">
              <p className="font-medium">Mairie de</p>
              <p className="font-medium">Mons-en-Pévèle</p>
              <p>230 rue du Moulin</p>
              <p>59246 Mons-en-Pévèle</p>
            </div>
          </div>

          {/* Horaires */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Horraires</h3>
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
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-6 text-white">Nous contacter</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="#"
                className="bg-white p-4 rounded-full transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 text-[#3d6d7a]" />
              </a>
              <a
                href="#"
                className="bg-white p-4 rounded-full transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-[#3d6d7a]" />
              </a>
              <a
                href="tel:0320000000"
                className="bg-white p-4 rounded-full transition-all hover:scale-110"
                aria-label="Téléphone"
              >
                <Phone className="w-8 h-8 text-[#3d6d7a]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bande logos */}
        <div className="bg-white p-8 flex items-center justify-center md:justify-between flex-wrap gap-8">
          <img
            src={logoMonsVert}
            alt="Logo Mons-en-Pévèle"
            className="h-20 w-auto object-contain"
          />
          <img
            src={ecussonBlason}
            alt="Blason Mons-en-Pévèle"
            className="h-20 w-auto object-contain"
          />
          <img
            src="/dynamic-menu-art/Image-Mairie/Logoccpe╠üve╠Çlecarembault.jpg"
            alt="Logo Pévèle Carembault"
            className="h-20 w-auto object-contain"
          />
          <img
            src="/dynamic-menu-art/Image-Mairie/Logo_de_la_Re╠üpublique_franc╠ºaise_(1999).svg"
            alt="République Française"
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};
