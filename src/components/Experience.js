import React, { useEffect } from 'react';
import { 
  FaBriefcase, FaCode, FaLaptopCode, 
  FaServer, FaDatabase, FaTools,
  FaCalendarAlt, FaMapMarkerAlt 
} from 'react-icons/fa';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb,
  SiPython, SiFlask, SiNumpy, SiThreedotjs,
  SiPlotly, SiLinux
} from 'react-icons/si';

const Experience = () => {
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

    document.querySelectorAll('.experience-item').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Project Intern",
      company: "Indian Institute of Technology Dharwad",
      period: "May 2024 - July 2024",
      location: "Dharwad, India",
      description: "Developed a web application for generating tool-paths for incremental forming processes. Implemented interactive 3D visualization using Three.js, performed numerical computations with NumPy, and created dynamic data visualizations using Plotly. Deployed the application on a Linux-based Virtual Machine.",
      icon: <FaLaptopCode />,
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Three.js", icon: <SiThreedotjs /> },
        { name: "Plotly", icon: <SiPlotly /> },
        { name: "Linux", icon: <SiLinux /> }
      ]
    },
    
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Professional Experience</h2>
        <p className="experience-subtitle">My journey so far</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-icon">
                {exp.icon}
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>

                <div className="experience-details">
                  <div className="experience-period">
                    <FaCalendarAlt /> {exp.period}
                  </div>
                  <div className="experience-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </div>
                </div>

                <p className="experience-description">
                  {exp.description}
                </p>

                <div className="experience-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-stack">
                    {exp.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="tech-item">
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
