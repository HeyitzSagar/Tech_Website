import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "./Header.css";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Contact", link: "/contact" },
  ];
  return (
    <div className="bg-gray-400 p-3">
      <div className="max-w-[1240px] item-center justify-between flex mx-auto">
        <div className="ml-10 text-xl hover:text-gray-700 font-bold">
          <a href="/" >Exlearn Technologies</a>
        </div>
        {toggle ? (
          <AiOutlineCloseCircle
            onClick={() => {
              setToggle(!toggle);
            }}
            className="md:hidden block text-white text-3xl"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => {
              setToggle(!toggle);
            }}
            className="md:hidden block text-white text-3xl"
          />
        )}
        <ul className=" mr-20 hidden md:flex text-white gap-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
        {/* Responsive menu  */}

        <ul
          className="duration-700 bg-gray-500 h-screen w-full md:hidden text-white fixed top"
          style={{ left: toggle ? "0px" : "-100%" }}
        >
          {navItems.map((item, index) => (
            <li className="text-center p-2 border-solid" key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
