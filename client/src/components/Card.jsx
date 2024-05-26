import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Card({ post, postId, buyer }) {
  console.log(post);
  const navigate = useNavigate();

  return (
    <div
      className="w-[250px] h-[400px] bg-white shadow-lg cursor-pointer"
      onClick={() => navigate(`/detail/${postId}`)}
    >
      <img
        src={
          (import.meta.env.VITE_BACKEND_IMG_URL || "") + "/files/" + post?.image
        }
        alt=""
        className="w-full h-[150px]"
      />
      <div className="p-3 flex flex-col h-[250px]">
        <h3 className="font-bold text-black">$ {post?.price}</h3>
        <p className="text-black">
          {post?.type?.length > 50
            ? post?.type?.substring(0, 50) + "..."
            : post?.type}
        </p>
        <p className="">
          {post?.description?.length > 100
            ? post?.description?.substring(0, 100) + "..."
            : post?.description}
        </p>
        <p className="text-xs">{post?.location}</p>
      </div>
    </div>
  );
}
