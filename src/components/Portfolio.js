import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  Mail,
  FileText,
  ArrowDownRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Terminal,
  Code,
  Database,
  Sliders,
  Award,
  Sparkles,
  MapPin,
  Calendar,
  Briefcase
} from 'lucide-react';

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
import TerminalBox from './TerminalBox';

export default function Portfolio({ onReturnToIDE }) {
  const history = useHistory();
  const [showMoreWork, setShowMoreWork] = useState(false);
  const containerRef = useRef(null);

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'LeadFlow SaaS',
      desc: 'Multi-tenant WhatsApp messaging automation platform.',
      details: 'Built to handle WhatsApp communication at scale. Solves webhook idempotency via unique message ID deduplication with Redis cache. Implements token-bucket rate limiting and enforces strict tenant boundaries using Supabase Row-Level Security (RLS).',
      tech: ['React', 'Supabase RLS', 'Redis', 'Node.js'],
      image: '/LeadFlow.png',
      live: 'https://automation-frontend-tjv3.vercel.app',
      github: 'https://github.com/hetttpatell/Automation-Frontend',
      lines: [
        { type: 'comment', text: 'LeadFlow stack & initialization log' },
        { type: 'command', text: 'npm install --save @supabase/supabase-js ioredis' },
        { type: 'output', text: 'Checking tenant boundary schemas... OK\nConfiguring Redis webhook idempotency client (wamid check)...' },
        { type: 'success', text: 'Done in 1.1s. Meta API integration online.' }
      ]
    },
    {
      id: 2,
      title: 'ClientOS CRM',
      desc: 'Booking CRM tailored for Indian service merchants.',
      details: 'Features a hosted storefront portal alongside an embeddable customer booking widget. Implements isolated tenant sessions with Supabase RLS and integrates Razorpay payments for handling advance deposits and invoices.',
      tech: ['Next.js', 'Express', 'Supabase RLS', 'Razorpay'],
      image: '', // Under development
      status: 'In Development',
      live: '#',
      github: 'https://github.com/hetttpatell', // main profile
      lines: [
        { type: 'comment', text: 'ClientOS Booking CRM setup' },
        { type: 'command', text: 'npm run build-storefront' },
        { type: 'output', text: 'Integrating: Hosted Booking Widget\nConfiguring Razorpay INR payment channels...' },
        { type: 'success', text: 'Compilation successful. Awaiting release.' }
      ]
    },
    {
      id: 3,
      title: 'Hospital Portal',
      desc: 'Clinic-facing web portal for hospital and appointment management.',
      details: 'Provides appointment booking, patient records lookup, and doctor schedule listings. Built with a responsive interface to ensure doctors and administrators can access it seamlessly on any device.',
      tech: ['React', 'Express', 'MongoDB', 'REST APIs'],
      image: '/Doctor.png',
      live: 'https://doctor-theta-three.vercel.app',
      github: 'https://github.com/hetttpatell/Doctor',
      lines: [
        { type: 'comment', text: 'Hospital Portal bootstrap' },
        { type: 'command', text: 'npm run start --db=mongodb' },
        { type: 'output', text: 'Connecting to MongoDB Atlas cluster...\nLoaded collections: doctors, bookings' },
        { type: 'success', text: 'Server listening on port 5000' }
      ]
    },
    {
      id: 4,
      title: 'Nakshatraloka',
      desc: 'Astrology & spiritual services web platform.',
      details: 'Features a modular React frontend using reusable components. Integrates secure backend REST APIs developed in Node.js/Express with MongoDB storage for consultations and user records.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/Nakshatraloka.png',
      live: 'https://nakshatraloka.com',
      github: 'https://github.com/hetttpatell/Nakshatraloko-',
      lines: [
        { type: 'comment', text: 'Nakshatraloka server init' },
        { type: 'command', text: 'npm run dev-api' },
        { type: 'output', text: 'Connected to MongoDB (nakshatraloka_prod)\nConfiguring secure Express router and endpoints...' },
        { type: 'success', text: 'Done in 0.9s. Ready for consultation requests.' }
      ]
    },
    {
      id: 5,
      title: 'Khushi Films',
      desc: 'Cinematic video portfolio page for a film studio.',
      details: 'Engineered with extensive GSAP ScrollTrigger timelines, Lenis smooth scrolling, and Framer Motion route transitions. Includes a custom-written Three.js 3D rotating lens component reacting to user scroll.',
      tech: ['React', 'GSAP', 'Lenis Scroll', 'Three.js'],
      image: '/KhushiFils.png',
      live: 'https://khushifilm.com',
      github: 'https://github.com/hetttpatell/Khushi-Films',
      lines: [
        { type: 'comment', text: 'Khushi Films static graphics build' },
        { type: 'command', text: 'vite build --mode=production' },
        { type: 'output', text: 'Compiling WebGL fragment shaders for camera lens...\nPacking panoramic video assets...' },
        { type: 'success', text: 'Done. Output saved to dist/ (452KB)' }
      ]
    },
    {
      id: 6,
      title: 'House of Biryani & Rolls',
      desc: 'Luxury digital restaurant menu with Mughal styling.',
      details: 'Designed with a burgundy/gold palette and warm typography. Employs GSAP stagger animations to reveal menu sections, custom-drawn inline SVGs, and a grid toggle for single/double column mobile view.',
      tech: ['Vite', 'GSAP', 'Tailwind CSS', 'SVG Vectors'],
      image: '/Houseofbiryaniandrolls.png',
      live: 'https://houseofbiryaniandrolls.com',
      github: 'https://github.com/hetttpatell/Biryani-website',
      lines: [
        { type: 'comment', text: 'Mughal editorial menu renderer' },
        { type: 'command', text: 'npm run compile-menu' },
        { type: 'output', text: 'Parsing SVG culinary graphics...\nApplying GSAP category stagger arrays...' },
        { type: 'success', text: 'Done. Static menu generated.' }
      ]
    },
    {
      id: 7,
      title: 'AapRaksha App',
      desc: 'Android safety application with voice anomaly distress detection.',
      details: 'Awarded 1st Runner-Up at JG Hackathon 2025. Utilizes a TensorFlow Lite YAMNet classifier in the background to detect scream alerts. Dispatches SMS notifications with GPS coordinates and publishes coordinates to Firebase Realtime Database.',
      tech: ['Java (Android)', 'TensorFlow Lite', 'Gemini API', 'Firebase'],
      image: '',
      live: '#',
      github: 'https://github.com/hetttpatell/Aapraksha',
      lines: [
        { type: 'comment', text: 'Android background listener' },
        { type: 'command', text: './gradlew assembleDebug' },
        { type: 'output', text: 'Loading YAMNet audio classifier model...\nInitializing Android LocationManager and SMS managers...' },
        { type: 'success', text: 'Build Success. APK generated.' }
      ]
    },
    {
      id: 8,
      title: 'Aura Pixel',
      desc: 'Wedding photography/videography brand site with mandap-themed hero.',
      details: 'Features a mandap-themed hero experience with ornate 3D pillars and a silk canopy animated via GSAP. Scroll behaviors are controlled by Lenis and isolated to the weddings route to prevent global conflicts.',
      tech: ['React', 'GSAP', 'Lenis Scroll', 'Tailwind CSS'],
      image: '/Aurapixel.png',
      live: 'https://aurapixel.in',
      github: 'https://github.com/hetttpatell/Aura-Pixel',
      lines: [
        { type: 'comment', text: 'Mandap layout loader' },
        { type: 'command', text: 'npm run build-assets' },
        { type: 'output', text: 'Isolating Lenis scroll limits to wedding root .wp-root...\nInjecting warm wedding styling variables...' },
        { type: 'success', text: 'Done. Wedding layout ready.' }
      ]
    },
    {
      id: 9,
      title: 'Shree Sneh Foundation',
      desc: 'NGO website built to showcase mission, programs, and donation details.',
      details: 'Developed a clean, modern website for an NGO client to display their social initiatives, donation methods, and upcoming campaigns to make it easy for donors to support.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      image: '/Shreesnehfoundation-NGO.png',
      live: 'https://shreesnehfoundation.in',
      github: 'https://github.com/hetttpatell/NGO-',
      lines: [
        { type: 'comment', text: 'Shree Sneh portal deployment' },
        { type: 'command', text: 'npm run deploy-prod' },
        { type: 'output', text: 'Optimizing static layout elements\nDeploying production bundle to host server...' },
        { type: 'success', text: 'Deployment successful. Site live.' }
      ]
    },
    {
      id: 10,
      title: 'Fitness Webpage',
      desc: 'A high-performance landing page for a fitness brand.',
      details: 'Designed with structured exercise category sections, workout grids, and customer reviews to drive member bookings and online training signups.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      image: '/Fitness.png',
      live: 'https://fitness-webpage-blond.vercel.app',
      github: 'https://github.com/hetttpatell/fitness-webpage',
      lines: [
        { type: 'comment', text: 'Fitness portal build' },
        { type: 'command', text: 'npm run build' },
        { type: 'output', text: 'Bundling responsive workout sections\nCaching media query assets...' },
        { type: 'success', text: 'Vite build completed. Ready for hosting.' }
      ]
    },
    {
      id: 11,
      title: 'Growth Edge',
      desc: 'Business dashboard landing page.',
      details: 'Displays interactive business stats, responsive charts, and tracking information to help merchants review their client conversions and invoice details.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      image: '/Growth-Edge.png',
      live: 'https://growth-edge-sigma.vercel.app',
      github: 'https://github.com/hetttpatell/GrowthEdge',
      lines: [
        { type: 'comment', text: 'Growth Edge setup' },
        { type: 'command', text: 'npm run dev' },
        { type: 'output', text: 'Bootstrapping data visualizers...\nMapping responsive widget grid items...' },
        { type: 'success', text: 'Done. Server running locally.' }
      ]
    }
  ];

  // GSAP Scroll Reveal effect
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = containerRef.current.querySelectorAll('.scroll-reveal');
    
    // Set initial state
    gsap.set(revealElements, { opacity: 0, y: 30 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              overwrite: 'auto'
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [showMoreWork]);

  // Stagger reveal on Hero elements on mount
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set('.hero-stagger', { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-stagger',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.1
        }
      );

      // Faint subtle rotation bounce for stacked thumbnails
      gsap.fromTo(
        '.hero-thumbnail',
        { rotate: (i) => [-6, 3, -2][i] * 1.5, scale: 0.9, opacity: 0 },
        {
          rotate: (i) => [-6, 3, -2][i],
          scale: 1,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.6
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnterIDE = () => {
    // If in overlay mode, call the return function
    if (onReturnToIDE) {
      onReturnToIDE();
    } else {
      // Standalone mode - route to /files (IDE clone)
      history.push('/files');
    }
  };

  const featuredProjects = projects.slice(0, 6);
  const moreProjects = projects.slice(6);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-bg-base text-text-primary font-sans select-text scroll-smooth"
    >
      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-border-hairline select-none">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleScrollTo('hero')}
            className="flex items-center space-x-2 font-mono text-sm cursor-pointer"
          >
            <span className="text-accent-rust font-bold font-mono">&lt;HP /&gt;</span>
            <span className="text-text-muted hover:text-text-primary transition font-mono">hetpatel.dev</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider text-text-muted">
            <button onClick={() => handleScrollTo('about')} className="hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 py-0.5 rounded">
              ABOUT
            </button>
            <button onClick={() => handleScrollTo('skills')} className="hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 py-0.5 rounded">
              SKILLS
            </button>
            <button onClick={() => handleScrollTo('projects')} className="hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 py-0.5 rounded">
              PROJECTS
            </button>
            <button onClick={() => handleScrollTo('experience')} className="hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 py-0.5 rounded">
              EXPERIENCE
            </button>
            <button onClick={() => handleScrollTo('contact')} className="hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 py-0.5 rounded">
              CONTACT
            </button>
          </div>

          {/* CTA / Return Mode */}
          <button
            onClick={handleEnterIDE}
            className="px-4 py-1.5 rounded bg-bg-surface border border-border-hairline text-xs font-mono font-semibold tracking-wider transition-all duration-300 hover:border-accent-rust hover:text-accent-rust-soft hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust"
          >
            {onReturnToIDE ? '< Return to IDE />' : '< Launch IDE />'}
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-6 py-16 overflow-hidden bg-grid-pattern [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_65%,transparent_100%)] select-none border-b border-border-hairline"
      >
        {/* Eyebrow Stat - Absolutely positioned on the top left like the reference */}
        <div className="absolute top-8 left-8 sm:left-16 hero-stagger font-mono text-[10px] sm:text-xs text-text-muted flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-rust animate-pulse" />
          <span>09 PROJECTS SHIPPED</span>
          <span className="text-border-hairline">/</span>
          <span>EST. 2023</span>
        </div>

        <div className="max-w-6xl w-full flex flex-col justify-center items-center relative z-10 space-y-12 mt-8">
          
          {/* Headline - "FULL-STACK DEVELOPER" styled like the big "CREATIVE DESIGNER" */}
          <div className="text-center w-full max-w-5xl space-y-1">
            <h1 className="hero-stagger text-5xl sm:text-7xl lg:text-[8.5rem] font-display font-extrabold tracking-tighter text-text-primary uppercase leading-[0.85]">
              Full-Stack
              <br />
              Developer
            </h1>
          </div>

          {/* Overlapping Content Section (Card + Photo + Name) */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-center justify-center relative py-6">
            
            {/* Left Block - Dark role list card */}
            <div className="hero-stagger md:col-span-5 bg-bg-surface-raised border border-border-hairline p-8 md:p-10 rounded shadow-2xl relative z-20 flex flex-col justify-center space-y-4 md:translate-x-6 min-h-[220px]">
              <div className="font-mono text-xs sm:text-sm text-text-primary tracking-wide space-y-3.5">
                <div className="flex items-center space-x-2">
                  <span className="text-accent-rust font-bold">/</span>
                  <span>FULL-STACK SAAS BUILDS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-accent-rust font-bold">/</span>
                  <span>SECURE DATABASE SCHEMAS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-accent-rust font-bold">/</span>
                  <span>ANIMATION DRIVEN WEB UX</span>
                </div>
              </div>
            </div>

            {/* Middle Caption - Vertical rotated text */}
            <div className="hidden md:flex md:col-span-1 justify-center relative z-20">
              <div className="[writing-mode:vertical-rl] text-right font-mono text-[9px] tracking-widest text-text-muted uppercase h-32 flex items-center justify-center border-r border-border-hairline pr-3">
                BASED IN AHMEDABAD, INDIA
              </div>
            </div>

            {/* Right Block - Portrait image + Name overlay */}
            <div className="hero-stagger md:col-span-6 flex flex-col sm:flex-row items-center justify-start sm:space-x-8 space-y-4 sm:space-y-0 md:-translate-x-4 relative z-10">
              
              {/* Photo Frame */}
              <div className="relative group overflow-hidden border border-border-hairline bg-bg-surface p-1 rounded-sm w-[210px] h-[260px] shadow-2xl shrink-0">
                <img
                  src="/profile.jpeg"
                  alt="Het Patel"
                  className="w-full h-full object-cover rounded-sm filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Name Treatment */}
              <div className="text-center sm:text-left space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-bold tracking-widest text-text-primary uppercase leading-none">
                  Het Patel
                </div>
                <div className="text-[10px] font-mono tracking-widest text-accent-rust-soft uppercase">
                  SOFTWARE ENGINEER
                </div>
              </div>

            </div>

          </div>

          {/* Centered Intro pitch styled like the reference footer pitch */}
          <div className="hero-stagger text-center max-w-2xl px-6 space-y-6 pt-4">
            <p className="font-mono text-xs sm:text-sm text-text-muted leading-relaxed uppercase tracking-wide">
              I am an experienced full-stack developer, who designs and builds high-performance web applications and automation SaaS products.
            </p>
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent-rust text-bg-base font-mono font-bold text-xs uppercase tracking-wider hover:bg-accent-rust-soft transition duration-300 rounded shadow-md hover:shadow-accent-rust/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust"
            >
              View Work ↘
            </button>
          </div>

        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 border-b border-border-hairline px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="scroll-reveal flex items-center space-x-4">
            <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight">01 / ABOUT ME</h2>
            <div className="h-px bg-border-hairline flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="scroll-reveal md:col-span-8 space-y-6 font-sans text-sm leading-relaxed text-text-muted">
              <p>
                Hello, I am Het Patel. I am currently pursuing my Bachelor of Computer Applications (BCA) at{' '}
                <span className="text-text-primary font-medium">JG University</span> (2023–2026). Over the past three
                years, I've transformed from writing basic scripts to launching full-stack SaaS tools and deploying projects for clients.
              </p>
              <p>
                Under my freelance collective, <span className="text-text-primary font-medium">Panicle Tech</span>, I collaborate with local and regional clients to design high-speed digital storefronts, custom audio models, and cinematic portfolios. I focus on developing clean, structured architectures with secure integration layers, utilizing tech like Supabase RLS and Redis.
              </p>
              <p>
                My approach to coding is pragmatic: I avoid unnecessary layers and prioritize clean database schemas, fast load times, and intuitive designs that solve real business needs.
              </p>
            </div>

            <div className="scroll-reveal md:col-span-4 bg-bg-surface border border-border-hairline p-5 rounded space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-accent-rust-soft">
                <Briefcase size={14} />
                <span>CURRENTLY</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                Actively looking for full-time junior full-stack, frontend, or backend developer roles. Open to relocation or remote opportunities.
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-text-muted">
                <MapPin size={14} className="text-text-muted" />
                <span>Ahmedabad, India (Open to relocate)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-24 border-b border-border-hairline px-6 bg-bg-surface/10">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="scroll-reveal flex items-center space-x-4">
            <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight">02 / SKILLS MATRIX</h2>
            <div className="h-px bg-border-hairline flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Frontend */}
            <div className="scroll-reveal bg-bg-surface border border-border-hairline p-5 rounded flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center space-x-2 text-accent-rust border-b border-border-hairline pb-2 mb-4">
                  <Code size={16} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Frontend</span>
                </div>
                <p className="text-[11px] text-text-muted font-sans mb-4">Building clean, interactive user interfaces with optimal rendering speeds.</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Lenis', 'Three.js', 'Vanilla HTML/JS'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-bg-surface-raised border border-border-hairline text-text-primary px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="scroll-reveal bg-bg-surface border border-border-hairline p-5 rounded flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center space-x-2 text-accent-rust-soft border-b border-border-hairline pb-2 mb-4">
                  <Database size={16} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Backend & APIs</span>
                </div>
                <p className="text-[11px] text-text-muted font-sans mb-4">Architecting secure API routes, payment handlers, and background webhooks.</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'Express.js', 'Java (Android API)', 'Supabase RLS', 'REST API Design'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-bg-surface-raised border border-border-hairline text-text-primary px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & Caching */}
            <div className="scroll-reveal bg-bg-surface border border-border-hairline p-5 rounded flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center space-x-2 text-accent-rust border-b border-border-hairline pb-2 mb-4">
                  <Sliders size={16} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Storage</span>
                </div>
                <p className="text-[11px] text-text-muted font-sans mb-4">Managing transactional data security, lookup speeds, and cache states.</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['PostgreSQL', 'Redis', 'MongoDB', 'Firebase', 'Supabase'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-bg-surface-raised border border-border-hairline text-text-primary px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="scroll-reveal bg-bg-surface border border-border-hairline p-5 rounded flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center space-x-2 text-accent-rust-soft border-b border-border-hairline pb-2 mb-4">
                  <Sparkles size={16} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Tools & Ops</span>
                </div>
                <p className="text-[11px] text-text-muted font-sans mb-4">Leveraging modern bundlers, diagnostic utilities, and source control pipelines.</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Git & GitHub', 'Vite Bundler', 'npm / yarn', 'Postman', 'VS Code', 'TensorFlow Lite'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-bg-surface-raised border border-border-hairline text-text-primary px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="py-24 border-b border-border-hairline px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="scroll-reveal flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight">03 / PROJECTS</h2>
              <div className="h-px bg-border-hairline w-24 sm:w-48" />
            </div>
            <span className="text-[10px] font-mono text-text-muted">SCANNABLE COMMAND LOGS INCLUDED</span>
          </div>

          {/* Grid of Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="scroll-reveal flex flex-col justify-between bg-bg-surface border border-border-hairline p-6 rounded-md hover:border-accent-rust transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-text-muted">PROJECT 0{idx + 1}</span>
                    {project.status ? (
                      <span className="text-[10px] font-bold text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded uppercase">
                        {project.status}
                      </span>
                    ) : (
                      <span className="text-[9px] font-semibold text-accent-rust-soft border border-accent-rust/20 px-2 py-0.5 rounded uppercase">
                        SHIPPED
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-accent-rust-soft transition duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-muted font-mono mt-1 leading-normal">{project.desc}</p>
                  </div>

                  {/* Detail Panel */}
                  <p className="text-xs text-text-muted font-sans leading-relaxed">{project.details}</p>

                  {/* Terminal Box Logs */}
                  <div className="pt-2 select-text">
                    <TerminalBox lines={project.lines} label={`${project.title.toLowerCase().replace(/\s+/g, '-')}.sh`} />
                  </div>
                </div>

                {/* Tech & Links */}
                <div className="mt-6 pt-4 border-t border-border-hairline flex flex-col space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono bg-bg-surface-raised border border-border-hairline text-text-muted px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs font-mono pt-1">
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-accent-rust-soft hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 rounded"
                      >
                        Live Demo <ExternalLink size={12} className="ml-1" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-text-muted hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 rounded"
                    >
                      GitHub <Github size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Work Section */}
          {showMoreWork && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {moreProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="scroll-reveal flex flex-col justify-between bg-bg-surface border border-border-hairline p-6 rounded-md hover:border-accent-rust transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-text-muted font-mono">PROJECT 0{idx + 7}</span>
                      <span className="text-[9px] font-semibold text-accent-rust-soft border border-accent-rust/20 px-2 py-0.5 rounded uppercase">
                        SHIPPED
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-accent-rust-soft transition duration-200">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-muted font-mono mt-1 leading-normal">{project.desc}</p>
                    </div>

                    <p className="text-xs text-text-muted font-sans leading-relaxed">{project.details}</p>

                    <div className="pt-2">
                      <TerminalBox lines={project.lines} label={`${project.title.toLowerCase().replace(/\s+/g, '-')}.sh`} />
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-hairline flex flex-col space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[9px] font-mono bg-bg-surface-raised border border-border-hairline text-text-muted px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-xs font-mono pt-1">
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center text-accent-rust-soft hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 rounded"
                        >
                          Live Demo <ExternalLink size={12} className="ml-1" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-text-muted hover:text-text-primary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust px-1 rounded"
                      >
                        GitHub <Github size={12} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Expand Toggle */}
          <div className="scroll-reveal flex items-center justify-center pt-6">
            <button
              onClick={() => setShowMoreWork(!showMoreWork)}
              className="flex items-center space-x-2 px-6 py-2.5 bg-bg-surface border border-border-hairline rounded font-mono text-xs font-bold text-text-muted hover:text-text-primary hover:border-accent-rust transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust"
            >
              <span>{showMoreWork ? 'SHOW LESS' : 'VIEW MORE PROJECTS'}</span>
              {showMoreWork ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

        </div>
      </section>

      {/* 6. EXPERIENCE / TIMELINE */}
      <section id="experience" className="py-24 border-b border-border-hairline px-6 bg-bg-surface/10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="scroll-reveal flex items-center space-x-4">
            <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight">04 / TIMELINE</h2>
            <div className="h-px bg-border-hairline flex-1" />
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-border-hairline space-y-12 ml-4">
            
            {/* Milestone 1 */}
            <div className="scroll-reveal relative space-y-2">
              {/* Dot indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg-base border-2 border-accent-rust flex items-center justify-center font-mono text-[9px] text-accent-rust-soft">
                1
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-text-primary">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <span className="inline-flex items-center text-xs font-mono text-accent-rust-soft">
                  <Calendar size={12} className="mr-1.5" />
                  2023 – 2026 (Expected)
                </span>
              </div>
              <div className="text-xs text-text-muted font-sans">
                JG University • Ahmedabad, India
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans max-w-2xl">
                Deepening knowledge in application structures, relational database schemas, object-oriented concepts, and computational theory. Applied classroom projects directly into freelance workflows.
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="scroll-reveal relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg-base border-2 border-accent-rust flex items-center justify-center font-mono text-[9px] text-accent-rust-soft">
                2
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-text-primary">
                  Freelance Full-Stack Developer
                </h3>
                <span className="inline-flex items-center text-xs font-mono text-accent-rust-soft">
                  <Calendar size={12} className="mr-1.5" />
                  2024 – PRESENT
                </span>
              </div>
              <div className="text-xs text-text-muted font-sans">
                Panicle Tech • Freelance Clients
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans max-w-2xl">
                Founded a technical freelance collective. Delivered client projects including restaurant menus (House of Biryani & Rolls), film portfolios (Khushi Films), NGO portals (Shree Sneh Foundation), and specialized wedding UI systems (Aura Pixel). Built responsive interfaces integrated with custom GSAP scroll timelines.
              </p>
            </div>

            {/* Milestone 3 */}
            <div className="scroll-reveal relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg-base border-2 border-accent-rust flex items-center justify-center font-mono text-[9px] text-accent-rust-soft">
                3
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-text-primary flex items-center">
                  1st Runner-Up — JG Hackathon 2025 <Award size={14} className="ml-1.5 text-accent-rust-soft" />
                </h3>
                <span className="inline-flex items-center text-xs font-mono text-accent-rust-soft">
                  <Calendar size={12} className="mr-1.5" />
                  FEB 2025
                </span>
              </div>
              <div className="text-xs text-text-muted font-sans">
                JG University Hackathon Event
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans max-w-2xl">
                Co-developed AapRaksha, an offline-first Android security app. Built background services in Java, integrated Google's YAMNet audio classification model via TensorFlow Lite to detect scream alerts, and programmed automated SMS dispatches containing GPS locations to pre-set emergency contacts.
              </p>
            </div>

            {/* Milestone 4 */}
            <div className="scroll-reveal relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg-base border-2 border-accent-rust flex items-center justify-center font-mono text-[9px] text-accent-rust-soft">
                4
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-text-primary">
                  Shipped Core Products
                </h3>
                <span className="inline-flex items-center text-xs font-mono text-accent-rust-soft">
                  <Calendar size={12} className="mr-1.5" />
                  MID 2025 – PRESENT
                </span>
              </div>
              <div className="text-xs text-text-muted font-sans">
                LeadFlow & ClientOS Projects
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans max-w-2xl">
                Shipped LeadFlow, a multi-tenant WhatsApp messaging SaaS, solving Meta webhook retry duplication using unique message cache storage. Currently building ClientOS, an appointment CRM with embeddable client scheduling tools and Razorpay checkout triggers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-bg-base relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="scroll-reveal text-xs font-mono text-accent-rust-soft uppercase tracking-widest block">
            GET IN TOUCH
          </span>
          <h2 className="scroll-reveal text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-text-primary">
            Let's build something.
          </h2>
          <p className="scroll-reveal text-sm text-text-muted max-w-md mx-auto font-sans leading-relaxed">
            I am currently open to junior full-stack, frontend, or backend fresher roles. If you want to discuss a project, employment opportunities, or just chat about web architectures, reach out!
          </p>

          <div className="scroll-reveal flex flex-wrap gap-4 justify-center items-center font-mono text-xs pt-4">
            <a
              href="mailto:hetpatel@example.com"
              className="bg-bg-surface hover:bg-bg-surface-raised border border-border-hairline text-accent-rust-soft hover:text-text-primary px-5 py-3 rounded tracking-wider transition-all duration-300 inline-flex items-center space-x-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust"
            >
              <Mail size={14} />
              <span>hetpatel@example.com</span>
            </a>
            <a
              href="https://linkedin.com/in/hetpatel"
              target="_blank"
              rel="noreferrer"
              className="bg-bg-surface hover:bg-bg-surface-raised border border-border-hairline text-text-muted hover:text-text-primary px-5 py-3 rounded tracking-wider transition-all duration-300 inline-flex items-center space-x-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/hetpatel"
              target="_blank"
              rel="noreferrer"
              className="bg-bg-surface hover:bg-bg-surface-raised border border-border-hairline text-text-muted hover:text-text-primary px-5 py-3 rounded tracking-wider transition-all duration-300 inline-flex items-center space-x-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="https://example.com/het-patel-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-bg-surface hover:bg-bg-surface-raised border border-border-hairline text-text-muted hover:text-text-primary px-5 py-3 rounded tracking-wider transition-all duration-300 inline-flex items-center space-x-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-rust"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-8 px-6 border-t border-border-hairline text-center select-none bg-bg-base">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-accent-rust font-bold">&lt;HP /&gt;</span>
            <span>HET PATEL &copy; {new Date().getFullYear()}</span>
          </div>
          <p className="text-[10px]">
            Designed with the Rust & Graphite system. Modeled in plain React + Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
