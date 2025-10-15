import { Button } from "@/components/ui/button";
import newsFete from "@/assets/news-fete.jpg";
import newsMarche from "@/assets/news-marche.jpg";
import newsEcole from "@/assets/news-ecole.jpg";
import newsTravaux from "@/assets/news-travaux.jpg";
import newsConseil from "@/assets/news-conseil.jpg";

const events = [
  {
    id: 1,
    title: "Lorem ipsum",
    date: "01/10/2025",
    description: "Vita est illis semper in fuga uxoresque mercenarioe conductoe ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species species matrimonii, ad tempus ex pacto",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    date: "25/09/2025",
    description: "Vita est illis semper in fuga uxoresque mercenarioe conductoe ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species",
    image: newsFete,
    imageRounded: true,
  },
  {
    id: 3,
    title: "Lorem ipsum",
    date: "29/09/2025",
    description: "Vita est illis semper in fuga uxoresque mercenarioe conductoe",
    image: newsConseil,
  },
  {
    id: 4,
    title: "Lorem ipsum",
    date: "26/09/2025",
    description: "Vita est illis semper in fuga uxoresque mercenarioe conductoe ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species matrimonii, Vita est illis semper in fuga",
    image: newsEcole,
  },
  {
    id: 5,
    title: "Lorem ipsum",
    date: "28/09/2025",
    description: "Vita est illis semper in fuga uxoresque mercenarioe conductoe ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species matrimonii, ad tempus ex pacto atque, ut sit species matrimonii,",
    image: newsTravaux,
    isRed: true,
    imagePosition: "right",
  },
];

export const EventsSection = () => {
  return (
    <section className="py-20 px-6 bg-[#267884] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-4xl font-bold text-white">Événements</h2>
            <div className="w-24 h-1 bg-accent mt-3 mb-3"></div>
            <p className="text-white/80 max-w-2xl text-sm">
              Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx
            </p>
          </div>
          <Button className="bg-white/30 hover:bg-white/40 text-white border-0 rounded-full px-8 py-3 font-semibold backdrop-blur-sm">
            Toutes les dates
          </Button>
        </div>

        {/* Events Grid - 2 rows of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          {/* Row 1 - Card 1: Text only */}
          <div className="border-[8px] border-white rounded-[32px] overflow-hidden bg-white shadow-xl">
            <div className="p-6 space-y-2 text-[#267884] h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl">{events[0].title}</h3>
                <p className="text-xs opacity-80 mt-2">{events[0].date}</p>
                <p className="text-sm opacity-90 leading-relaxed mt-3">
                  {events[0].description}
                </p>
              </div>
              <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-5 py-2 text-sm font-semibold mt-4">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Row 1 - Card 2: With rounded image */}
          <div className="border-[8px] border-white rounded-[32px] overflow-hidden bg-white shadow-xl">
            <div className="p-6 space-y-2 text-[#267884]">
              <div className="flex justify-center mb-4">
                <img 
                  src={events[1].image} 
                  alt={events[1].title}
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-xl">{events[1].title}</h3>
              <p className="text-xs opacity-80">{events[1].date}</p>
              <p className="text-sm opacity-90 leading-relaxed">
                {events[1].description}
              </p>
              <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-5 py-2 text-sm font-semibold mt-3">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Row 1 - Card 3: With rectangular image */}
          <div className="border-[8px] border-white rounded-[32px] overflow-hidden bg-white shadow-xl">
            <div className="relative h-48">
              <img
                src={events[2].image}
                alt={events[2].title}
                className="w-full h-full object-cover rounded-t-[24px]"
              />
            </div>
            <div className="p-6 space-y-2 text-[#267884]">
              <h3 className="font-bold text-xl">{events[2].title}</h3>
              <p className="text-xs opacity-80">{events[2].date}</p>
              <p className="text-sm opacity-90 leading-relaxed">
                {events[2].description}
              </p>
              <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-5 py-2 text-sm font-semibold mt-3">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Row 2 - Card 4: Wide with image (red/accent) */}
          <div className="md:col-span-2 border-[8px] border-accent rounded-[32px] overflow-hidden bg-accent shadow-xl">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-2/5 h-48 md:h-auto">
                <img
                  src={events[4].image}
                  alt={events[4].title}
                  className="w-full h-full object-cover rounded-tl-[24px] md:rounded-bl-[24px] md:rounded-tr-none"
                />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between bg-accent text-white">
                <div>
                  <h3 className="font-bold text-xl">{events[4].title}</h3>
                  <p className="text-xs opacity-80 mt-2">{events[4].date}</p>
                  <p className="text-sm opacity-90 leading-relaxed mt-3">
                    {events[4].description}
                  </p>
                </div>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-sm mt-4">
                  Plus d'infos
                </Button>
              </div>
            </div>
          </div>

          {/* Row 2 - Card 5: Vertical with image */}
          <div className="border-[8px] border-white rounded-[32px] overflow-hidden bg-white shadow-xl">
            <div className="relative h-48">
              <img
                src={events[3].image}
                alt={events[3].title}
                className="w-full h-full object-cover rounded-t-[24px]"
              />
            </div>
            <div className="p-6 space-y-2 text-[#267884]">
              <h3 className="font-bold text-xl">{events[3].title}</h3>
              <p className="text-xs opacity-80">{events[3].date}</p>
              <p className="text-sm opacity-90 leading-relaxed">
                {events[3].description}
              </p>
              <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-5 py-2 text-sm font-semibold mt-3">
                Plus d'infos
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
