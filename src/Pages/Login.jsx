import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  console.log(error);
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
  function HandlePasswordReset() {
    setOpen(!open);
  }

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
          <h1 className=" text-center font-bold font-mono text-red-700 hover:text-red-900 hover:font">
            Forget Password ?{" "}
            <span onClick={HandlePasswordReset} className="underline">
              Reset it
            </span>
          </h1>
          {open ? (
            <>
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  initialFocus={cancelButtonRef}
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon
                                  className="h-6 w-6 text-red-600"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <Dialog.Title
                                  as="h3"
                                  className="text-base font-semibold leading-6 text-gray-900"
                                >
                                  Reset Password
                                </Dialog.Title>
                                <div className="mt-2">
                                  <input
                                    className="w-full flex text-center mt-2  text-black"
                                    type="text"
                                    placeholder="Enter your email"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm text-black font-semibold  shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                              onClick={() => setOpen(false)}
                            >
                              Reset Password
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              onClick={() => setOpen(false)}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </>
          ) : (
            ""
          )}
          <h1 className="">
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
