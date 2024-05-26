import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyerHome from "./pages/BuyerHome";
import SellerHome from "./pages/SellerHome";
import NewPost from "./pages/NewPost";
import PostDetail from "./pages/PostDetail";
import UpdatePost from "./pages/UpdatePost";

function App() {
  return (
    <>
      <Suspense fallback={<>Loading... </>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/buyer/home" element={<BuyerHome />} />
            <Route path="/seller/home" element={<SellerHome />} />
            <Route path="/seller/add" element={<NewPost />} />
            <Route path="/seller/update/:id" element={<UpdatePost />} />
            <Route path="/detail/:id" element={<PostDetail />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
