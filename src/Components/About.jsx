export default function About() {
    return (
      <section id="about" className="py-16 px-6 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </h2>
  
          {/* Introduction */}
          <p className="text-lg leading-relaxed mb-8 text-center">
            Hey! I'm <span className="font-semibold text-blue-600">Shubham Prajapati</span>, a curious and creative Computer Science student with a strong interest in
            <span className="font-medium"> full-stack development, UI/UX design, and digital creativity</span>. Whether it's writing code or editing videos, I love turning ideas into impactful, real-world projects.
          </p>
  
          {/* Fun Facts / Quick Info Card */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md mb-10">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Quick Facts</h3>
            <ul className="list-disc list-inside space-y-2 font-medium text-gray-800">
              <li>🎓 2nd Year B.Sc. CS Student – Mumbai University</li>
              <li>💡 Built a <span className="font-semibold">Time Table Scheduler</span> & an animated <span className="font-semibold">College Website</span></li>
              <li>🌐 Skilled in HTML, CSS, JavaScript, React, Python</li>
              <li>📹 Owns a YouTube Channel with <span className="font-semibold">4.1K+ subscribers</span></li>
              <li>🎯 Always exploring tech, tools, and new possibilities</li>
            </ul>
          </div>
  
          {/* Personal Note */}
          <div className="text-lg leading-relaxed space-y-6">
            
           
          </div>
        </div>
      </section>
    );
  }
  