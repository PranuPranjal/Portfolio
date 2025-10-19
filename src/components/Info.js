import React, { useEffect } from 'react';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaUserGraduate,
  FaUniversity, FaCode
} from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import Pic from '../assets/Profile.jpg';
import CV from '../assets/Pranu_CV.pdf';

const Info = () => {
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

    document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="info" className="info-section">
      <div className="info-container">
        <div className="info-left animate">
          <div className="profile-image-container">
            <img 
              src={Pic} 
              alt="Pranu Pranjal"
              className="profile-image"
            />
            <div className="profile-image-overlay">
              <span>Full Stack Developer | DevOps Engineer</span>
            </div>
          </div>
          <div className="quick-info">
            {/* <div className="quick-info-item">
              <FaMapMarkerAlt className="quick-info-icon" />
              <span></span>
            </div> */}
            
            <div className="education-info">
              <div className="education-item">
                <FaUserGraduate className="quick-info-icon" />
                <div className="education-details">
                  <span className="degree">B.Tech</span>
                  <span className="year">2022 - 2026</span>
                </div>
              </div>
              
              <div className="education-item">
                <FaUniversity className="quick-info-icon" />
                <div className="education-details">
                  <span className="college">National Institute of Technology Andhra Pradesh</span>
                </div>
              </div>

              <div className="education-item">
                <IoSettings className="quick-info-icon" />
                <div className="education-details">
                  <span className="major">Major: Mechanical Engineering</span>
                </div>
              </div>

              <div className="education-item">
                <FaCode className="quick-info-icon" />
                <div className="education-details">
                  <span className="minor">Minor: Software Engineering</span>
                </div>
              </div>
            </div>

            <a href={CV} target='_blank' className="download-cv">
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        <div className="info-right">
          <div className="info-header animate">
            <h2 className="info-name">Pranu Pranjal</h2>
            <p className="info-title">Full Stack Developer</p>
          </div>
          
          <div className="info-details animate">
            <div className="contact-grid">
              <div className="info-item">
                <a href="tel:+91 9065148555" className="contact-link">
                  <div className="icon-box">
                    <FaPhone className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 9065148555</span>
                  </div>
                </a>
              </div>
              
              <div className="info-item">
                <a href="mailto:pranupranjal850@gmail.com" className="contact-link">
                  <div className="icon-box">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">pranupranjal850@gmail.com</span>
                  </div>
                </a>
              </div>
              
              <div className="info-item">
                <a href="https://github.com/PranuPranjal" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="icon-box">
                    <FaGithub className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">github.com/PranuPranjal</span>
                  </div>
                </a>
              </div>
              
              <div className="info-item">
                <a href="https://www.linkedin.com/in/pranu-pranjal-646505264/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="icon-box">
                    <FaLinkedin className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">linkedin.com/in/PranuPranjal</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="info-bio animate">
            <h3>About Me</h3>
            <p>
              I am a passionate Full Stack Developer with expertise in modern web technologies.
              I love creating efficient, scalable, and user-friendly solutions to complex problems.
              With a strong foundation in both front-end and back-end development, I strive to
              deliver high-quality applications that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
