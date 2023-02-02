import { cn } from '@/helpers'

interface CardProps {
  span?: 1 | 2 | 3 | 4,
  className?: string,
  id?: string
}

export default function Card({ children, span = 1, className, id }: React.PropsWithChildren<CardProps>) {
  const spanClass = {
    "col-span-1": span === 1,
    "col-span-2": span === 2,
    "col-span-3": span === 3,
    "col-span-4": span === 4,
  };

  return (
    <div id={id} className={cn([
      "min-w-[100px] min-h-[250px] flex flex-col justify-center items-center rounded-2xl bg-white p-10 overflow-hidden hover:scale-95 duration-500",
      spanClass,
      className
    ])}>
      {children}
    </div>
  )
}
