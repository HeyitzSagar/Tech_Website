import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../HeroSection/HeroSection.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const HeroSection1 = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [mobnumber, SetMobnumber] = useState("");
  const [messages, setMessages] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState("");

  const userData = {
    name,
    email,
    Password,
    mobnumber,
  };

  let emails = "@";
  function handleTogglePassword() {
    setShowPassword(!showPassword);
  }
  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const specialCharactersRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
    if (name.length < 1) {
      setError(false);
      toast("Username can not be null", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (!email.includes(emails)) {
      setError(false);
      toast("Please enter the valid Email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (!specialCharactersRegex.test(Password)) {
      setError(true);
      if (Password.length < 4) {
        toast("Password should be greater than 8 letters", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else if (!specialCharactersRegex.test(Password)) {
      setError(true);
      if (Password.length < 4) {
        toast("Password should be greater than 8 letters", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else if (Password.length && specialCharactersRegex.test(Password)) {
      setError(false);
    }
    // try {
    //   await axios
    //     .post("http://localhost:3001/auth/signup", userData)
    //     .then((res) => {
    //       navigate('/login');
    //     });
    // } catch (error) {
    //   console.log("Error:", error);
    // }
  };
  return (
    <div className="w-full bg-blue-600 h-dvh flex">
      <div className="w-2/3 cover  bg-opacity-100">
        {/* <h1 className="p-6 text-center text-black mt-10 text-6xl font-bold ">
          Program that Offers <span className="text-blue-900">8LPA</span>{" "}
          <span className="text-white">CTC </span>At{" "}
          <span className="text-blue-900">Zero Cost.</span>
          <p className="text-xl mt-40">#Pay After Placement</p>
        </h1> */}
      </div>
      <div className="w-1/3  p-4  bg-opacity-100">
        <div className="  p-4 h-dvh">
          <form className="text-center flex flex-col m-2 gap-2 bg-gray-100 p-5">
            <h1 className="text-center text-xl font-mono font-bold underline ">
              Signup
            </h1>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              type="text"
              placeholder="Enter your first name"
              className="rounded-5 text-center font-mono p-2"
              required
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              placeholder="Enter your email"
              className=" rounded-5 text-center font-mono p-2"
              required
            />

            <input
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="Password"
              value={Password}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              className=" rounded-5 text-center font-mono p-2"
            />
            <span className="password-toggle" onClick={handleTogglePassword}>
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
            <input
              required
              onChange={(e) => {
                setConfirmpassword(e.target.value);
              }}
              id=""
              value={confirmpassword}
              type="text"
              placeholder="Confirm  your Password"
              className=" rounded-5 text-center font-mono p-2"
            />
            {Password === confirmpassword ? (
              <h1 className="font italic text-green-500">Password Matches !</h1>
            ) : (
              <h1 className="font text-red-500">Password doesnot matches !</h1>
            )}
            <input
              required
              onChange={(e) => {
                SetMobnumber(e.target.value);
              }}
              value={mobnumber}
              inputMode="numeric"
              type="mobnumber"
              placeholder="Enter your Contact mobnumber"
              className=" rounded-5 text-center font-mono p-2 noneappearance"
            />
            {mobnumber.length <= 10 ? (
              " "
            ) : (
              <h1 className="font text-red-500 italic">
                mobnumber cant be greater than 10
              </h1>
            )}
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
            <h1 className="text-blue-900 font-bold font-mono">
              Already have an Account ?{" "}
              <NavLink
                to={"/login"}
                className="text-red-600 font-bold font-mono hover:text-red-900"
              >
                <button>Login</button>
              </NavLink>
            </h1>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HeroSection1;
