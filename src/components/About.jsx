export default function AboutComp() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Tentang Saya
        </h2>
        <div className="text-lg text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
          <p className="mb-8">
            Hi! Saya Shesa Davina Putri.
            Saya siswi jurusan PPLG (Pengembangan Perangkat Lunak dan Gim) yang tertarik di dunia Web Development dan UI/UX Design.
            Saya suka mempelajari hal baru tentang teknologi dan gimana cara membuat tampilan website jadi menarik dan interaktif
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">2+</h3>
              <p>Tahun Pengalaman</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">9+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">14+</h3>
              <p>Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}