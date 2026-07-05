import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function TerminalBox({ lines = [], label = 'bash' }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(containerRef.current.querySelectorAll('.terminal-line'), { opacity: 1, y: 0 });
      return;
    }

    // Stagger reveal of terminal lines
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.terminal-line',
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isVisible, lines]);

  const renderLine = (line, index) => {
    switch (line.type) {
      case 'comment':
        return (
          <div key={index} className="terminal-line opacity-0 text-text-muted font-mono select-none">
            # {line.text}
          </div>
        );
      case 'command':
        return (
          <div key={index} className="terminal-line opacity-0 text-text-primary font-mono font-bold">
            <span className="text-accent-rust select-none mr-2">&gt;</span>
            {line.text}
          </div>
        );
      case 'output':
        return (
          <div key={index} className="terminal-line opacity-0 text-text-muted font-mono whitespace-pre-wrap pl-4">
            {line.text}
          </div>
        );
      case 'success':
        return (
          <div key={index} className="terminal-line opacity-0 text-accent-rust-soft font-mono font-semibold whitespace-pre-wrap pl-4">
            {line.text}
          </div>
        );
      default:
        return (
          <div key={index} className="terminal-line opacity-0 text-text-primary font-mono pl-4">
            {line.text}
          </div>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full rounded-md border border-border-hairline bg-bg-surface overflow-hidden shadow-lg select-text text-left font-mono"
    >
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#141517] border-b border-border-hairline select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs text-text-muted tracking-tight">{label}</div>
        <div className="w-14" /> {/* empty spacer to center label */}
      </div>

      {/* Terminal Window Body */}
      <div className="p-5 font-mono text-xs sm:text-sm space-y-2.5 overflow-x-auto min-h-[140px]">
        {lines.map((line, idx) => renderLine(line, idx))}
        <div className="inline-block w-2 h-4 bg-accent-rust ml-1 animate-pulse select-none align-middle" />
      </div>
    </div>
  );
}
