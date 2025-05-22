import React, { useState } from "react";
import womenwithbg from "../assets/womenwithbg.jpg";
import womenwithoutbg from "../assets/womenwithoutbg.png";

const BigSlide = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl pb-1 lg:text-4xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Remove Background with High <br /> Quality and Accuracy
      </h1>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        {/* Background image */}
        <img
          className="absolute top-0 left-0 w-full select-none"
          src={womenwithbg}
          alt="image"
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}%0 0)` }}
        />
        {/* Forground image */}
        <img
          className="select-none"
          src={womenwithoutbg}
          alt="bg image"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />

        {/* slider */}
        <input
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          type="range"
          min={0}
          max={100}
          // value={setSliderPosition}
        />
      </div>
    </div>
  );
};

export default BigSlide;
