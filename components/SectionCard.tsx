import Image from "next/image";
import React from "react";

interface SectionCardProps {
  title: string;
  description: string;
  image_url: string;
  flip: string;
}

function SectionCard({
  title,
  description,
  image_url,
  flip,
}: SectionCardProps) {
  return (
    <div className={`md:flex ${flip} gap-4 justify-between py-4`}>
      <div className="md:w-[49%]">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="md:w-[49%]">
        <Image src={image_url} alt={title} width={600} height={400} />
      </div>
    </div>
  );
}

export default SectionCard;
