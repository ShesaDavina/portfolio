import { FaSchool } from "react-icons/fa";

export default function Education({ isVisible }) {
  const educationData = [
    {
      year: '2024 - Present',
      title: 'SMK Wikrama Bogor',
      major: 'PPLG (Pengembangan Perangkat Lunak dan Gim)',
      desc: 'Mempelajari pengembangan web, mobile, dan UI/UX design. Aktif dalam project-based learning.',
      side: 'left'
    },
    {
      year: '2021 - 2024',
      title: 'SMPN 2 Cisarua',
      major: '-',
      desc: 'Aktif dalam organisasi sekolah dan pengembangan soft skill.',
      side: 'right'
    }
  ];

  return (
    <section id="education" className={`py-24 px-6 fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#e6f3ff' }}>
            <FaSchool style={{ color: '#355872' }} />
            <span className="text-sm font-semibold" style={{ color: '#355872' }}>Education</span>
          </div>
          <h2 className="text-5xl font-black mb-4" style={{ color: '#355872' }}>Perjalanan akademik saya</h2>
        </div>

        <div className="relative">
          {/* Garis tengah vertikal - pakai warna palet */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block" style={{ background: 'linear-gradient(180deg, #355872, #7AAACE, #9CD5FF)' }}></div>

          <div className="space-y-12">
            {educationData.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row ${item.side === 'right' ? 'md:flex-row-reverse' : ''} items-center gap-6 md:gap-12 relative`}>
                {/* Card */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl w-full md:w-5/12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: '#355872' }}>{item.title}</h3>
                      <p className="text-sm font-medium" style={{ color: '#7AAACE' }}>{item.year}</p>
                    </div>
                  </div>
                  {item.major !== '-' && (
                    <p className="text-sm font-semibold mb-2" style={{ color: '#355872' }}>{item.major}</p>
                  )}
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>

                {/* Dot pada garis tengah - pakai warna palet */}
                <div className="hidden md:block w-5 h-5 rounded-full border-4 border-white shadow-md z-10" style={{ backgroundColor: '#355872' }}></div>
                <div className="md:hidden w-3 h-3 rounded-full" style={{ backgroundColor: '#7AAACE' }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}