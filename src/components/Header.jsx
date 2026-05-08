import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo dengan warna #355872 */}
          <h1 className="text-2xl font-bold" style={{ color: '#355872' }}>
            Shesa Davina Putri
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {['about', 'skills', 'education', 'projects', 'certificates', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-lg font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                style={{ color: '#4a5568' }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#355872';
                  e.target.style.backgroundColor = '#e6f3ff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#4a5568';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle Button - warna #7AAACE */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300"
            style={{ backgroundColor: 'transparent' }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e6f3ff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <svg className="w-6 h-6" style={{ color: '#355872' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t" style={{ borderColor: '#9CD5FF' }}>
            <nav className="flex flex-col gap-4">
              {['about', 'skills', 'education', 'projects', 'certificates', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="w-full text-left p-3 rounded-lg font-semibold transition-all duration-300"
                  style={{ color: '#4a5568' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#355872';
                    e.target.style.backgroundColor = '#e6f3ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#4a5568';
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}