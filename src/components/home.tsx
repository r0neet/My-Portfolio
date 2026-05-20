"use client"
import { useState, lazy, Suspense, useRef, useEffect } from 'react';
import { MenuIcon, XCircle, Link2, Mail, LinkedinIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import { CarouselDemo } from './carousel-demo';
import { CometCard } from "@/components/ui/comet-card";
import { Cover } from "@/components/ui/cover";
import { ImagesBadge } from "@/components/ui/images-badge";
import {
  IconBrandLinkedin,
  IconMail,
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
      title: "TikTok data set data analysis",
      description: "A predictive model that can determine whether a video contains a claim or offers an opinion.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://coursera.org/share/cf6b9ae39a0dfcb9b3df99038e2beacd",
      images: ["/eda.webp", "/eda2.webp"],
      image: ""
    },
    {
      title: "space runner",
      description: "if you are bored so far play a game i build using react !",
      tags: ["Next.js", "Tailwind", "Firebase"],
      link: "https://space-runner-roan.vercel.app/",
      image: "/space_runner.webp"
    },
    {
      title: "Airbnb Dashboard",
      description: "A Data visualization of the Airbnb dataset.",
      tags: ["TypeScript", "GraphQL", "PostgreSQL"],
      link: "https://public.tableau.com/app/profile/roneet.bala/viz/Airbnb2019_Dashboard/Dashboard1",
      image: "/tablue.webp"
    },
  ];

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    { type: "image", src: "/image.webp" },
    { type: "image", src: "/IMG_9371.webp" },
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
            <a href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors">About</a>
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
      <section className="pt-24 md:pt-32 pb-8 md:pb-16 px-4">
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
          <div className="flex-1 flex justify-center overflow-hidden mt-6 md:mt-0">
            <Image
              src="/hero.webp"
              alt="Your Profile"
              className="rounded-2xl w-full h-auto md:max-w-md object-cover shadow-2xl"
              width={700}
              height={700}
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Cover Demo Section */}
        <div className="mt-10 md:mt-20">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-4 md:py-6 text-white font-[family-name:var(--font-display)]">
            Build amazing websites <br /> at <Cover className="text-blue-400">warp speed</Cover>
          </h1>
        </div>
      </section>

      {/* Macbook Scroll Hero Section - lazy loaded */}
      <LazySection fallback={
        <div className="pt-8 w-full">
          <div className="block md:hidden min-h-[140vh] py-16" />
          <div className="hidden md:block min-h-[200vh]" />
        </div>
      }>
        <Suspense fallback={
          <div className="pt-8 w-full">
            <div className="block md:hidden min-h-[140vh] py-16" />
            <div className="hidden md:block min-h-[200vh]" />
          </div>
        }>
          <div className="pt-8">
            <MacbookScrollDemo />
          </div>
        </Suspense>
      </LazySection>

      {/* About Section */}
      <section id="about" className="py-10 md:py-16 bg-gray-800/50 px-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={`Gallery image ${index + 1}`}
                    className="rounded-lg hover:scale-105 transition-transform duration-300 w-full h-48 md:h-auto object-cover"
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
                    className="rounded-lg hover:scale-105 transition-transform duration-300 w-full h-48 md:h-auto object-cover"
                    poster=""
                    width={400}
                    height={400}
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

      {/* Resume Badge Section */}
      <section className="py-8 bg-black">
        <div className="flex h-[10rem] w-full items-center justify-center">
          <a href="/Resume%20(2).pdf" download className="cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <ImagesBadge
              text="here is my resume!"
              folderSize={{ width: 64, height: 48 }}
              teaserImageSize={{ width: 40, height: 28 }}
              hoverImageSize={{ width: 96, height: 64 }}
              hoverTranslateY={-60}
              hoverSpread={35}
              images={[
                "https://assets.aceternity.com/pro/agenforce-1.webp",
                "https://assets.aceternity.com/pro/agenforce-2.webp",
                "https://assets.aceternity.com/pro/agenforce-3.webp",
              ]}
            />
          </a>
        </div>
      </section>

      {/* Hero Scroll Gallery Section - lazy loaded */}
      <LazySection fallback={<div className="h-[48rem] md:h-[60rem] w-full" />}>
        <Suspense fallback={<div className="h-[48rem] md:h-[60rem] w-full" />}>
          <HeroScrollDemo />
        </Suspense>
      </LazySection>

      <div className="max-w-5xl mx-auto px-6 my-8 md:my-16">
        <div className="text-gray-400 text-center text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto font-medium">
          <p>A beginner photographer sees the world with curiosity and creativity.</p>
          <p>They experiment with angles, light, and moments to improve every day.</p>
          <p>Each photograph becomes a step toward mastering the art of storytelling.</p>
          <p>Mistakes turn into lessons, helping them discover their unique style.</p>
          <p>With passion behind the lens, every click captures a new experience.</p>
        </div>
      </div>

      {/*key components*/}

      {/* Key Components Section */}
      <section className="py-12 md:py-24 relative overflow-hidden bg-black">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <h2 className="px-4 text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 md:mb-16 tracking-tighter relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-500/50 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] uppercase">
          My Key Components
        </h2>

        {/* Transparent Plates with Infinite Scroll */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-6 md:py-12 animate-marquee whitespace-nowrap flex gap-8 [will-change:transform]">
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
                    className="relative group bg-[#0A0A0F]/80 backdrop-blur-xl border border-blue-500/20 px-8 py-4 rounded-full text-blue-50 font-mono text-sm tracking-widest uppercase transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-900/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:text-blue-200 overflow-hidden cursor-default"
                  >
                    {/* Hover light sweep effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
                    
                    <span className="relative z-10 flex items-center gap-3">
                      {/* Pulsing indicator */}
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] group-hover:animate-ping" />
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worked With Section */}
      <section className="py-12 md:py-24 relative overflow-hidden bg-black">
        <h2 className="px-4 text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 md:mb-16 tracking-tighter relative z-10 text-white uppercase">
          WORKED WITH
        </h2>
        <CarouselDemo />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="px-4 text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 md:mb-16 tracking-tighter relative z-10 text-white uppercase">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <CometCard key={index}>
                <div
                  className="card flex flex-col items-stretch rounded-[16px] border border-gray-700 bg-[#2C2E33] p-2 saturate-0 md:p-4 h-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[16/10] w-full overflow-hidden rounded-[16px] flex gap-2">
                      {project.images ? (
                        project.images.map((img, i) => (
                          <div key={i} className="relative flex-1 h-full rounded-[8px] overflow-hidden">
                            <Image
                              width={800}
                              height={600}
                              className="w-full h-full bg-[#000000] object-cover contrast-75"
                              alt={`${project.title} ${i + 1}`}
                              src={img}
                              sizes="(max-width: 768px) 50vw, 16vw"
                              loading="lazy"
                              quality={70}
                              style={{
                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                              }}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            width={800}
                            height={600}
                            className="w-full h-full bg-[#000000] object-cover contrast-75"
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
                      )}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

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
