import React, { useEffect, useState } from 'react';

export default function TerminalBox({ lines = [], label = 'bash', active = true }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentTypingText, setCurrentTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(-1); // index of line being typed

  useEffect(() => {
    if (!active) {
      setDisplayedLines([]);
      setTypingIndex(-1);
      setCurrentTypingText('');
      return;
    }

    let isMounted = true;
    
    const runTerminalSequence = async () => {
      setDisplayedLines([]);
      setTypingIndex(-1);
      setCurrentTypingText('');
      
      // Wait a moment before booting
      await new Promise(resolve => setTimeout(resolve, 300));
      
      for (let i = 0; i < lines.length; i++) {
        if (!isMounted) break;
        const line = lines[i];
        
        if (line.type === 'command') {
          // Type out command character by character
          setTypingIndex(i);
          setCurrentTypingText('');
          
          for (let charIdx = 0; charIdx <= line.text.length; charIdx++) {
            if (!isMounted) break;
            setCurrentTypingText(line.text.slice(0, charIdx));
            // typing speed with slight random variance
            await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 25));
          }
          
          if (isMounted) {
            setDisplayedLines(prev => [...prev, line]);
            setTypingIndex(-1);
            setCurrentTypingText('');
            // Short delay after typing command completes before showing output
            await new Promise(resolve => setTimeout(resolve, 150));
          }
        } else {
          // Comments, output, success are printed instantly
          if (isMounted) {
            setDisplayedLines(prev => [...prev, line]);
          }
          // Delay before processing next line
          const delay = line.type === 'success' ? 400 : (line.type === 'comment' ? 100 : 200);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    };

    runTerminalSequence();

    return () => {
      isMounted = false;
    };
  }, [active, lines]);

  const renderLine = (line, index) => {
    switch (line.type) {
      case 'comment':
        return (
          <div key={index} className="terminal-line text-text-muted font-mono select-none">
            # {line.text}
          </div>
        );
      case 'command':
        return (
          <div key={index} className="terminal-line text-text-primary font-mono font-bold">
            <span className="text-accent-rust select-none mr-2">&gt;</span>
            {line.text}
          </div>
        );
      case 'output':
        return (
          <div key={index} className="terminal-line text-text-muted/90 font-mono whitespace-pre-wrap pl-4 leading-relaxed">
            {line.text}
          </div>
        );
      case 'success':
        return (
          <div key={index} className="terminal-line text-emerald-400 font-mono font-semibold whitespace-pre-wrap pl-4 border-l-2 border-emerald-500/30">
            {line.text}
          </div>
        );
      default:
        return (
          <div key={index} className="terminal-line text-text-primary font-mono pl-4">
            {line.text}
          </div>
        );
    }
  };

  return (
    <div className="w-full rounded-md border border-border-hairline bg-[#101012] overflow-hidden shadow-lg select-text text-left font-mono transition-colors duration-300">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#17171a] border-b border-border-hairline select-none">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{label}</div>
        <div className="w-10" />
      </div>

      {/* Terminal Window Body */}
      <div className="p-4 font-mono text-[11px] sm:text-xs space-y-2 overflow-x-auto min-h-[140px] max-h-[220px] scrollbar-thin scrollbar-thumb-zinc-800">
        {displayedLines.map((line, idx) => renderLine(line, idx))}
        {typingIndex !== -1 && (
          <div className="text-text-primary font-mono font-bold">
            <span className="text-accent-rust select-none mr-2">&gt;</span>
            {currentTypingText}
            <span className="inline-block w-1.5 h-3.5 bg-accent-rust ml-0.5 animate-pulse align-middle" />
          </div>
        )}
        {typingIndex === -1 && (
          <div className="inline-block w-1.5 h-3.5 bg-accent-rust ml-1 animate-pulse select-none align-middle" />
        )}
      </div>
    </div>
  );
}
