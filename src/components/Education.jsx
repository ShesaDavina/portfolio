export default function EducationComp() {
  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Pendidikan
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">SD Negeri Ciburial</h3>
          <p className="text-lg text-gray-600 mb-4">2015-2021</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto mt-3">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">SMP Negeri 2 Cisarua</h3>
          <p className="text-lg text-gray-600 mb-4">2021-2024</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto mt-3">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">SMK Wikrama Bogor</h3>
          <p className="text-xl text-blue-600 font-semibold mb-4">Pengembangan Perangkat Lunak & Gim</p>
          <p className="text-lg text-gray-600 mb-4">2024 - Sekarang</p>
        </div>
      </div>
    </section>
  );
}