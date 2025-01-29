import React from "react";

interface Props {
  role: string;
  collaborators: string[];
  duration: string;
  stack: string[];
}

function RoleDetails({ role, duration, collaborators, stack }: Props) {
  return (
    <section>
      <div className="container-sm md:flex gap-4 justify-between mb-6 md:mb-10">
        {/* Col 1 */}
        <div className="flex gap-4 justify-between md:w-[49%] ">
          <article className="w-[49%]">
            <span className="accent">Role</span>
            <ul>
              <li>{role}</li>
            </ul>
          </article>

          <article className="w-[49%]">
            <span className="accent">Collaborators</span>
            <ul>
              {collaborators.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </article>
        </div>

        {/* Col 2 */}
        <div className="flex gap-4 justify-between md:w-[49%] ">
          <article className="w-[49%]">
            <span className="accent">Duration</span>
            <p>{duration}</p>
          </article>
          <article className="w-[49%]">
            <span className="accent">Tools I used</span>
            <ul>
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default RoleDetails;
