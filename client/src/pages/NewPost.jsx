import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

export default function NewPost() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const price = formData.get("price");
    const type = formData.get("type");
    const description = formData.get("description");
    const location = formData.get("location");
    const file = formData.get("file");

    const data = {
      price,
      type,
      description,
      location,
      file,
    };

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        authentication: localStorage.getItem("token"),
      },
    };

    try {
      await axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/home/home/add",
        data,
        config
      );
      alert("Post created successfully");
      navigate("/seller/home");
    } catch (error) {
      console.error(error);
      alert("Failed to create post");
    }
  };

  return (
    <div className="bg-[#f3f4f7] px-48 h-screen flex items-center justify-center">
      <div className="bg-white w-2/3 p-10 rounded-md shadow-md shadow-[#fc456a]">
        <h1 className="text-3xl font-bold mb-5">New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            />
            <input
              type="text"
              name="type"
              placeholder="Type -1bhk, 2bk ..."
              className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            />
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="bg-gray-200 py-2 px-4 w-full rounded text-black"
            />

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:hover:border-gray-600 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name="file"
                  class="hidden"
                />
              </label>
            </div>

            <button
              className="bg-[#fc456a] text-white px-5 py-2 rounded-lg"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
