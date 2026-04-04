export default function HeroComp() {
  return (
    <section id="home" className="py-24 px-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="space-y-8 md:pr-12">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600">Shesa Davina Putri</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                A PPLG student in SMK Wikrama Bogor, who loves coding and design !
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                My Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/images/me.jpeg"
                alt="Shesa Davina Putri"
                className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl border-8 border-white/50 mx-auto"
              />
            </div>
            
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}