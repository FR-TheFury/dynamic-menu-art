import { Header } from "@/components/Header";
import { NavigationMenu } from "@/components/NavigationMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Navigation du site</h2>
        <p className="text-muted-foreground mb-6">
          Survolez les catégories à gauche pour voir les liens correspondants à droite
        </p>
        
        <NavigationMenu />
      </main>
    </div>
  );
};

export default Index;
