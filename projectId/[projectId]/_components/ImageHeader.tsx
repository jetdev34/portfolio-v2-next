import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image_url: string;
};

function ImageHeader({ title, image_url }: Props) {
  return (
    <main className="container-sm spacing-sm">
      <Image src={image_url} alt={title} width={1920} height={600} />
    </main>
  );
}

export default ImageHeader;
