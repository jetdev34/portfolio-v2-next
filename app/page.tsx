import React from "react";
// import NavBar from "./(main)/NavBar";
import NavBar from "./(main)/NavBar";
import Hero from "./(main)/Hero";
import About from "./(main)/About";
import Skills from "./(main)/Skills";
import Projects from "./(main)/Projects";
import Footer from "./(main)/Footer";

function RootPage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <div className="bg-secondary">
        <About />
        <Skills />
      </div>
      <Projects />
      <Footer />
    </main>
  );
}

export default RootPage;
