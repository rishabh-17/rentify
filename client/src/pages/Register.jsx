import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [user, setUser] = useState({
    role: "buyer",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/user/register",
        user
      );
      console.log(response.data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f3f4f7] flex items-center justify-center h-screen">
      <div className="bg-white w-1/3 p-10 rounded-md shadow-md shadow-[#fc456a]">
        <h1 className="text-3xl font-bold text-white p-5 rounded-xl bg-[#fc456a]">
          Signup
        </h1>
        <div className="mt-5 flex flex-col gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="bg-gray-200 py-2 px-4 w-full rounded text-black"
              placeholder="First Name"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <input
              type="text"
              className="bg-gray-200 py-2 px-4 w-full rounded text-black"
              placeholder="Last Name"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <input
            type="email"
            className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="text"
            className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            placeholder="Phone"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <select
            name="cars"
            id="cars"
            className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>

          <input
            type="password"
            className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button
            className="bg-[#fc456a] text-white px-5 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
