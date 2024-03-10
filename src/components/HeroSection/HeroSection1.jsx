import React from "react";

const HeroSection1 = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/3 h-60 bg-white-500 p-4">
        Content for the first part
        <p>This is the left part.</p>
      </div>
      <div className="w-2/3 h-60 bg-gray-200 p-4">
        Content for the second part
        <p>This is the right part.</p>
      </div>
    </div>
  );
};

export default HeroSection1;
