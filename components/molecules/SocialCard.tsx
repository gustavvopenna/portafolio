import { ClassValue } from "clsx";

import Card from "../atoms/Card";
import IconLinkedIn from "../../public/linkedin.svg";
import IconGithub from "../../public/github.svg";
import { cn } from "@/helpers";

const options = {
  linkedin: {
    color: "bg-sky-600",
    name: "LinkedIn",
    Icon: IconLinkedIn,
  },
  github: {
    color: "bg-black",
    name: "Github",
    Icon: IconGithub,
  },
};

interface SocialCardProps extends React.PropsWithChildren {
  name: keyof typeof options;
  link: string;
  className?: string | ClassValue[];
}

export default function SocialCard({ name, link, className }: SocialCardProps) {
  const Icon = options[name].Icon;

  return (
    <a href={link} target="_blank" rel="noreferrer" aria-label={name}>
      <Card
        className={[
          options[name].color,
          "flex justify-center text-center text-white h-full"
        ]}
      >
        <Icon className="w-32" />
      </Card>
    </a>
  );
}
