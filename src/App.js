import React from 'react';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLinks />
  </div>;
};

export default App;
