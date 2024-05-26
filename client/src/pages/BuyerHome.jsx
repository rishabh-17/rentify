import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import Card from "../components/Card";
import axios from "axios";

export default function BuyerHome() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [filter, setFilter] = useState("");

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const fetchPosts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL || ""}/home/homes?page=${
          currentPage || 1
        }&filter=${filter || ""}`,
        config
      );
      console.log(response.data);
      setPosts(response.data.homes);
    };
    fetchPosts();
  }, [currentPage, filter]);

  return (
    <div>
      <Navbar />

      <div className="bg-[#f3f4f7] px-48 min-h-screen py-10">
        <h3 className="text-xl font-bold pb-5">
          Houses, Apartments and Flats for rent
        </h3>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleFilterChange}
          className="px-4 py-2 w-full rounded my-5"
        />
        <div className="flex flex-wrap gap-5">
          {currentPosts?.map((post) => (
            <Card key={post._id} postId={post._id} buyer post={post} />
          ))}
        </div>
        <div className="flex mt-5 justify-between">
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            {"<"} Prev
          </button>
          <div>Page {currentPage}</div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              !posts ||
              posts.length < postsPerPage ||
              currentPosts.length < postsPerPage
            }
          >
            Next {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
