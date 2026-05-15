import {
  FaLinkedin, FaGithub, FaInstagram, FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t py-16 px-6" style={{ backgroundColor: 'white', borderColor: '#e6f3ff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-black mb-4" style={{ color: '#355872' }}>
              Shesa Davina
            </h3>
            <p className="leading-relaxed" style={{ color: '#7AAACE' }}>
              Junior Fullstack Developer passionate about creating amazing digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6" style={{ color: '#355872' }}>Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="transition-colors duration-300"
                  style={{ color: '#7AAACE' }}
                  onMouseEnter={(e) => e.target.style.color = '#355872'}
                  onMouseLeave={(e) => e.target.style.color = '#7AAACE'}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="transition-colors duration-300"
                  style={{ color: '#7AAACE' }}
                  onMouseEnter={(e) => e.target.style.color = '#355872'}
                  onMouseLeave={(e) => e.target.style.color = '#7AAACE'}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition-colors duration-300"
                  style={{ color: '#7AAACE' }}
                  onMouseEnter={(e) => e.target.style.color = '#355872'}
                  onMouseLeave={(e) => e.target.style.color = '#7AAACE'}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="transition-colors duration-300"
                  style={{ color: '#7AAACE' }}
                  onMouseEnter={(e) => e.target.style.color = '#355872'}
                  onMouseLeave={(e) => e.target.style.color = '#7AAACE'}
                >
                  Certificates
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors duration-300"
                  style={{ color: '#7AAACE' }}
                  onMouseEnter={(e) => e.target.style.color = '#355872'}
                  onMouseLeave={(e) => e.target.style.color = '#7AAACE'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6" style={{ color: '#355872' }}>Social</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/shesa-davina-putri/"
                className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300"
                style={{ color: '#7AAACE' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e6f3ff';
                  e.target.style.color = '#355872';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#7AAACE';
                }}
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </a>
              <a
                href="https://github.com/ShesaDavina"
                className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300"
                style={{ color: '#7AAACE' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e6f3ff';
                  e.target.style.color = '#355872';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#7AAACE';
                }}
              >
                <FaGithub className="text-xl" /> GitHub
              </a>
              <a
                href="https://www.instagram.com/xchashesa/"
                className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300"
                style={{ color: '#7AAACE' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e6f3ff';
                  e.target.style.color = '#355872';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#7AAACE';
                }}
              >
                <FaInstagram className="text-xl" /> Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6" style={{ color: '#355872' }}>Contact</h4>
            <div className="space-y-2" style={{ color: '#7AAACE' }}>
              <p>shesadavinap03@gmail.com</p>
              <p>+62 857-7608-0121</p>
              <p>Indonesia</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm" style={{ borderTop: `1px solid #e6f3ff`, color: '#355872' }}>
          © 2026 Shesa Davina Putri.
        </div>
      </div>
    </footer>
  );
}