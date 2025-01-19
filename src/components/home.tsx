"use client"
import { useState } from 'react';
import { MenuIcon, XCircle, Link2, Mail, LinkedinIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of your second project",
      tags: ["Next.js", "Tailwind", "Firebase"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "A brief description of your third project",
      tags: ["TypeScript", "GraphQL", "PostgreSQL"],
      link: "#"
    },
    {
        title: "Project 4",
      description: "A brief description of your third project",
      tags: ["TypeScript", "GraphQL", "PostgreSQL"],
      link: "#"
    }
  ];

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    "/hero.jpeg",
    "/hero.jpeg",
    "/hero.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Your Name</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XCircle size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#about" className="block py-2 hover:text-blue-400">About</a>
              <a href="#projects" className="block py-2 hover:text-blue-400">Projects</a>
              <a href="#contact" className="block py-2 hover:text-blue-400">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">Roneet Bala</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Full Stack Developer | Creating digital experiences
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/hero.jpeg" 
              alt="Your Profile" 
              className="rounded-full w-64 h-64 object-cover border-4 border-blue-400"
              width={700}
              height={700}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800/50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="mb-12">
            <p className="text-gray-300 mb-4">
              Your professional summary and background information goes here. Share your passion
              for development and what drives you to create amazing digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <img 
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-800/80 transition-colors">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-400/10 text-blue-400 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  View Project <Link2 size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800/50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;