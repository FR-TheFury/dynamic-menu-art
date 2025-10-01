import { Store, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import boulangerie from "@/assets/commercant-boulangerie.jpg";

interface Merchant {
  id: string;
  shopName: string;
  ownerName: string;
  image: string;
  description: string;
}

const merchantOfTheMonth: Merchant = {
  id: "1",
  shopName: "Boulangerie du Village",
  ownerName: "Marie Dubois",
  image: boulangerie,
  description: "Pain artisanal et viennoiseries faits maison chaque matin"
};

export const MerchantBanner = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-2">
          Consommons Local
        </h2>
        <p className="text-lg text-muted-foreground">
          Commerçant du mois
        </p>
      </div>
      
      <Card className="relative overflow-hidden">
        <div className="relative h-[350px] md:h-[400px]">
          <img 
            src={merchantOfTheMonth.image} 
            alt={merchantOfTheMonth.shopName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Store className="w-8 h-8" />
                <h3 className="text-3xl md:text-4xl font-bold">{merchantOfTheMonth.shopName}</h3>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5" />
                <p className="text-xl">{merchantOfTheMonth.ownerName}</p>
              </div>
              
              <p className="text-lg text-white/90">{merchantOfTheMonth.description}</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
