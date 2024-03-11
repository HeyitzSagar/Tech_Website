import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="w-full flex">
        <div className="w-1/3 h-60 bg-white-500 p-4">
          <h1> Map or Address Sections</h1>
        </div>
        <div className="w-2/3 flex  justify between h-60 bg-gray-200 p-4">
          <div className="w-1/3">
            <h1>Usefull Links1</h1>
          </div>
          <div className="w-1/3">
            <h1>Usefull Links2</h1>
          </div>
          <div className="w-1/3">
            <h1>Usefull Links3</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between  bg-blue-600">
        <div>
          <h1 className=" ml-20 text-center text-white font-mono font-bold p-2 ">
            &copy; 2024 Exlearn Technologies. All rights reserved !
          </h1>
        </div>
        <div>
          <h1 className="text-center text-white font-mono font-bold p-2 mr-20 ">
            &copy; Created by{" "}
            <span className="font-sans text-black">Sagar Gupta</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
