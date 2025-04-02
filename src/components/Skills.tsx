
import React from "react";

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  const softSkills = [
    { name: "Teamwork", icon: "👥" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Focus", icon: "🎯" },
    { name: "Communication", icon: "💬" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Time Management", icon: "⏱️" },
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-bg">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-portfolio-primary text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-icon group">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-gray-700 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-portfolio-primary text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-icon">
                <span className="text-4xl mb-3">{skill.icon}</span>
                <p className="text-gray-700 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
