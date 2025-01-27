import React from "react";
import SectionCard from "./SectionCard";

function Section() {
  return (
    <section>
      <div className="container-sm spacing-sm">
        <SectionCard />
        <SectionCard flip="flex-row-reverse" />
        <SectionCard />
        <SectionCard flip="flex-row-reverse" />
      </div>
    </section>
  );
}

export default Section;
