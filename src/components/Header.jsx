import {
  Navbar,
  NavbarBrand,
  NavbarToggle
} from "flowbite-react";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

export default function HeaderComp() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    'home', 'about', 'skills', 'education', 'projects', 'contact'
  ];

  return (
    <Navbar fluid rounded className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <NavbarBrand href="#home">
        <span className="self-center whitespace-nowrap text-xl font-bold text-gray-900">
          Shesa Davina Putri
        </span>
      </NavbarBrand>
      
      <NavbarToggle onClick={() => setIsOpen(!isOpen)}>
        <HiOutlineBars3 className="h-5 w-5" />
      </NavbarToggle>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 ml-10">
        {menuItems.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200`}>
        <div className="px-4 py-4 space-y-2">
          {menuItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </Navbar>
  );
}