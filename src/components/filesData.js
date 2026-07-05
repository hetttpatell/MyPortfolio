export const filesData = {
  'README.md': {
    name: 'README.md',
    path: 'README.md',
    type: 'md',
    content: `# Het Patel
### Full-Stack Developer — Fresher
*"Building high-performance web applications with modern tech stacks, automation, and engaging user experiences."*

---

## 🚀 Technical Expertise
* **Frontend**: React, Next.js, Tailwind CSS, TypeScript, GSAP, Framer Motion, Three.js
* **Backend & DB**: Node.js, Express, Supabase, PostgreSQL, Redis, Firebase
* **Other**: Java (Android), TensorFlow Lite (YAMNet), Gemini API Integration

---

## 📁 Featured Projects
* **LeadFlow**: Multi-tenant WhatsApp automation SaaS with webhook deduplication.
* **ClientOS**: Booking CRM platform with embedded widgets and multi-tenant RLS.
* **Nakshatraloka**: Full-stack astrology & spiritual services platform.
* **Khushi Films**: Immersive cinematic site with GSAP ScrollTrigger & Three.js lens.
* **House of Biryani**: Mughal editorial brand theme with custom SVG graphics.
* **AapRaksha**: Android safety app using TensorFlow Lite and Gemini API.

---

## 🏆 Key Achievements
* **1st Runner-Up**, JG Hackathon 2025 (AapRaksha project)
* Delivered production-grade booking widgets and client portals for freelancing customers.

---

## 🔗 Connect With Me
* 🌐 **GitHub**: [github.com/hetpatel](https://github.com/hetpatel)
* 💼 **LinkedIn**: [linkedin.com/in/hetpatel](https://linkedin.com/in/hetpatel)
* 📧 **Email**: [hetpatel@example.com](mailto:hetpatel@example.com)
* 📄 **Resume**: [Download Resume (PDF)](/about/resume.pdf)
`
  },
  'package.json': {
    name: 'package.json',
    path: 'package.json',
    type: 'json',
    content: `{
  "name": "het-patel-portfolio",
  "version": "2.1.0",
  "description": "Visual Studio Code Interactive Portfolio for Het Patel",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "portfolio": "reveal --mode=recruiter"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "express": "^4.18.2",
    "@supabase/supabase-js": "^2.38.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.2.2",
    "gsap": "^3.12.2",
    "lucide-react": "^0.292.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "jest": "^29.7.0"
  }
}`
  },
  '.env.example': {
    name: '.env.example',
    path: '.env.example',
    type: 'env',
    content: `# Contact & Info
CONTACT_EMAIL=hetpatel@example.com
AVAILABILITY=open_to_work
COFFEE_LEVEL=high

# Feature Flags
EASTER_EGG_ENABLED=true
REVEAL_MODE=recruiter
PORTFOLIO_TRIGGER=npm_run_portfolio
`
  },
  'LICENSE': {
    name: 'LICENSE',
    path: 'LICENSE',
    type: 'txt',
    content: `MIT License (Modified for Humour)

Copyright (c) 2026 Het Patel

Permission is hereby granted, free of charge, to any recruiter, interviewer, 
or tech lead to clone this portfolio, click tabs, explore files, 
and run terminal commands.

THE SOFTWARE IS PROVIDED "AS IS", WITH THE GUARANTEE THAT IT WILL IMPRESS YOU 
AND HOPEFULLY LEAD TO A FULL-STACK DEVELOPER JOB OFFER.
`
  },
  'CHANGELOG.md': {
    name: 'CHANGELOG.md',
    path: 'CHANGELOG.md',
    type: 'md',
    content: `# Changelog

## [v2.1.0] - 2025-02
### Added
- Won 1st Runner-Up, JG Hackathon 2025.
- Integrated TensorFlow Lite audio classification model in AapRaksha.
- Added structured incident reports using Gemini API.

## [v2.0.0] - 2024-11
### Added
- Launched LeadFlow WhatsApp Automation SaaS.
- Created Redis rate limiting and wamid deduplication receiver.
- Built multi-tenant security layers on Supabase.

## [v1.5.0] - 2024-05
### Added
- Shipped Khushi Films website with cinematic GSAP scroll triggers.
- Shipped House of Biryani menu site under freelancing unit "Panicle Tech".

## [v1.0.0] - 2023-07
### Added
- Commenced BCA Degree program at JG University.
- Started building full-stack web applications.
`
  },
  'projects/leadflow.tsx': {
    name: 'leadflow.tsx',
    path: 'projects/leadflow.tsx',
    type: 'tsx',
    content: `import React from 'react';

/**
 * LeadFlow: Multi-Tenant WhatsApp Automation SaaS
 *
 * OVERVIEW:
 * LeadFlow enables high-volume WhatsApp automation, a shared team inbox,
 * a knowledge repository, and lead CRM — built around a "Command Blue" UI
 * with light/dark mode support.
 *
 * KEY CHALLENGES & ARCHITECTURE SOLUTIONS:
 * 1. Webhook Idempotency:
 *    - Challenge: Meta retries webhook calls, causing double-sends.
 *    - Solution: Redis-backed webhook consumer checks the unique message ID
 *      (\`wamid\`) with a 5-minute TTL to guarantee idempotency.
 *
 * 2. Rate Limiting:
 *    - Redis token-bucket rate limiting throttles incoming traffic and
 *      prevents system overload during peak send volumes.
 *
 * 3. Tenant Isolation:
 *    - Strict tenant boundaries enforced via Supabase Row Level Security (RLS).
 *    - All queries auto-filter by the session's tenant ID.
 *
 * 4. OAuth Integration:
 *    - Facebook Login for Business flow lets users connect their WhatsApp
 *      Business Account (WABA) in one click.
 */
export const LeadFlowProject = () => {
  const liveUrl = "https://automation-frontend-tjv3.vercel.app";
  const frontendRepo = "https://github.com/hetttpatell/Automation-Frontend";
  const backendRepo = "https://github.com/hetttpatell/Automation-Backend";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">LeadFlow SaaS</h1>
      <p className="mt-2 text-zinc-300">Multi-tenant WhatsApp automation, shared inbox, and leads CRM.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={frontendRepo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub (Frontend)</a>
        <a href={backendRepo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub (Backend)</a>
      </div>
    </div>
  );
};
`
  },
  'projects/clientos.tsx': {
    name: 'clientos.tsx',
    path: 'projects/clientos.tsx',
    type: 'tsx',
    content: `import React from 'react';

/**
 * ClientOS: Booking CRM Platform for Indian Service Businesses
 *
 * STATUS: In active development — no live deployment yet.
 *
 * OVERVIEW:
 * ClientOS consolidates appointment scheduling, billing, and invoicing
 * for service-based businesses.
 *
 * CORE IMPLEMENTATIONS:
 * 1. Dual Booking System:
 *    - A merchant-hosted landing page portal, plus a lightweight embeddable
 *      JS booking widget clients can drop into any external site.
 *
 * 2. Multi-Tenant Architecture:
 *    - Isolated tenant data via Supabase Row Level Security (RLS) with
 *      an Express.js API layer.
 *
 * 3. Payments:
 *    - Razorpay integration for payments, advance deposits, and invoice balances.
 *
 * 4. Regional Pricing:
 *    - INR-tiered subscription plans (Starter, Growth, Pro) built for
 *      Indian service merchants.
 */
export const ClientOSProject = () => {
  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">ClientOS CRM</h1>
      <p className="mt-2 text-zinc-300">Booking, scheduling, and invoice management tool.</p>
      <span className="mt-4 inline-block text-xs uppercase tracking-wide text-amber-400 border border-amber-400/40 rounded px-2 py-1">
        In Development
      </span>
    </div>
  );
};
`
  },
  'projects/hospital-portal.tsx': {
    name: 'hospital-portal.tsx',
    path: 'projects/hospital-portal.tsx',
    type: 'tsx',
    content: `import React from 'react';

/**
 * Hospital Portal
 *
 * OVERVIEW:
 * A hospital/clinic-facing web portal. [Agent note: ask Het for 2-3 lines
 * on the actual feature set — appointment booking? patient records? doctor
 * directory? — before finalizing this description.]
 */
export const HospitalPortalProject = () => {
  const liveUrl = "https://doctor-theta-three.vercel.app";
  const repo = "https://github.com/hetttpatell/Doctor";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Hospital Portal</h1>
      <p className="mt-2 text-zinc-300">Web portal for hospital/clinic services.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
`
  },
  'projects/khushi-films.jsx': {
    name: 'khushi-films.jsx',
    path: 'projects/khushi-films.jsx',
    type: 'jsx',
    content: `import React from 'react';

/**
 * Khushi Films: Cinematic Portfolio
 *
 * OVERVIEW:
 * Media portfolio for a film production company focused on premium motion
 * design and speed.
 *
 * FRONTEND HIGHLIGHTS:
 * - Platform: React + Vite for fast bundling.
 * - Animations: Extensive GSAP timelines and ScrollTrigger for scroll-driven effects.
 * - Scrolling: Lenis smooth scroll unifies mouse and trackpad gestures.
 * - Transitions: Framer Motion for route animations and interactive elements.
 * - 3D Lens Component: Custom Three.js camera-lens mesh that rotates with scroll.
 * - Video Hero: Panoramic background video that scales to full-screen on scroll.
 * - Footer: Parallax cinematic layout revealing contact info on scroll.
 */
export const KhushiFilmsProject = () => {
  const liveUrl = "https://khushifilm.com";
  const repo = "https://github.com/hetttpatell/Khushi-Films";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Khushi Films Portfolio</h1>
      <p className="mt-2 text-zinc-300">Cinematic portfolio website with GSAP and Three.js.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
`
  },
  'projects/house-of-biryani.jsx': {
    name: 'house-of-biryani.jsx',
    path: 'projects/house-of-biryani.jsx',
    type: 'jsx',
    content: `import React from 'react';

/**
 * House of Biryani & Rolls Menu
 *
 * OVERVIEW:
 * Interactive luxury menu and reservation experience with Mughal editorial styling.
 *
 * DETAILS:
 * - Aesthetic: Royal burgundy, deep gold accents, warm ivory card backgrounds.
 * - Timelines: GSAP stagger animations reveal menu categories on click.
 * - Menu Inventory: 20 signature items across 4 categories.
 * - Artwork: Custom inline SVG food illustrations and floral dividers.
 * - Mobile UI: Toggle between 1-column detail view and 2-column grid view.
 */
export const HouseOfBiryaniProject = () => {
  const liveUrl = "https://houseofbiryaniandrolls.com";
  const repo = "https://github.com/hetttpatell/Biryani-website";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">House of Biryani & Rolls</h1>
      <p className="mt-2 text-zinc-300">Luxury restaurant menu with custom SVG illustrations.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
`
  },
  'projects/aapraksha.java': {
    name: 'aapraksha.java',
    path: 'projects/aapraksha.java',
    type: 'java',
    content: `package com.hetpatel.aapraksha;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.media.AudioRecord;
import android.location.LocationManager;
import org.tensorflow.lite.Interpreter;


/**
 * AapRaksha: Advanced Android Safety Application
 *
 * ARCHITECTURE OVERVIEW:
 * AapRaksha is an offline-first Android security service built in Java.
 * It monitors acoustic sensors in the background to detect distress calls.
 *
 * FUNCTIONALITIES:
 * 1. Acoustic Distress Trigger (TensorFlow Lite YAMNet):
 *    - Quantized YAMNet neural network classifies audio samples against
 *      scream/distress signatures.
 *
 * 2. Automated Reporting (Gemini API Integration):
 *    - Summarizes audio activity context into structured emergency incident reports.
 *
 * 3. Emergency SOS Broadcasts:
 *    - Dispatches instant SMS alerts with GPS coordinates to emergency contacts.
 *    - Updates live coordinates on Firebase Realtime Database.
 *
 * REPO: https://github.com/hetttpatell/Aapraksha
 * (Android app — no live web demo.)
 */
public class AapRakshaService extends Service {
    private AudioRecord audioRecord;
    private Interpreter tfliteInterpreter;
    private LocationManager locationManager;

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        // Run background audio classifier
        return START_STICKY;
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
`
  },
  'projects/aura-pixel.tsx': {
    name: 'aura-pixel.tsx',
    path: 'projects/aura-pixel.tsx',
    type: 'tsx',
    content: `import React from 'react';

/**
 * Aura Pixel — Wedding Pixel
 *
 * OVERVIEW:
 * A React module built for Aura Pixel Weddings, featuring an Indian
 * wedding-themed hero experience.
 *
 * DETAILS:
 * - Mandap-themed hero component with ornate 3D pillars and a silk canopy,
 *   animated with GSAP.
 * - Indian wedding color palette.
 * - Scroll behavior isolated via Lenis, scoped to a dedicated root
 *   (\`.wp-root\`) to avoid conflicting with the rest of the site.
 */
export const AuraPixelProject = () => {
  const liveUrl = "https://aurapixel.in";
  const repo = "https://github.com/hetttpatell/Aura-Pixel";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Aura Pixel</h1>
      <p className="mt-2 text-zinc-300">Wedding photography/videography brand site with a mandap-themed hero.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
`
  },
  'projects/shree-sneh-foundation.tsx': {
    name: 'shree-sneh-foundation.tsx',
    path: 'projects/shree-sneh-foundation.tsx',
    type: 'tsx',
    content: `import React from 'react';

/**
 * Shree Sneh Foundation — NGO Website
 *
 * OVERVIEW:
 * Website for an NGO client, built to communicate their mission and
 * programs and make it easy for visitors to learn about and support
 * their work. [Agent note: ask Het for 1-2 lines on standout features —
 * donation flow, program pages, volunteer sign-up, etc.]
 */
export const ShreeSnehFoundationProject = () => {
  const liveUrl = "https://shreesnehfoundation.in";
  const repo = "https://github.com/hetttpatell/NGO-";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Shree Sneh Foundation</h1>
      <p className="mt-2 text-zinc-300">NGO website built to showcase mission, programs, and impact.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
`
  },
  'projects/growth-edge.tsx': {
    name: 'growth-edge.tsx',
    path: 'projects/growth-edge.tsx',
    type: 'tsx',
    content: `import React from 'react';

/**
 * Growth Edge
 *
 * OVERVIEW:
 * [Agent note: description pending — ask Het what this project is
 * (business site? SaaS landing page? internal tool?) before publishing.]
 */
export const GrowthEdgeProject = () => {
  const liveUrl = "https://growth-edge-sigma.vercel.app";
  const repo = "https://github.com/hetttpatell/GrowthEdge";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Growth Edge</h1>
      <p className="mt-2 text-zinc-300">[Description pending]</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
`
  },
  'projects/fitness-webpage.tsx': {
    name: 'fitness-webpage.tsx',
    path: 'projects/fitness-webpage.tsx',
    type: 'tsx',
    content: `import React from 'react';

/**
 * Fitness Webpage
 *
 * OVERVIEW:
 * [Agent note: description pending — ask Het whether this is a personal
 * project, a client site, or a fitness-tracking tool before publishing.]
 */
export const FitnessWebpageProject = () => {
  const liveUrl = "https://fitness-webpage-blond.vercel.app";
  const repo = "https://github.com/hetttpatell/fitness-webpage";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Fitness Webpage</h1>
      <p className="mt-2 text-zinc-300">[Description pending]</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub Repo</a>
      </div>
    </div>
  );
};
`
  },
  'projects/nakshatraloka.tsx': {
    name: 'nakshatraloka.tsx',
    path: 'projects/nakshatraloka.tsx',
    type: 'tsx',
    content: `import React from 'react';

/**
 * Nakshatraloka — Astrology & Spiritual Services Platform
 *
 * TECH STACK: React.js, Node.js, Express.js, MongoDB, REST APIs, Responsive UI
 *
 * OVERVIEW:
 * A full-stack astrology and spiritual services web platform providing
 * users with seamless access to astrology-related services, consultations,
 * and informational content.
 *
 * HIGHLIGHTS:
 * - Modern, responsive frontend built with React.js using reusable
 *   components for scalability and maintainability.
 * - Secure backend REST APIs (Node.js + Express.js) handling dynamic data
 *   flow, user requests, and service management.
 * - MongoDB integration for efficient storage, retrieval, and management
 *   of application data.
 * - Mobile-first responsive layouts for a smooth experience across
 *   desktop, tablet, and mobile.
 * - Owned the full development lifecycle: UI, backend integration,
 *   deployment, debugging, and production maintenance.
 */
export const NakshatralokaProject = () => {
  const liveUrl = "https://nakshatraloka.com";
  const frontendRepo = "https://github.com/hetttpatell/Nakshatraloko-";
  const backendRepo = "https://github.com/Hett910/Nakshatraloka";

  return (
    <div className="p-6 max-w-4xl bg-zinc-900 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold text-cyan-400">Nakshatraloka</h1>
      <p className="mt-2 text-zinc-300">Full-stack astrology & spiritual services platform.</p>
      <div className="mt-4 flex gap-4">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a>
        <a href={frontendRepo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub (Frontend)</a>
        <a href={backendRepo} target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub (Backend)</a>
      </div>
    </div>
  );
};
`
  },
  'experience/education.md': {
    name: 'education.md',
    path: 'experience/education.md',
    type: 'md',
    content: `# Education

## Bachelor of Computer Applications (BCA)
**JG University** | *2023 – 2026*

* Specialization in Software Engineering and Full-Stack Web Development.
* Key Courses: Data Structures & Algorithms, Database Management Systems (DBMS), Web Engineering, Java Programming.
* Academic Achievements: 1st Runner-Up, JG Hackathon 2025.
`
  },
  'experience/freelance.md': {
    name: 'freelance.md',
    path: 'experience/freelance.md',
    type: 'md',
    content: `# Freelance Experience

## Full-Stack Freelance Developer
**Panicle Tech** | *2024 – Present*

* Designed, coded, and launched web applications for local businesses and organizations.
* Handled client alignment, branding layouts, database setups, and cloud deployments.
* Optimized page speeds, reducing loading latency by up to 40% using GSAP, SVG assets, and static rendering techniques.
* Prominent client deliveries: Khushi Films website, House of Biryani & Rolls interactive menu.
`
  },
  'experience/hackathons.md': {
    name: 'hackathons.md',
    path: 'experience/hackathons.md',
    type: 'md',
    content: `# Hackathons & Achievements

## 1st Runner-Up | JG Hackathon 2025
**Project**: *AapRaksha Android App*

* Participated in the university-wide annual hackathon against 50+ competing tech teams.
* Programmed the Android background safety listener incorporating the TensorFlow YAMNet classifier in 36 hours.
* Praised by the evaluation panel for creative offline safety capabilities, structural Gemini report exports, and sleek dashboard designs.
`
  },
  'about/skills.json': {
    name: 'skills.json',
    path: 'about/skills.json',
    type: 'json',
    content: `{
  "frontend": [
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "Three.js",
    "Framer Motion"
  ],
  "backend": [
    "Node.js",
    "Express.js",
    "Java (Android SDK)"
  ],
  "database": [
    "PostgreSQL",
    "Supabase RLS",
    "Firebase Database",
    "Redis Cache"
  ],
  "tools": [
    "Git & GitHub",
    "Vite Bundler",
    "npm / yarn",
    "Postman API",
    "VS Code"
  ],
  "other": [
    "TensorFlow Lite (YAMNet)",
    "Gemini API Integration",
    "Lenis Smooth Scrolling"
  ]
}`
  },
  'about/resume.pdf': {
    name: 'resume.pdf',
    path: 'about/resume.pdf',
    type: 'pdf',
    content: `[RESUME_FILE] Click the Download button to download the PDF resume file of Het Patel.`
  },
  'about/contact.js': {
    name: 'contact.js',
    path: 'about/contact.js',
    type: 'js',
    content: `/**
 * Get in Touch with Het Patel
 * 
 * Return details to initiate a professional connection!
 */
export function getInTouch() {
  return {
    email: "hetpatel@example.com",
    linkedin: "https://linkedin.com/in/hetpatel",
    github: "https://github.com/hetpatel"
  };
}
`
  },
  'tests/testimonials.test.js': {
    name: 'testimonials.test.js',
    path: 'tests/testimonials.test.js',
    type: 'test.js',
    content: `import { clientFeedback } from '../about/testimonials';

describe("Client Testimonials Verification", () => {
  
  test("Khushi Films is happy with the delivery", () => {
    const feedback = "Het is an exceptional developer who delivered our website ahead of schedule with stunning cinematic scroll effects. Highly recommended!";
    expect(clientFeedback.khushiFilms).toBe(feedback);
  });

  test("House of Biryani owner is satisfied with the brand aesthetic", () => {
    const feedback = "The luxury Mughal theme Het created is beautiful. Our online menu load times are extremely fast, and our customers love the design.";
    expect(clientFeedback.houseOfBiryani).toBe(feedback);
  });

  test("LeadFlow client commends the clean dashboard and UX", () => {
    const feedback = "Het built a highly responsive shared inbox dashboard for us. The interface is intuitive, and the transition animations are very smooth.";
    expect(clientFeedback.leadflow).toBe(feedback);
  });

});
`
  }
};
