import { ChevronRight } from 'lucide-react';

export default function ProjectsSection({ projects }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link}
                className="inline-block text-blue-600 hover:text-blue-800 hover:underline"
              >
                View Project <ChevronRight className="inline ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
