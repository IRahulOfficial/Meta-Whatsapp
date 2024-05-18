import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import {_validatelogin} from "../../methods/login"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  

  return (
    <>
      <div className="bg-base-100 min-h-screen w-screen">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Logo" className="w-30 h-12" />
            </div>
            <h1 className="text-2xl font-semibold text-center text-green-500 mt-8 mb-12">
              Login
            </h1>
            <form>
              <div className="mb-10">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" onChange={(e) => setEmail(e.target.value)} className="grow" placeholder="Email" />
                </label>
              </div>
              <div className="mb-10">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <a
                  href="#"
                  className="block mt-4 text-right text-sm text-green-500"
                >
                  Forgot Password
                </a>
              </div>
              <button
                type="button"
                onClick={() => {_validatelogin(email,password)}}
                className="w-44 bg-green-500 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Login;
