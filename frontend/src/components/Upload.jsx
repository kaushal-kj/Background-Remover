import React, { useContext } from "react";
import App from "../App";
import { AppContext } from "../context/AppContext";

const Upload = () => {
  const { removeBg } = useContext(AppContext);
  return (
    <div className="pb-16">
      <h1 className="text-center p-5 text-2xl md:text-3xl lg:text-5xl mt-4 font-semibold bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
        See the magic. Try now
      </h1>
      <div className="text-center mb-24">
        <input
          onChange={(e) => removeBg(e.target.files[0])}
          type="file"
          id="upload2"
          accept="image/*"
          hidden
        />
        <label
          htmlFor="upload2"
          className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 text-white"
        >
          Upload Image
        </label>
      </div>
    </div>
  );
};

export default Upload;
