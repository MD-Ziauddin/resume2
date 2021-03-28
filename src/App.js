import React from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Technical from "./components/Technical";
import "./sass/main.scss";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Education />
        <Technical />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
