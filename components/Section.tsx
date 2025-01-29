import React from "react";
import SectionCard from "./SectionCard";

interface SectionProps {
  sections: {
    sectionOne: { title: string; description: string; image_url: string };
    sectionTwo: { title: string; description: string; image_url: string };
    sectionThree: { title: string; description: string; image_url: string };
  };
}

function Section({ sections }: SectionProps) {
  return (
    <section>
      <div className="container-sm spacing-sm">
        {/* Use map here to render each section dynamically */}
        {Object.entries(sections).map(([key, section], index) => (
          <SectionCard
            key={key}
            // key={index}
            title={section.title}
            description={section.description}
            image_url={section.image_url}
            flip={index % 2 === 0 ? "flex-row" : "flex-row-reverse"} // Optional: alternate the layout
          />
        ))}
      </div>
    </section>
  );
}

export default Section;
