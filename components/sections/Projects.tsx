import Heading from "../atoms/Heading";
import ProjectCard, { Project } from "../molecules/ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="col-span-2 lg:col-span-3">
      <Heading id="projects">
        projects
      </Heading>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
