import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/user/login",
        { email, password }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.id);
      navigate("/" + response.data.role + "/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f3f4f7] flex items-center justify-center h-screen">
      <div className="bg-white w-1/3 p-10 rounded-md  shadow-md shadow-[#fc456a]">
        <h1 className="text-3xl font-bold text-white p-5 rounded-xl bg-[#fc456a]">
          Login
        </h1>
        <div className="mt-5 flex flex-col gap-4 ">
          <input
            type="email"
            className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-[#fc456a] text-white px-5 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
