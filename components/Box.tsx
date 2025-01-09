import React from "react";
import Image from "next/image";

interface Props {
  image_url: string;
  text: string;
}

function Box({ image_url, text }: Props) {
  return (
    <div className="box text-xs p-2 bg-card shadow-lg border-color border ">
      <Image src={image_url} alt={text} width={60} height={60} />
      <span className="box-span">{text}</span>
    </div>
  );
}

export default Box;
