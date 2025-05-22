import React from "react";
import uploadIcon from "../assets/upload_icon.png";
import removebgIcon from "../assets/remove_bg_icon.jpeg";
import downloadIcon from "../assets/download_icon.jpeg";
const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20">
      <h1 className="text-center text-2xl md:text-3xl pb-1 lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 md:space-x-5 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 bg-white border p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={uploadIcon} alt="upload icon" />
          <div>
            <p className="text-xl font-medium">Upload Image</p>
            <p className="text-sm text-black mt-1">
              select the image youo want to edit. our tool supoorts various
              formats, including JPG, PNG and more, ensuring a seamless
              experience
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={removebgIcon} alt="remove bg icon" />
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="text-sm text-black mt-1">
              With a single click, our intelligernt algorithm will remove the
              background, leaving you with a clean and professional-looking
              image.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={downloadIcon} alt="download icon" />
          <div>
            <p className="text-xl font-medium">Download Image</p>
            <p className="text-sm text-black mt-1">
              once you're satisfied with the result, simply download the image
              to your device. our tool ensures high-quality output, ready for
              use in presentations, social media, or any other project.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg text-white ">
          Experience the fast and most accurate background removal
          tool-simplifying your workflow and saving your time!
        </p>
      </div>
    </div>
  );
};

export default Steps;
