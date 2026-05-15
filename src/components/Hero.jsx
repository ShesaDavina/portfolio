import { useState, useEffect } from 'react';

export default function HeroComp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="py-30 px-6 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-20">
          <div
            className={`space-y-8 md:pr-12 transition-all duration-700 ease-out ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
              }`}
          >
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#355872]">
                Hi, I'm <span className="text-[#7AAACE]">Shesa Davina Putri</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: '#7AAACE' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#355872'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#7AAACE'}
              >
                My Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{
                  border: `2px solid #7AAACE`,
                  color: '#7AAACE',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#7AAACE';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#7AAACE';
                }}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 ease-out delay-150 ${isVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-12 scale-95'
              }`}
          >
            <div className="relative z-10">
              <img
                src="/images/me.jpeg"
                alt="Shesa Davina Putri"
                className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl border-8 mx-auto"
                style={{
                  borderColor: '#FFFFFF',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
              />
            </div>
            <div
              className={`absolute -top-8 -right-8 w-32 h-32 rounded-2xl opacity-30 transition-all duration-700 delay-300 ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
                }`}
              style={{ backgroundColor: '#9CD5FF' }}
            ></div>
            <div
              className={`absolute -bottom-8 -left-8 w-24 h-24 rounded-xl opacity-30 transition-all duration-700 delay-500 ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
                }`}
              style={{ backgroundColor: '#9CD5FF' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}