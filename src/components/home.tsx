"use client"
import { useState } from 'react';
import { MenuIcon, XCircle, Mail, LinkedinIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import MacbookScrollDemo from './macbook-scroll-demo';
import HeroScrollDemo from './hero-scroll-demo';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Sample gallery images - replace with your actual images
    const galleryImages = [
      { type: "image", src: "/image.jpg" },
      { type: "image", src: "/IMG_9371.jpg" },
      { type: "video", src: "/cod.mp4" },
    ];
    
  

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Roneet Bala</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
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

      {/* Hero Section using MacbookScroll */}
      <div className="pt-16">
        <MacbookScrollDemo />
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800/50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="mb-12">
            <p className="text-gray-300 mb-4">
            Hi, I’m Roneet Bala Aka OMI,I am a Freshly Graduated Coder with a passion for creating and designing since my childhood. 
            Whether it’s building innovative digital solutions or designing intuitive experiences, I’ve always been drawn to the creative process.
            Beyond coding, I’m a big fan of Marvel, Bitcoin,and stock trading (especially F&O). 
            I love the thrill of market analysis and strategy, much like my gaming sessions in Fortnite and Warzone, where quick thinking and creativity rule.
            My academic journey has shaped my problem-solving skills, and 
            I’m constantly exploring new ways to merge my passions into impactful projects.

            Let’s connect and see how we can collaborate!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {galleryImages.map((item, index) => (
    <div key={index} className="rounded-lg overflow-hidden">
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={`Gallery image ${index + 1}`}
          className="rounded-lg hover:scale-105 transition-transform duration-300"
          width={400}
          height={400}
        />
      ) : (
        <video
          autoPlay loop muted playsInline
          className="rounded-lg hover:scale-105 transition-transform duration-300 w-full h-auto"
        >
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Hero Scroll Gallery Section */}

      {/* Hero Scroll Gallery Section */}
      <HeroScrollDemo />

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
        <p>© {new Date().getFullYear()} RoneetBala. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
