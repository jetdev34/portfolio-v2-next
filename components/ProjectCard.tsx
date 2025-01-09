"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);

  const flexClasses = `flex flex-col md:flex-row ${
    flip === "flex-row-reverse" ? "md:flex-row-reverse" : ""
  }`;

  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <div className={`${flexClasses} py-4 gap-12 `}>
      <div className="w-[100%] lg:w-[49%]">
        <Image src="/trackpaws.png" alt={title} width={600} height={420} />
      </div>
      <div className="w-[100%] lg:w-[49%] flex flex-col gap-4 ">
        <h2 className="text-4xl">{title}</h2>
        <ul className="flex flex-row gap-2">
          {stacks.map((stack) => (
            <li key={stack}>
              <TagStacks text={stack} />
            </li>
          ))}
        </ul>
        <p>
          {isExpanded ? description : `${description.slice(0, 280)}...`}
          <button
            onClick={toggleDescription}
            className="text-blue-500 underline ml-2"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </p>

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
