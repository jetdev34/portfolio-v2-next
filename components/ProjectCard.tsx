import Image from "next/image";
import React from "react";
import TagStacks from "./TagStacks";
import Button from "./Button";

interface Props {
  title: string;
  stacks: string[];
  description: string;
  flip: string;
  demo_link: string;
  code_link: string;
}

function ProjectCard({
  title,
  stacks,
  description,
  flip,
  demo_link,
  code_link,
}: Props) {
  const flexClasses = `flex flex-col md:flex-row ${
    flip === "flex-row-reverse" ? "md:flex-row-reverse" : ""
  }`;

  return (
    <div className={`${flexClasses} py-4 gap-12`}>
      <div className="w-[100%] lg:w-[49%]">
        <Image src="/trackpaws.png" alt={title} width={600} height={200} />
      </div>
      <div className="w-[100%] lg:w-[49%] flex flex-col gap-4 font-silk">
        <h2 className="text-4xl">{title}</h2>
        <ul className="flex gap-2">
          {stacks.map((stack) => (
            <li key={stack}>
              <TagStacks text={stack} />
            </li>
          ))}
        </ul>
        <p>{description}</p>

        <div className="flex gap-4">
          <Button
            rel="noopener noreferrer"
            target="_blank"
            text="View Project"
            icon="link"
            href={demo_link}
          />
          <Button
            rel="noopener noreferrer"
            target="_blank"
            text="View Code"
            icon="github"
            href={code_link}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
