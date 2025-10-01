import { useState, useRef } from "react";
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
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; centerY: number }>({ left: 0, centerY: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (itemId: string, event: React.MouseEvent<HTMLDivElement>) => {
    const itemRect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    const menuRect = menuRef.current?.getBoundingClientRect();

    setHoveredItem(itemId);

    const centerY = (itemRect.top - (containerRect?.top ?? 0)) + itemRect.height / 2;
    const left = ((menuRect?.right ?? 0) - (containerRect?.left ?? 0)) + 16; // 16px gutter

    setDropdownPosition({ left, centerY });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const activeMenu = menuData.find(item => item.id === hoveredItem);

  return (
    <div ref={containerRef} className="relative flex min-h-[600px]" onMouseLeave={handleMouseLeave}>
      {/* Left Menu */}
      <div ref={menuRef} className="flex flex-col gap-3 p-3">
        {menuData.map((item) => (
          <div
            key={item.id}
            className={`
              flex flex-col items-center justify-center gap-2 px-4 py-6 cursor-pointer
              rounded-xl backdrop-blur-md
              transition-all duration-200
              ${hoveredItem === item.id 
                ? 'bg-white/30 text-white shadow-lg scale-105' 
                : 'bg-white/15 text-white/95 hover:bg-white/25'
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
            left: `${dropdownPosition.left}px`,
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
