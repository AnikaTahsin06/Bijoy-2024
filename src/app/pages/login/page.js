"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value)
  };

  return (
    <div className="flex flex-col items-center pt-16 min-h-screen">
      <div className="p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h1>

        {/* Normal Sign-In Form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-900 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-500">or</span>
        </div>

        {/* Google Sign-In */}
        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-red-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
