import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  text: string;
  href: string;
  icon?: "link" | "github" | "default";
  target?: string;
  rel?: string;
}

function Button({ text, icon = "default", href, target, rel }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className="border py-2 px-4 md:px-6 lg:px-8 font-silk flex items-center gap-4"
      rel={rel}
    >
      {icon === "link" && <FaExternalLinkAlt size={30} />}
      {icon === "github" && <FaGithub size={30} />}
      {text}
    </Link>
  );
}

export default Button;
