import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaFigma } from "react-icons/fa";

const projects = [
  {
    title: 'FoodWise',
    desc: 'Pencatatan & pengingat makanan agar tidak terbuang percuma',
    year: '2026',
    tech: ['React', 'Tailwind', 'Laravel', 'MySQL'],
    image: '/images/projects/foodwise.png',
    github: 'https://github.com/ShesaDavina/foodwise-app.git',
    live: '#'
  },
  {
    title: 'Athletica',
    desc: 'Booking kelas gym wanita',
    year: '2025',
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
    image: '/images/projects/athletica.png',
    github: 'https://github.com/ShesaDavina',
    live: '#'
  },
  {
    title: 'BookKu',
    desc: 'E-commerce buku online',
    year: '2026',
    tech: ['React', 'Vite', 'Tailwind'],
    image: '/images/projects/bookku.png',
    github: 'https://github.com/ShesaDavina',
    live: '#'
  },
  {
    title: 'HearMeOut',
    desc: 'Aspirasi siswa',
    year: '2026',
    tech: ['Figma'],
    image: '/images/projects/hearmeout.png',
    github: '#',
    live: 'https://www.figma.com/proto/nEgfBjq4DGM6kJGv86P1QT/HearMeOut---Aspirasi-Siswa?node-id=139-3&starting-point-node-id=139%3A3'
  },
  {
    title: 'NIKE E-Commerce',
    desc: 'UI/UX Nike',
    year: '2025',
    tech: ['Figma'],
    image: '/images/projects/nike.png',
    github: '#',
    live: 'https://www.figma.com/proto/tw4KSjG0fP1D1LQ4l6K8Wg/NIKE?node-id=2-3&starting-point-node-id=115%3A11&t=Hd5WsQacnWYoABzJ-1'
  },
  {
    title: 'BuTi (Buah Hati)',
    desc: 'Tracking ibu hamil',
    year: '2024',
    tech: ['MockPlus'],
    image: '/images/projects/buti.png',
    github: '#',
    live: 'https://rp.mockplus.com/rps/qjSRUR00cP/wSPeEiRG_v?'
  },
  {
    title: 'Mengenal Fauna',
    desc: 'Edukasi fauna',
    year: '2024',
    tech: ['HTML', 'CSS'],
    image: '/images/projects/fauna.png',
    github: 'https://github.com/ShesaDavina',
    live: '#'
  },
];

export default function Projects({ isVisible }) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Cek apakah project punya GitHub (bukan Figma)
  const hasGithub = (project) => {
    return project.github && project.github !== '#' && !project.tech.includes('Figma');
  };

  // Cek apakah project punya Live Demo
  const hasLive = (project) => {
    return project.live && project.live !== '#';
  };

  return (
    <section id="projects" className={`py-24 px-6 fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#e6f3ff' }}>
            <FaFolderOpen style={{ color: '#355872' }} />
            <span className="text-sm font-semibold" style={{ color: '#355872' }}>My Projects</span>
          </div>
          <h2 className="text-5xl font-black mb-4" style={{ color: '#355872' }}>Projects</h2>
          <p className="text-xl" style={{ color: '#7AAACE' }}>Beberapa karya terbaik saya</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map(project => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl border border-gray-100"
            >
              <div className="h-48 bg-gray-100 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Project+Image';
                  }}
                />
                <span
                  className="absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: '#355872' }}
                >
                  {project.year}
                </span>
                {/* Badge Figma jika tech-nya Figma */}
                {project.tech.includes('Figma') && (
                  <span
                    className="absolute bottom-3 right-3 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1"
                    style={{ backgroundColor: '#7AAACE' }}
                  >
                    <FaFigma className="text-xs" />
                    Figma
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1" style={{ color: '#355872' }}>{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#e6f3ff', color: '#355872' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  {/* Tombol GitHub - hanya tampil jika project BUKAN Figma */}
                  {hasGithub(project) && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex-1 text-center py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                      style={{ backgroundColor: '#355872', color: 'white' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#7AAACE'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#355872'}
                    >
                      <FaGithub className="text-sm" />
                      GitHub
                    </a>
                  )}

                  {/* Tombol Live Demo - untuk Figma atau project dengan link live */}
                  {hasLive(project) && (
                    <a
                      href={project.live}
                      target="_blank"
                      className={`${!hasGithub(project) ? 'flex-1' : ''} py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium`}
                      style={{
                        backgroundColor: hasGithub(project) ? '#f0f0f0' : '#355872',
                        color: hasGithub(project) ? '#355872' : 'white'
                      }}
                      onMouseEnter={(e) => {
                        if (hasGithub(project)) {
                          e.target.style.backgroundColor = '#e6f3ff';
                          e.target.style.color = '#7AAACE';
                        } else {
                          e.target.style.backgroundColor = '#7AAACE';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (hasGithub(project)) {
                          e.target.style.backgroundColor = '#f0f0f0';
                          e.target.style.color = '#355872';
                        } else {
                          e.target.style.backgroundColor = '#355872';
                        }
                      }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      View Design
                    </a>
                  )}

                  {/* Jika tidak ada GitHub dan tidak ada Live, tampilkan pesan */}
                  {!hasGithub(project) && !hasLive(project) && (
                    <div className="flex-1 text-center py-2 rounded-lg text-sm" style={{ backgroundColor: '#f0f0f0', color: '#9CD5FF' }}>
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              backgroundColor: 'white',
              color: '#355872',
              border: `2px solid #7AAACE`
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#355872';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#355872';
            }}
          >
            {showAll ? "Show Less" : `View All (${projects.length} projects)`}
          </button>
        </div>
      </div>
    </section>
  );
}