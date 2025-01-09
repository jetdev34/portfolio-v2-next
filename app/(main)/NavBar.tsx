"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-card shadow-lg text-black"
          : "bg-transparent border-transparent"
      } sticky top-0 w-full z-20 py-2 mb-0 transition-all duration-300 ease-in-out`}
    >
      <div className="container flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-widest">JetDev</h2>

        {/* Menu Icon: Toggles menu visibility */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-2xl cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>

        {/* Navigation Links: Hidden on small screens */}
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

        {/* Mobile Menu: Visible when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="absolute py-4 top-10 left-0 w-full bg-card shadow-lg text-black z-30 md:hidden">
            <ul className="flex flex-col items-center gap-6 ">
              <li>
                <Link
                  className="link"
                  href="#hero"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  href="#skills"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
