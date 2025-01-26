import React from "react";
import ImageHeader from "./_components/ImageHeader";
import InformationDetails from "./_components/InformationDetails";
import RoleDetails from "./_components/RoleDetails";

interface Props {
  searchParams: {
    title: string;
    description: string;
    subtitle: string;
    role: string;
    contributors: string[];
    contribution: string;
    duration: string;
    stack: string;
    image_url: string;
  };
}
function Project({ searchParams }: Props) {
  const {
    title,
    image_url,
    description,
    subtitle,
    // role,
    contribution,
    // contributors,
    // duration,
    // stack,
  } = searchParams;
  return (
    <>
      <ImageHeader title={title} image_url={image_url} />
      <InformationDetails
        title={title}
        subtitle={subtitle}
        description={description}
        contribution={contribution}
      />
      <RoleDetails />
    </>
  );
}

export default Project;
