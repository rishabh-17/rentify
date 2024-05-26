import React from "react";

export default function HousesSection() {
  return (
    <div className="bg-[#f3f4f7] py-10 text-center  font-bold">
      <h2 className="text-3xl font-bold py-16">What We Have for You</h2>
      <div className="flex flex-wrap bg-white">
        <div className="w-1/2 md:flex">
          <img
            src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-1/2 object-cover "
          />
          <div className="flex flex-col  text-gray-600 hover:text-white hover:bg-[#fc456a] w-1/2 p-4 border items-center gap-1">
            <h3 className="text-xl font-bold mb-5">Houses</h3>
            <p>Max: 5</p>
            <p>Size: 45 m2</p>

            <p>$ 40000</p>
            <p>Location: Dhaka</p>
            <button className="border-2 w-1/2 bg-white text-gray-600  px-5 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 md:flex">
          <img
            src="https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-1/2 object-cover "
          />
          <div className="flex flex-col  text-gray-600 hover:text-white hover:bg-[#fc456a] w-1/2 p-4 border items-center gap-1">
            <h3 className="text-xl font-bold mb-5">Houses</h3>
            <p>Max: 5</p>
            <p>Size: 45 m2</p>

            <p>$ 40000</p>
            <p>Location: Dhaka</p>
            <button className="border-2 w-1/2 bg-white text-gray-600  px-5 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 md:flex">
          <div className="flex flex-col  text-gray-600 hover:text-white hover:bg-[#fc456a] w-1/2 p-4 border items-center gap-1">
            <h3 className="text-xl font-bold mb-5">Houses</h3>
            <p>Max: 5</p>
            <p>Size: 45 m2</p>

            <p>$ 40000</p>
            <p>Location: Dhaka</p>
            <button className="border-2 w-1/2 bg-white text-gray-600  px-5 py-2 rounded-lg">
              Learn More
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-1/2 object-cover "
          />
        </div>
        <div className="w-1/2 md:flex">
          <div className="flex flex-col  text-gray-600 hover:text-white hover:bg-[#fc456a] w-1/2 p-4 border items-center gap-1">
            <h3 className="text-xl font-bold mb-5">Houses</h3>
            <p>Max: 5</p>
            <p>Size: 45 m2</p>

            <p>$ 40000</p>
            <p>Location: Dhaka</p>
            <button className="border-2 w-1/2 bg-white text-gray-600  px-5 py-2 rounded-lg">
              Learn More
            </button>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1675616575255-99f40284212a?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-1/2 object-cover "
          />
        </div>
      </div>
    </div>
  );
}
