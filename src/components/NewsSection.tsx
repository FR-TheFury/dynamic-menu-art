import { useState } from "react";
import { Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import marcheImg from "@/assets/news-marche.jpg";
import travauxImg from "@/assets/news-travaux.jpg";
import ecoleImg from "@/assets/news-ecole.jpg";
import feteImg from "@/assets/news-fete.jpg";
import environnementImg from "@/assets/news-environnement.jpg";
import conseilImg from "@/assets/news-conseil.jpg";

interface NewsPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
}

const newsData: NewsPost[] = [
  {
    id: "1",
    title: "Nouveau marché hebdomadaire",
    description: "Tous les samedis matins, découvrez les producteurs locaux sur la place centrale.",
    date: "15 Mars 2024",
    category: "Vie locale",
    tags: ["Commerce", "Événement"],
    image: marcheImg
  },
  {
    id: "2",
    title: "Travaux rue principale",
    description: "Réfection de la chaussée prévue du 20 au 30 mars. Circulation alternée.",
    date: "12 Mars 2024",
    category: "Travaux",
    tags: ["Urbanisme", "Information"],
    image: travauxImg
  },
  {
    id: "3",
    title: "Inscription scolaire 2024-2025",
    description: "Les inscriptions pour la rentrée prochaine sont ouvertes en mairie.",
    date: "10 Mars 2024",
    category: "Éducation",
    tags: ["Éducation", "Information"],
    image: ecoleImg
  },
  {
    id: "4",
    title: "Fête du village",
    description: "Grande fête annuelle le 1er juin avec animations, restauration et feu d'artifice.",
    date: "8 Mars 2024",
    category: "Vie locale",
    tags: ["Événement", "Culture"],
    image: feteImg
  },
  {
    id: "5",
    title: "Collecte des déchets verts",
    description: "Reprise de la collecte bimensuelle à partir du 1er avril.",
    date: "5 Mars 2024",
    category: "Environnement",
    tags: ["Environnement", "Information"],
    image: environnementImg
  },
  {
    id: "6",
    title: "Conseil municipal",
    description: "Prochaine séance publique le 25 mars à 18h30 en salle du conseil.",
    date: "3 Mars 2024",
    category: "Mairie",
    tags: ["Mairie", "Information"],
    image: conseilImg
  }
];

const allTags = ["Tous", "Événement", "Information", "Commerce", "Urbanisme", "Éducation", "Culture", "Environnement", "Mairie"];

export const NewsSection = () => {
  const [selectedTag, setSelectedTag] = useState("Tous");

  const filteredNews = selectedTag === "Tous" 
    ? newsData 
    : newsData.filter(post => post.tags.includes(selectedTag));

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Actualités</h2>
        <p className="text-muted-foreground mb-6">Restez informé de la vie de votre commune</p>
        
        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className="rounded-full"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription className="line-clamp-2">{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant={tag.toLowerCase() as any}
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucune actualité dans cette catégorie</p>
        </div>
      )}
    </section>
  );
};
