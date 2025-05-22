import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Result from "./pages/Result";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full h-full">
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/result" element={<Result />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
