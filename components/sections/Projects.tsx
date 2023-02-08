import Heading from "../atoms/Heading";
import { type Project } from "@/data";
import ProjectCard from "../molecules/ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="col-span-2 lg:col-span-3">
      <Heading id="projects">
        projects
      </Heading>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
