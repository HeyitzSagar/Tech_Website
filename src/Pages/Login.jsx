import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const HandleLogin = (e) => {
    e.preventDefault();
    let emails = "@";
    const specialCharactersRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
    if (!email.includes(emails)) {
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
    } else if (!specialCharactersRegex.test(password)) {
      setError(true);
      if (password.length < 4) {
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
    } else if (
      email.includes(emails) &&
      specialCharactersRegex.test(password)
    ) {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="bg-gray-300 w-full flex h-96">
      <div className="w-2/3 mt-10 p-5">
        <h1>We will have the hero Image regarding the login</h1>
      </div>
      <div className="w-1/3  p-5 border text-center ">
        <form className="w-full h-full mb-5 flex flex-col gap-3 p-5  bg-gray-400">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="text"
            placeholder="Enter your email"
            className="rounded-5 text-center font-mono p-2"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Enter your Password"
            className="rounded-5 text-center font-mono p-2"
          />
          <button
            onClick={HandleLogin}
            className="bg-blue-900 p-1 font-mono font-bold text-white "
          >
            Login
          </button>
          <h1 className="mt-10">
            <span className="font-mono text-gray-600 hover:text-gray-800 duration-300 font-bold underline">
              Didnt have an Account?
            </span>
            <NavLink
              className="font-bold font-mono text-blue-600 hover:text-blue-900 duration-300"
              to={"/"}
            >
              {" "}
              Signup
            </NavLink>{" "}
          </h1>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
