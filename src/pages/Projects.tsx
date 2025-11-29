// src/pages/Projects.tsx
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";   // DODANE

export default function Projects() {
  const projects = [
    {
      title: "IoT Food Sensor",
      type: "Internet of Things",
      technologies: ["C/C++", "ESP32", "ESP32 CAM", "OLED 1306", "BMP280"],
      description: "A sensor for monitoring food storage conditions (temperature, humidity, pressure).",
      githubLink: "https://gitlab.com/3_muszkieterow",
      date: "2025",
      inProgress: true,
    },
    {
      title: "mathcraft.pl",
      type: "Web Projects",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"],
      description: "A full-stack online educational platform for learning mathematics with student, teacher, and admin roles.",
      githubLink: "https://github.com/paewlr31/mathcraft",
      date: "2025 – Present",
      inProgress: true,
    },
    {
      title: "BookSwap",
      type: "Web Projects",
      technologies: ["C#", ".NET", "HTML", "CSS", "JavaScript"],
      description: "An online book exchange platform with search and rating functionalities.",
      githubLink: "https://github.com/paewlr31/urban-couscous",
      date: "2024",
    },
    {
      title: "TT – TikTok Generator",
      type: "Python Automation",
      technologies: ["Python", "MoviePy", "PRAW", "Selenium"],
      description: "Automated generator for viral TikToks using Reddit + TTS + video editing.",
      githubLink: "https://github.com/paewlr31/tt",
      date: "2024",
    },
    {
      title: "Boty GG",
      type: "Python AI",
      technologies: ["Python", "WebSockets", "AI Models"],
      description: "A system of multiple AI bots interacting with humans and among themselves (with humor).",
      githubLink: "https://github.com/paewlr31/botyGG",
      date: "2023",
    },
    {
      title: "Wyoming Wildfires",
      type: "Mathematical Modeling",
      technologies: ["Python", "NumPy", "Matplotlib"],
      description: "Simulation of wildfire spread in Wyoming forests considering climate factors.",
      githubLink: "https://github.com/paewlr31/pozaryWYOMING",
      date: "2023",
    },
    {
      title: "DesignPatterns – Hash Cracker",
      type: "Distributed Systems",
      technologies: ["Python", "Socket", "Multithreading"],
      description: "A distributed application for brute-force password cracking in a local network.",
      githubLink: "https://github.com/paewlr31/designPatterns",
      date: "2023",
    },
  ];

  return (
    <>
      {/* SEO – teraz strona z projektami wygląda MEGA profesjonalnie */}
      <SEO
        title="Projects – Paweł Rycerz"
        description="IoT sensors, full-stack web apps (mathcraft.pl), Python automation, distributed systems, AI bots & more – all open source on GitHub"
      />

      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            My Projects
          </h1>

          <div className="mt-8 text-center mb-16">
            <p className="text-lg text-gray-700">
              Interested in my projects or code? Check them out on{" "}
              <a
                href="https://github.com/paewlr31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                GitHub
              </a>
              !
            </p>
          </div>

          <div className="grid gap-10 text-gray-700 md:grid-cols-2">
            {projects.map((proj) => (
              <ProjectCard
                key={proj.title}
                title={proj.title}
                technologies={proj.technologies}
                description={proj.description}
                githubLink={proj.githubLink}
                date={proj.date}
                inProgress={proj.inProgress}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}