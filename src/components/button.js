import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-[#6a737d] text-white px-2.5 py-1 border-none cursor-pointer hover:bg-[#586069] transition-colors text-sm">
      {children}
    </button>
  );
};

export default Button;
