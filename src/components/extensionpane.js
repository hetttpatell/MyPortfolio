import React from 'react';

const ExtensionPane = ({ paneWidth }) => {
  return (
    <div
      className="h-full bg-[#29292a] text-white font-light text-[15px]"
      style={{ width: paneWidth }}
    >
      <div className="flex font-normal text-[12px] justify-between p-1.5">
        <span className="pl-[10px]">EXTENSION</span>
      </div>
      <div className="flex justify-around flex-col">
        <input
          type="text"
          placeholder="Search Extensions in Marketplace"
          className="bg-[#202020] border border-[#272823] my-[5px] mx-[10px] h-[25px] pl-[5px] text-white text-sm placeholder-[#8a8a8a] focus:outline focus:outline-[1px] focus:outline-[#fefffe]"
        />
      </div>
      <div className="p-[14px] text-[13px] font-normal justify-center flex flex-col">
        <p className="py-[10px] leading-relaxed">
          Sorry you can't install any Apps here
        </p>
      </div>
    </div>
  );
};

export default ExtensionPane;
