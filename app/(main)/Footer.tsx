import React from "react";
function Footer() {
  return (
    <footer className="py-6 bg-slate-700" id="contact">
      <div className="container">
        <span className="uppercase">Last updated 2025-01-06</span>

        <ul className="my-4 p-0">
          <li className="link">LinkedIn</li>
          <li className="link">GitHub</li>
          <li className="link">Resume</li>
        </ul>

        <div className="flex flex-col">
          <span>Lets build something together</span>
          <span>alonzoball07@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
