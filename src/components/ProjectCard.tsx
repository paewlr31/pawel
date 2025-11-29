interface ProjectCardProps {
  title: string;

  technologies: string[];
  description: string;
  githubLink: string;
  date: string;           // ← nowe pole (np. "2025", "2024 – Present")
  inProgress?: boolean;
}

export default function ProjectCard({ 
  title, 

  technologies, 
  description, 
  githubLink, 
  date,
  inProgress 
}: ProjectCardProps) {
  return (
    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-7 border border-gray-100 relative overflow-hidden">
      
      {/* Badge "In progress" – w prawym górnym rogu */}
      {inProgress && (
        <div className="absolute top-4 right-4">
          <span className="badge badge-warning badge-sm font-medium">In progress</span>
        </div>
      )}

      {/* Główna treść */}
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Technologie */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="badge badge-outline badge-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Link GitHub + Data w prawym dolnym rogu */}
        <div className="flex justify-between items-end mt-auto pt-4">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.752-1.333-1.752-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.536-1.527.117-3.18 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.288-1.552 3.294-1.23 3.294-1.23.656 1.653.244 2.877.12 3.18.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.624-5.48 5.922.43.37.823 1.1.823 2.22 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>

          {/* Data w prawym dolnym rogu */}
          <span className="text-sm font-medium text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}