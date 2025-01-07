import Image from "next/image";
import React from "react";
import TagStacks from "./TagStacks";
import Button from "./Button";

interface Props {
  title: string;
  stacks: string[];
  description: string;
}
// image_url: string;
// image_url
function ProjectCard({ title, stacks, description }: Props) {
  return (
    <div className="flex justify-between py-4 gap-12">
      <div className="w-[54%]">
        <Image src="/trackpaws.png" alt={title} width={600} height={50} />
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

        <div className="flex gap-4">
          <Button text="View Project" />
          <Button text="View Code" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
