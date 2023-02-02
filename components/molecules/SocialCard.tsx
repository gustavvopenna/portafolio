import React from "react";

import Card from "../atoms/Card";
import IconLinkedIn from "../../public/linkedin.svg";
import IconGithub from "../../public/github.svg";

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
}

export default function SocialCard({ name, link }: SocialCardProps) {
  const Icon = options[name].Icon;

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card
        className={[
          options[name].color,
          "flex justify-center text-center text-white hover:scale-95 duration-500",
        ]}
      >
        <Icon className="w-32" />
      </Card>
    </a>
  );
}
