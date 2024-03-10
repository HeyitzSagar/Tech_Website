import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="w-full flex">
        <div className="w-1/3 h-60 bg-white-500 p-4">
          <h1> Map or Address Sections</h1>
        </div>
        <div className="w-2/3 h-60 bg-gray-200 p-4">
          <h1>Usefull Links</h1>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-center bg-gray-700 p-2">Created by Sagar Gupta</h1>
      </div>
    </div>
  );
};
