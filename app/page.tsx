import EmailCard from "@/components/molecules/EmailCard";
import ImageCard from "@/components/molecules/ImageCard";
import PresentationCard from "@/components/molecules/PresentationCard";
import SocialCard from "@/components/molecules/SocialCard";
import Projects from "@/components/sections/Projects";
import { profile } from "@/data"

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-4">
        <PresentationCard
          eyebrow={profile.name}
          title={profile.title}
          content={profile.content}
          cv_link={profile.cv_link}
        />
        <ImageCard src={profile.avatar} alt="avatar picture" />
        <SocialCard name="linkedin" link={profile.links.linkedin} />
        <EmailCard email={profile.email} />
        <SocialCard name="github" link={profile.links.github} />
        <h2 id="experience" className="mt-16 mb-10 text-6xl font-semibold tracking-wide text-white">experience</h2>
        <Projects projects={profile.projects} />
        <h2 id="projects" className="mt-16 mb-10 text-6xl font-semibold tracking-wide text-white">projects</h2>
        <Projects projects={profile.projects} />
      </div>
    </main>
  );
}
