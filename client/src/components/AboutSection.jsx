import React from "react";

export default function AboutSection() {
  return (
    <div className="bg-[#f3f4f7] lg:px-48 py-10 flex flex-wrap justify-between text-center">
      <div className="w-80 flex flex-col justify-between gap-3 p-4 shadow-md shadow-pink-400 rounded bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img
          src="https://plus.unsplash.com/premium_photo-1661963439471-0d0eeb1330d4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className="text-2xl font-bold text-black">Map Direction</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quod
          necessitatibus! Nostrum provident enim nihil ut, tempora reiciendis
          dolorum. Adipisci eos consectetur nemo minima iure.
        </p>
        <button className="bg-[#fc456a] text-white px-5 py-2 rounded-lg">
          Read More
        </button>
      </div>

      <div className="w-80 flex flex-col justify-between gap-3 p-4 shadow-md shadow-pink-400 rounded bg-white  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img
          src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className="text-2xl font-bold text-black">Accomodation Services</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quod
          necessitatibus! Nostrum provident enim nihil ut, tempora reiciendis
          dolorum. Adipisci eos consectetur nemo minima iure.
        </p>
        <button className="bg-[#fc456a] text-white px-5 py-2 rounded-lg">
          Read More
        </button>
      </div>

      <div className="w-80 flex flex-col justify-between gap-3 p-4 shadow-md shadow-pink-400 rounded bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img
          src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className="text-2xl font-bold text-black">Great Experience</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quod
          necessitatibus! Nostrum provident enim nihil ut, tempora reiciendis
          dolorum. Adipisci eos consectetur nemo minima iure.
        </p>
        <button className="bg-[#fc456a] text-white px-5 py-2 rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
}
