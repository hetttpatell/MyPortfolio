import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, FileText, ArrowRight, Code, Database, Terminal, Shield, Sparkles } from 'lucide-react';

const Github = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={{ width: props.size || 24, height: props.size || 24 }}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={{ width: props.size || 24, height: props.size || 24 }}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const RevealDashboard = ({ onReturnToIDE }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Staggered slide up for dashboard content
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-reveal',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power4.out', delay: 0.2 }
      );

      // Pulse effect for neon accents
      gsap.to('.neon-glow', {
        boxShadow: '0 0 15px rgba(56, 189, 248, 0.6)',
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'LeadFlow SaaS',
      desc: 'Multi-tenant WhatsApp messaging automation platform.',
      details: 'Solves webhook idempotency via unique wamid caching with Redis. Implemented token-bucket rate limiting and isolated schemas via Supabase Row-Level Security.',
      tech: ['React', 'Supabase', 'Redis', 'Node.js'],
      color: 'border-[#38bdf8] text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]',
      icon: Terminal,
      link: 'https://automation-frontend-tjv3.vercel.app'
    },
    {
      title: 'ClientOS Booking CRM',
      desc: 'Booking CRM tailored for Indian service merchants.',
      details: 'Features a hosted storefront portal alongside an embeddable customer booking widget. Isolated tenant sessions with Supabase RLS and integrated Razorpay payments.',
      tech: ['Next.js', 'Express', 'Supabase RLS', 'Razorpay'],
      color: 'border-[#a855f7] text-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
      icon: Code,
      link: '#'
    },
    {
      title: 'Nakshatraloka Platform',
      desc: 'Astrology & spiritual services web platform.',
      details: 'Features a full-stack architecture with modular React frontend components, secure Node.js/Express REST APIs, and integrated MongoDB database collections.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      color: 'border-[#3b82f6] text-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
      icon: Terminal,
      link: 'https://nakshatraloka.com'
    },
    {
      title: 'Khushi Films Website',
      desc: 'Cinematic video portfolio page for a film studio.',
      details: 'Features extensive GSAP ScrollTrigger timelines, Lenis smooth scrolling, route animations, and a Three.js 3D rotating lens mesh that reacts to user scroll.',
      tech: ['React', 'GSAP', 'Lenis Scroll', 'Three.js'],
      color: 'border-[#e11d48] text-[#e11d48] shadow-[0_0_15px_rgba(225,29,72,0.15)] hover:shadow-[0_0_20px_rgba(225,29,72,0.3)]',
      icon: Sparkles,
      link: 'https://khushifilm.com'
    },
    {
      title: 'House of Biryani & Rolls',
      desc: 'Digital restaurant menu with a Mughal editorial theme.',
      details: 'Designed with a burgundy/gold palette, GSAP staggers for category updates, custom-drawn inline SVG vectors, and a responsive single/double grid toggle.',
      tech: ['Vite', 'GSAP', 'Tailwind CSS', 'SVG Vectors'],
      color: 'border-[#f59e0b] text-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]',
      icon: Code,
      link: 'https://houseofbiryaniandrolls.com'
    },
    {
      title: 'AapRaksha Android App',
      desc: 'Acoustic voice anomaly detection Android system.',
      details: '1st Runner-Up at JG Hackathon 2025. Utilizes a TensorFlow Lite YAMNet classifier in the background to detect scream alerts and issue SMS GPS location links.',
      tech: ['Java (Android)', 'TensorFlow Lite', 'Gemini API', 'Firebase'],
      color: 'border-[#10b981] text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]',
      icon: Shield,
      link: '#'
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen bg-[#0a0a0c] text-slate-100 flex flex-col font-sans select-text select-none overflow-y-auto pb-16"
    >
      {/* Neon glowing grid lines on background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Header */}
      <header className="sticky top-0 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-zinc-900 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-2 font-mono text-sm">
          <span className="text-[#38bdf8] font-bold">&lt;HP /&gt;</span>
          <span className="text-zinc-400">hetpatel.dev</span>
        </div>
        <button 
          onClick={onReturnToIDE}
          className="neon-glow px-4 py-1.5 rounded-full bg-zinc-900 border border-sky-500/40 text-sky-400 hover:text-sky-300 font-mono text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-105"
        >
          &lt; Return to IDE /&gt;
        </button>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto w-full px-6 flex-1 mt-12 relative">
        {/* Hero Section */}
        <section className="mb-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6 animate-reveal">
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider font-mono">
              Available for Hire
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Het Patel
            </h1>
            <p className="text-2xl font-semibold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent leading-relaxed">
              Full-Stack Developer — Fresher
            </p>
            <p className="text-zinc-400 max-w-xl text-base leading-relaxed leading-7">
              Building high-performance web applications, multi-tenant SaaS products, and mobile systems. Dedicated to engineering robust database designs, integrations, and fluid user experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start items-center space-x-4 pt-2">
              <a href="mailto:hetpatel@example.com" className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-sky-500/40 flex items-center justify-center text-zinc-400 hover:text-sky-400 transition duration-200">
                <Mail size={18} />
              </a>
              <a href="https://linkedin.com/in/hetpatel" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-purple-500/40 flex items-center justify-center text-zinc-400 hover:text-purple-400 transition duration-200">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/hetpatel" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-emerald-500/40 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition duration-200">
                <Github size={18} />
              </a>
              <a href="https://example.com/het-patel-resume.pdf" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/40 flex items-center justify-center text-zinc-400 hover:text-amber-400 transition duration-200">
                <FileText size={18} />
              </a>
            </div>
          </div>

          <div className="w-[280px] h-[280px] relative animate-reveal flex items-center justify-center">
            {/* Glowing neon shapes */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-purple-500 opacity-20 blur-2xl animate-pulse" />
            <div className="w-56 h-56 rounded-full border border-sky-500/30 flex items-center justify-center relative">
              <div className="w-48 h-48 rounded-full border border-purple-500/20 flex items-center justify-center">
                <Terminal size={72} className="text-sky-400 animate-bounce" />
              </div>
              <div className="absolute -top-2 left-10 w-4 h-4 bg-sky-500 rounded-full blur-[2px] animate-ping" />
              <div className="absolute bottom-6 -right-1 w-3 h-3 bg-purple-500 rounded-full blur-[2px]" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <div className="flex items-center space-x-3 mb-10 animate-reveal">
            <h2 className="text-3xl font-extrabold text-white">Selected Works</h2>
            <div className="h-[2px] bg-zinc-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div 
                key={i}
                className={`animate-reveal p-6 rounded-lg bg-zinc-900/40 border hover:bg-zinc-900/70 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between ${proj.color}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <proj.icon size={20} />
                    <span className="text-[10px] font-mono text-zinc-500">PROJ {i+1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{proj.title}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{proj.desc}</p>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">{proj.details}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-800/60">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="bg-zinc-800 text-zinc-300 text-[9px] font-mono px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  {proj.link !== '#' && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-xs text-sky-400 font-semibold hover:underline"
                    >
                      <span>Visit Live Link</span>
                      <ArrowRight size={12} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="flex items-center space-x-3 mb-10 animate-reveal">
            <h2 className="text-3xl font-extrabold text-white">Skills Matrix</h2>
            <div className="h-[2px] bg-zinc-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-reveal">
            <div className="p-5 rounded-lg bg-zinc-900/30 border border-zinc-800">
              <div className="flex items-center space-x-2 text-sky-400 mb-4 font-mono text-sm font-semibold border-b border-zinc-800 pb-2">
                <Code size={16} />
                <span>Frontend Stack</span>
              </div>
              <ul className="text-xs space-y-2 text-zinc-400 font-mono">
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript / JS</li>
                <li>GSAP / Framer Motion</li>
                <li>Three.js</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-zinc-900/30 border border-zinc-800">
              <div className="flex items-center space-x-2 text-purple-400 mb-4 font-mono text-sm font-semibold border-b border-zinc-800 pb-2">
                <Database size={16} />
                <span>Backend & DB</span>
              </div>
              <ul className="text-xs space-y-2 text-zinc-400 font-mono">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Java (Android API)</li>
                <li>Supabase RLS</li>
                <li>PostgreSQL / Redis</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-zinc-900/30 border border-zinc-800">
              <div className="flex items-center space-x-2 text-emerald-400 mb-4 font-mono text-sm font-semibold border-b border-zinc-800 pb-2">
                <Terminal size={16} />
                <span>Tools & Config</span>
              </div>
              <ul className="text-xs space-y-2 text-zinc-400 font-mono">
                <li>Git & GitHub</li>
                <li>Vite Bundler</li>
                <li>npm / yarn</li>
                <li>Postman</li>
                <li>VS Code</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-zinc-900/30 border border-zinc-800">
              <div className="flex items-center space-x-2 text-amber-500 mb-4 font-mono text-sm font-semibold border-b border-zinc-800 pb-2">
                <Sparkles size={16} />
                <span>Intelligence & Audio</span>
              </div>
              <ul className="text-xs space-y-2 text-zinc-400 font-mono">
                <li>TensorFlow Lite</li>
                <li>YAMNet Classifiers</li>
                <li>Gemini API Integration</li>
                <li>Lenis Smooth Scroll</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 animate-reveal bg-gradient-to-r from-sky-950/20 to-purple-950/20 border border-zinc-800/80 rounded-xl p-8 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-extrabold text-white">Let's Build Something Together</h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            I am currently open to full-stack, frontend, or backend fresher opportunities. If you like this interactive project, let's connect!
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center font-mono text-xs">
            <a href="mailto:hetpatel@example.com" className="bg-[#0c0c0e] hover:bg-zinc-900 border border-zinc-800 hover:border-sky-500/40 text-sky-400 px-4 py-2.5 rounded transition duration-150 inline-flex items-center space-x-2">
              <Mail size={14} />
              <span>hetpatel@example.com</span>
            </a>
            <a href="https://linkedin.com/in/hetpatel" target="_blank" rel="noreferrer" className="bg-[#0c0c0e] hover:bg-zinc-900 border border-zinc-800 hover:border-purple-500/40 text-purple-400 px-4 py-2.5 rounded transition duration-150 inline-flex items-center space-x-2">
              <Linkedin size={14} />
              <span>LinkedIn Connect</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RevealDashboard;
