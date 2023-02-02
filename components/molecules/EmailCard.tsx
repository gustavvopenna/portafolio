import Card from "../atoms/Card";

interface EmailCardProps {
  email: string
}

export default function EmailCard({ email }: EmailCardProps) {
  const [username, provider] = email.split("@")

  return (
    <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
      <Card className="items-start">
        <p>{username}@</p>
        <h2 className="text-5xl font-semibold">{provider}</h2>
      </Card>
    </a>
  );
}
