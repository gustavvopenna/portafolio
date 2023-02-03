import Clock from "./Clock";

export default function Navbar() {
  return (
    <nav className="flex px-10 py-4 mb-4 bg-white rounded-xl">
      <ul className="flex flex-grow gap-4">
        <li><a href="#experience">experience</a></li>
        <li><a href="#projects">projects</a></li>
      </ul>
      <Clock />
    </nav>
  )
}
