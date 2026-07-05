import React from 'react';

const SearchPane = ({ paneWidth }) => {
  return (
    <div
      className="h-full bg-[#29292a] text-white font-light text-[15px]"
      style={{ width: paneWidth }}
    >
      <div className="flex font-normal text-[12px] justify-between p-1.5">
        <span className="pl-[10px]">SEARCH</span>
      </div>
      <div className="flex justify-around flex-col">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#202020] border border-[#272823] my-[5px] mx-[10px] h-[25px] pl-[5px] text-white text-sm placeholder-[#8a8a8a] focus:outline focus:outline-[1px] focus:outline-[#2e84d5]"
        />
        <input
          type="text"
          placeholder="Replace"
          className="bg-[#202020] border border-[#272823] my-[5px] mx-[10px] h-[25px] pl-[5px] text-white text-sm placeholder-[#8a8a8a] focus:outline focus:outline-[1px] focus:outline-[#2e84d5]"
        />
      </div>
    </div>
  );
};

export default SearchPane;
