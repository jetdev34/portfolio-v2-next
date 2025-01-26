import React from "react";
import Hero from "./(main)/Hero";
import About from "./(main)/About";
import Skills from "./(main)/Skills";
import Projects from "./(main)/Projects";

function RootPage() {
  return (
    <main>
      <Hero />
      <div className="bg-secondary">
        <About />
        <Skills />
      </div>
      <Projects />
    </main>
  );
}

export default RootPage;
