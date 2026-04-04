export default function SkillsComp() {
  const skills = [
    { name: 'React JS', level: 80 },
    { name: 'Laravel', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'PHP', level: 70 },
    { name: 'Phyton', level: 30 },
    { name: 'Figma', level: 60 },
    { name: 'Git/GitHub', level: 40 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="font-bold text-gray-900">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}