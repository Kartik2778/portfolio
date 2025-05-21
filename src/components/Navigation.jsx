import { useState } from 'react';

export default function Navigation({ activeTab, setActiveTab, personalInfo }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">{personalInfo.name}</h1>
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => setActiveTab('about')} 
            className={`px-2 py-1 ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-500'}`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('education')} 
            className={`px-2 py-1 ${activeTab === 'education' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-500'}`}
          >
            Education
          </button>
          <button 
            onClick={() => setActiveTab('skills')} 
            className={`px-2 py-1 ${activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-500'}`}
          >
            Skills
          </button>
          <button 
            onClick={() => setActiveTab('projects')} 
            className={`px-2 py-1 ${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-500'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('contact')} 
            className={`px-2 py-1 ${activeTab === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-500'}`}
          >
            Contact
          </button>
        </div>
        <div className="block md:hidden">
          <select 
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="py-1 px-2 border rounded"
          >
            <option value="about">About</option>
            <option value="education">Education</option>
            <option value="skills">Skills</option>
            <option value="projects">Projects</option>
            <option value="contact">Contact</option>
          </select>
        </div>
      </div>
    </nav>
  );
}