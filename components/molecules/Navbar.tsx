import Image from "next/image";
import Clock from "./Clock";

export default function Navbar() {
  return (
    <nav className="flex items-center px-4 py-4 mb-4 bg-white sm:px-10 rounded-xl">
      <ul className="flex items-center flex-grow gap-4">
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
      </ul>
      <Clock />
      <Image
        src="/avatar.jpg"
        alt="avatar"
        width={25}
        height={25}
        priority={true}
        className="object-cover w-6 h-6 ml-2 rounded-full lg:hidden"
      />
    </nav>
  );
}
