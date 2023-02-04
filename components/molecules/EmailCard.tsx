import Card from "../atoms/Card";

interface EmailCardProps {
  email: string;
}

export default function EmailCard({ email }: EmailCardProps) {
  const [username, provider] = email.split("@");

  return (
    <a
      href={`mailto:${email}`}
      target="_blank"
      rel="noreferrer"
      className="col-span-2 lg:col-span-1"
    >
      <Card className="items-start h-full">
        <p>{username}@</p>
        <h2 className="text-5xl font-semibold">{provider}</h2>
      </Card>
    </a>
  );
}
