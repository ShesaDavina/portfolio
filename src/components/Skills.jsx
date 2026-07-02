import { FaCode } from "react-icons/fa";

const programmingSkills = [
  { name: 'HTML', icon: '/images/skills/html.png' },
  { name: 'CSS', icon: '/images/skills/css.png' },
  { name: 'Laravel', icon: '/images/skills/laravel.png' },
  { name: 'JavaScript', icon: '/images/skills/js.png' },
  { name: 'React', icon: '/images/skills/react.png' },
  { name: 'PHP', icon: '/images/skills/php.png' },
  { name: 'Bootstrap', icon: '/images/skills/bs.png' },
  { name: 'Tailwind CSS', icon: '/images/skills/tl.png' },
  { name: 'Flutter', icon: '/images/skills/flutter.png' },
  { name: 'Express.js', icon: '/images/skills/exp.png' },
];

const toolsFrameworks = [
  { name: 'Figma', icon: '/images/skills/figma.png' },
  { name: 'Git', icon: '/images/skills/git.png' },
  { name: 'GitHub', icon: '/images/skills/github.png' },
  { name: 'Postman', icon: '/images/skills/postman.png' },
  { name: 'MySQL', icon: '/images/skills/mysql.png' },
  { name: 'PostgreSQL', icon: '/images/skills/psgre.png' },
];

export default function Skills({ isVisible }) {
  return (
    <section id="skills" className={`py-24 px-6 fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#e6f3ff' }}>
            <FaCode style={{ color: '#355872' }} />
            <span className="text-sm font-semibold" style={{ color: '#355872' }}>My Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: '#355872' }}>Skills & Technologies</h2>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#7AAACE' }}>Programming & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {programmingSkills.map((skill, idx) => (
              <div
                key={idx}
                className="relative w-24 h-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center border border-gray-100 group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-1 group-hover:scale-110 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#7AAACE' }}>Tools & Libraries</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {toolsFrameworks.map((skill, idx) => (
              <div
                key={idx}
                className="relative w-24 h-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center border border-gray-100 group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-1 group-hover:scale-110 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}