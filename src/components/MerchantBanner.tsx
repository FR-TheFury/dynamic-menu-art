import { useState } from "react";
import { ChevronLeft, ChevronRight, Store, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import boulangerie from "@/assets/commercant-boulangerie.jpg";
import cafe from "@/assets/commercant-cafe.jpg";
import fleuriste from "@/assets/commercant-fleuriste.jpg";

interface Merchant {
  id: string;
  shopName: string;
  ownerName: string;
  image: string;
  description: string;
}

const merchants: Merchant[] = [
  {
    id: "1",
    shopName: "Boulangerie du Village",
    ownerName: "Marie Dubois",
    image: boulangerie,
    description: "Pain artisanal et viennoiseries faits maison chaque matin"
  },
  {
    id: "2",
    shopName: "Café de la Place",
    ownerName: "Jean Martin",
    image: cafe,
    description: "Un lieu convivial pour vos pauses café et déjeuners"
  },
  {
    id: "3",
    shopName: "Fleurs & Jardins",
    ownerName: "Sophie Laurent",
    image: fleuriste,
    description: "Compositions florales et plantes pour toutes occasions"
  }
];

export const MerchantBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMerchant = () => {
    setCurrentIndex((prev) => (prev + 1) % merchants.length);
  };

  const prevMerchant = () => {
    setCurrentIndex((prev) => (prev - 1 + merchants.length) % merchants.length);
  };

  const currentMerchant = merchants[currentIndex];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Commerçant du Mois
      </h2>
      
      <Card className="relative overflow-hidden">
        <div className="relative h-[400px] md:h-[500px]">
          <img 
            src={currentMerchant.image} 
            alt={currentMerchant.shopName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Store className="w-8 h-8" />
                <h3 className="text-3xl md:text-4xl font-bold">{currentMerchant.shopName}</h3>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5" />
                <p className="text-xl">{currentMerchant.ownerName}</p>
              </div>
              
              <p className="text-lg text-white/90">{currentMerchant.description}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevMerchant}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextMerchant}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {merchants.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </Card>
    </section>
  );
};
