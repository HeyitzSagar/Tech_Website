import React, { useState } from "react";

const HeroSection1 = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [messages, setMessages] = useState("");
  console.log(Name);
  console.log(email);
  function HandleSubmit() {}
  return (
    <div className="w-full h-dvh flex">
      <div className="w-2/3 bg-blue-500 bg-opacity-100">
        <h1 className="p-6 text-center mt-10 text-6xl font-bold ">
          Program that Offers <span className="text-blue-900">8LPA</span>{" "}
          <span className="text-white">CTC </span>At{" "}
          <span className="text-blue-900">Zero Cost.</span>
          <p className="text-xl mt-40">#Pay After Placement</p>
        </h1>
      </div>
      <div className="w-1/3     bg-blue-500 bg-opacity-100">
        <div className="   h-dvh">
          <form className="text-center flex flex-col m-2 gap-2 bg-gray-100 p-3">
            <h1 className="text-center text-xl font-mono font-bold underline ">
              Signup
            </h1>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={Name}
              type="text"
              placeholder="Enter your first Name"
              className="rounded-5 text-center font-mono p-2"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              placeholder="Enter your email"
              className=" rounded-5 text-center font-mono p-2"
            />
            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={number}
              type="number"
              placeholder="Enter your Contact Number"
              className=" rounded-5 text-center font-mono p-2"
            />
            <textarea
              value={messages}
              onChange={(e) => {
                setMessages(e.target.value);
              }}
              className="font-mono text-center p-4"
              placeholder="Enter your messages"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <button
              onClick={HandleSubmit}
              className="bg-blue-900 p-1 text-white font-mono hover:text-gray-300"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
