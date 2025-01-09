import React from "react";

interface Props {
  text: string;
}

function TagStacks({ text }: Props) {
  return (
    // !Fix this!!
    <span className="p-2 text-xs text-black font-silk bg-yellow-600 rounded-2xl">
      {text}
    </span>
  );
}

export default TagStacks;
