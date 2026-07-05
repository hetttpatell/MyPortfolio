import React, { useState, useRef, useEffect } from 'react';
import { Plus, Trash2, X, ChevronDown, Split } from 'lucide-react';

const Terminal = ({ onTriggerTeardown, onClose }) => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [history, setHistory] = useState([
    'Welcome to Het Patel\'s Portfolio terminal.',
    'Type "help" to see available commands, or "npm run portfolio" to reveal the recruiter dashboard.',
    ''
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [inputValue, setInputValue] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [isFocused, setIsFocused] = useState(true);
  const [cursorPosition, setCursorPosition] = useState(0);
  
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };

  const handleSelect = (e) => {
    setCursorPosition(e.target.selectionStart);
  };

  useEffect(() => {
    if (activeTab === 'terminal') {
      scrollToBottom();
      inputRef.current?.focus();
      if (inputRef.current) {
        setCursorPosition(inputRef.current.selectionStart || 0);
      }
    }
  }, [history, activeTab]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTerminalClick = () => {
    if (activeTab === 'terminal') {
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (isCompiling) {
      e.preventDefault();
      return;
    }

    if (e.key === 'Enter') {
      const command = inputValue.trim();
      if (!command) return;

      const newHistory = [...history, `visitor@het-patel-ide:~$ ${command}`];
      const newCmdHistory = [...commandHistory, command];
      setCommandHistory(newCmdHistory);
      setHistoryIndex(newCmdHistory.length);
      setInputValue('');
      setCursorPosition(0);

      processCommand(command, newHistory);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
        setCursorPosition(commandHistory[nextIndex].length);
      } else {
        setHistoryIndex(0);
        setInputValue(commandHistory[0]);
        setCursorPosition(commandHistory[0].length);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = historyIndex + 1;
      if (nextIndex < commandHistory.length) {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
        setCursorPosition(commandHistory[nextIndex].length);
      } else {
        setHistoryIndex(commandHistory.length);
        setInputValue('');
        setCursorPosition(0);
      }
    }
  };

  const processCommand = (cmd, currentHistory) => {
    const cleanCmd = cmd.toLowerCase().trim();

    if (cleanCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cleanCmd === 'help') {
      setHistory([
        ...currentHistory,
        'Available commands:',
        '  whoami             - Display developer identity and profile info',
        '  ls                 - List project folders and workspace files',
        '  help               - Display this help information menu',
        '  clear              - Clear terminal screen console history',
        '  npm run portfolio  - Execute GSAP teardown and reveal the recruiter dashboard',
        ''
      ]);
      return;
    }

    if (cleanCmd === 'whoami') {
      setHistory([
        ...currentHistory,
        'User: hetpatel (Fresher Full-Stack Developer)',
        'Status: Open to immediate employment / junior developer opportunities',
        'Degree: BCA, JG University (Expected graduation 2026)',
        'Primary Stack: React, Next.js, Node.js, Express, Supabase RLS, Tailwind, GSAP',
        ''
      ]);
      return;
    }

    if (cleanCmd === 'ls') {
      setHistory([
        ...currentHistory,
        'README.md      LICENSE        projects/      about/',
        'package.json   CHANGELOG.md   experience/    tests/',
        ''
      ]);
      return;
    }

    if (cleanCmd === 'npm run portfolio') {
      setIsCompiling(true);
      setHistory([...currentHistory, 'Compiling recruiter mode...']);

      setTimeout(() => {
        setHistory(prev => [...prev, 'Optimizing career assets...']);
      }, 600);

      setTimeout(() => {
        setHistory(prev => [...prev, 'Done. Launching portfolio dashboard...']);
      }, 1200);

      setTimeout(() => {
        setIsCompiling(false);
        onTriggerTeardown();
      }, 1800);
      return;
    }

    // Default unknown command
    setHistory([
      ...currentHistory,
      `bash: command not found: ${cmd}. Type "help" for a list of valid commands.`,
      ''
    ]);
  };

  // Helper to get active tab class
  const getTabClass = (tabName) => {
    return `pb-1 font-sans text-[11px] font-medium tracking-wider cursor-pointer border-b-2 transition duration-150 ${
      activeTab === tabName 
        ? 'text-white border-[#007acc] font-bold' 
        : 'text-zinc-500 hover:text-zinc-300 border-transparent'
    }`;
  };

  return (
    <div 
      className="w-full h-full bg-[#141414] text-[#cccccc] font-mono text-[13px] p-3 flex flex-col overflow-hidden select-text"
      onClick={handleTerminalClick}
    >
      {/* Self-contained CSS cursor animation */}
      <style>{`
        @keyframes term-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .term-cursor {
          animation: term-blink 1s step-end infinite;
        }
      `}</style>

      {/* Terminal Header Tabs Bar */}
      <div className="flex justify-between items-center text-[11px] text-zinc-500 mb-2 border-b border-zinc-800 pb-1.5 select-none shrink-0">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setActiveTab('terminal')}
            className={getTabClass('terminal')}
          >
            TERMINAL
          </button>
          
          <button 
            onClick={() => setActiveTab('problems')}
            className={getTabClass('problems')}
          >
            PROBLEMS <span className="ml-1 bg-zinc-800 text-zinc-400 px-1 rounded-full text-[9px] font-bold">0</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('output')}
            className={getTabClass('output')}
          >
            OUTPUT
          </button>
          
          <button 
            onClick={() => setActiveTab('debug')}
            className={getTabClass('debug')}
          >
            DEBUG CONSOLE
          </button>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-3.5 text-zinc-500">
          <div className="flex items-center space-x-1 hover:text-zinc-300 cursor-pointer bg-zinc-850 px-1.5 py-0.5 rounded border border-zinc-800 text-[10px]">
            <span>node (bash)</span>
            <ChevronDown size={10} />
          </div>
          
          <button 
            title="New Terminal" 
            onClick={() => setHistory(['Welcome to a new Terminal session.', 'Type "help" to list commands.', ''])}
            className="hover:text-zinc-300"
          >
            <Plus size={13} />
          </button>
          
          <button 
            title="Split Terminal"
            onClick={() => setHistory(prev => [...prev, 'Terminal split created (simulated).', ''])}
            className="hover:text-zinc-300"
          >
            <Split size={12} />
          </button>

          <button 
            title="Clear Terminal Output" 
            onClick={() => setHistory([])}
            className="hover:text-zinc-300"
          >
            <Trash2 size={12} />
          </button>
          
          {onClose && (
            <button 
              title="Close Panel" 
              onClick={onClose}
              className="hover:text-zinc-300 ml-1 border-l border-zinc-800 pl-2"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Viewport Content */}
      <div className="flex-1 overflow-y-auto min-h-0 w-full">
        
        {/* Tab 1: Terminal prompt */}
        {activeTab === 'terminal' && (
          <div className="flex flex-col space-y-1">
            {history.map((line, index) => (
              <div 
                key={index} 
                className={`${
                  line.startsWith('visitor@') 
                    ? 'text-cyan-400' 
                    : line.includes('error') || line.includes('not found')
                      ? 'text-red-400'
                      : line.startsWith('Available') || line.startsWith('User:') || line.startsWith('Welcome')
                        ? 'text-green-400'
                        : 'text-zinc-300'
                } whitespace-pre-wrap`}
              >
                {line}
              </div>
            ))}
            
            {!isCompiling && (
              <div className="flex items-center relative w-full font-mono text-[13px] min-h-[20px]">
                <span className="text-cyan-400 mr-1.5 select-none shrink-0">visitor@het-patel-ide:~$</span>
                
                {/* Visual split-text cursor layout */}
                <div className="flex items-center select-none pointer-events-none whitespace-pre break-all text-zinc-300">
                  <span>{inputValue.substring(0, cursorPosition)}</span>
                  {isFocused ? (
                    cursorPosition === inputValue.length ? (
                      <span className="term-cursor w-[7px] h-[13.5px] bg-[#cccccc] inline-block align-middle shrink-0" />
                    ) : (
                      <span className="term-cursor bg-[#cccccc] text-[#141414] font-mono min-w-[7px] text-center inline-block align-middle shrink-0">
                        {inputValue.charAt(cursorPosition)}
                      </span>
                    )
                  ) : (
                    <span>{inputValue.substring(cursorPosition, cursorPosition + 1)}</span>
                  )}
                  <span>{inputValue.substring(cursorPosition + 1)}</span>
                </div>

                {/* Invisible input overlays the visual layout */}
                <input
                  ref={inputRef}
                  type="text"
                  className="absolute left-0 top-0 opacity-0 w-full h-full cursor-text font-mono text-[13px] pl-[185px] tracking-normal border-none outline-none focus:ring-0 focus:outline-none"
                  value={inputValue}
                  onChange={handleChange}
                  onSelect={handleSelect}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            )}

            {isCompiling && (
              <div className="flex items-center text-zinc-500 font-mono">
                <span>Running compilation script...</span>
                <span className="term-cursor w-[7px] h-[13px] bg-zinc-400 ml-1 block" />
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>
        )}

        {/* Tab 2: Problems list */}
        {activeTab === 'problems' && (
          <div className="text-zinc-400 font-sans text-xs flex flex-col justify-center items-center h-full space-y-2 select-none py-6">
            <span className="text-zinc-500 font-mono">No problems have been detected in the workspace.</span>
            <span className="text-[10px] text-zinc-600 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded font-mono">
              Build target: het-patel-portfolio
            </span>
          </div>
        )}

        {/* Tab 3: Vite compilation output logs */}
        {activeTab === 'output' && (
          <div className="text-zinc-400 space-y-1 font-mono text-xs">
            <p className="text-green-500">[vite] hot module replacement enabled</p>
            <p className="text-cyan-400">[vite] dev server running at: http://localhost:5173/</p>
            <p className="text-zinc-500">  &gt; Local:  http://localhost:5173/</p>
            <p className="text-zinc-500">  &gt; Network: http://192.168.1.10:5173/</p>
            <p className="text-zinc-500">[vite] HMR connection established</p>
            <p className="text-zinc-500">[esbuild] transforming index.html modules...</p>
            <p className="text-zinc-500">[esbuild] resolved src/components/vscode.js in 42ms</p>
            <p className="text-green-400">[vite] build update successfully compiled (31 modules)</p>
          </div>
        )}

        {/* Tab 4: Debugger Console */}
        {activeTab === 'debug' && (
          <div className="text-zinc-400 space-y-2 font-mono text-xs">
            <p className="text-zinc-500">Microsoft (R) Node.js inspect debugger v18.2.0 attached.</p>
            <p className="text-zinc-500">Type expressions below to evaluate them in the application context.</p>
            <div className="flex items-center text-zinc-500">
              <span>&gt;&nbsp;</span>
              <span className="term-cursor w-[7px] h-[13px] bg-zinc-500 block" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Terminal;
