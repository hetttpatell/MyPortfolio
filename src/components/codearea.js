import React, { useState } from 'react';
import Files from './files';
import FileViewer from './fileViewer';
import BreadCrumb from './breadcrumb';
import Terminal from './terminal';

const CodeArea = ({ 
  openFile, 
  openFiles, 
  toggleCurrentFile, 
  closeFile, 
  paneWidth,
  onTriggerTeardown,
  isTerminalOpen,
  setIsTerminalOpen,
  fileData,
  onFileChange
}) => {
  const [terminalHeight, setTerminalHeight] = useState(200);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = terminalHeight;

    const handleMouseMove = (moveEvent) => {
      const deltaY = moveEvent.clientY - startY;
      // Dragging up reduces clientY, making deltaY negative, thereby increasing height
      const newHeight = Math.max(80, Math.min(600, startHeight - deltaY));
      setTerminalHeight(newHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className="h-full bg-[#1e1e1e] flex flex-col overflow-hidden w-full"
    >
      {/* Tab bar header */}
      <div className="flex w-full overflow-x-auto bg-[#252526] no-scrollbar border-b border-[#1a1a1a] shrink-0 h-[35px]">
        <Files
          openFiles={openFiles}
          openFile={openFile}
          changeCurrentFile={toggleCurrentFile}
          closeFile={closeFile}
        />
      </div>

      {/* Path breadcrumbs */}
      <BreadCrumb openFile={openFile} />

      {/* Editor Content Area */}
      <div className="flex-1 min-h-0 w-full overflow-hidden bg-[#1e1e1e]">
        <FileViewer 
          activeFile={openFile} 
          fileData={fileData}
          onFileChange={onFileChange}
        />
      </div>

      {/* Bottom Terminal Simulator Panel */}
      {isTerminalOpen && (
        <div 
          className="flex flex-col shrink-0" 
          style={{ height: `${terminalHeight}px` }}
        >
          {/* Resize handle bar */}
          <div 
            className="h-[4px] w-full cursor-ns-resize bg-zinc-800 hover:bg-[#007acc] transition-colors duration-150 shrink-0"
            onMouseDown={handleMouseDown}
            title="Drag to resize terminal"
          />
          {/* Terminal component */}
          <div className="flex-1 min-h-0 w-full overflow-hidden">
            <Terminal onTriggerTeardown={onTriggerTeardown} onClose={() => setIsTerminalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeArea;
