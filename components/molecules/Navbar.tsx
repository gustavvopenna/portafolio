import Image from "next/image";
import Clock from "./Clock";

export default function Navbar() {
  return (
    <nav className="flex items-center px-4 py-4 mb-4 bg-white sm:px-10 rounded-xl">
      <ul className="flex items-center flex-grow gap-4">
        <li>
          <a href="#experience" className="transition-transform group">
            <span className="inline-block transition-transform group-hover:translate-y-[1px] duration-300">experi</span>
            <span className="inline-block transition-transform group-hover:translate-y-[-1px] duration-300">ence</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="transition-transform group">
            <span className="inline-block transition-transform group-hover:translate-y-[1px] duration-300">proj</span>
            <span className="inline-block transition-transform group-hover:translate-y-[-1px] duration-300">ects</span>
          </a>
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
