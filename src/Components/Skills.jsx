import { FaJsSquare } from "react-icons/fa"; // JavaScript icon
import { FaReact } from "react-icons/fa"; // React icon
import { FaNodeJs } from "react-icons/fa"; // Node.js icon
import { SiNextdotjs } from "react-icons/si"; // Next.js icon
import { FaHtml5 } from "react-icons/fa"; // HTML5 icon
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS icon
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { SiMongodb } from "react-icons/si"; // MongoDB icon

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJsSquare className="text-6xl text-yellow-300" /> },
    { name: "React", icon: <FaReact className="text-6xl text-blue-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-6xl text-gray-700" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-6xl text-orange-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl text-blue-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-6xl text-gray-950" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-6xl  text-green-600" /> },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
        My Skill Sets
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-blue-600 hover:text-white transition duration-300 text-center"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
