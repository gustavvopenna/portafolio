import { profile } from "@/data/index";
import Heading from "../atoms/Heading";
import JobCard from "../molecules/JobCard";

interface ExperienceProps {
  experience: typeof profile.experience;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="col-span-2 lg:col-span-3">
      <Heading id="experience">
        experience
      </Heading>
      <div className="grid grid-cols-4 gap-4">
        {experience.map((job, index) => (
          <JobCard key={`${job.position}-${index}`} job={job} />
        ))}
      </div>
    </section>
  );
}
