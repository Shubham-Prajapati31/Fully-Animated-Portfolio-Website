import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="h-screen bg-white text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-gray-700 text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hello, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Shubham Prajapati
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-800 mb-6">
            A Computer Science student who loves crafting websites, building projects, and editing videos.
          </p>

          {/* Typing Animation */}
          <div className="text-3xl font-bold text-gray-800 mb-10 h-10">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Frontend Developer',
                2000,
                'Content Creator',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-blue-500 shadow-lg">
          <img
            src="/profile.jpg" // Make sure this is inside your /public folder
            alt="Shubham Prajapati"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
