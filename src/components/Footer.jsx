import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer({ personalInfo, contactInfo }) {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
            <p>{personalInfo.title}</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-white hover:text-blue-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}