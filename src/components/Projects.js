import React, { useEffect } from 'react';
import { 
  FaGithub, FaExternalLinkAlt, FaReact, 
  FaNodeJs, FaDatabase, FaCode, FaAws, 
  FaDocker, FaPython
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiExpress, 
  SiFirebase, SiTypescript, 
  SiFlask,
  SiMysql,
  SiNgrok,
  SiOllama,
  SiPostgresql,
  SiKubernetes,
  SiWeb3Dotjs,
  SiThreedotjs,
  SiFastapi 
} from 'react-icons/si';
import ProHub from '../assets/ProjectHub.jpg';
import FinDash from '../assets/FinancialDashboard.jpg';
import place from '../assets/placement.jpeg';
import cad from '../assets/cad.jpg';

const Projects = () => {
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

    document.querySelectorAll('.project-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Project Hub",
      description: "Built a project management and collaboration platform for seamless teamwork, task tracking and feature to search for a collaborator.",
      image: ProHub,
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb />},
        { name: "NGROK", icon: <SiNgrok />},
        { name: "Docker", icon: <FaDocker />},
        { name: "Kubernetes", icon: <SiKubernetes />}
      ],
      links: {
        github: "https://github.com/mehul-kocheta/Project_Hub",
        // live: "https://project1.com"
      }
    },
    {
      title: "Financial Dashboard",
      description: "Develop a real-time dashboard to visualize financial data, including stock prices and economic indicators, providing actionable insights using various financial metrics.",
      image: FinDash,
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress />},
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "D3.js", icon: <SiWeb3Dotjs /> },
        { name: "Docker", icon: <FaDocker />},
        { name: "Kubernetes", icon: <SiKubernetes />}
        
      ],
      links: {
        github: "https://github.com/PranuPranjal/Financial-Dashboard",
        // live: "https://project2.com"
      }
    },
    {
      title: "Placemt Portal",
      description: " Developed a robust placement management portal handling large-scale student and recruiter data with features like resume parsing, job matching, and interview scheduling.",
      image: place,
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress />},
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Docker", icon: <FaDocker />},
        { name: "Kubernetes", icon: <SiKubernetes />},
        { name: "AWS Elastic Bean Stalk", icon: <FaAws />},
        { name: "AWS S3", icon: <FaAws />}
        
      ],
      links: {
        github: "https://github.com/PranuPranjal/placement-portal",
        // live: "https://project2.com"
      }
    },
    {
      title: "Text to CAD file Generator",
      description: "An AI-powered web application that converts textual descriptions into 3D CAD models, leveraging natural language processing and 3D rendering technologies to streamline the design process.",
      image: cad,
      technologies: [
        { name: "FastAPI", icon: <SiFastapi /> }, 
        { name: "React", icon: <FaReact /> },
        { name: "Three.js", icon: <SiThreedotjs /> },
        { name: "Open Cascade", icon: <FaPython/> },
        { name: "CodeGemma-7B", icon: <SiOllama /> },
        { name: "Python", icon: <FaPython /> },            
      ],
      links: {
        github: "https://github.com/PranuPranjal/cad-model-generator",
        // live: "https://project1.com"
      }
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">Some of my recent work</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-links">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                  {/* <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a> */}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <h4 className="tech-title">Technologies Used:</h4>
                  <div className="tech-list">
                    {project.technologies.map((tech, techIndex) => (
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

export default Projects;
