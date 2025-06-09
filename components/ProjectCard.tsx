"use client";

import Image from "next/image";
import { useState } from "react";
import TagStacks from "./TagStacks";
import Button from "./Button";
import Link from "next/link";

interface Props {
  title: string;
  stacks: string[];
  subtitle: string;
  contribution: string;
  role: string;
  collaborators: string[];
  duration: string;
  description: string;
  flip: string;
  demo_link: string;
  code_link: string;
  image_url: string;
  details_link: string;
}

function ProjectCard({
  title,
  stacks,
  description,
  flip,
  demo_link,
  code_link,
  image_url,
  details_link,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const flexClasses = `flex flex-col md:flex-row ${
    flip === "flex-row-reverse" ? "md:flex-row-reverse" : ""
  }`;

  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <div className={`${flexClasses} py-4 gap-12 `}>
      <div className="w-[100%] lg:w-[49%] hover:opacity-80">
        {/* <Link href={`/${details_link}`} rel="noopener noreferrer"> */}
        <Image src={image_url} alt={title} width={600} height={420} />
        {/* </Link> */}
      </div>
      <div className="w-[100%] lg:w-[49%] flex flex-col gap-4 ">
        {/* <Link href={`/${details_link}`}> */}
        <h2 className="text-4xl hover:opacity-80">{title}</h2>
        {/* </Link> */}
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
          {demo_link && (
            <Button
              rel="noopener noreferrer"
              target="_blank"
              text="View Project"
              icon="link"
              href={demo_link}
            />
          )}
          {code_link && (
            <Button
              rel="noopener noreferrer"
              target="_blank"
              text="View Code"
              icon="github"
              href={code_link}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
