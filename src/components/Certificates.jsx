import { useState } from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
    {
        title: "Full-Stack Developer",
        issuer: "Coding Camp powered by DBS Foundation",
        date: "2026",
        image: "/images/certificates/fs.png",
        description: "Successfully completing Coding Camp 2026 powered by DBS Foundation, specializing in Full-Stack Web Developer",
    },
    {
        title: "Mastering Your Digital Presence: A Guide to Strong Professional Branding",
        issuer: "Coding Camp powered by DBS Foundation",
        date: "2026",
        image: "/images/certificates/dbswk.png",
        description: "Coding Camp Workshop at SMK Wikrama Bogor",
    },
    {
        title: "Build with AI",
        issuer: "GDG Bogor",
        date: "2026",
        image: "/images/certificates/gdg2026.png",
        description: "Mobile and Web Session",
    },
    {
        title: "Back-End with JavaScript",
        issuer: "Dicoding",
        date: "2026",
        image: "/images/certificates/be-js.png",
        description: "Belajar Back-End Pemula dengan JavaScript",
    },
    {
        title: "React.JS",
        issuer: "Dicoding",
        date: "2026",
        image: "/images/certificates/react.png",
        description: "Belajar Membuat Aplikasi Web dengan React",
    },
    {
        title: "Front-End Web",
        issuer: "Dicoding",
        date: "2026",
        image: "/images/certificates/fe-web.png",
        description: "Belajar Membuat Front-End Web untuk Pemula",
    },
    {
        title: "Cloud & Gen AI",
        issuer: "Dicoding",
        date: "2026",
        image: "/images/certificates/cloud.png",
        description: "Belajar Dasar Cloud dan Gen AI di AWS",
    },
    {
        title: "Programming Logic 101",
        issuer: "Dicoding",
        date: "2026",
        image: "/images/certificates/logic.png",
        description: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    },
    {
        title: "Software Developer",
        issuer: "Dicoding",
        date: "2026",
        image: "/images/certificates/software.png",
        description: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    },
    {
        title: "DevFest Bogor 2025",
        issuer: "GDG Bogor",
        date: "2025",
        image: "/images/certificates/gdg2025.png",
        description: "Safer, Smarter, and Scalable with Cloud and Al",
    },
    {
        title: "Python",
        issuer: "Dicoding",
        date: "2025",
        image: "/images/certificates/python.png",
        description: "Memulai Pemrograman dengan Python",
    },
    {
        title: "AI Basics",
        issuer: "Dicoding",
        date: "2025",
        image: "/images/certificates/ai.png",
        description: "Belajar Dasar AI",
    },
    {
        title: "Wordpress Introduction",
        issuer: "MySkill",
        date: "2025",
        image: "/images/certificates/wordpress.png",
        description: "Belajar Wordpress",
    },
    {
        title: "Programming Concepts",
        issuer: "Komdigi",
        date: "2025",
        image: "/images/certificates/dev.png",
        description: "Pelatihan Konsep Pemrograman",
    },
    {
        title: "Career Guidance For Aspiring Game Developer",
        issuer: "Komdigi",
        date: "2025",
        image: "/images/certificates/igdx.png",
        description: "Seminar “Career Guidance For Aspiring Game Developer”",
    },
    {
        title: "JavaScript",
        issuer: "Dicoding",
        date: "2025",
        image: "/images/certificates/js.png",
        description: "Belajar Dasar Pemrograman JavaScript",
    },
    {
        title: "Keselamatan dan Kesehatan Kerja",
        issuer: "Dicoding",
        date: "2024",
        image: "/images/certificates/3k.png",
        description: "e-learning 'Keselamatan dan Kesehatan Kerja'",
    },
    {
        title: "Web",
        issuer: "Dicoding",
        date: "2024",
        image: "/images/certificates/3k.png",
        description: "Belajar Dasar Pemrograman Web'",
    },
    {
        title: "Cyber Security and Soft Skill",
        issuer: "Telkom Indonesia",
        date: "2024",
        image: "/images/certificates/cyber.png",
        description: "Introduction to Cyber Security and Soft Skill in The Digital Era",
    },
];

export default function Certificates({ isVisible }) {
    const [selectedCert, setSelectedCert] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const visibleCerts = showAll ? certificates : certificates.slice(0, 3);

    return (
        <>
            <section
                id="certificates"
                className={`py-24 px-6 fade-in ${isVisible ? "visible" : ""}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#e6f3ff' }}>
                            <FaCertificate style={{ color: '#355872' }} />
                            <span className="text-sm font-semibold" style={{ color: '#355872' }}>My Achievements</span>
                        </div>
                        <h2
                            className="text-5xl font-black mb-4"
                            style={{ color: "#355872" }}
                        >
                            Certificates
                        </h2>
                        <p className="text-xl" style={{ color: "#7AAACE" }}>
                            Pencapaian & Sertifikasi saya
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleCerts.map((cert) => (
                            <div
                                key={cert.id}
                                className="bg-white/80 backdrop-blur-sm group cursor-pointer overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl border border-gray-100"
                                onClick={() => setSelectedCert(cert)}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src =
                                                "https://via.placeholder.com/400x250?text=Certificate";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaCertificate
                                            className="text-2xl"
                                            style={{ color: "#355872" }}
                                        />
                                        <h3
                                            className="text-xl font-bold"
                                            style={{ color: "#355872" }}
                                        >
                                            {cert.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm mb-2" style={{ color: "#7AAACE" }}>
                                        {cert.issuer} • {cert.date}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {certificates.length > 3 && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                                style={{
                                    backgroundColor: "white",
                                    color: "#355872",
                                    border: "2px solid #7AAACE",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#355872";
                                    e.target.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "white";
                                    e.target.style.color = "#355872";
                                }}
                            >
                                {showAll
                                    ? "Show Less"
                                    : `View All (${certificates.length} Certificates)`}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal Detail */}
            {selectedCert && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto p-6 w-full max-w-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="grid lg:grid-cols-2 gap-6 items-start">
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="w-full h-64 object-cover rounded-xl shadow-lg"
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/400x300?text=Certificate";
                                }}
                            />
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FaCertificate
                                        className="text-3xl"
                                        style={{ color: "#355872" }}
                                    />
                                    <div>
                                        <h2
                                            className="text-2xl font-bold"
                                            style={{ color: "#355872" }}
                                        >
                                            {selectedCert.title}
                                        </h2>
                                        <p className="text-sm" style={{ color: "#7AAACE" }}>
                                            {selectedCert.issuer} • {selectedCert.date}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {selectedCert.description}
                                </p>
                                <div className="flex gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/shesa-davina-putri/details/certifications/"
                                        target="_blank"
                                        className="flex-1 text-center py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                                        style={{ backgroundColor: "#355872", color: "white" }}
                                        onMouseEnter={(e) =>
                                            (e.target.style.backgroundColor = "#7AAACE")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.backgroundColor = "#355872")
                                        }
                                    >
                                        <FaExternalLinkAlt /> View Certificate
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="px-6 py-3 rounded-xl transition-all duration-300 font-semibold"
                                        style={{ backgroundColor: "#f0f0f0", color: "#355872" }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#e6f3ff";
                                            e.target.style.color = "#7AAACE";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "#f0f0f0";
                                            e.target.style.color = "#355872";
                                        }}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
