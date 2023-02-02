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
          title={profile.title}
          content={profile.content}
        />
        <ImageCard src={profile.avatar} alt="avatar picture" />
        <SocialCard name="linkedin" link={profile.links.linkedin} />
        <EmailCard email={profile.email} />
        <SocialCard name="github" link={profile.links.github} />
        <Projects projects={profile.projects} />
      </div>
    </main>
  );
}
