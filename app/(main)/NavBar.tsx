import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="sticky top-0 left-0 w-full z-20 py-2  bg-transparent border-b border-gray-700">
      <div className="container flex items-center gap-24">
        <h2 className="text-xl font-bold tracking-widest">JetDev</h2>
        <ul className="hidden md:flex items-center gap-12 font-silk">
          <li>
            <Link className="link" href="#hero">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" href="#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="link" href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
