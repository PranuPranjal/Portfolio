import React, { useEffect } from 'react';
import {  FaLaptopCode, FaCalendarAlt, FaMapMarkerAlt, FaJenkins 
} from 'react-icons/fa';
import {  SiReact, SiNodedotjs, SiNginx,
  SiPython, SiFlask, SiNumpy, SiThreedotjs, SiSonarqube,
  SiPlotly, SiLinux, SiPostgresql, SiPassport, SiPrisma
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
      title: "SDE Intern",
      company: "Directorate General of Information Systems (Indian Army)",
      period: "June 2024 - August 2024",
      location: "New Delhi, India",
      description: "Developed a citation and appreciation filing application for Indian Army units. Built a user-friendly frontend using React and a robust backend with Node.js and Express. Integrated SAML for centralized authentication and unique SSD-ID for digital signature. Set up a CI/CD pipeline for deployment.",
      icon: <FaLaptopCode />,
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "Postgres", icon: <SiPostgresql /> },
        { name: "passport-saml", icon: <SiPassport /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Jenkins", icon: <FaJenkins /> },
        { name: "Sonarqube", icon: <SiSonarqube /> },
        { name: "Nginx", icon: <SiNginx /> }
      ]
    },
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
                  <h3 className="experience-role">{exp.title} | <a className='certificate' target='_blank' href='https://drive.google.com/drive/u/0/folders/1-nDwc80adOKzsB7Xm_JSwCGrVpRZmemD'>View-Certificate</a></h3>
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
