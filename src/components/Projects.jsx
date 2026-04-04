import {
  FaLinkedin
} from "react-icons/fa";

export default function ProjectsComp() {
  const projects = [
    {
      title: 'Athletica',
      desc: 'Website booking kelas gym khusus wanita',
      image: '/src/assets/athletica.png'
    },
    {
      title: 'BookKu',
      desc: 'Website E-Commerce buku',
      image: '/src/assets/bookku.png'
    },
    {
      title: 'HearMeOut',
      desc: 'Design website aspirasi siswa',
      image: '/src/assets/hearmeout.png'
    },
    {
      title: 'NIKE E-Commerce',
      desc: 'Design UI/UX toko online sepatu NIKE',
      image: '/src/assets/nike.png'
    },
    {
      title: 'BuTi (Buah Hati)',
      desc: 'Design UI/UX aplikasi untuk Ibu',
      image: '/src/assets/buti.PNG'
    },
    {
      title: 'Mengenal Fauna',
      desc: 'Website untuk mengenal fauna di Taman Safari Bogor',
      image: '/src/assets/fauna.png'
    },
    {
      title: 'Kalkulator',
      desc: 'Website kalkulator sederhana, geometri dan aritmatika',
      image: '/src/assets/kalku.png'
    },
    {
      title: 'Kalkulator Emisi Karbon',
      desc: 'Website untuk menghitung emisi karbon',
      image: '/src/assets/karbon.png'
    },
    {
      title: 'Artikel 3R',
      desc: 'Project pertama saya membuat wbsite',
      image: '/src/assets/3r.png'
    },

  ];

  return (
    <section id="projects" className="py-10 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Certificates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See all my certificates and achievements
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/shesa-davina-putri/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 hover:-translate-y-2 transition-all duration-300 border border-blue-600/50 hover:border-blue-500/80"
          >
            <FaLinkedin className="text-2xl" />
            <span>View on LinkedIn</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}