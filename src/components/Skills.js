import React, { useEffect } from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt,
  FaPython, FaJsSquare, FaBootstrap, FaDocker, FaJava,
  FaLinux, FaGithub, FaCode, FaDatabase, FaTools,
  FaLaptopCode
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiExpress, SiTailwindcss,
  SiPostgresql, SiRedux, SiCplusplus,
  SiKubernetes, SiAmazonwebservices, SiAnaconda, SiNumpy,
  SiPandas, SiFlask, SiThreedotjs
} from 'react-icons/si';
import { DiCode } from 'react-icons/di';

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.skill-category').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "Web Development", icon: <FaLaptopCode /> },
        { name: "DevOps", icon: <FaTools /> },
        { name: "DSA", icon: <DiCode /> },
        { name: "OOPS", icon: <FaCode /> }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Python", icon: <FaPython /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Three.js", icon: <SiThreedotjs /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Bootstrap", icon: <FaBootstrap /> }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "AWS", icon: <SiAmazonwebservices /> }
      ]
    },
    {
      title: "Data Science Tools",
      skills: [
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Anaconda", icon: <SiAnaconda /> }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Linux", icon: <FaLinux /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">Technologies I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
