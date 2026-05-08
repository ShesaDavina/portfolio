import { useState, useEffect } from 'react';
import { FaUserGraduate, FaCode, FaCertificate, FaLaptopCode } from 'react-icons/fa';

export default function About({ isVisible }) {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    certificates: 0
  });

  // Animasi counter saat section terlihat
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 detik
      const stepTime = 20;
      const steps = duration / stepTime;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCounters({
          experience: Math.min(Math.floor((step / steps) * 2), 2),
          projects: Math.min(Math.floor((step / steps) * 9), 9),
          certificates: Math.min(Math.floor((step / steps) * 17), 17)
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="about" className={`py-24 px-6 fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#e6f3ff' }}>
            <FaUserGraduate style={{ color: '#355872' }} />
            <span className="text-sm font-semibold" style={{ color: '#355872' }}>Tentang Saya</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#355872' }}>
            Kenali Saya Lebih Dekat
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #355872, #7AAACE)' }}></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          {/* Right Side - Deskripsi */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hi! Saya <span className="font-bold" style={{ color: '#355872' }}>Shesa Davina Putri</span>.
              Saya siswi jurusan <span className="font-semibold" style={{ color: '#7AAACE' }}>PPLG (Pengembangan Perangkat Lunak dan Gim)</span>
              yang memiliki passion di dunia <span className="font-semibold" style={{ color: '#355872' }}>Web Development</span> dan
              <span className="font-semibold" style={{ color: '#355872' }}> UI/UX Design</span>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Saya suka mempelajari hal baru tentang teknologi dan gimana cara membuat tampilan website
              jadi <span className="italic">"hidup"</span>, menarik, dan interaktif. Setiap hari saya terus
              belajar dan mengasah skill untuk menciptakan digital experiences yang bermakna.
            </p>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl hover:scale-105 transition-transform" style={{ background: 'linear-gradient(135deg, #e6f3ff, #f0f8ff)' }}>
                <div className="text-3xl font-black mb-1" style={{ color: '#355872' }}>
                  {counters.experience}+
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                  <FaLaptopCode className="text-xs" style={{ color: '#7AAACE' }} />
                  <span>Tahun Pengalaman</span>
                </div>
              </div>

              <div className="text-center p-4 rounded-xl hover:scale-105 transition-transform" style={{ background: 'linear-gradient(135deg, #e6f3ff, #f0f8ff)' }}>
                <div className="text-3xl font-black mb-1" style={{ color: '#355872' }}>
                  {counters.projects}+
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                  <FaCode className="text-xs" style={{ color: '#7AAACE' }} />
                  <span>Projects</span>
                </div>
              </div>

              <div className="text-center p-4 rounded-xl hover:scale-105 transition-transform" style={{ background: 'linear-gradient(135deg, #e6f3ff, #f0f8ff)' }}>
                <div className="text-3xl font-black mb-1" style={{ color: '#355872' }}>
                  {counters.certificates}+
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                  <FaCertificate className="text-xs" style={{ color: '#7AAACE' }} />
                  <span>Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}