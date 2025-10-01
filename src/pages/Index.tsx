import { Header } from "@/components/Header";
import { NavigationMenu } from "@/components/NavigationMenu";
import villageBackground from "@/assets/village-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main 
        className="relative min-h-[calc(100vh-180px)] bg-cover bg-center"
        style={{ backgroundImage: `url(${villageBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 pt-8 pl-8">
          <NavigationMenu />
        </div>
      </main>
    </div>
  );
};

export default Index;
