import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function HomeNav() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="bg-[#fc456a] flex justify-between text-xs font-bold p-1 text-white px-48">
        <div>
          {" "}
          <span className="text-gray-200">Phone no:</span> +00 1234 567{" "}
          <span className="text-gray-200"> or email us: </span>{" "}
          emailsample@email.com
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="px-48 flex justify-between items-center mt-5">
        <div className="font-bold text-3xl">
          {" "}
          Rent<span className="text-[#fc456a]">ify</span>{" "}
        </div>
        <div className="flex gap-5">
          <button
            className="bg-[#fc456a] text-white px-5 rounded-full"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="text-[#fc456a] border-[#fc456a] border-2 rounded-full p-1 px-5"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
