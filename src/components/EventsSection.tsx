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
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">Événements</h2>
          <Button className="bg-white/30 hover:bg-white/40 text-white border-0 rounded-full px-8 py-3 font-semibold backdrop-blur-sm">
            Toutes les dates
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {/* Event 1 - Small text only card (top left) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-[#267884]">{events[0].title}</h3>
              <span className="text-[#267884] font-bold text-sm whitespace-nowrap ml-4">{events[0].date}</span>
            </div>
            <p className="text-[#267884] text-sm mb-6 leading-relaxed">
              {events[0].description}
            </p>
            <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-6 py-2 font-semibold w-auto">
              Plus d'infos
            </Button>
          </div>

          {/* Event 2 - Card with rounded image (top middle) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <img 
                src={events[1].image} 
                alt={events[1].title}
                className="w-48 h-48 object-cover rounded-full"
              />
            </div>
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-[#267884]">{events[1].title}</h3>
              <span className="text-[#267884] font-bold text-sm whitespace-nowrap ml-4">{events[1].date}</span>
            </div>
            <p className="text-[#267884] text-sm mb-6 leading-relaxed">
              {events[1].description}
            </p>
            <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-6 py-2 font-semibold w-auto">
              Plus d'infos
            </Button>
          </div>

          {/* Event 3 - Card with rectangular image (top right) */}
          <div className="md:col-span-4 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img 
              src={events[2].image} 
              alt={events[2].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-[#267884]">{events[2].title}</h3>
                <span className="text-[#267884] font-bold text-sm whitespace-nowrap ml-4">{events[2].date}</span>
              </div>
              <p className="text-[#267884] text-sm mb-6 leading-relaxed">
                {events[2].description}
              </p>
              <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-6 py-2 font-semibold w-auto">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Event 4 - Card with image (middle left) */}
          <div className="md:col-span-4 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img 
              src={events[3].image} 
              alt={events[3].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-[#267884]">{events[3].title}</h3>
                <span className="text-[#267884] font-bold text-sm whitespace-nowrap ml-4">{events[3].date}</span>
              </div>
              <p className="text-[#267884] text-sm mb-6 leading-relaxed">
                {events[3].description}
              </p>
              <Button className="bg-[#267884] hover:bg-[#1f6470] text-white rounded-full px-6 py-2 font-semibold w-auto">
                Plus d'infos
              </Button>
            </div>
          </div>

          {/* Event 5 - Large red card with image on right (bottom, spanning 2 columns) */}
          <div className="md:col-span-8 bg-[#d64545] rounded-3xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{events[4].title}</h3>
                    <span className="text-white font-bold text-sm whitespace-nowrap ml-4">{events[4].date}</span>
                  </div>
                  <p className="text-white text-sm mb-6 leading-relaxed">
                    {events[4].description}
                  </p>
                </div>
                <Button className="bg-white/30 hover:bg-white/40 text-white rounded-full px-6 py-2 font-semibold w-auto backdrop-blur-sm">
                  Plus d'infos
                </Button>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={events[4].image} 
                  alt={events[4].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
