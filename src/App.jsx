import { useState } from 'react';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { personalInfo, education, technicalSkills, softSkills, projects, contactInfo } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} personalInfo={personalInfo} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'about' && <AboutSection personalInfo={personalInfo} setActiveTab={setActiveTab} />}
        {activeTab === 'education' && <EducationSection education={education} />}
        {activeTab === 'skills' && <SkillsSection technicalSkills={technicalSkills} softSkills={softSkills} />}
        {activeTab === 'projects' && <ProjectsSection projects={projects} />}
        {activeTab === 'contact' && <ContactSection contactInfo={contactInfo} />}
      </main>
      
      <Footer personalInfo={personalInfo} contactInfo={contactInfo} />
    </div>
  );
}