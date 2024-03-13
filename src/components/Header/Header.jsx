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
    <div className="bg-blue-900 bg-opacity-75 p-5">
      <div className="max-w-[1240px] item-center justify-between flex mx-auto">
        <div className=" text-xl text-white rounded bg-blue-600 font-mono font-bold">
          <a href="/" className="p-2 m-2">
            <span className="text-red-300 hover:text-white duration-300">
              Exlearn
            </span>{" "}
            Technologies
          </a>
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
        <ul className=" mr-20 hidden md:flex text-gray-300  font-bold font-mono text-xl gap-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <a className="hover:text-white duration-300" href={item.link}>
                {item.text}
              </a>
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
