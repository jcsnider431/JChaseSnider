import React from 'react';
import NavBar from './components/header/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './css/App.css';

const App = () => {
  
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
