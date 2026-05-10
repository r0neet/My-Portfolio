"use client"
import { useState, lazy, Suspense, useRef, useEffect } from 'react';
import { MenuIcon, XCircle, Link2, Mail, LinkedinIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import { CardHoverEffectDemo } from './cardSection';
import { CometCard } from "@/components/ui/comet-card";
import { Cover } from "@/components/ui/cover";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconTerminal2,
  IconCode,
  IconMessageCircle,
  IconSend
} from "@tabler/icons-react";

// Lazy load heavy scroll-based components
const MacbookScrollDemo = lazy(() => import('./macbook-scroll-demo'));
const HeroScrollDemo = lazy(() => import('./hero-scroll-demo'));

// Lazy-rendered section that only mounts when near the viewport
function LazySection({ children, fallback, rootMargin = "200px" }: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
}) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {show ? children : fallback || <div style={{ minHeight: '50vh' }} />}
    </div>
  );
}

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "space runner",
      description: "if you are bored so far play a game i build using react !",
      tags: ["Next.js", "Tailwind", "Firebase"],
      link: "https://space-runner-roan.vercel.app/",
      image: "/space_runner.png"
    },
    {
      title: "Project 3",
      description: "A brief description of your third project",
      tags: ["TypeScript", "GraphQL", "PostgreSQL"],
      link: "#",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop"
    },
  ];

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    { type: "image", src: "/image.jpg" },
    { type: "image", src: "/IMG_9371.jpg" },
    { type: "video", src: "/cod.mp4" },
  ];



  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      {/* Navigation */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-full px-8 py-3 flex items-center gap-8 shadow-2xl">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/about" className="text-sm font-medium hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button - simplified for pill layout */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XCircle size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation - absolute positioning relative to top */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-4 z-[60]">
            <a href="#about" className="text-lg font-medium hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="text-lg font-medium hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-lg font-medium hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Hi, I&apos;m <span className="text-blue-400">Roneet Bala</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Full Stack Developer | Creating digital experiences
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/r0neet" className="p-2 hover:text-blue-400 transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/roneetbala/" className="p-2 hover:text-blue-400 transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href="mailto:roneetbala2002@gmail.com" className="p-2 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center overflow-hidden">
            <Image
              src="/hero.jpeg"
              alt="Your Profile"
              className="rounded w-70 h-100 object-cover"
              width={700}
              height={700}
              priority
              quality={75}
              sizes="(max-width: 768px) 80vw, 350px"
            />
          </div>
        </div>

        {/* Cover Demo Section */}
        <div className="mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 text-white font-[family-name:var(--font-display)]">
            Build amazing websites <br /> at <Cover className="text-blue-400">warp speed</Cover>
          </h1>
        </div>
      </section>

      {/* Macbook Scroll Hero Section - lazy loaded */}
      <LazySection fallback={<div style={{ minHeight: '200vh' }} />}>
        <Suspense fallback={<div style={{ minHeight: '200vh' }} />}>
          <div className="pt-8">
            <MacbookScrollDemo />
          </div>
        </Suspense>
      </LazySection>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800/50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-[family-name:var(--font-display)] tracking-tight">About Me</h2>
          <div className="mb-12">
            <p className="text-gray-300 mb-4">
              Hi, I&apos;m Roneet Bala Aka OMI, I am a Freshly Graduated Coder with a passion for creating and designing since my childhood.
              Whether it&apos;s building innovative digital solutions or designing intuitive experiences, I&apos;ve always been drawn to the creative process.
              Beyond coding, I&apos;m a big fan of Marvel, Bitcoin, and stock trading (especially F&amp;O).
              I love the thrill of market analysis and strategy, much like my gaming sessions in Fortnite and Warzone, where quick thinking and creativity rule.
              My academic journey has shaped my problem-solving skills, and
              I&apos;m constantly exploring new ways to merge my passions into impactful projects.

              Let&apos;s connect and see how we can collaborate!
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
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <video
                    autoPlay loop muted playsInline
                    preload="none"
                    className="rounded-lg hover:scale-105 transition-transform duration-300 w-full h-auto"
                    poster=""
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

      {/* Hero Scroll Gallery Section - lazy loaded */}
      <LazySection fallback={<div style={{ minHeight: '80rem' }} />}>
        <Suspense fallback={<div style={{ minHeight: '80rem' }} />}>
          <HeroScrollDemo />
        </Suspense>
      </LazySection>

      <CardHoverEffectDemo />

      {/*key components*/}

      {/* Key Components Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full -z-10" />
        <h2 className="px-4 text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 tracking-tight">My Key Components</h2>

        {/* Transparent Plates with Infinite Scroll */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap flex gap-8 [will-change:transform]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                {[
                  "Can Make Good Jokes", "A good Scuba-Diver (80meter)", "Self-Motivated",
                  "Creative and Attentive", "Can do great", "Code stitching",
                  "Communication is my weapon", "Strong interpersonal skills", 
                  "Proactive in almost everything", "Prompting expert"
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.4)] px-8 py-4 rounded-[2rem] text-white font-medium transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-[0_16px_40px_0_rgba(255,255,255,0.2),inset_0_2px_2px_rgba(255,255,255,0.5)]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>


      </section>




      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-[family-name:var(--font-display)] tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <CometCard key={index}>
                <div
                  className="flex flex-col items-stretch rounded-[16px] border border-gray-800 bg-[#1F2121] p-2 saturate-0 md:p-4 h-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[16/10] w-full overflow-hidden rounded-[16px]">
                      <Image
                        fill
                        className="bg-[#000000] object-cover contrast-75"
                        alt={project.title}
                        src={project.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        quality={70}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-400/10 text-blue-400 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-mono mt-2"
                    >
                      View Project <Link2 size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-gray-900/50 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-display)] tracking-tight">Get In Touch</h2>
            <p className="text-gray-400">Let&apos;s build something amazing together.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <IconMessageCircle className="text-blue-400" />
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center">
                      <IconMail size={20} className="text-blue-400" />
                    </div>
                    <span>roneetbala2002@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center">
                      <IconBrandLinkedin size={20} className="text-blue-400" />
                    </div>
                    <span>roneetbala</span>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = {
                  name: (form.elements.namedItem('name') as HTMLInputElement).value,
                  email: (form.elements.namedItem('email') as HTMLInputElement).value,
                  message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
                };

                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  if (res.ok) alert('Message sent successfully!');
                  else alert('Something went wrong. Please try again.');
                } catch (err) {
                  console.error(err);
                  alert('Error sending message');
                }
              }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder:text-gray-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder:text-gray-600"
                  placeholder="Your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                Send Message
                <IconSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
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
