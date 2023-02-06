import { cn } from "@/helpers";
import { PropsWithChildren } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading({
  children,
  as,
  ...rest
}: PropsWithChildren<HeadingProps>) {
  const Tag = as || "h2";

  const headingClasses = {
    base: "font-semibold tracking-wide text-white",
    h1: "mt-16 mb-10 text-6xl text-white md:text-5xl",
    h2: "mt-16 mb-10 text-5xl text-white md:text-6xl",
    h3: "mt-16 mb-10 text-4xl text-white md:text-3xl",
    h4: "mt-16 mb-10 text-3xl text-white md:text-2xl",
    h5: "mt-16 mb-10 text-xl text-white md:text-lg",
    h6: "mt-16 mb-10 text-lg text-white md:text-base",
  };

  return (
    <Tag className={cn([headingClasses.base, headingClasses[Tag]])} {...rest}>
      {children}
    </Tag>
  );
}
