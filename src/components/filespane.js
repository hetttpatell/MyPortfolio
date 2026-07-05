import React from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import Folder from './folder';

const FilesPane = ({ openFile, toggleCurrentFile, paneWidth }) => {
  return (
    <div
      className="h-full bg-[#252526] text-white font-light text-[15px] flex flex-col border-r border-[#1e1e1e]"
      style={{ width: paneWidth }}
    >
      {/* Header bar */}
      <div className="flex font-normal text-[11px] text-zinc-400 justify-between items-center px-4 py-2 select-none uppercase tracking-wider">
        <span>Explorer</span>
        <button className="hover:text-white transition duration-150">
          <MoreHorizontal size={14} />
        </button>
      </div>

      {/* Project Workspace folder header */}
      <div className="bg-[#1e1e1e]/40 flex px-3 py-1.5 items-center select-none border-b border-[#2d2d2d] cursor-pointer">
        <ChevronDown size={14} className="text-zinc-400 mr-1 shrink-0" />
        <span className="font-bold text-[11px] tracking-wider text-zinc-300 uppercase truncate">
          HET-PATEL-PORTFOLIO
        </span>
      </div>

      {/* Scrollable File/Folder List */}
      <div className="flex-1 overflow-y-auto">
        <Folder openFile={openFile} toggleCurrentFile={toggleCurrentFile} />
      </div>
    </div>
  );
};

export default FilesPane;
