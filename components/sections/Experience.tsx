import Card from "../atoms/Card";
import { profile } from "@/data/index";
import ImageCard from "../molecules/ImageCard";
import JobCard from "../molecules/JobCard";

interface ExperienceProps {
  experience: typeof profile.experience;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="col-span-2 lg:col-span-3">
      <h2
        id="experience"
        className="mt-16 mb-10 text-6xl font-semibold tracking-wide text-white"
      >
        experience
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {experience.map((job, index) => (
          <JobCard key={`${job.position}-${index}`} job={job} />
        ))}
      </div>
    </section>
  );
}
