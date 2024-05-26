import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar({ seller }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white flex justify-between items-center p-5 px-48">
        <h1 className="text-3xl font-bold">
          Rent<span className="text-[#fc456a]">ify</span>
        </h1>
        <ul className="flex gap-8 items-center">
          {seller ? (
            <>
              <li
                className="hover:text-[#fc456a] cursor-pointer"
                onClick={() => navigate("/seller/Home")}
              >
                Home
              </li>
              <li
                className="hover:text-[#fc456a] cursor-pointer"
                onClick={() => navigate("/seller/add")}
              >
                New
              </li>
            </>
          ) : (
            <li
              className="hover:text-[#fc456a] cursor-pointer"
              onClick={() => navigate("/buyer/Home")}
            >
              Home
            </li>
          )}
          <li>
            <button
              className="text-[#fc456a] border-2 border-[#fc456a] py-1 px-5 rounded-full"
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <hr className="mx-48" />
    </>
  );
}
