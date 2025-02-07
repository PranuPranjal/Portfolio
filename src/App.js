import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Reachout from './components/Reachout';

function App() {
  const slideFromLeft = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideFromRight = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const dropFromTop = {
    initial: {
      opacity: 0,
      y: -100,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const popUp = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const fadeRotate = {
    initial: {
      opacity: 0,
      rotate: -10,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const expandIn = {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <Navbar />
      
      {/* Drop from top animation for home section */}
      <motion.section
        id="home"
        className="home-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeRotate}
        style={{ margin: '10px 0', willChange: 'opacity, transform' }}
      >
        <div className="home-content">
          <TypeAnimation
            sequence={[
              'W', 100,
              'We', 100,
              'Wel', 100,
              'Welc', 100,
              'Welco', 100,
              'Welcom', 100,
              'Welcome', 100,
              'Welcome t', 100,
              'Welcome to', 100,
              'Welcome to m', 100,
              'Welcome to my', 100,
              'Welcome to my P', 100,
              'Welcome to my Po', 100,
              'Welcome to my Por', 100,
              'Welcome to my Port', 100,
              'Welcome to my Portf', 100,
              'Welcome to my Portfo', 100,
              'Welcome to my Portfol', 100,
              'Welcome to my Portfoli', 100,
              'Welcome to my Portfolio', 1000,
            ]}
            wrapper="h1"
            speed={100}
            style={{ 
              fontSize: '3em',
              display: 'inline-block',
              background: 'linear-gradient(45deg, #64ffda, #48cead)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            repeat={20}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 1 }}
            style={{ 
              fontSize: '1.5em',
              marginTop: '20px',
              color: '#8892b0'
            }}
          >
            Pranu Pranjal | Full Stack Developer
          </motion.p>
        </div>
      </motion.section>
      
      {/* Slide from left animation for Info section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        variants={slideFromLeft}
        style={{ margin: '10px 0', willChange: 'opacity, transform' }}
      >
        <Info />
      </motion.section>

      {/* Slide from right animation for Skills section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        variants={slideFromRight}
        style={{ margin: '10px 0', willChange: 'opacity, transform' }}
      >
        <Skills />
      </motion.section>

      {/* Pop up animation for Experience section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeRotate}
        style={{ margin: '10px 0', willChange: 'opacity, transform' }}
      >
        <Experience />
      </motion.section>

      {/* Fade and rotate animation for Projects section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeRotate}
        style={{ margin: '10px 0', willChange: 'opacity, transform' }}
      >
        <Projects />
      </motion.section>

      {/* Expand in animation for Contact section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeRotate}
        style={{ margin: '10px 0', willChange: 'opacity, transform' }}
      >
        <Reachout />
      </motion.section>
    </div>
  );
}

export default App;
