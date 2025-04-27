import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="home-wrapper">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles"
        options={{
          fullScreen: { enable: false, zIndex: -1 },
          background: { color: { value: "#0a192f" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              }
            }
          },
          particles: {
            number: { 
              value: 80,
              density: { 
                enable: true, 
                area: 800 
              } 
            },
            color: { 
              value: ["#00bcd4", "#ff2d75", "#4CAF50"] 
            },
            shape: {
              type: ["circle", "triangle", "star"]
            },
            size: { 
              value: { min: 1, max: 5 },
              random: true
            },
            move: { 
              enable: true, 
              speed: { min: 0.5, max: 2 },
              direction: "none",
              outModes: "out" 
            },
            opacity: { 
              value: { min: 0.1, max: 0.5 },
              animation: {
                enable: true,
                speed: 1
              }
            },
            links: { 
              enable: true, 
              color: "#555",
              distance: 150,
              opacity: 0.4,
              width: 1 
            }
          },
          detectRetina: true
        }}
      />
      
      <div className="home-container">
        <motion.div 
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <span className="name">Chaima BISSI</span>
            <motion.span 
              className="cursor"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >|</motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="subtitle"
          >
            Engineering Student in Cyber Defense & Embedded Telecommunications Systems
          </motion.p>
          
          <motion.div
            className="cyber-line"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          />
          
        </motion.div>
      </div>
    </div>
  );
}

export default Home;