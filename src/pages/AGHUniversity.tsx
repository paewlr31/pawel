// src/pages/AGHUniversity.tsx
import { FaGithub } from "react-icons/fa";
import SEO from "../components/SEO";   // DODANE

export default function AGHUniversity() {
  const labs = [
    {
      title: "Java Labs",
      description:
        "This repository documents my adventure with Java during my studies. It includes various projects and exercises covering core Java concepts, OOP, multithreading, and more.",
      github: "https://github.com/paewlr31/java_labolatories",
      date: "2024",
      inProgress: false,
      technologies: ["Java", "OOP", "Multithreading", "Collections"],
    },
    {
      title: "Machine Learning",
      description:
        "This repository contains my solutions and notes from machine learning labs. Each .ipynb or .py file corresponds to a single lab and includes practical implementations, reflections, and conclusions.",
      github: "https://github.com/paewlr31/machine_learning",
      date: "2024",
      inProgress: false,
      technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn"],
    },
  ];

  return (
    <>
      {/* SEO – teraz ta strona wygląda profesjonalnie wszędzie */}
      <SEO
        title="AGH Labs & Coursework – Paweł Rycerz"
        description="Java, Machine Learning, and other university projects from AGH University of Science and Technology in Kraków"
      />

      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            AGH University – Labs & Coursework
          </h1>

          <div className="grid gap-10 text-gray-700 md:grid-cols-2">
            {labs.map((lab) => (
              <div
                key={lab.title}
                className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                {/* Nagłówek */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {lab.title}
                  </h3>

                  {/* Data */}
                  <span className="inline-block text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full mb-4">
                    {lab.date}
                  </span>

                  {/* Technologie */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lab.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Opis */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {lab.description}
                  </p>
                </div>

                {/* Link GitHub */}
                <div className="mt-auto">
                  {lab.github && (
                    <a
                      href={lab.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                      <FaGithub className="text-lg" />
                      View Repository
                    </a>
                  )}

                  {/* Badge In Progress */}
                  {lab.inProgress && (
                    <span className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full mt-3">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
