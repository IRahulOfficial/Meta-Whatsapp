import React, { useState } from "react";

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function test() {
      console.log(email)
      console.log(password)
  }
  
  return (
    <>
      <div className="bg-base-400 min-h-screen w-screen">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-8">
              <img
                src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
                alt="Logo"
                className="w-30 h-20"
              />
            </div>
            <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
              Login
            </h1>
            <form>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <a
                  href="#"
                  className="block text-right text-xs text-cyan-600 mt-2"
                >
                  Forgot Password
                </a>
              </div>
              <button
                type="submit"
                onClick={test}
                className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
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
