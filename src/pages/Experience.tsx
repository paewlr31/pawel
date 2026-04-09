import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Experience() {
  const experiences = [
    {
      title: "Intern – Information Technology Department",
      company: "Wyższa Szkoła Ekonomii i Informatyki w Krakowie (since 1st of April 2026 called Uniwersytet DSW Ideis)",
      location: "Cracow, Małopolskie, Poland",
      type: "On-site · Full-time",
      date: "Jan 2026 – Mar 2026",
      inProgress: false,
      description: [
        "Assisted the IT department with daily hardware and software maintenance.",
        "Troubleshot user issues (hardware, software, network) and provided technical support.",
        "Managed and maintained user accounts in Active Directory and Office 365.",
        "Developed and tested new features for internal applications using C#.",
      ],
      skills: [
        "Technical Support",
        "IT Infrastructure",
        "C# Development",
        "Active Directory",
        "Office 365 Administration",
      ],
      img: "/images/wsei.png",
      link: "https://wsei.edu.pl",
    },
    {
      title: "Mathematics Teacher",
      company: "Szkoła Maturzystów • Łukasz Jarosiński",
      location: "Cracow, Małopolskie, Poland",
      type: "Remote",
      date: "Jan 2024 – Present",
      inProgress: true,
      description: [
        "Preparing high school students for their final mathematics exam (matura).",
        "Designing individual learning plans and adapting teaching methods to student needs.",
        "Delivering both standard and extended mathematics curriculum.",
        "Creating digital teaching materials and interactive exercises.",
      ],
      skills: ["Teaching", "Secondary Education", "Didactics", "Exam Preparation"],
      img: "/images/teacher.png",
      link: "https://szkolamaturzystow.pl",
    }
    
  ];

  return (
    <>
      <SEO
        title="Experience – Paweł Rycerz"
        description="Professional experience: mathematics teacher and IT department intern at WSEI Kraków"
      />

      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Experience
          </h1>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  
                  {/* IMAGE */}
                  <div className="md:w-72 h-64 md:h-auto flex items-center justify-center p-6 bg-gray-50">
                    <a href={exp.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={exp.img}
                        alt={exp.company}
                        className="max-h-40 md:max-h-48 object-contain transition-transform hover:scale-105"
                      />
                    </a>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{exp.title}</h2>
                    <p className="text-lg text-gray-700 mt-2">{exp.company}</p>

                    <div className="flex items-center gap-3 mt-4 text-gray-600">
                      <FaMapMarkerAlt className="text-blue-600" />
                      <span>{exp.location} · {exp.type}</span>
                    </div>

                    {/* DATE */}
                    <div className="flex items-center gap-3 mt-3 text-gray-600 font-medium">
                      <FaCalendarAlt className="text-blue-600" />
                      <span
                        className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                          exp.inProgress
                            ? "bg-blue-50 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {exp.date}
                      </span>
                      {exp.inProgress && (
                        <span className="ml-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-semibold">
                          In Progress
                        </span>
                      )}
                    </div>

                    {/* DESCRIPTION */}
                    <ul className="list-disc ml-6 mt-6 space-y-2 text-gray-700">
                      {exp.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>

                    {/* SKILLS */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}