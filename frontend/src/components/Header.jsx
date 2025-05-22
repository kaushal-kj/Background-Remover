import React, { useContext } from "react";
import video from "../assets/manuel_compressed.mp4";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { removeBg, userData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleUploadClick = (e) => {
    if (!userData || !userData.username) {
      e.preventDefault();
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-between items-center max-sm:flex-col-reverse gap-y-10 px-4 mb-14 mt-10 lg:px-44 sm:mt-20">
      {/* Left side */}
      <div>
        <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
          Remove the
          <br className="max-md:hidden" />
          <span className="bg-gradient-to-r font-rubik from-blue-600 to-fuchsia-300 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" /> images for free
        </h1>
        <p className="my-6 text-[15px] text-white w-[90%]">
          Transform your photos effortlessly! with our background remover
          software, you can easily eliminate background from images, enhancing
          your creativity and making your visuals pop.
          <br className="max-sm:hidden" />
          Whether for social media, marketing, or personal projects, our tool is
          designed for everyone. ensuring high-quality results in seconds.
        </p>
        <div>
          <input
            onChange={(e) => removeBg(e.target.files[0])}
            type="file"
            id="upload1"
            accept="image/*"
            hidden
          />
          <label
            className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 text-white"
            htmlFor="upload1"
            onClick={handleUploadClick}
          >
            <span>Upload Image</span>
          </label>
        </div>
      </div>
      {/* Right side */}
      <div className="w-full max-w-lg">
        <video className="rounded-3xl bg-transparent" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Header;
