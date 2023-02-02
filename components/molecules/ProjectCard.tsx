import Image from "next/image";
import Card from "../atoms/Card";

export interface Project {
  title: string,
  content: string,
  image: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {

  return (
    <Card span={3} className="flex-row items-start gap-4 text-white bg-black">
      <div>
        <h2 className="mb-2 text-4xl font-semibold text-amber-300">{project.title}</h2>
        <p>{project.content}</p>
      </div>
      {project.image && (
      <div className="h-full bg-gray-900 rounded">
        <Image src={project.image} alt={project.title} width={350} height={400} className="p-2" />
      </div>
      )}
    </Card>
  );
}
