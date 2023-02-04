import EmailCard from "@/components/molecules/EmailCard";
import ImageCard from "@/components/molecules/ImageCard";
import PresentationCard from "@/components/molecules/PresentationCard";
import SocialCard from "@/components/molecules/SocialCard";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import { profile } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <PresentationCard
          eyebrow={profile.eyebrow}
          title={profile.title}
          content={profile.content}
          cv_link={profile.cv_link}
        />
        <ImageCard src={profile.avatar} alt="avatar picture" />
        <SocialCard name="linkedin" link={profile.links.linkedin} />
        <EmailCard email={profile.email} />
        <SocialCard name="github" link={profile.links.github} />
        <Experience experience={profile.experience} />
        <Projects projects={profile.projects} />
      </div>
    </main>
  );
}
