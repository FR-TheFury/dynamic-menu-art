import { useState } from "react";
import { FileText, Map, Users, Building2 } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems: string[];
}

const menuData: MenuItem[] = [
  {
    id: "demarches",
    label: "Démarches",
    icon: <FileText className="w-6 h-6" />,
    subItems: ["État civil", "Recensement", "Élections"]
  },
  {
    id: "urbanisme",
    label: "Urbanisme & Cadre de vie",
    icon: <Map className="w-6 h-6" />,
    subItems: ["PLU / Permis", "Occupation domaine public", "Déchets / déchetterie"]
  },
  {
    id: "famille",
    label: "Famille & Éducation",
    icon: <Users className="w-6 h-6" />,
    subItems: ["Périscolaire / Restauration", "Écoles / petite enfance", "Jeunesse (clubs, loisirs)"]
  },
  {
    id: "communaute",
    label: "Communauté & Services",
    icon: <Building2 className="w-6 h-6" />,
    subItems: ["CCAS", "Santé", "Associations", "Numéros utiles"]
  }
];

export const NavigationMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0 });

  const handleMouseEnter = (itemId: string, event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredItem(itemId);
    setDropdownPosition({ top: rect.top + rect.height / 2 });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const activeMenu = menuData.find(item => item.id === hoveredItem);

  return (
    <div className="relative flex min-h-[500px]">
      {/* Left Menu */}
      <div className="w-64 bg-menu-bg/90 backdrop-blur-sm flex flex-col gap-1 p-2">
        {menuData.map((item) => (
          <div
            key={item.id}
            className={`
              flex items-center gap-3 px-4 py-4 rounded-lg cursor-pointer
              transition-all duration-200
              ${hoveredItem === item.id 
                ? 'bg-menu-hover text-white scale-105' 
                : 'text-white/90 hover:bg-menu-hover/50'
              }
            `}
            onMouseEnter={(e) => handleMouseEnter(item.id, e)}
            onMouseLeave={handleMouseLeave}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Right Dropdown */}
      {activeMenu && (
        <div 
          className="absolute left-[280px] bg-dropdown-bg border border-dropdown-border rounded-lg shadow-xl p-6 min-w-[300px] z-50"
          style={{
            top: `${dropdownPosition.top - 80}px`,
          }}
          onMouseEnter={() => setHoveredItem(activeMenu.id)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Triangle pointer */}
          <div 
            className="absolute left-[-12px] w-0 h-0 border-t-[12px] border-t-transparent border-r-[12px] border-r-dropdown-bg border-b-[12px] border-b-transparent"
            style={{
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
          <div 
            className="absolute left-[-13px] w-0 h-0 border-t-[12px] border-t-transparent border-r-[12px] border-r-dropdown-border border-b-[12px] border-b-transparent"
            style={{
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />

          <h3 className="text-lg font-semibold text-primary mb-4">{activeMenu.label}</h3>
          <ul className="space-y-2">
            {activeMenu.subItems.map((subItem, index) => (
              <li 
                key={index}
                className="text-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 cursor-pointer py-2 border-b border-border last:border-0"
              >
                - {subItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
