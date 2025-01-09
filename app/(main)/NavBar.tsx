"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-card shadow-lg text-black"
          : "bg-transparent border-transparent"
      } sticky top-0 w-full z-20 py-2 mb-0 transition-all duration-300 ease-in-out`}
    >
      <div className="container flex items-center gap-24">
        <h2 className="text-xl font-bold tracking-widest">JetDev</h2>
        <ul className="hidden md:flex items-center gap-12">
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
