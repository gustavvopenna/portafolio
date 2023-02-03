import Image from "next/image";

import Card from "../atoms/Card";

interface ImageCardProps {
  src: string;
  alt: string;
}

export default function ImageCard({ src, alt, ...rest }: ImageCardProps) {
  return (
    <Card className="p-0">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={false}
        className="object-cover w-full h-full"
        {...rest}
      />
    </Card>
  );
}
