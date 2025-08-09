"use client";

import Particles from "@/components/Particles/Particles";
import FadeUpAnimation from "../../components/Animation/FadeUpAnimation";
import SubHeader from "../../components/SubHeader";
function About() {
  // const [showCard, setShowCard] = useState(false);

  return (
    <>
      <main className="spacing text-black" id="about">
        <Particles />
        <div className="container">
          <SubHeader text="About Me" />

          <FadeUpAnimation duration={0.8}>
            <p>
              Hi, I’m Jet! I’m a software engineer from Quezon City,
              Philippines, and a fresh graduate with a degree in Information
              Technology. I love bringing ideas to life by building web
              applications that not only look great but also run smoothly under
              the hood. From designing sleek interfaces and crafting smooth user
              experiences to developing robust backend systems, I’m all about
              creating applications that are both fun and reliable.{" "}
              <span className="font-bold">Let’s create something awesome!</span>
            </p>
          </FadeUpAnimation>
        </div>
      </main>
    </>
  );
}

export default About;
