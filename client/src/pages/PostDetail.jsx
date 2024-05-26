import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

export default function PostDetail() {
  const [post, setPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isBuyer, setIsBuyer] = useState(false);
  const [seller, setSeller] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  let { id } = useParams();

  const fetchPost = async () => {
    const config = {
      headers: {
        authentication: localStorage.getItem("token"),
      },
    };
    const response = await axios.get(
      (import.meta.env.VITE_BACKEND_URL || "") + "/home/home/" + id,
      config
    );
    setPost(response.data);
    setIsLiked(response.data.likes.includes(userId));
    setLikes(response.data.likes);
  };

  const handleLike = async () => {
    try {
      const config = {
        headers: {
          authentication: localStorage.getItem("token"),
        },
      };
      if (isLiked) {
        const response = await axios.put(
          (import.meta.env.VITE_BACKEND_URL || "") + "/home/home/dislike/" + id,
          {},
          config
        );
        setIsLiked(false);
        setLikes(response.data.likes);
      } else {
        const response = await axios.put(
          (import.meta.env.VITE_BACKEND_URL || "") + "/home/home/like/" + id,
          {},
          config
        );
        console.log(res);
        setIsLiked(true);
        setLikes(response.data.likes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSellerDetail = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        authentication: localStorage.getItem("token"),
      },
    };
    axios
      .post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/home/seller/detail",
        {
          sellerId: post.user,
        },
        config
      )
      .then(({ data }) => {
        setSeller(data);
      });
    // if (token) {
    //   const decodedToken = JSON.parse(atob(token.split(".")[1]));
    //   if (decodedToken?.role === "buyer") {
    //     setSeller(decodedToken);
    //   }
    // }
  };

  useEffect(() => {
    fetchPost();
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      if (decodedToken?.role === "buyer") {
        setIsBuyer(true);
      }
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#f3f4f7] min-h-screen px-48 py-5">
        <h1 className="text-2xl font-bold">Post Detail</h1>
        <div className="grid grid-cols-3 py-5 gap-5">
          <div className="flex flex-col w-full col-span-2 gap-4">
            <img
              src={
                (import.meta.env.VITE_BACKEND_IMG_URL || "") +
                "/files/" +
                post?.image
              }
              alt=""
              className="w-full object-contain h-96 bg-gray-300 p-2 rounded-xl"
            />
            <div className=" bg-white rounded-lg shadow-lg flex gap-8 p-4">
              {post.description}
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
            <div>
              <p>Price: {post.price}</p>
              <p>Type: {post.type}</p>
              <p>Location: {post.location}</p>
            </div>

            {isBuyer && (
              <div>
                <div className="flex justify-between">
                  <button
                    className="  px-5 py-2 rounded-lg"
                    onClick={handleLike}
                  >
                    {isLiked ? (
                      <>
                        <FaThumbsUp color="#fc456a" />
                        <span>Liked</span>
                      </>
                    ) : (
                      <>
                        <FaRegThumbsUp />
                        <span>Like</span>
                      </>
                    )}
                  </button>
                  <p>{likes.length || 0} Likes</p>
                </div>
                {seller ? (
                  <div>
                    <h4 className="text-xl font-bold">Seller Details</h4>
                    <p>
                      Seller Name: {seller.firstname} {seller.lastname}
                    </p>
                    <p>Seller Email: {seller.email}</p>
                    <p>Seller Phone: {seller.phone}</p>
                  </div>
                ) : (
                  <button
                    className="border-2 w-full bg-[#fc456a] text-white  px-5 py-2 rounded-lg"
                    onClick={() => getSellerDetail()}
                  >
                    I'm Intrested
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
