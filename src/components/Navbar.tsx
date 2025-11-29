// Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me & Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/agh-university", label: "AGH University" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Paweł Rycerz
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`transition ${
                      isActive
                        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu */}
          <div className="md:hidden text-gray-700 relative">
            {/* ✔ REPLACE label with button to avoid auto close */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="btn btn-ghost"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Dropdown content */}
            {isOpen && (
              <ul className="menu absolute right-0 mt-3 p-2 shadow text-gray-700 bg-white rounded-box w-56 z-50">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.to;

                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={isActive ? "font-semibold text-blue-600" : ""}
                        onClick={() => setIsOpen(false)}  // ← teraz działa idealnie
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
