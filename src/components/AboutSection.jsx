import { ChevronRight } from "lucide-react";

export default function AboutSection({ personalInfo, setActiveTab }) {
  return (
    <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/3 flex justify-center">
        <img 
          src={personalInfo.photo} 
          alt="Profile" 
          className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
        <h2 className="text-2xl text-blue-600 mb-2">{personalInfo.title}</h2>
        <p className="text-lg mb-3">{personalInfo.university}</p>
        <p className="text-gray-600 mb-6">{personalInfo.description}</p>
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveTab('contact')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition flex items-center"
          >
            Contact Me <ChevronRight className="ml-1 w-4 h-4" />
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition flex items-center"
          >
            View Projects <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}