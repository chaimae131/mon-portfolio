import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import { 
  FaCode, FaServer, FaDatabase, FaTools, FaCloud, FaPeopleCarry, 
  FaClock, FaBrain, FaBalanceScale, FaLinux, FaHtml5, FaPhp, FaDatabase as FaSql 
} from "react-icons/fa";
import { 
  SiJavascript, SiPython, SiReact, SiDjango, SiAnsible, SiVmware, SiVirtualbox,
  SiProxmox, SiTryhackme, SiLetsencrypt, SiWireshark, SiGnubash, SiKalilinux, SiHashicorp, SiCplusplus, SiSplunk
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaTrophy } from "react-icons/fa";


const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const skillItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };


  // Technical Skills Data

  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: <FaCode className="skill-category-icon" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, level: 80 },
        { name: "Shell scripting", icon: <SiGnubash />, level: 70 },
        { name: "Python", icon: <SiPython />, level: 85 },
        { name: "Java", icon: <DiJava />, level: 30 },
        { name: "C++", icon: <SiCplusplus />, level: 65 },
        { name: "C", icon: <FaCode />, level: 75 },
        { name: "HTML", icon: <FaHtml5 />, level: 95 },
        { name: "PHP", icon: <FaPhp />, level: 40 },
        { name: "SQL", icon: <FaSql />, level: 55 }
      ]
    },
    {
      category: "Platforms & Frameworks",
      icon: <FaServer className="skill-category-icon" />,
      skills: [
        { name: "React", icon: <SiReact />, level: 95 },
        { name: "Django", icon: <SiDjango />, level: 85 },
        { name: "VirtualBox", icon: <SiVirtualbox />, level: 85 },
        { name: "VMware", icon: <SiVmware />, level: 85 },
        { name: "ESXi", icon: <SiVmware />, level: 85 },
        { name: "Proxmox", icon: <SiProxmox />, level: 85 },
        { name: "TryHackMe", icon: <SiTryhackme />, level: 90 },
        { name: "LetsDefend", icon: <SiLetsencrypt />, level: 90 }
      ]
    },
    {
      category: "Tools and Software",
      icon: <FaTools className="skill-category-icon" />,
      skills: [
        { name: "Splunk", icon: <SiSplunk />, level: 80 },
        { name: "Ansible", icon: <SiAnsible />, level: 75 },
        { name: "Wireshark", icon: <SiWireshark />, level: 90 },
        { name: "Kali Linux", icon: <SiKalilinux />, level: 90 },
        { name: "Tsurugi Linux", icon: <FaLinux />, level: 90 }
      ]
    },
    {
      category: "Network Security",
      icon: <FaCloud className="skill-category-icon" />,
      skills: [
        { name: "GNS3", icon: <SiReact />, level: 95 },
        { name: "VLAN", icon: <FaServer />, level: 85 },
        { name: "DMZ", icon: <FaServer />, level: 85 },
        { name: "Firewall: pfSense & FortiGate", icon: <FaServer />, level: 85 },
        { name: "WAF: FortiWeb", icon: <FaServer />, level: 85 }
      ]
    },
    {
      category: "Cryptography Tools",
      icon: <FaDatabase className="skill-category-icon" />,
      skills: [
        { name: "OpenSSL", icon: <FaCode />, level: 95 },
        { name: "Hashing algorithms", icon: <SiHashicorp />, level: 85 },
        { name: "Public Key Infrastructure (PKI)", icon: <FaCode />, level: 85 },
        { name: "Digital Signatures", icon: <FaCode />, level: 85 },
        { name: "Encryption Algorithms", icon: <FaCode />, level: 85 }
      ]
    }
  ];

  // Soft Skills Data
  const softSkills = [
    { name: "Teamwork", icon: <FaPeopleCarry /> },
    { name: "Time Management", icon: <FaClock /> },
    { name: "Problem Solving", icon: <FaBrain /> },
    { name: "Adaptability", icon: <FaBalanceScale /> },
    { name: "Communication", icon: <FaPeopleCarry /> },
    { name: "Rigour", icon: <FaTrophy /> },
    { name: "Attention to Detail", icon: <FaBrain /> },
  ];

  return (
    <div className="skills-container">
      {/* Technical Skills Section */}
      <motion.section 
        className="skills-section"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="section-title">Technical Skills</h2>
        <p className="skill-disclaimer">
        Skill levels are based on self-assessment from hands-on projects and personal learning experiences.
      </p>
        <motion.div 
          className="technical-skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technicalSkills.map((category, index) => (
            <motion.div 
              key={`tech-${index}`}
              className="skill-category-card"
              variants={skillItemVariants}
              whileHover="hover"
            >
              <div className="skill-category-header">
                {category.icon}
                <h3>{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={`skill-${index}-${skillIndex}`}
                    className="skill-item"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <div className="skill-level-bar">
                        <motion.div 
                          className="skill-level-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {/* Séparateur ajouté ici */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Soft Skills Section */}
      <motion.section 
        className="skills-section soft-skills-section"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="section-title">Soft Skills</h2>
        
        <motion.div 
          className="soft-skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={`soft-${index}`}
              className="soft-skill-card"
              variants={skillItemVariants}
              whileHover="hover"
            >
              <div className="soft-skill-icon">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  {skill.icon}
                </motion.div>
              </div>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Skills;
