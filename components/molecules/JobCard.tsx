import type { Job } from "@/data";
import Image from "next/image";
import Card from "../atoms/Card";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="flex flex-row items-start justify-start col-span-4 gap-2 md:col-span-2 backdrop-blur-sm bg-white/60">
      <div className="flex-shrink-0">
        <Image
          src={job.logo}
          alt={job.company}
          width={25}
          height={25}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col -mt-[2px]">
        <h3 className="text-xl font-semibold">{job.position}</h3>
        <a
          href={job.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1"
        >
          <span className="">{job.company}</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2.5C3.17157 2.5 2.5 3.17157 2.5 4V12C2.5 12.8284 3.17157 13.5 4 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V8.5C13.5 8.22386 13.2761 8 13 8C12.7239 8 12.5 8.22386 12.5 8.5V12C12.5 12.2761 12.2761 12.5 12 12.5H4C3.72386 12.5 3.5 12.2761 3.5 12V4C3.5 3.72386 3.72386 3.5 4 3.5H7C7.27614 3.5 7.5 3.27614 7.5 3C7.5 2.72386 7.27614 2.5 7 2.5H4Z"
              fill="black"
            />
            <path
              d="M10 2.5C9.72386 2.5 9.5 2.72386 9.5 3C9.5 3.27614 9.72386 3.5 10 3.5H11.7929L7.64645 7.64645C7.45118 7.84171 7.45118 8.15829 7.64645 8.35355C7.84171 8.54882 8.15829 8.54882 8.35355 8.35355L12.5 4.20711V5.5C12.5 5.77614 12.7239 6 13 6C13.2761 6 13.5 5.77614 13.5 5.5V2.5H10Z"
              fill="black"
            />
          </svg>
        </a>
        <span>{job.date}</span>
        <span className="text-sm text-slate-700">{job.city}</span>
        {/* <div className="flex gap-1 mt-1">
          {job.tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="px-2 py-1 text-xs rounded-full text-slate-300 bg-slate-900/90"
            >
              {tag}
            </span>
          ))}
        </div> */}
        <div className="flex flex-wrap gap-1 mt-4">
          {job.skills.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="px-2 py-1 text-xs border rounded-full border-slate-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
