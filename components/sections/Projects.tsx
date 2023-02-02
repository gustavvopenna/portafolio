import ProjectCard, { Project } from "../molecules/ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div id="projects" className="grid grid-cols-3 col-span-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
