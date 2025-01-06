import React from "react";
import Image from "next/image";

interface Props {
  image_url: string;
  text: string;
}

function Box({ image_url, text }: Props) {
  return (
    <div className="box">
      <Image src={image_url} alt={text} width={80} height={80} />
      <span className="box-span">{text}</span>
    </div>
  );
}

export default Box;
