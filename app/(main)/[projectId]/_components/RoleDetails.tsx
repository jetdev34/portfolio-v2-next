import React from "react";

function RoleDetails() {
  return (
    <section>
      <div className="container-sm md:flex gap-4 justify-between mb-6 md:mb-10">
        {/* Col 1 */}
        <div className="flex gap-4 justify-between md:w-[49%] ">
          <article className="w-[49%]">
            <span className="accent">Role</span>
            <ul>
              <li>Lead Developer</li>
            </ul>
          </article>

          <article className="w-[49%]">
            <span className="accent">Collaborators</span>
            <ul>
              <li>Clark Esplanada</li>
              <li>Joren Banaria</li>
              <li>Nathan Aquino</li>
              <li>Julian Henrico Agnas</li>
            </ul>
          </article>
        </div>

        {/* Col 2 */}
        <div className="flex gap-4 justify-between md:w-[49%] ">
          <article className="w-[49%]">
            <span className="accent">Duration</span>
            <p>March 2024 - Nov 2024</p>
          </article>
          <article className="w-[49%]">
            <span className="accent">Tools I used</span>
            <ul>
              <li>React Native Expo (Mobile)</li>
              <li>Firebase (Database)</li>
              <li>Nextjs (Web)</li>
              <li>Figma (Wireframe)</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default RoleDetails;
