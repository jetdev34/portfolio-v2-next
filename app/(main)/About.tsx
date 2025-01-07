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

          <FadeUpAnimation duration={0.8}>
            <p>
              Hi, I’m Jet! I’m a front-end developer from Quezon City,
              Philippines, with a degree in Information Technology. I love
              bringing ideas to life by building web application that look great
              and are super easy to use. Whether it’s designing sleek interfaces
              or crafting smooth user experiences, I’m all about making things
              fun and engaging. Let’s create something awesome!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus facere, impedit voluptatum minima maxime dolor ad
              aspernatur magnam velit obcaecati, molestias doloremque soluta
              ipsum illum, suscipit quisquam nisi architecto cumque? Illum
              tenetur ullam veniam quasi aut consequuntur cum consequatur! Iusto
              ea earum quas distinctio quam ipsa, eveniet, fugiat necessitatibus
              consequatur deserunt quis. Quibusdam eligendi quod officiis minus
              nulla dolore ut! Laboriosam reiciendis perferendis fugiat voluptas
              rerum fuga nostrum. Natus delectus, autem sapiente ipsam animi
              esse molestias, impedit eos, aliquam cum repellendus fugit sint
              repudiandae provident. Aspernatur, aperiam accusamus. Vero,
              voluptate.
            </p>
          </FadeUpAnimation>
        </div>
      </main>
    </>
  );
}

export default About;
