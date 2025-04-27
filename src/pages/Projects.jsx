import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import projectsData from "./projectsData";
import certificatesData from "./certificatesData";

const Projects = () => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <div className="portfolio-container">
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="section-title"
        >
          My Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div 
                className="project-image-container"
                variants={imageHoverVariants}
              >
                <img
                  src={project.images[0]}
                  alt={`Project ${project.title}`}
                  className="project-image"
                />
                <a
                  href={project.link || "#"}
                  className="view-details"
                >
                  View Details
                </a>
              </motion.div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Séparateur ajouté ici */}
      <motion.div
        className="section-divider"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "80%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="divider-line"></div>
      </motion.div>

      {/* Soft certifications Section */}
      

      <section id="certificates" className="certificates-section">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="section-title"
        >
          My Certificates
        </motion.h2>
        
        <div className="certificates-grid">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={`certificate-${index}`}
              className="certificate-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div 
                className="certificate-image-container"
                variants={imageHoverVariants}
              >
                <img
                  src={certificate.image}
                  alt={`Certificate ${certificate.title}`}
                  className="certificate-image"
                />
              </motion.div>
              <div className="certificate-info">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="project-description">{certificate.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
