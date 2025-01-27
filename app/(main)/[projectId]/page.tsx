import React from "react";
import ImageHeader from "./_components/ImageHeader";
import InformationDetails from "./_components/InformationDetails";
import RoleDetails from "./_components/RoleDetails";
import Section from "@/components/Section";

interface Props {
  searchParams: {
    title: string;
    description: string;
    subtitle: string;
    role: string;
    contribution: string;
    collaborators: string[];
    duration: string;
    stack: string[];
    image_url: string;
  };
}
function Project({ searchParams }: Props) {
  const {
    title,
    image_url,
    description,
    subtitle,
    role,
    contribution,
    // collaborators,
    duration,
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
      <RoleDetails
        role={role}
        // collaborators={collaborators}
        duration={duration}
        // stack={stack}
      />
      <div className="border-t border-gray-600 w-full "></div>

      <Section />
    </>
  );
}

export default Project;
