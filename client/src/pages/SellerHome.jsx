import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

export default function SellerHome() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const fetchPosts = async () => {
      const response = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/home/myhomes",
        config
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar seller />
      <div className="bg-[#f3f4f7] px-48 h-screen py-10">
        <h3 className="text-xl font-bold pb-5">Your Ads</h3>
        <div className="flex flex-wrap gap-5">
          {posts?.map((post) => (
            <Card key={post._id} postId={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
