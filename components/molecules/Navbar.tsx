import Clock from "./Clock";

export default function Navbar() {
  return (
    <nav className="flex px-10 py-4 mb-4 bg-white rounded-xl">
      <ul className="flex flex-grow gap-4">
        <a href="#"><li>Experience</li></a>
        <a href="#projects"><li>Projects</li></a>
      </ul>
      <Clock />
    </nav>
  )
}