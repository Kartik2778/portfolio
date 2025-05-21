import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection({ contactInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // In a real application, you would send this data to a server
    console.log('Form Data:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200">Contact Me</h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-700 mb-6">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center text-lg hover:text-blue-600"
              >
                <Mail className="mr-3 w-5 h-5" />
                {contactInfo.email}
              </a>
              
              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center text-lg hover:text-blue-600"
              >
                <Github className="mr-3 w-5 h-5" />
                GitHub Profile
              </a>
              
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center text-lg hover:text-blue-600"
              >
                <Linkedin className="mr-3 w-5 h-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                onClick={handleSubmit} 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}