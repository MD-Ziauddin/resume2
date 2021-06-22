import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Technical from './components/Technical';
import './sass/main.scss';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Education />
        <Technical />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;
