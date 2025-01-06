import React from "react";

interface Props {
  text: string;
}

function TagStacks({ text }: Props) {
  return <span className="p-2 bg-gray-800 rounded-md">{text}</span>;
}

export default TagStacks;
