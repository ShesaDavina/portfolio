import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaFigma, FaCalendar, FaCode, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'Athletica 2.0',
    desc: 'Booking kelas gym',
    year: '2026',
    tech: ['React', 'Tailwind', 'Laravel', 'MySQL'],
    image: '/images/projects/ath2.png',
    github: 'https://github.com/ShesaDavina/athletica-frontend',
    live: '#',
    fullDesc: 'Platform manajemen gym berbasis web untuk booking kelas, pembelian membership, dan pengelolaan operasional gym. Mendukung role Admin, Trainer, dan Member, dilengkapi dengan pembayaran Midtrans, tiket QR Code, ekspor PDF & Excel, serta dashboard manajemen data.'
  },
  {
    id: 2,
    title: 'FoodWise',
    desc: 'Pencatatan & pengingat makanan agar tidak terbuang percuma yang terintegrasi dengan Google Calendar',
    year: '2026',
    tech: ['React', 'Tailwind', 'Laravel', 'MySQL'],
    image: '/images/projects/foodwise.png',
    github: 'https://github.com/ShesaDavina/foodwise-app',
    live: '#',
    fullDesc: 'Aplikasi pencatatan makanan yang membantu mengurangi food waste dengan fitur pengingat terintegrasi Google Calendar. Dibangun dengan React untuk frontend dan Laravel untuk backend.'
  },
  {
    id: 3,
    title: 'BookKu',
    desc: 'E-commerce buku online',
    year: '2026',
    tech: ['React', 'Vite', 'Tailwind'],
    image: '/images/projects/bookku.png',
    github: 'https://github.com/ShesaDavina/bookku',
    live: '#',
    fullDesc: 'E-commerce buku online modern yang terintegrasi dengan public API, dengan fitur keranjang dan checkout.'
  },
  {
    id: 4,
    title: 'Athletica',
    desc: 'Booking kelas gym wanita',
    year: '2025',
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
    image: '/images/projects/athletica.png',
    github: 'https://github.com/ShesaDavinaP/athletica',
    live: '#',
    fullDesc: 'Platform booking kelas dan pengelolaan jadwal gym khusus wanita. Terdapat role Admin, Trainer, dan Member. Terdapat juga pembuatan tiket kode QR, fungsi ekspor PDF dan Excel.'
  },
  {
    id: 5,
    title: 'HearMeOut',
    desc: 'Design UI aspirasi siswa',
    year: '2026',
    tech: ['Figma'],
    image: '/images/projects/hearmeout.png',
    github: '#',
    live: 'https://www.figma.com/proto/nEgfBjq4DGM6kJGv86P1QT/HearMeOut---Aspirasi-Siswa?node-id=139-3&starting-point-node-id=139%3A3',
    fullDesc: 'UI/UX design untuk platform aspirasi siswa dimana siswa dapat menyampaikan pendapat dan masukan untuk sekolah.'
  },
  {
    id: 6,
    title: 'NIKE E-Commerce',
    desc: 'UI/UX e-commerce sepatu Nike',
    year: '2025',
    tech: ['Figma'],
    image: '/images/projects/nike.png',
    github: '#',
    live: 'https://www.figma.com/proto/tw4KSjG0fP1D1LQ4l6K8Wg/NIKE?node-id=2-3&starting-point-node-id=115%3A11&t=Hd5WsQacnWYoABzJ-1',
    fullDesc: 'Desain UI/UX untuk e-commerce sepatu Nike dengan tampilan modern dan user-friendly.'
  },
  {
    id: 7,
    title: 'BuTi (Buah Hati)',
    desc: 'Design UI tracking ibu hamil',
    year: '2024',
    tech: ['MockPlus'],
    image: '/images/projects/buti.png',
    github: '#',
    live: 'https://rp.mockplus.com/rps/qjSRUR00cP/wSPeEiRG_v?',
    fullDesc: 'Aplikasi tracking kesehatan ibu hamil dengan fitur jadwal konsultasi.'
  },
  {
    id: 8,
    title: 'Mengenal Fauna',
    desc: 'Website edukasi tentang hewan di Taman Safari Bogor',
    year: '2025',
    tech: ['HTML', 'CSS'],
    image: '/images/projects/fauna.png',
    github: 'https://github.com/ShesaDavinaP/mengenal-fauna',
    live: '#',
    fullDesc: 'Website edukasi interaktif yang mengenalkan berbagai fauna yang ada di Taman Safari Bogor.'
  },
  {
    id: 9,
    title: 'Kalkulator',
    desc: 'Kalkulator sederhana, aritmatika dan geometri',
    year: '2025',
    tech: ['HTML', 'CSS', 'Javascript'],
    image: '/images/projects/kalku.png',
    github: 'https://github.com/ShesaDavinaP/kalkulator-matematika',
    live: '#',
    fullDesc: 'Kalkulator multifungsi untuk perhitungan aritmatika dasar dan rumus geometri.'
  },
  {
    id: 10,
    title: 'Kalkulator Jejak Karbon',
    desc: 'Kalkulator yang menghitung konsumsi listrik dan peralatan listrik',
    year: '2025',
    tech: ['HTML', 'CSS', 'Javascript'],
    image: '/images/projects/karbon.png',
    github: 'https://github.com/ShesaDavina',
    live: '#',
    fullDesc: 'Aplikasi untuk menghitung jejak karbon berdasarkan konsumsi listrik rumah tangga.'
  },
];

export default function Projects({ isVisible }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const hasGithub = (project) => {
    return project.github && project.github !== '#' && !project.tech.includes('Figma');
  };

  const hasLive = (project) => {
    return project.live && project.live !== '#';
  };

  return (
    <>
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
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl border border-gray-100 cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                    {project.tech.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: '#e6f3ff', color: '#355872' }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#e6f3ff', color: '#355872' }}>
                        +{project.tech.length - 3}
                      </span>
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

      {/* Modal Detail Project */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto p-6 w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Project';
                  }}
                />
                {/* Tech Stack di modal */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tech.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: '#e6f3ff', color: '#355872' }}
                    >
                      <FaCode className="inline mr-1 text-xs" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaFolderOpen className="text-3xl" style={{ color: '#355872' }} />
                  <div>
                    <h2 className="text-2xl font-bold" style={{ color: '#355872' }}>
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm flex items-center gap-1" style={{ color: '#7AAACE' }}>
                      <FaCalendar className="text-xs" /> {selectedProject.year}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedProject.fullDesc || selectedProject.desc}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#355872' }}>
                    <FaInfoCircle /> Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: '#e6f3ff', color: '#355872' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {hasGithub(selectedProject) && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="flex-1 text-center py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                      style={{ backgroundColor: '#355872', color: 'white' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#7AAACE'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#355872'}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub Repository
                    </a>
                  )}

                  {hasLive(selectedProject) && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      className={`${!hasGithub(selectedProject) ? 'flex-1' : ''} text-center py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium`}
                      style={{
                        backgroundColor: hasGithub(selectedProject) ? '#f0f0f0' : '#355872',
                        color: hasGithub(selectedProject) ? '#355872' : 'white'
                      }}
                      onMouseEnter={(e) => {
                        if (hasGithub(selectedProject)) {
                          e.target.style.backgroundColor = '#e6f3ff';
                          e.target.style.color = '#7AAACE';
                        } else {
                          e.target.style.backgroundColor = '#7AAACE';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (hasGithub(selectedProject)) {
                          e.target.style.backgroundColor = '#f0f0f0';
                          e.target.style.color = '#355872';
                        } else {
                          e.target.style.backgroundColor = '#355872';
                        }
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> {selectedProject.tech.includes('Figma') ? 'View Design' : 'Live Demo'}
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full mt-4 py-3 rounded-xl transition-all duration-300 font-semibold"
                  style={{ backgroundColor: '#f0f0f0', color: '#355872' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#e6f3ff';
                    e.target.style.color = '#7AAACE';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f0f0f0';
                    e.target.style.color = '#355872';
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}