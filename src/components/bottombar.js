import React, { useState, useEffect } from 'react';
import { GitBranch, AlertCircle, RefreshCw, Check, Bell, Clock } from 'lucide-react';

const BottomBar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[22px] bg-[#007acc] text-white px-3 flex items-center justify-between text-[11px] font-sans select-none shrink-0">
      
      {/* Left side info */}
      <div className="flex items-center space-x-3.5">
        <div className="flex items-center space-x-1 cursor-pointer hover:bg-white/10 px-1.5 py-0.5 rounded-sm">
          <GitBranch size={12} />
          <span className="font-semibold">main</span>
        </div>
        
        <div className="flex items-center space-x-1 cursor-pointer hover:bg-white/10 px-1.5 py-0.5 rounded-sm">
          <RefreshCw size={11} className="animate-spin-slow" />
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 hover:bg-white/10 px-1 rounded-sm cursor-pointer">
            <AlertCircle size={12} />
            <span>0</span>
          </div>
          <div className="flex items-center space-x-1 hover:bg-white/10 px-1 rounded-sm cursor-pointer">
            <span className="font-bold text-[10px]">!</span>
            <span>0</span>
          </div>
        </div>
      </div>

      {/* Right side info */}
      <div className="flex items-center space-x-3">
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded-sm cursor-pointer">Ln 1, Col 1</span>
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded-sm cursor-pointer">Spaces: 2</span>
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded-sm cursor-pointer">UTF-8</span>
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded-sm cursor-pointer">LF</span>
        
        <div className="flex items-center space-x-1 hover:bg-white/10 px-1.5 py-0.5 rounded-sm cursor-pointer">
          <Check size={12} />
          <span>Prettier</span>
        </div>

        <div className="flex items-center space-x-1 hover:bg-white/10 px-1.5 py-0.5 rounded-sm cursor-pointer">
          <Clock size={12} />
          <span>{time}</span>
        </div>

        <div className="hover:bg-white/10 p-1 rounded-sm cursor-pointer">
          <Bell size={12} />
        </div>
      </div>

    </div>
  );
};

export default BottomBar;
