import React from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  contribution: string;
}

function InformationDetails({
  title,
  subtitle,
  description,
  contribution,
}: Props) {
  return (
    <section>
      <div className="container-sm spacing-sm md:flex  gap-4 justify-center ">
        {/* Column 1 */}
        <aside className="leading-snug mb-6 md:w-[23%] ">
          <h2>{title}</h2>
          <span className="accent">{subtitle}</span>
        </aside>

        {/* Column 2 */}
        <article className="md:w-[43%]">
          <span className="accent">Description</span>
          <p>{description}</p>
        </article>

        {/* Column 3 */}
        <article className="md:w-[43%]">
          <span className="accent">Contribution</span>
          <p>{contribution}</p>
        </article>
      </div>
    </section>
  );
}

export default InformationDetails;
