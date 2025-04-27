import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from './projectsData';
import { motion } from 'framer-motion';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) return <div className="not-found">Project not found</div>;

  return (
    <div className="project-detail">

      {/* Bouton retour */}
      <Link to="/Projects" className="back-button">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ← Back to Projects
        </motion.div>
      </Link>

      {/* Titre du projet */}
      <motion.p 
        className="project-title"
        style={{ color: '#1a237e' }} 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {project.title}
      </motion.p>

      {/* Description */}
      <motion.p 
        className="project-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {project.description}
      </motion.p>

      {/* Sections */}
      {project.sections && project.sections.map((section, index) => (
        <motion.div
          key={index}
          className={`project-section ${index % 2 === 0 ? 'left' : 'right'}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={section.image} alt={`Section ${index}`} />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {section.text}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectDetail;
