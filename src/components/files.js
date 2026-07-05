import React from 'react';
import { 
  FileCode, FileJson, FileText, Settings, X 
} from 'lucide-react';

const getFileIcon = (file) => {
  const ext = file.split('.').pop();
  switch (ext) {
    case 'md':
      return <FileText className="text-sky-400 mr-1.5 shrink-0" size={13} />;
    case 'json':
      return <FileJson className="text-amber-500 mr-1.5 shrink-0" size={13} />;
    case 'env':
      return <Settings className="text-zinc-400 mr-1.5 shrink-0" size={13} />;
    case 'tsx':
    case 'jsx':
    case 'js':
    case 'test.js':
      return <FileCode className="text-yellow-500 mr-1.5 shrink-0" size={13} />;
    case 'java':
      return <FileCode className="text-red-400 mr-1.5 shrink-0" size={13} />;
    case 'pdf':
      return <FileText className="text-rose-500 mr-1.5 shrink-0" size={13} />;
    default:
      return <FileText className="text-zinc-400 mr-1.5 shrink-0" size={13} />;
  }
};

const Files = ({ openFiles = [], openFile, changeCurrentFile, closeFile }) => {
  return (
    <>
      {openFiles.map((filePath) => {
        const isOpen = openFile === filePath;
        // Display just the filename, not the full path
        const fileName = filePath.split('/').pop();
        
        return (
          <div
            onClick={() => changeCurrentFile(filePath)}
            key={filePath}
            className={`group relative cursor-pointer font-normal px-3 py-1.5 flex items-center justify-between border-r border-[#1e1e1e] select-none text-xs transition duration-150 h-[35px] ${
              isOpen
                ? 'bg-[#1e1e1e] text-white border-t-2 border-[#007acc]'
                : 'bg-[#2d2d2d] text-zinc-400 hover:bg-[#2b2b2b] hover:text-zinc-200'
            }`}
            style={{ minWidth: '120px', maxWidth: '180px' }}
          >
            <div className="flex items-center min-w-0 mr-4">
              {getFileIcon(filePath)}
              <span className="truncate">{fileName}</span>
            </div>
            
            {/* Close button */}
            <button
              className="p-0.5 rounded hover:bg-zinc-800 text-zinc-500 hover:text-white shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                closeFile(filePath);
              }}
            >
              <X size={12} />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Files;
