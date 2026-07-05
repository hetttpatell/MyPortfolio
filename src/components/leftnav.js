import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Files, Search, GitBranch, Play, Blocks, User, Settings } from 'lucide-react';

const renderIcon = (iconName, isCurrent) => {
  const activeColor = isCurrent ? 'text-white' : 'text-zinc-500 hover:text-zinc-300';
  const size = 20;

  switch (iconName) {
    case 'files':
      return <Files size={size} className={activeColor} />;
    case 'search':
      return <Search size={size} className={activeColor} />;
    case 'git':
      return <GitBranch size={size} className={activeColor} />;
    case 'debugger':
      return <Play size={size} className={activeColor} />;
    case 'extension':
      return <Blocks size={size} className={activeColor} />;
    default:
      return null;
  }
};

const LeftNav = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1) || 'files'; // Default to files if empty

  return (
    <div className="bg-[#333333] flex flex-col items-center justify-between w-[50px] h-full border-r border-[#1e1e1e] select-none shrink-0 py-2">
      
      {/* Top Navigation Items */}
      <div className="flex flex-col items-center w-full space-y-2">
        {['files', 'search', 'git', 'debugger', 'extension'].map((option) => {
          const isCurrent = currentPath === option;
          return (
            <Link
              key={option}
              to={isCurrent ? '/' : `/${option}`}
              className="w-full flex justify-center"
            >
              <div
                className={`flex justify-center items-center h-12 w-full transition-all duration-150 relative cursor-pointer ${
                  isCurrent ? 'border-l-2 border-[#007acc] bg-[#252526]/50' : 'hover:bg-[#2d2d2d]'
                }`}
              >
                {renderIcon(option, isCurrent)}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Profile and Settings Gear */}
      <div className="flex flex-col items-center w-full space-y-1 mt-auto">
        <div className="flex justify-center items-center h-10 w-full hover:bg-[#2d2d2d] cursor-pointer text-zinc-500 hover:text-zinc-300 transition duration-150">
          <User size={20} />
        </div>
        <div className="flex justify-center items-center h-10 w-full hover:bg-[#2d2d2d] cursor-pointer text-zinc-500 hover:text-zinc-300 transition duration-150">
          <Settings size={20} />
        </div>
      </div>

    </div>
  );
};

export default LeftNav;
