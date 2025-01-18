import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Reachout from './components/Reachout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" className="home-section">
        <div className="home-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Full Stack Developer</p>
        </div>
      </section>
      
      <Info />
      <Skills />
      <Experience />
      <Projects />
      <Reachout />
    </div>
  );
}

export default App;
