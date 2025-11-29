// src/pages/Contact.tsx
import { FaEnvelope, FaPhone, FaUniversity } from "react-icons/fa";
import SEO from "../components/SEO";   // DODANE

export default function Contact() {
  return (
    <>
      {/* SEO – profesjonalny podgląd linku wszędzie */}
      <SEO
        title="Contact – Paweł Rycerz"
        description="Get in touch: paewlr31@gmail.com • +48 889 599 088 • IoT & Full-Stack Developer • AGH University, Kraków"
      />

      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-gray-700">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Contact Me
          </h2>

          <p className="text-lg mb-8 text-center">
            I'm always excited to connect! Whether you have a question, a project idea, or just want to say hello, feel free to reach out. I try to respond to all messages within 24 hours.
          </p>

          <div className="grid gap-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaEnvelope className="text-blue-600 text-xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p>paewlr31@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaEnvelope className="text-blue-600 text-xl" />
              <div>
                <p className="font-semibold">School Email</p>
                <p>prycerz@student.agh.edu.pl</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaPhone className="text-blue-600 text-xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+48 889 599 088</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaUniversity className="text-blue-600 text-xl" />
              <div>
                <p className="font-semibold">AGH University</p>
                <p>Kraków, Poland</p>
              </div>
            </div>
          </div>

          <p className="text-center mt-12 text-gray-600">
            Or you can also connect with me on{" "}
            <a
              href="https://github.com/paewlr31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              GitHub
            </a>
            . I look forward to collaborating with you!
          </p>
        </div>
      </section>
    </>
  );
}