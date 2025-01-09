import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-6 border-t" id="contact">
      <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <span className="uppercase">Last updated 2025-01-09</span>

          <ul className="my-4 p-0 flex gap-4">
            <li className="link ">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/jethro-alonzo/"
              >
                <FaLinkedin size={30} />
              </Link>
            </li>
            <li className="link">
              <Link
                target="_blank"
                href="https://github.com/jetdev34"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <span>Lets build something together</span>
          <Link
            target="_blank"
            className="link"
            href="mailto:alonzoball07@gmail.com"
          >
            <div className="flex gap-2 items-center">
              <span>alonzoball07@gmail.com</span>
              <FaExternalLinkAlt size={10} />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
