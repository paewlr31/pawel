// Home.tsx (lub Home.jsx)
import profilePic from "../assets/profile.png";   // zamień na swoje zdjęcie

export default function Home() {
  return (
    <>
  

      {/* Główna sekcja Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Hi there! I'm Paweł
          </h1>

          <p className="text-3xl md:text-4xl font-medium text-gray-800 mb-12">
            A Passionate IoT Developer. I'm also familiar with Frontend and SQL Databases.

          </p>

          {/* Przyciski pobierania CV */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/cv/Pawel_Rycerz_Resume_EN.pdf"    // podmień na swoje pliki
              download
              className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Résumé (EN)
            </a>

            <a
              href="/cv/Pawel_Rycerz_CV_PL.pdf"
              download
              className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Pobierz CV (PL)
            </a>
          </div>

          {/* Link do GitHub */}
            <div className="mt-8 flex justify-center gap-6">
            <a
                href="https://github.com/paewlr31"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition shadow-lg"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.933 0-1.31.467-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.285-1.552 3.288-1.23 3.288-1.23.653 1.653.243 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View GitHub
            </a>
            </div>


          {/* Zdjęcie profilowe */}
          <div className="mt-16 max-w-lg mx-auto">
            <div className="overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
              <img
                src={profilePic}
                alt="Paweł Rycerz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}