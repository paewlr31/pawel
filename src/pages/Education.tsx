// src/pages/Education.tsx
import { FaCalendarAlt } from "react-icons/fa";
import SEO from "../components/SEO";   // DODANE

export default function Education() {
  const schools = [
    {
      title: "VI Liceum Ogólnokształcące im. Adama Mickiewicza w Krakowie",
      date: "Wrzesień 2019 – Maj 2023",
      img: "/images/mickiewicz.png",
      link: "https://vilo.krakow.pl/",
    },
    {
      title: "Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie",
      subtitle: "AGH University of Science and Technology",
      course: "Informatyka i Systemy Inteligentne (I stopień, inż.)",
      date: "Październik 2023 – Present",
      img: "/images/agh.png",
      inProgress: true,
      link: "https://www.agh.edu.pl",
    },
  ];

  return (
    <>
      {/* SEO – teraz ta strona wygląda profesjonalnie wszędzie */}
      <SEO
        title="Education – Paweł Rycerz"
        description="AGH University of Science and Technology – Computer Science and Intelligent Systems • VI Liceum Ogólnokształcące im. Mickiewicza, Kraków"
      />

      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Education
          </h1>

          <div className="space-y-12">
            {schools.map((school) => (
              <div
                key={school.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Obrazek po lewej */}
                  <div className="md:w-80 h-64 md:h-full flex items-center justify-center p-4 bg-gray-50">
                    <a href={school.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={school.img}
                        alt={school.title}
                        className="max-h-40 md:max-h-48 w-auto object-contain transition-transform hover:scale-105"
                      />
                    </a>
                  </div>

                  {/* Treść po prawej */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {school.title}
                      </h2>
                      {school.subtitle && (
                        <p className="text-xl text-gray-700 mt-2">{school.subtitle}</p>
                      )}
                      {school.course && (
                        <p className="text-lg text-gray-600 mt-3 italic">
                          {school.course}
                        </p>
                      )}
                    </div>

                    {/* Data */}
                    <div className="flex items-center gap-3 mt-8 md:mt-0 text-gray-600 font-medium">
                      <FaCalendarAlt className="text-blue-600" />
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                        school.inProgress 
                          ? "bg-blue-50 text-blue-700" 
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {school.date}
                      </span>
                      {school.inProgress && (
                        <span className="ml-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-semibold">
                          In Progress
                        </span>
                      )}
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