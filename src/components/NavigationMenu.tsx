import { useState } from "react";
import { FileText, MapIcon, Users, Landmark } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems: string[];
}

const menuData: MenuItem[] = [
  {
    id: "etatcivile",
    label: "État civile",
    icon: <FileText className="w-10 h-10" />,
    subItems: ["Présentation", "Patrimoine", "Vie associative", "Commerces", "Tourisme"]
  },
  {
    id: "urbanisme",
    label: "Urbanisme",
    icon: <MapIcon className="w-10 h-10" />,
    subItems: ["PLU / Permis", "Occupation domaine public", "Déchets / déchetterie"]
  },
  {
    id: "perischool",
    label: "Périschool",
    icon: <Users className="w-10 h-10" />,
    subItems: ["Périscolaire / Restauration", "Écoles / petite enfance", "Jeunesse (clubs, loisirs)"]
  },
  {
    id: "communaute",
    label: "Communauté\nde commune",
    icon: <Landmark className="w-10 h-10" />,
    subItems: ["CCAS", "Santé", "Associations", "Numéros utiles"]
  }
];

export const NavigationMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ centerY: number }>({ centerY: 0 });

  const handleMouseEnter = (itemId: string, event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredItem(itemId);
    // Center of hovered block in page coordinates
    setDropdownPosition({ centerY: rect.top + window.scrollY + rect.height / 2 });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const activeMenu = menuData.find(item => item.id === hoveredItem);

  return (
    <div className="relative flex min-h-[600px]" onMouseLeave={handleMouseLeave}>
      {/* Left Menu */}
      <div className="w-48 bg-menu-bg/85 backdrop-blur-sm flex flex-col gap-0 p-0 rounded-2xl overflow-hidden shadow-xl">
        {menuData.map((item, index) => (
          <div
            key={item.id}
            className={`
              flex flex-col items-center justify-center gap-3 px-4 py-8 cursor-pointer
              transition-all duration-200
              ${index !== 0 ? 'border-t border-white/10' : ''}
              ${hoveredItem === item.id 
                ? 'bg-menu-hover text-white shadow-lg' 
                : 'text-white/95 hover:bg-menu-hover/50'
              }
            `}
            onMouseEnter={(e) => handleMouseEnter(item.id, e)}
          >
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            <span className="text-sm font-medium text-center leading-tight whitespace-pre-line">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Right Dropdown */}
      {activeMenu && (
        <div 
          className="absolute bg-white border border-dropdown-border rounded-2xl shadow-2xl p-8 min-w-[340px] z-50"
          style={{
            left: '12rem',
            top: `${dropdownPosition.centerY}px`,
            transform: 'translateY(-50%)'
          }}
          onMouseEnter={() => setHoveredItem(activeMenu.id)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Triangle pointer */}
          <div 
            className="absolute left-[-16px] w-0 h-0 border-t-[16px] border-t-transparent border-r-[16px] border-r-white border-b-[16px] border-b-transparent"
            style={{
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
          <div 
            className="absolute left-[-17px] w-0 h-0 border-t-[16px] border-t-transparent border-r-[16px] border-r-dropdown-border border-b-[16px] border-b-transparent"
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
