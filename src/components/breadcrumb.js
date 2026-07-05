import React from 'react';

const BreadCrumb = ({ openFile }) => {
  if (!openFile) {
    return (
      <div className="h-[24px] bg-[#1e1e1e] flex items-center px-4 border-b border-[#151515] select-none" />
    );
  }

  const parts = openFile.split('/');

  return (
    <div className="h-[24px] bg-[#1e1e1e] flex items-center px-4 text-[11px] text-zinc-400 border-b border-[#151515] select-none overflow-hidden whitespace-nowrap font-mono">
      <span className="hover:text-white cursor-pointer">het-patel-portfolio</span>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          <span className="mx-1.5 text-zinc-600 text-[10px]">&gt;</span>
          <span 
            className={
              index === parts.length - 1 
                ? 'text-zinc-300 font-semibold' 
                : 'hover:text-zinc-200 cursor-pointer'
            }
          >
            {part}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumb;
