import Error from "@/components/404";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";

const ProjectPage = async ({ params }: { params: { title: string } }) => {
  const title = decodeURI(params.title);
  const project = projectsData.find((project) => project.title === title);

  if (project === undefined) {
    return (
      <>
        <SectionHeading>{title} was not found</SectionHeading>
        <Error />
      </>
    );
  }

  return (
    <section>
      <SectionHeading> {project?.title} </SectionHeading>
    </section>
  );
};
export default ProjectPage;
