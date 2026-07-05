import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Mail, Download, FileText, CheckCircle2, AlertTriangle, ArrowRight, Code, Eye, Terminal, Database, Settings, Sparkles } from 'lucide-react';

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
    style={{ width: props.size || 16, height: props.size || 16 }}
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
    style={{ width: props.size || 16, height: props.size || 16 }}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Monaco Code Editor Component
const CodeEditor = ({ code, language, onChange }) => {
  const getMonacoLanguage = (lang) => {
    switch (lang) {
      case 'tsx':
      case 'jsx':
        return 'typescript';
      case 'test.js':
      case 'js':
        return 'javascript';
      case 'env':
        return 'ini';
      case 'txt':
        return 'plaintext';
      default:
        return lang;
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    // Disable semantic and syntax validation (red squiggly lines)
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      jsx: 2, // React JSX compiling
    });
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: 2,
    });
  };

  return (
    <div className="w-full h-full overflow-hidden select-text">
      <Editor
        height="100%"
        language={getMonacoLanguage(language)}
        value={code}
        onChange={onChange}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 13,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
          renderWhitespace: 'selection',
          cursorBlinking: 'blink',
          tabSize: 2,
        }}
      />
    </div>
  );
};

// Markdown Preview Mode Component
const MarkdownPreview = ({ content }) => {
  const parseMarkdown = (md) => {
    const lines = md.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('# ')) {
        return <h1 key={idx} className="text-3xl font-extrabold text-[#fefffe] mt-4 mb-2 tracking-tight pb-2 border-b border-zinc-800">{trimmed.slice(2)}</h1>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={idx} className="text-xl font-bold text-zinc-100 mt-6 mb-3 border-b border-zinc-800 pb-1">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx} className="text-lg font-semibold text-zinc-200 mt-4 mb-2">{trimmed.slice(4)}</h3>;
      }
      if (trimmed === '---') {
        return <hr key={idx} className="my-6 border-zinc-800" />;
      }
      if (trimmed.startsWith('* ')) {
        const text = trimmed.slice(2);
        return (
          <li key={idx} className="ml-6 list-disc text-zinc-300 mb-1.5 pl-1">
            {renderRichText(text)}
          </li>
        );
      }
      if (trimmed === '') {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="text-zinc-300 leading-relaxed my-2 text-[14px]">
          {renderRichText(trimmed)}
        </p>
      );
    });
  };

  const renderRichText = (text) => {
    let htmlContent = text;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;

    htmlContent = htmlContent.replace(boldRegex, '<strong>$1</strong>');
    htmlContent = htmlContent.replace(linkRegex, '<a href="$2" target="_blank" rel="noreferrer" class="text-sky-400 hover:underline inline-flex items-center">$1</a>');

    return <span dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <div className="w-full h-full bg-[#1e1e1e] text-zinc-300 p-8 overflow-y-auto select-text">
      <div className="max-w-3xl mx-auto border border-zinc-800 rounded-md p-6 bg-[#252526]/50 shadow-md">
        <div className="flex items-center justify-between text-zinc-500 text-[11px] mb-4 border-b border-zinc-800 pb-2 select-none">
          <span>MARKDOWN PREVIEW</span>
          <span className="bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded text-[10px]">Preview Mode</span>
        </div>
        {parseMarkdown(content)}
      </div>
    </div>
  );
};

// Jest Test Suite Execution panel
const TestRunner = ({ content }) => {
  const [running, setRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);

  const runTests = () => {
    setRunning(true);
    setTestResults(null);
    setTimeout(() => {
      setRunning(false);
      setTestResults({
        passed: 3,
        failed: 0,
        total: 3,
        tests: [
          { name: "Khushi Films is happy with the delivery", status: "passed", feedback: "Het is an exceptional developer who delivered our website ahead of schedule with stunning cinematic scroll effects. Highly recommended!" },
          { name: "House of Biryani owner is satisfied with the brand aesthetic", status: "passed", feedback: "The luxury Mughal theme Het created is beautiful. Our online menu load times are extremely fast, and our customers love the design." },
          { name: "LeadFlow client commends the clean dashboard and UX", status: "passed", feedback: "Het built a highly responsive shared inbox dashboard for us. The interface is intuitive, and the transition animations are very smooth." }
        ]
      });
    }, 1200);
  };

  return (
    <div className="w-full md:w-[360px] h-full bg-[#141414] p-5 flex flex-col border-t md:border-t-0 md:border-l border-zinc-800 select-none shrink-0">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold tracking-wider text-zinc-500 font-mono">TEST RUNNER</span>
        <button 
          onClick={runTests}
          disabled={running}
          className={`px-3 py-1.5 text-xs rounded font-semibold text-white transition duration-150 ${
            running ? 'bg-[#007acc]/50 cursor-not-allowed' : 'bg-[#007acc] hover:bg-[#007acc]/85'
          }`}
        >
          {running ? 'Running...' : 'Run Jest Assertions'}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto font-mono text-xs text-zinc-300">
        {!running && !testResults && (
          <div className="flex flex-col items-center justify-center h-full text-zinc-500 text-center px-4">
            <AlertTriangle size={32} className="text-zinc-600 mb-2" />
            <p>Jest suite is ready.</p>
            <p className="text-[10px] text-zinc-600 mt-1">Press run to execute local assertion test cases.</p>
          </div>
        )}

        {running && (
          <div className="flex flex-col items-center justify-center h-full text-zinc-400">
            <div className="w-8 h-8 border-3 border-[#007acc] border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="animate-pulse">PASS  tests/testimonials.test.js...</p>
          </div>
        )}

        {!running && testResults && (
          <div className="space-y-4">
            <div className="bg-[#1c3c24]/30 border border-[#2d5f39] p-2.5 rounded text-green-400 flex items-center space-x-2 text-[12px]">
              <CheckCircle2 size={16} />
              <span className="font-semibold">PASS - Assertions passed!</span>
            </div>

            <div className="space-y-2">
              {testResults.tests.map((test, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-850 p-2.5 rounded">
                  <div className="text-green-400 font-semibold text-[11px] flex items-center">
                    <span className="bg-green-950 text-green-400 px-1 py-0.5 rounded text-[9px] mr-1.5">PASS</span>
                    {test.name}
                  </div>
                  <p className="text-[10px] text-zinc-400 italic mt-1.5 pl-2 border-l border-zinc-800">
                    "{test.feedback}"
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 pt-3 text-[10px] text-zinc-500 space-y-1">
              <p>Test Suites: <span className="text-green-400 font-semibold">1 passed</span>, 1 total</p>
              <p>Tests:       <span className="text-green-400 font-semibold">3 passed</span>, 3 total</p>
              <p>Snapshots:   0 total</p>
              <p>Time:        1.14 s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// PDF Resume Downloader Card Component
const ResumeViewer = () => {
  return (
    <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center p-8 select-text">
      <div className="max-w-md w-full bg-[#252526]/50 border border-zinc-800 rounded-lg p-8 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 bg-[#007acc]/10 text-[#007acc] rounded-full flex items-center justify-center mx-auto border border-[#007acc]/20">
          <FileText size={32} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Het Patel - Curriculum Vitae</h2>
          <p className="text-xs text-zinc-400 mt-1 font-mono">het-patel-resume.pdf</p>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Recruiters can view or download Het's resume PDF directly here. This file contains complete details regarding internships, BCA projects, and contact channels.
        </p>
        <div className="pt-2">
          <a 
            href="https://example.com/het-patel-resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 bg-[#007acc] hover:bg-[#007acc]/85 text-white font-semibold py-2.5 px-4 rounded-md transition-all duration-200"
          >
            <Download size={16} />
            <span>Download Resume PDF</span>
          </a>
        </div>
        <div className="text-[10px] text-zinc-600 font-mono">
          [RESUME_URL] = https://example.com/het-patel-resume.pdf
        </div>
      </div>
    </div>
  );
};

// Interactive Contact Panel Component
const ContactSidebar = () => {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const contacts = [
    { name: 'email', value: 'hetpatel@example.com', href: 'mailto:hetpatel@example.com', icon: Mail, label: 'Send Email' },
    { name: 'linkedin', value: 'https://linkedin.com/in/hetpatel', href: 'https://linkedin.com/in/hetpatel', icon: Linkedin, label: 'Connect' },
    { name: 'github', value: 'https://github.com/hetpatel', href: 'https://github.com/hetpatel', icon: Github, label: 'Follow' }
  ];

  return (
    <div className="w-full md:w-[320px] h-full border-t md:border-t-0 md:border-l border-zinc-800 bg-[#1a1a1b] p-5 flex flex-col justify-between select-none shrink-0">
      <div className="space-y-4">
        <span className="text-[10px] tracking-wider text-zinc-500 font-mono font-bold block">INTERACTIVE CHANNELS</span>
        
        <div className="space-y-3">
          {contacts.map((item, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-3 rounded-md flex items-center justify-between transition-all duration-200">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300">
                  <item.icon size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-mono capitalize">{item.name}</p>
                  <a href={item.href} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline text-xs font-semibold">
                    {item.label}
                  </a>
                </div>
              </div>
              <button 
                onClick={() => handleCopy(item.value, item.name)}
                className="text-[10px] bg-zinc-800 hover:bg-zinc-700 text-zinc-400 px-2 py-1 rounded"
              >
                {copied === item.name ? 'Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[10px] text-zinc-500 leading-relaxed leading-4 mt-6">
        Edit the javascript code in the editor pane to review the function return payload structure or change variables.
      </p>
    </div>
  );
};

// Interactive Skills Panel Component
const SkillsSidebar = ({ content }) => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    try {
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === 'object') {
        setSkills(parsed);
      }
    } catch (e) {
      // Ignore parsing errors while typing
    }
  }, [content]);

  const displaySkills = skills || {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Three.js", "Framer Motion"],
    backend: ["Node.js", "Express.js", "Java (Android API)"],
    database: ["PostgreSQL", "Supabase RLS", "Firebase Database", "Redis Cache"],
    tools: ["Git & GitHub", "Vite Bundler", "npm / yarn", "Postman", "VS Code"],
    other: ["TensorFlow Lite", "Gemini API Integration", "Lenis Smooth Scroll"]
  };

  const categories = [
    { key: 'frontend', title: 'Frontend Stack', color: 'text-cyan-400 bg-cyan-950/20 border-cyan-500/20', icon: Code },
    { key: 'backend', title: 'Backend & APIs', color: 'text-purple-400 bg-purple-950/20 border-purple-500/20', icon: Terminal },
    { key: 'database', title: 'Database & Cache', color: 'text-indigo-400 bg-indigo-950/20 border-indigo-500/20', icon: Database },
    { key: 'tools', title: 'Developer Tools', color: 'text-emerald-400 bg-emerald-950/20 border-emerald-500/20', icon: Settings },
    { key: 'other', title: 'AI & Core Libraries', color: 'text-amber-500 bg-amber-950/20 border-amber-500/20', icon: Sparkles }
  ];

  return (
    <div className="w-full md:w-[320px] h-full border-t md:border-t-0 md:border-l border-[#1a1a1a] bg-[#161617] p-5 flex flex-col justify-between overflow-y-auto select-none shrink-0 font-sans">
      <div className="space-y-5">
        <span className="text-[9px] tracking-wider text-zinc-500 font-mono font-bold block uppercase">
          Interactive Skills Matrix
        </span>

        <div className="space-y-4">
          {categories.map((cat) => {
            const list = displaySkills[cat.key] || [];
            if (list.length === 0) return null;
            const Icon = cat.icon;

            return (
              <div key={cat.key} className="space-y-2">
                <div className="flex items-center space-x-1.5 text-zinc-300 font-semibold text-xs border-b border-zinc-800 pb-1">
                  <Icon size={12} className="text-zinc-500" />
                  <span>{cat.title}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {list.map((item, idx) => (
                    <span 
                      key={idx} 
                      className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded border transition-all duration-250 hover:scale-105 cursor-default ${cat.color}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-[10px] text-zinc-500 leading-snug mt-6 pt-4 border-t border-zinc-800/60 font-mono">
        Try editing the JSON keys/arrays in the editor to see this matrix update in real time!
      </p>
    </div>
  );
};

const projectMeta = {
  'projects/leadflow.tsx': {
    title: 'LeadFlow SaaS',
    subtitle: 'WhatsApp messaging automation platform',
    badge: 'Active SaaS',
    role: 'Full-Stack Developer',
    db: 'Supabase RLS / Redis',
    framework: 'React / Express',
    deployment: 'https://automation-frontend-tjv3.vercel.app',
    github: 'https://github.com/hetttpatell/Automation-Frontend',
    githubBackend: 'https://github.com/hetttpatell/Automation-Backend',
    colorClass: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/20',
    highlights: [
      'Webhook idempotency checks with Redis (5-min TTL)',
      'Token bucket rate limiting to prevent webhook overload',
      'Supabase Row Level Security (RLS) for tenant isolation',
      'Facebook Login for Business flow for single-click WABA connect'
    ]
  },
  'projects/clientos.tsx': {
    title: 'ClientOS Booking CRM',
    subtitle: 'Merchant booking & scheduling portal',
    badge: 'In Development',
    role: 'Full-Stack Developer',
    db: 'Supabase RLS',
    framework: 'Express / React',
    colorClass: 'text-amber-400 border-amber-500/20 bg-amber-950/20',
    highlights: [
      'Dual booking system (hosted storefront + embeddable JS widget)',
      'Supabase Row Level Security (RLS) for isolated tenant data',
      'Razorpay payment integrations for invoice collections',
      'INR-tiered subscription plans for Indian service businesses'
    ]
  },
  'projects/hospital-portal.tsx': {
    title: 'Hospital Portal',
    subtitle: 'Web portal for hospital & clinic services',
    badge: 'Active',
    role: 'Frontend Developer',
    db: 'Not Specified',
    framework: 'React',
    deployment: 'https://doctor-theta-three.vercel.app',
    github: 'https://github.com/hetttpatell/Doctor',
    colorClass: 'text-blue-400 border-blue-500/20 bg-blue-950/20',
    highlights: [
      'Hospital/clinic-facing dashboard layout',
      'Appointment booking flow and scheduling',
      'Patient records and doctor directory portal'
    ]
  },
  'projects/khushi-films.jsx': {
    title: 'Khushi Films',
    subtitle: 'Cinematic video portfolio page',
    badge: 'Production Site',
    role: 'Frontend Developer',
    db: 'Static Client-Side',
    framework: 'React / GSAP / Three.js',
    deployment: 'https://khushifilm.com',
    github: 'https://github.com/hetttpatell/Khushi-Films',
    colorClass: 'text-rose-400 border-rose-500/20 bg-rose-950/20',
    highlights: [
      'React + Vite for fast developer build compiling',
      'Lenis smooth scroll to unify trackpad/mouse gestures',
      'Three.js 3D rotating camera-lens mesh reacting to scroll',
      'GSAP ScrollTrigger timelines and Framer Motion route fades'
    ]
  },
  'projects/house-of-biryani.jsx': {
    title: 'House of Biryani & Rolls',
    subtitle: 'Editorial menu & reservation site',
    badge: 'Client Handoff',
    role: 'UI Designer / Developer',
    db: 'Static Client-Side',
    framework: 'Vite / GSAP / Tailwind',
    deployment: 'https://houseofbiryaniandrolls.com',
    github: 'https://github.com/hetttpatell/Biryani-website',
    colorClass: 'text-amber-500 border-amber-500/20 bg-amber-950/20',
    highlights: [
      'Royal Mughal red & gold brand color palette',
      'Staggered menu entrance GSAP scroll timelines',
      'Custom styled inline food illustration SVG vectors',
      'Responsive double/single grid mobile toggle layout'
    ]
  },
  'projects/aapraksha.java': {
    title: 'AapRaksha App',
    subtitle: 'Acoustic voice distress tracking SOS app',
    badge: 'Hackathon Winner',
    role: 'Android Developer',
    db: 'Firebase RTDB',
    framework: 'Java (Android SDK) / TensorFlow',
    github: 'https://github.com/hetttpatell/Aapraksha',
    colorClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/20',
    highlights: [
      'TensorFlow Lite YAMNet acoustic distress classifier',
      'Gemini API automated structured incident report logs',
      'Background safety sensor monitoring android service',
      'Emergency coordinates broadcasting on Firebase RTDB'
    ]
  },
  'projects/aura-pixel.tsx': {
    title: 'Aura Pixel',
    subtitle: 'Wedding photography/videography brand site',
    badge: 'Active',
    role: 'Frontend Developer',
    db: 'Static Client-Side',
    framework: 'React / GSAP / Lenis',
    deployment: 'https://aurapixel.in',
    github: 'https://github.com/hetttpatell/Aura-Pixel',
    colorClass: 'text-indigo-400 border-indigo-500/20 bg-indigo-950/20',
    highlights: [
      'Mandap-themed hero with animated 3D pillars & canopy',
      'Indian wedding color palette implementation',
      'Lenis scroll behavior scoped to dedicated .wp-root class'
    ]
  },
  'projects/shree-sneh-foundation.tsx': {
    title: 'Shree Sneh Foundation',
    subtitle: 'NGO website built to showcase mission & impact',
    badge: 'Active',
    role: 'Frontend Developer',
    db: 'Not Specified',
    framework: 'React',
    deployment: 'https://shreesnehfoundation.in',
    github: 'https://github.com/hetttpatell/NGO-',
    colorClass: 'text-teal-400 border-teal-500/20 bg-teal-950/20',
    highlights: [
      'Conveys NGO mission, programs, and social impact',
      'Secure donation flow integration layouts',
      'Program and volunteer sign-up information pages'
    ]
  },
  'projects/growth-edge.tsx': {
    title: 'Growth Edge',
    subtitle: 'Business growth platform & landing page',
    badge: 'Active',
    role: 'Frontend Developer',
    db: 'Not Specified',
    framework: 'React',
    deployment: 'https://growth-edge-sigma.vercel.app',
    github: 'https://github.com/hetttpatell/GrowthEdge',
    colorClass: 'text-pink-400 border-pink-500/20 bg-pink-950/20',
    highlights: [
      'Modern SaaS/business showcase landing page',
      'Responsive design and clean user experience layouts',
      'SEO and page load optimization for higher retention'
    ]
  },
  'projects/fitness-webpage.tsx': {
    title: 'Fitness Webpage',
    subtitle: 'Fitness tracking and landing portal',
    badge: 'Active',
    role: 'Frontend Developer',
    db: 'Not Specified',
    framework: 'React',
    deployment: 'https://fitness-webpage-blond.vercel.app',
    github: 'https://github.com/hetttpatell/fitness-webpage',
    colorClass: 'text-red-400 border-red-500/20 bg-red-950/20',
    highlights: [
      'Personal/client fitness tracking portal',
      'Responsive workouts and layout design components',
      'Clean interactive elements and schedule visualization'
    ]
  },
  'projects/nakshatraloka.tsx': {
    title: 'Nakshatraloka',
    subtitle: 'Astrology & spiritual services platform',
    badge: 'Active Product',
    role: 'Full-Stack Developer',
    db: 'MongoDB',
    framework: 'React / Node.js / Express',
    deployment: 'https://nakshatraloka.com',
    github: 'https://github.com/hetttpatell/Nakshatraloko-',
    githubBackend: 'https://github.com/Hett910/Nakshatraloka',
    colorClass: 'text-purple-400 border-purple-500/20 bg-purple-950/20',
    highlights: [
      'Modular React frontend with reusable styling',
      'Node.js + Express REST APIs for dynamic services',
      'MongoDB database integration for user bookings',
      'Mobile-first responsive grids and clean navigation'
    ]
  }
};

// Project Details Metadata Sidebar Pane
const ProjectSidebar = ({ activeFile }) => {
  const meta = projectMeta[activeFile];
  if (!meta) return null;

  return (
    <div className="w-full md:w-[320px] h-full border-t md:border-t-0 md:border-l border-[#1a1a1a] bg-[#161617] p-5 flex flex-col justify-between select-none shrink-0 font-sans">
      <div className="space-y-5">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-[9px] tracking-wider text-zinc-500 font-mono font-bold block uppercase">
            Project Profile
          </span>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white tracking-tight">{meta.title}</h3>
            <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border ${meta.colorClass}`}>
              {meta.badge}
            </span>
          </div>
          <p className="text-xs text-zinc-400 leading-snug">{meta.subtitle}</p>
        </div>

        <hr className="border-zinc-800" />

        {/* Specifications Grid */}
        <div className="space-y-2">
          <span className="text-[9px] tracking-wider text-zinc-500 font-mono font-bold block uppercase">
            Technical Specs
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-[#1e1e1e] border border-zinc-850 p-2 rounded">
              <span className="text-[9px] text-zinc-500 block uppercase font-bold">Role</span>
              <span className="text-zinc-300 font-sans font-medium">{meta.role}</span>
            </div>
            <div className="bg-[#1e1e1e] border border-zinc-850 p-2 rounded">
              <span className="text-[9px] text-zinc-500 block uppercase font-bold">Database</span>
              <span className="text-zinc-300 font-sans font-medium">{meta.db}</span>
            </div>
            <div className="bg-[#1e1e1e] border border-zinc-850 p-2 rounded col-span-2">
              <span className="text-[9px] text-zinc-500 block uppercase font-bold">Tech Stack</span>
              <span className="text-zinc-300 font-sans font-medium">{meta.framework}</span>
            </div>
          </div>
        </div>

        <hr className="border-zinc-800" />

        {/* Highlights */}
        <div className="space-y-2.5">
          <span className="text-[9px] tracking-wider text-zinc-500 font-mono font-bold block uppercase">
            Key Implementations
          </span>
          <ul className="space-y-2 text-xs text-zinc-400">
            {meta.highlights.map((h, i) => (
              <li key={i} className="flex items-start">
                <span className="text-sky-400 mr-2 text-[10px]">✔</span>
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Deployment & Git links */}
      <div className="space-y-2 pt-4 border-t border-zinc-800/60 mt-4 font-mono">
        {meta.deployment && (
          <a
            href={meta.deployment}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-between text-white font-semibold px-3 py-2 rounded text-xs transition duration-200 bg-[#007acc] hover:bg-[#007acc]/90 shadow-[0_0_15px_rgba(0,122,204,0.2)] cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Eye size={14} />
              <span className="font-sans">View Live Deployment</span>
            </div>
            <ArrowRight size={13} />
          </a>
        )}

        {meta.github && (
          <a
            href={meta.github}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-between border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white px-3 py-2 rounded text-xs transition duration-200 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Github size={13} className="text-zinc-400" />
              <span className="font-sans">
                {meta.githubBackend ? 'Source Code (Frontend)' : 'Source Code Repository'}
              </span>
            </div>
            <ArrowRight size={13} />
          </a>
        )}

        {meta.githubBackend && (
          <a
            href={meta.githubBackend}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-between border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white px-3 py-2 rounded text-xs transition duration-200 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Github size={13} className="text-zinc-400" />
              <span className="font-sans">Source Code (Backend)</span>
            </div>
            <ArrowRight size={13} />
          </a>
        )}
      </div>
    </div>
  );
};

// Master FileViewer Component
const FileViewer = ({ activeFile, fileData, onFileChange }) => {
  const [markdownPreview, setMarkdownPreview] = useState(true);

  // Sync markdown preview mode when tab changes
  useEffect(() => {
    setMarkdownPreview(true);
  }, [activeFile]);

  if (!fileData) {
    return (
      <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center text-zinc-500 font-mono select-none">
        <p>Select a file from the explorer sidebar to view content.</p>
      </div>
    );
  }

  // 1. PDF File Viewer
  if (activeFile === 'about/resume.pdf') {
    return <ResumeViewer />;
  }

  // 2. Markdown Files (with preview toggler)
  if (fileData.type === 'md') {
    return (
      <div className="w-full h-full relative flex flex-col">
        {/* Toggle Button Overlays the CodeArea */}
        <div className="absolute top-2.5 right-6 z-20 flex items-center space-x-1.5 bg-[#252526]/80 backdrop-blur border border-zinc-850 px-2 py-1 rounded shadow-md select-none text-[11px] text-zinc-400">
          <button 
            onClick={() => setMarkdownPreview(false)}
            className={`flex items-center space-x-1 px-1.5 py-0.5 rounded transition ${!markdownPreview ? 'bg-[#007acc] text-white' : 'hover:bg-zinc-800'}`}
            title="Edit Raw Markdown"
          >
            <Code size={12} />
            <span>Edit Code</span>
          </button>
          <button 
            onClick={() => setMarkdownPreview(true)}
            className={`flex items-center space-x-1 px-1.5 py-0.5 rounded transition ${markdownPreview ? 'bg-[#007acc] text-white' : 'hover:bg-zinc-800'}`}
            title="Show Styled Document"
          >
            <Eye size={12} />
            <span>Preview</span>
          </button>
        </div>

        <div className="flex-1 min-h-0 w-full">
          {markdownPreview ? (
            <MarkdownPreview content={fileData.content} />
          ) : (
            <CodeEditor 
              code={fileData.content} 
              language="md" 
              onChange={(newVal) => onFileChange(activeFile, newVal)} 
            />
          )}
        </div>
      </div>
    );
  }

  // 3. Code files (Editable Monaco Editor + split sidebar helper columns)
  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden bg-[#1e1e1e]">
      
      {/* Real-time editable Monaco Editor */}
      <div className="flex-1 h-full min-w-0">
        <CodeEditor 
          code={fileData.content} 
          language={fileData.type} 
          onChange={(newVal) => onFileChange(activeFile, newVal)}
        />
      </div>

      {/* Conditional context panels */}
      {activeFile.startsWith('projects/') && (
        <ProjectSidebar activeFile={activeFile} />
      )}

      {activeFile === 'about/contact.js' && (
        <ContactSidebar />
      )}

      {activeFile === 'about/skills.json' && (
        <SkillsSidebar content={fileData.content} />
      )}

      {activeFile === 'tests/testimonials.test.js' && (
        <TestRunner content={fileData.content} />
      )}

    </div>
  );
};

export default FileViewer;
