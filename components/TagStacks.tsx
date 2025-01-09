import React from "react";

interface Props {
  text: string;
}

function TagStacks({ text }: Props) {
  return (
    <span className="p-2 text-xs text-black bg-white rounded-2xl">{text}</span>
  );
}

export default TagStacks;
