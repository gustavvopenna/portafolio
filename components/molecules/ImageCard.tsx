import Image from "next/image";

import Card from "../atoms/Card";

interface ImageCardProps {
  src: string;
  alt: string;
}

export default function ImageCard({ src, alt, ...rest }: ImageCardProps) {
  return (
    <Card className="hidden p-0 sm:p-0 lg:flex">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={true}
        className="object-cover w-full h-full"
        {...rest}
      />
    </Card>
  );
}
