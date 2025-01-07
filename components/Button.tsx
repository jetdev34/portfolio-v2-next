import React from "react";

interface Props {
  text: string;
}

function Button({ text }: Props) {
  return <button className="border p-2 font-silk">{text}</button>;
}

export default Button;
