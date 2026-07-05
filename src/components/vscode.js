import React, { useEffect, useState, useRef } from 'react';
import { Route, useLocation, withRouter } from 'react-router-dom';
import { ResizableBox } from 'react-resizable';
import { gsap } from 'gsap';
import { X, Minus, Square } from 'lucide-react';
import { filesData } from './filesData';
import FilesPane from './filespane';
import LeftNav from './leftnav';
import BottomBar from './bottombar';
import CodeArea from './codearea';
import SearchPane from './searchpane';
import ExtensionPane from './extensionpane';
import GitPane from './gitpane';
import DebuggerPane from './debuggerpane';
import Portfolio from './Portfolio';

const VSCode = ({ history }) => {
  // Initial files open by default for Het Patel
  const [openFiles, setOpenFiles] = useState([
    'README.md',
    'package.json',
    'projects/leadflow.tsx',
    'about/contact.js'
  ]);
  const [activeFile, setActiveFile] = useState('README.md');
  const [filesState, setFilesState] = useState(filesData);

  const handleFileChange = (filePath, newContent) => {
    setFilesState((prev) => ({
      ...prev,
      [filePath]: {
        ...prev[filePath],
        content: newContent
      }
    }));
  };
  const [width, setWidth] = useState(240);
  const [initWidth, setInitWidth] = useState(240);
  const currentLocation = useLocation();
  const { innerWidth } = window;

  // Easter egg states
  const [showDashboard, setShowDashboard] = useState(false);
  const [isTeardown, setIsTeardown] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle terminal on Ctrl + J or Cmd + J
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animation Refs
  const titleBarRef = useRef(null);
  const leftNavRef = useRef(null);
  const sidebarRef = useRef(null);
  const editorPaneRef = useRef(null);
  const statusBarRef = useRef(null);

  useEffect(() => {
    if (currentLocation.pathname === '/') {
      history.replace('/files');
    }
  }, [currentLocation.pathname, history]);

  useEffect(() => {
    if (innerWidth < 500 && currentLocation.pathname.slice(1) !== '') {
      setWidth(140);
      setInitWidth(140);
    } else if (innerWidth < 500 && currentLocation.pathname.slice(1) === '') {
      setWidth(0);
      setInitWidth(0);
    } else if (innerWidth > 500 && currentLocation.pathname.slice(1) !== '') {
      setWidth(240);
      setInitWidth(240);
    } else {
      setWidth(0);
      setInitWidth(0);
    }
  }, [currentLocation, innerWidth]);

  const onResize = (event, { size }) => {
    setWidth(size.width);
  };

  const handleOpenFile = (filePath) => {
    if (!openFiles.includes(filePath)) {
      setOpenFiles([...openFiles, filePath]);
    }
    setActiveFile(filePath);
  };

  const handleCloseFile = (filePath) => {
    const newOpenFiles = openFiles.filter((f) => f !== filePath);
    setOpenFiles(newOpenFiles);

    if (activeFile === filePath) {
      if (newOpenFiles.length > 0) {
        const closedIndex = openFiles.indexOf(filePath);
        const newActiveIndex = Math.min(closedIndex, newOpenFiles.length - 1);
        setActiveFile(newOpenFiles[newActiveIndex]);
      } else {
        setActiveFile(null);
      }
    }
  };

  // GSAP Teardown Transition
  const handleTriggerTeardown = () => {
    setIsTeardown(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setShowDashboard(true);
      }
    });

    // Cinematic dispersion: panels slide/shatter off-screen
    tl.to(titleBarRef.current, { y: -40, opacity: 0, duration: 0.8, ease: 'power2.inOut' })
      .to(leftNavRef.current, { x: -60, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 0)
      .to(sidebarRef.current, { x: -300, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 0)
      .to(statusBarRef.current, { y: 40, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 0)
      .to(editorPaneRef.current, { 
        scale: 0.75, 
        rotation: -6, 
        y: 150, 
        opacity: 0, 
        duration: 0.9, 
        ease: 'power3.inOut' 
      }, 0);
  };

  // Reverse GSAP Teardown to return to VS Code IDE
  const handleReturnToIDE = () => {
    gsap.to('.reveal-dashboard-wrapper', {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setShowDashboard(false);
        setIsTeardown(false);

        // Animate elements back
        const tl = gsap.timeline();
        tl.to(titleBarRef.current, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' })
          .to(leftNavRef.current, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0)
          .to(sidebarRef.current, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0)
          .to(statusBarRef.current, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0)
          .to(editorPaneRef.current, { 
            scale: 1, 
            rotation: 0, 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: 'power3.out' 
          }, 0);
      }
    });
  };

  const CustomHandle = (
    <div className="h-full cursor-col-resize w-[2px] bg-transparent border-r border-[#1a1a1a]" />
  );

  return (
    <div className="h-screen w-screen bg-[#1e1e1e] text-white flex flex-col overflow-hidden relative font-sans">
      
      {/* 1. Title Bar */}
      <div 
        ref={titleBarRef} 
        className="h-[30px] bg-[#3c3c3c] flex items-center justify-between text-[11px] px-3 select-none text-zinc-400 shrink-0 border-b border-[#2d2d2d]"
      >
        <div className="flex items-center space-x-3">
          {/* Mock VS Code Blue Icon */}
          <div className="w-3.5 h-3.5 bg-[#007acc] rounded-sm flex items-center justify-center text-white font-bold text-[8px] transform rotate-12">
            V
          </div>
          <div className="flex items-center space-x-2.5">
            <span className="hover:text-white cursor-pointer">File</span>
            <span className="hover:text-white cursor-pointer">Edit</span>
            <span className="hover:text-white cursor-pointer">Selection</span>
            <span className="hover:text-white cursor-pointer">View</span>
            <span className="hover:text-white cursor-pointer">Go</span>
            <span className="hover:text-white cursor-pointer">Run</span>
            <span className="hover:text-white cursor-pointer">Terminal</span>
            <span className="hover:text-white cursor-pointer">Help</span>
          </div>
        </div>

        <div className="truncate text-zinc-400 font-medium font-mono text-[11px]">
          README.md - het-patel-portfolio - Visual Studio Code
        </div>

        {/* Windows-like controls */}
        <div className="flex items-center h-full">
          <button className="h-full w-10 flex items-center justify-center hover:bg-zinc-700 transition duration-150">
            <Minus size={12} />
          </button>
          <button className="h-full w-10 flex items-center justify-center hover:bg-zinc-700 transition duration-150">
            <Square size={10} />
          </button>
          <button className="h-full w-12 flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-150">
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Main workspace layout */}
      <div className="flex-1 flex min-h-0 w-full relative">
        
        {/* 2. Left Activity Bar Nav */}
        <div ref={leftNavRef} className="shrink-0 z-10">
          <LeftNav />
        </div>

        {/* 3. Sidebar Pane */}
        <div ref={sidebarRef} className="shrink-0 z-10 h-full flex">
          <Route path="/files" exact>
            <ResizableBox
              onResize={onResize}
              style={{ background: '#252526', display: 'flex' }}
              width={initWidth}
              height={Infinity}
              axis="x"
              handle={CustomHandle}
              handleSize={[8, 8]}
              minConstraints={[140, Infinity]}
              maxConstraints={[400, Infinity]}
            >
              <FilesPane
                paneWidth={width}
                openFile={activeFile}
                toggleCurrentFile={handleOpenFile}
              />
            </ResizableBox>
          </Route>
          <Route path="/search" exact>
            <ResizableBox
              onResize={onResize}
              style={{ background: '#252526', display: 'flex' }}
              width={initWidth}
              height={Infinity}
              axis="x"
              handle={CustomHandle}
              handleSize={[8, 8]}
              minConstraints={[140, Infinity]}
              maxConstraints={[400, Infinity]}
            >
              <SearchPane paneWidth={width} />
            </ResizableBox>
          </Route>
          <Route path="/git" exact>
            <ResizableBox
              onResize={onResize}
              style={{ background: '#252526', display: 'flex' }}
              width={initWidth}
              height={Infinity}
              axis="x"
              handle={CustomHandle}
              handleSize={[8, 8]}
              minConstraints={[140, Infinity]}
              maxConstraints={[400, Infinity]}
            >
              <GitPane paneWidth={width} />
            </ResizableBox>
          </Route>
          <Route path="/debugger" exact>
            <ResizableBox
              onResize={onResize}
              style={{ background: '#252526', display: 'flex' }}
              width={initWidth}
              height={Infinity}
              axis="x"
              handle={CustomHandle}
              handleSize={[8, 8]}
              minConstraints={[140, Infinity]}
              maxConstraints={[400, Infinity]}
            >
              <DebuggerPane paneWidth={width} />
            </ResizableBox>
          </Route>
          <Route path="/extension" exact>
            <ResizableBox
              onResize={onResize}
              style={{ background: '#252526', display: 'flex' }}
              width={initWidth}
              height={Infinity}
              axis="x"
              handle={CustomHandle}
              handleSize={[8, 8]}
              minConstraints={[140, Infinity]}
              maxConstraints={[400, Infinity]}
            >
              <ExtensionPane paneWidth={width} />
            </ResizableBox>
          </Route>
        </div>

        {/* 4. Main Code Area & Editor Pane */}
        <div ref={editorPaneRef} className="flex-1 h-full min-w-0">
          <CodeArea
            paneWidth={width}
            openFile={activeFile}
            openFiles={openFiles}
            toggleCurrentFile={handleOpenFile}
            closeFile={handleCloseFile}
            onTriggerTeardown={handleTriggerTeardown}
            isTerminalOpen={isTerminalOpen}
            setIsTerminalOpen={setIsTerminalOpen}
            fileData={filesState[activeFile]}
            onFileChange={handleFileChange}
          />
        </div>
      </div>

      {/* 5. Bottom Status Bar */}
      <div ref={statusBarRef} className="shrink-0 z-10 w-full">
        <BottomBar />
      </div>

      {/* Full-screen Recruiter Portfolio Dashboard Overlay */}
      {showDashboard && (
        <div className="absolute inset-0 z-50 bg-[#0d0d0f] reveal-dashboard-wrapper overflow-y-auto">
          <Portfolio onReturnToIDE={handleReturnToIDE} />
        </div>
      )}
    </div>
  );
};

export default withRouter(VSCode);
