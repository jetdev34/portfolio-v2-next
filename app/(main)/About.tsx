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
              Hi, I’m Jet! I’m a front-end developer from Quezon City,
              Philippines, and a fresh graduate with a degree in Information
              Technology. I love bringing ideas to life by building web
              applications that look great and are super easy to use. Whether
              it’s designing sleek interfaces or crafting smooth user
              experiences, I’m all about making things fun and engaging.{" "}
              <span className="font-bold">Let’s create something awesome!</span>
            </p>
          </FadeUpAnimation>
        </div>
      </main>
    </>
  );
}

export default About;
