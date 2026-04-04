import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaEnvelope,
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function FooterComp() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/shesa-davina-putri/',
      color: 'text-blue-700 hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/ShesaDavina',
      color: 'text-gray-800 hover:text-gray-700'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/xchashesa',
      color: 'text-pink-600 hover:text-pink-500'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:shesadavinap03@email.com',
      color: 'text-red-500 hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shesa Davina Putri
            </h3>
            <div className="flex items-center gap-3 text-xl mb-6">
              <FaMapMarkerAlt className="text-red-400" />
              <span>Indonesia</span>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Follow Me</h4>
            <div className="space-y-3">
              {socialLinks.map(({ name, icon: Icon, url, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all group ${color}`}
                >
                  <Icon className="text-xl group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Shesa Davina Putri.
          </p>
          <div className="flex gap-6">
            {socialLinks.map(({ name, icon: Icon, url, color }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110 shadow-lg ${color}`}
                aria-label={`Visit ${name}`}
              >
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}