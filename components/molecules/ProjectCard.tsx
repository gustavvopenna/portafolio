import type { Project } from "@/data";
import Image from "next/image";
import Card from "../atoms/Card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col p-0 text-white lg:flex-row bg-black/70 backdrop-blur-sm">
      <div className="p-10">
        <h2 className="mb-2 text-4xl font-semibold text-amber-300">
          {project.title}
        </h2>
        <p>{project.content}</p>
        <div className="flex gap-2 mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="px-2 py-1 text-xs border border-white rounded-full bg-white/90 text-black/90"
          >
            github
          </a>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 text-xs border border-white rounded-full"
            >
              website
            </a>
          )}
        </div>
      </div>
      {project.image && (
        <div className="overflow-hidden rounded-b sm:rounded min-w-[250px]">
          <Image
            src={project.image}
            alt={project.title}
            width={350}
            height={400}
          />
        </div>
      )}
    </Card>
  );
}
