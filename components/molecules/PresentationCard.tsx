import Card from "../atoms/Card";

interface PresentationCardProps {
  eyebrow?: string;
  title: string;
  content: string;
}

export default function PresentationCard({ eyebrow, title, content }: PresentationCardProps) {
  return (
    <Card span={2} className="items-start">
      {eyebrow && <span className="">{eyebrow}</span>}
      <h1 className="mb-2 text-5xl font-semibold">{title}</h1>
      <p>{content}</p>
    </Card>
  );
}
