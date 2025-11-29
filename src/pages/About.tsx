// src/pages/About.tsx
import { 
  FaMicrochip, 
  FaRobot, 
  FaGlobe, 
  FaUser, 
  FaBookOpen,
  FaPlaneDeparture, 
  FaLaptopCode, 
  FaChalkboardTeacher
} from "react-icons/fa";

import SEO from "../components/SEO";   // <--- DODANE
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* ←←← SEO – działa na Google, Discordzie, WhatsAppie itd. */}
      <SEO
        title="About – Paweł Rycerz"
        description="Passionate IoT developer, creator of mathcraft.pl, embedded systems & full-stack enthusiast from Kraków, Poland"
      />

      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Nagłówek */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            My Skills & About Me
          </h1>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
              My Skills
            </h2>
            <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">●</span>
                IoT Development (ESP32, MQTT, Home Assistant, Node-RED)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">●</span>
                Embedded C / C++
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">●</span>
                Frontend (React, TypeScript, Tailwind CSS)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">●</span>
                SQL & NoSQL Databases
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">●</span>
                Python Automation & Scripting
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">●</span>
                Docker & Linux Server Administration
              </li>
            </ul>
          </div>
           
          <hr className="border-gray-300 max-w-xl mx-auto" />

          {/* Reszta treści */}
          <div className="space-y-20">

            {/* 1. IoT Passion */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-6 text-6xl text-blue-600 mb-6">
                <FaMicrochip />
                <FaRobot />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
                I'm Paweł, a passionate IoT enthusiast on a mission to build smart, reliable and energy-efficient solutions that seamlessly connect the physical and digital worlds. 
                Over the past few years I’ve been diving deep into embedded systems, wireless communication and home automation — from simple Arduino sketches to complex multi-device platforms with real-time dashboards. 
                I love the moment when the LED finally blinks exactly how it should after hours of debugging. 
                Currently looking for new projects where I can turn ideas into real, working devices.
              </p>
            </div>

            <hr className="border-gray-300 max-w-xl mx-auto" />

            {/* 2. Mathcraft */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-6 text-6xl text-blue-600 mb-6">
                <FaLaptopCode />
                <FaChalkboardTeacher />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
                Right now I’m building <span className="font-semibold text-blue-600">mathcraft.pl</span> — a full-stack online school platform for mathematics. 
                It features a complete dashboard, authentication system, and three user roles (student, teacher, admin). 
                Students solve interactive exercises with real-time feedback, teachers manage classes and track progress, while admins have full control over content and users. 
                The project is built with React + TypeScript, Node.js, PostgreSQL and is continuously expanding with new features.
              </p>
            </div>

            {/* 3. Języki */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start text-6xl text-blue-600 mb-6">
                <FaGlobe />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
                Born and raised in Poland — Polish is my native language. 
                Thanks to years of working and studying in English, I’m fully comfortable communicating, writing documentation, and collaborating in international teams (B2/C1 level).
              </p>
            </div>

            <hr className="border-gray-300 max-w-xl mx-auto" />

            {/* 4. Zainteresowania */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-6 text-6xl text-blue-600 mb-6">
                <FaUser />
                <FaBookOpen />
                <FaPlaneDeparture />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
                Outside of soldering and coding, I’m a huge anime & light novel fan (currently deep into isekai and sci-fi), 
                I write my own short stories from time to time, and I’m always planning the next solo backpacking adventure — so far Spain, Austria and Greece have been my favorites. 
                These hobbies taught me discipline, creative problem-solving, and how to stay calm when everything goes wrong — skills that come in handy when a sensor stops responding at 2 AM.
                <br /><br />
                Curious about my current anime season picks or travel photos? Just drop me a message — happy to share!{' '}
                <Link to="/contact" className="text-blue-600 font-medium hover:underline">
  Contact Me
</Link>
              </p>
            </div>

            <div className="mt-8 text-center mb-16">
              <p className="text-lg text-gray-700">
                Interested in my projects or code? Check them out on{' '}
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
          </div>
        </div>
      </section>
    </>
  );
}
