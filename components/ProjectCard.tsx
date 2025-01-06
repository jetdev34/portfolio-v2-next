import Image from "next/image";
import React from "react";
import TagStacks from "./TagStacks";

interface Props {
  title: string;
  stacks: string[];
  description: string;
  image_url: string;
}

function ProjectCard({ title, stacks, description, image_url }: Props) {
  return (
    <div className="flex justify-between py-4">
      <div className="w-[54%]">
        <Image src={image_url} alt={title} width={300} height={300} />
      </div>
      <div className="w-[45%] font-silk space-y-4">
        <h2 className="text-4xl">{title}</h2>
        <ul className="flex gap-2">
          {stacks.map((stack) => (
            <li key={stack}>
              <TagStacks text={stack} />
            </li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
