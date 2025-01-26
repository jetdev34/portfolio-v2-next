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
      <div className="container-sm spacing-sm md:flex items-center gap-4 justify-center ">
        {/* Column 1 */}
        <aside className="leading-none mb-6 w-[60%] ">
          <h2>{title}</h2>
          <span className="accent">{subtitle}</span>
        </aside>

        {/* Column 2 */}
        <article>
          <span className="accent">Description</span>
          <p>{description}</p>
        </article>

        {/* Column 3 */}
        <article>
          <span className="accent">Contribution</span>
          <p>{contribution}</p>
        </article>
      </div>
    </section>
  );
}

export default InformationDetails;
