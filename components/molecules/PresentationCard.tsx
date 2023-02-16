import Card from "../atoms/Card";

interface PresentationCardProps {
  eyebrow?: string;
  title: string;
  content: string;
  cv_link?: string;
}

export default function PresentationCard(props: PresentationCardProps) {
  const { eyebrow, title, content, cv_link } = props;

  return (
    <Card className="items-start col-span-2 hover:scale-100 backdrop-blur-sm bg-white/60">
      {eyebrow && <span className="text-slate-700">{eyebrow}</span>}
      <h1 className="mt-1 mb-4 text-5xl font-semibold">{title}</h1>
      <p
        className="mb-6 text-slate-800"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      {cv_link && (
        <a
          href={cv_link}
          download="gustavo_pena_resume"
          className="flex items-center gap-2 px-6 py-2 font-semibold duration-300 rounded-full bg-slate-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia-600/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span>download resume</span>
        </a>
      )}
    </Card>
  );
}
