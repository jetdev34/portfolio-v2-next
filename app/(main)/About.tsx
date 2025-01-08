"use client";

import Particles from "@/components/Particles/Particles";
import FadeUpAnimation from "../../components/Animation/FadeUpAnimation";
import SubHeader from "../../components/SubHeader";
function About() {
  // const [showCard, setShowCard] = useState(false);

  return (
    <>
      <main className="spacing" id="about">
        <Particles />
        <div className="container">
          <SubHeader text="About Me" />

          <FadeUpAnimation className="font-silk" duration={0.8}>
            <p>
              Hi, I’m Jet! I’m a front-end developer from Quezon City,
              Philippines, with a degree in Information Technology. I love
              bringing ideas to life by building web application that look great
              and are super easy to use. Whether it’s designing sleek interfaces
              or crafting smooth user experiences, I’m all about making things
              fun and engaging. Let’s create something awesome!
            </p>
          </FadeUpAnimation>
        </div>
      </main>
    </>
  );
}

export default About;
