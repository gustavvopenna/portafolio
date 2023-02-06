import { PropsWithChildren } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function Heading({
  children,
  ...rest
}: PropsWithChildren<HeadingProps>) {
  return (
    <h2
      className="mt-16 mb-10 text-5xl font-semibold tracking-wide text-white md:text-6xl"
      {...rest}
    >
      {children}
    </h2>
  );
}
