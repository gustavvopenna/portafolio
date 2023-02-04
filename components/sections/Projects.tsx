import ProjectCard, { Project } from "../molecules/ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="col-span-2 lg:col-span-3">
      <h2 id="projects" className="mt-16 mb-10 text-6xl font-semibold tracking-wide text-white">projects</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
