// import { notFound } from "next/navigation";
// import ImageHeader from "./_components/ImageHeader";
// import InformationDetails from "./_components/InformationDetails";
// import RoleDetails from "./_components/RoleDetails";
// import { PROJECTS } from "@/lib/data";

// type Props = {
//   params: { projectId: string };
// };

// export default function ProjectPage({ params }: Props) {
//   const project = PROJECTS.find((p) => p.details_link === params.projectId);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <>
//       <ImageHeader title={project.title} image_url={project.image_url} />
//       <InformationDetails
//         title={project.title}
//         subtitle={project.subtitle}
//         description={project.description}
//         contribution={project.contribution}
//       />
//       <RoleDetails
//         role={project.role}
//         duration={project.duration}
//         collaborators={project.collaborators}
//         stack={project.stack}
//       />
//       <div className="border-t border-gray-600 w-full"></div>
//       {/* <Section sections={project.sections} /> */}
//     </>
//   );
// }
