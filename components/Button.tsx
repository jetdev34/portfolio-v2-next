import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  text: string;
  href?: string;
  icon?: "link" | "github" | "default";
  target?: string;
  rel?: string;
}

function Button({ text, icon = "default", href, target, rel }: Props) {
  if (!href) return null; // Skip rendering if href is missing
  return (
    <Link
      href={href}
      target={target}
      className="border border-color bg-black rounded-sm py-2 text-xs md:text-lg px-2 md:px-4 lg:px-6 font-silk flex items-center gap-4 hover:opacity-50 transition duration-300 ease-in-out"
      rel={rel}
    >
      {icon === "link" && <FaExternalLinkAlt size={20} />}
      {icon === "github" && <FaGithub size={20} />}
      {text}
    </Link>
  );
}

export default Button;
