import type { Project } from "@/data";
import Image from "next/image";
import Card from "../atoms/Card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex-col items-start col-span-3 gap-4 p-0 text-white lg:flex-row bg-black/70 backdrop-blur-sm">
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
