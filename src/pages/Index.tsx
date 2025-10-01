import { Header } from "@/components/Header";
import { NavigationMenu } from "@/components/NavigationMenu";
import { NewsSection } from "@/components/NewsSection";
import { MerchantBanner } from "@/components/MerchantBanner";
import villageBackground from "@/assets/village-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main 
        className="relative min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${villageBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 pt-8 pl-8">
          <NavigationMenu />
        </div>
      </main>

      <NewsSection />
      <MerchantBanner />
    </div>
  );
};

export default Index;
