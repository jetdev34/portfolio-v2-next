"use client";

import { useLottie } from "lottie-react";
import animationData from "./animationData.json";

const Animation = () => {
  const defaultOptions = {
    animationData: JSON.parse(JSON.stringify(animationData)), // Create a deep copy
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return <div className="w-[300px] md:w-[350px]">{View}</div>;
};

export default Animation;
