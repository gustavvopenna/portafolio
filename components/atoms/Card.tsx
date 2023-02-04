import { cn } from "@/helpers";
import { ClassValue } from "clsx";

interface CardProps {
  className?: string | ClassValue[];
  id?: string;
}

export default function Card({
  children,
  className,
  id,
}: React.PropsWithChildren<CardProps>) {

  return (
    <div
      id={id}
      className={cn([
        "min-w-[100px] flex flex-col justify-center items-center rounded-2xl bg-white p-4 sm:p-10 overflow-hidden hover:scale-[0.98] duration-500 col-span-1",
        className,
      ])}
    >
      {children}
    </div>
  );
}
