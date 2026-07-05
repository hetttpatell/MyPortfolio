import React, { useState } from 'react';
import { 
  Folder as FolderIcon, 
  FolderOpen as FolderOpenIcon, 
  ChevronRight, 
  ChevronDown, 
  FileCode, 
  FileJson, 
  FileText, 
  Settings,
  HelpCircle
} from 'lucide-react';

const getFileIcon = (ext) => {
  switch (ext) {
    case 'md':
      return <FileText className="text-sky-400 mr-2 shrink-0" size={14} />;
    case 'json':
      return <FileJson className="text-amber-500 mr-2 shrink-0" size={14} />;
    case 'env':
      return <Settings className="text-zinc-400 mr-2 shrink-0" size={14} />;
    case 'tsx':
    case 'jsx':
    case 'js':
    case 'test.js':
      return <FileCode className="text-yellow-500 mr-2 shrink-0" size={14} />;
    case 'java':
      return <FileCode className="text-red-400 mr-2 shrink-0" size={14} />;
    case 'pdf':
      return <FileText className="text-rose-500 mr-2 shrink-0" size={14} />;
    default:
      return <FileText className="text-zinc-400 mr-2 shrink-0" size={14} />;
  }
};

const tree = [
  { name: 'README.md', path: 'README.md', isFolder: false, ext: 'md' },
  { name: 'package.json', path: 'package.json', isFolder: false, ext: 'json' },
  { name: '.env.example', path: '.env.example', isFolder: false, ext: 'env' },
  { name: 'LICENSE', path: 'LICENSE', isFolder: false, ext: 'txt' },
  { name: 'CHANGELOG.md', path: 'CHANGELOG.md', isFolder: false, ext: 'md' },
  {
    name: 'projects',
    isFolder: true,
    children: [
      { name: 'leadflow.tsx', path: 'projects/leadflow.tsx', isFolder: false, ext: 'tsx' },
      { name: 'clientos.tsx', path: 'projects/clientos.tsx', isFolder: false, ext: 'tsx' },
      { name: 'hospital-portal.tsx', path: 'projects/hospital-portal.tsx', isFolder: false, ext: 'tsx' },
      { name: 'khushi-films.jsx', path: 'projects/khushi-films.jsx', isFolder: false, ext: 'jsx' },
      { name: 'house-of-biryani.jsx', path: 'projects/house-of-biryani.jsx', isFolder: false, ext: 'jsx' },
      { name: 'aapraksha.java', path: 'projects/aapraksha.java', isFolder: false, ext: 'java' },
      { name: 'aura-pixel.tsx', path: 'projects/aura-pixel.tsx', isFolder: false, ext: 'tsx' },
      { name: 'shree-sneh-foundation.tsx', path: 'projects/shree-sneh-foundation.tsx', isFolder: false, ext: 'tsx' },
      { name: 'growth-edge.tsx', path: 'projects/growth-edge.tsx', isFolder: false, ext: 'tsx' },
      { name: 'fitness-webpage.tsx', path: 'projects/fitness-webpage.tsx', isFolder: false, ext: 'tsx' },
      { name: 'nakshatraloka.tsx', path: 'projects/nakshatraloka.tsx', isFolder: false, ext: 'tsx' }
    ]
  },
  {
    name: 'experience',
    isFolder: true,
    children: [
      { name: 'education.md', path: 'experience/education.md', isFolder: false, ext: 'md' },
      { name: 'freelance.md', path: 'experience/freelance.md', isFolder: false, ext: 'md' },
      { name: 'hackathons.md', path: 'experience/hackathons.md', isFolder: false, ext: 'md' }
    ]
  },
  {
    name: 'about',
    isFolder: true,
    children: [
      { name: 'skills.json', path: 'about/skills.json', isFolder: false, ext: 'json' },
      { name: 'resume.pdf', path: 'about/resume.pdf', isFolder: false, ext: 'pdf' },
      { name: 'contact.js', path: 'about/contact.js', isFolder: false, ext: 'js' }
    ]
  },
  {
    name: 'tests',
    isFolder: true,
    children: [
      { name: 'testimonials.test.js', path: 'tests/testimonials.test.js', isFolder: false, ext: 'test.js' }
    ]
  }
];

const FolderNode = ({ node, openFile, toggleCurrentFile, depth }) => {
  // projects and about expanded by default
  const [isOpen, setIsOpen] = useState(
    node.isFolder && (node.name === 'projects' || node.name === 'about')
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const indentStyle = { paddingLeft: `${depth * 12 + 10}px` };

  if (node.isFolder) {
    return (
      <div className="w-full">
        <div
          onClick={handleToggle}
          className="flex h-[24px] cursor-pointer items-center text-zinc-300 hover:bg-[#2a2d2e] select-none text-[13px] font-normal"
          style={indentStyle}
        >
          <span className="mr-1 text-zinc-500">
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
          <span className="text-[#e2c08d] mr-1.5 shrink-0">
            {isOpen ? <FolderOpenIcon size={14} /> : <FolderIcon size={14} />}
          </span>
          <span className="truncate">{node.name}</span>
        </div>
        
        {isOpen && node.children && (
          <div className="w-full">
            {node.children.map((child, idx) => (
              <FolderNode
                key={idx}
                node={child}
                openFile={openFile}
                toggleCurrentFile={toggleCurrentFile}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const isCurrentActive = openFile === node.path;

  return (
    <div
      onClick={() => toggleCurrentFile(node.path)}
      className={`flex h-[24px] cursor-pointer items-center select-none text-[13px] font-normal border-l-2 ${
        isCurrentActive 
          ? 'bg-[#37373d] border-[#007acc] text-white' 
          : 'border-transparent text-zinc-400 hover:bg-[#2a2d2e] hover:text-zinc-200'
      }`}
      style={indentStyle}
    >
      {getFileIcon(node.ext)}
      <span className="truncate">{node.name}</span>
    </div>
  );
};

const Folder = ({ openFile, toggleCurrentFile }) => {
  return (
    <div className="w-full py-1">
      {tree.map((node, idx) => (
        <FolderNode
          key={idx}
          node={node}
          openFile={openFile}
          toggleCurrentFile={toggleCurrentFile}
          depth={0}
        />
      ))}
    </div>
  );
};

export default Folder;
export { tree };
