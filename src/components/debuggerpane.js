import React from 'react';
import Button from './button';

const DebuggerPane = ({ paneWidth }) => {
  return (
    <div
      className="h-full bg-[#29292a] text-white font-light text-[15px]"
      style={{ width: paneWidth }}
    >
      <div className="flex font-normal text-[12px] justify-between p-1.5">
        <span className="pl-[10px]">RUN AND DEBUG: RUN</span>
      </div>
      <div className="p-[14px] text-[13px] font-normal justify-center flex flex-col gap-2">
        <Button>Run and Debug</Button>
        <p className="py-[10px] leading-relaxed">
          To customize Run and Debug create a launch.json file.
        </p>
        <p className="py-[10px] leading-relaxed">
          Show all automatic debug configurations
        </p>

        <Button>JavaScript Debug Terminal</Button>

        <p className="py-[10px] leading-relaxed">
          You can use the JavaScript Debug Terminal to debug Node.js processes run on the command line.
        </p>
        <Button>Debug URL</Button>
      </div>
    </div>
  );
};

export default DebuggerPane;
