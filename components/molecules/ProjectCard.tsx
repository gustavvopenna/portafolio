import Image from "next/image";
import Card from "../atoms/Card";

export interface Project {
  title: string;
  content: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="flex-col items-start col-span-3 gap-4 p-0 text-white lg:flex-row bg-black/70 backdrop-blur-sm"
    >
      <div className="p-10">
        <h2 className="mb-2 text-4xl font-semibold text-amber-300">
          {project.title}
        </h2>
        <p>{project.content}</p>
      </div>
      {project.image && (
        <div className="bg-gray-900 rounded h-full max-h-[250px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={350}
            height={400}
            className="bg-cover opacity-50"
          />
        </div>
      )}
    </Card>
  );
}
