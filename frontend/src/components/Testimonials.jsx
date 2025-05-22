import React from "react";
import profile1 from "../assets/profile_image1.jpeg";
import profile2 from "../assets/profile_image2.jpeg";
const testimonialsData = [
  {
    id: 1,
    text: "I've been using this product for a few months now and I couldn't be happier. It's made my life so much easier!",
    author: "John Doe",
    jobTitle: "Software Engineer",
    image: profile1,
  },
  {
    id: 2,
    text: "The customer service is outstanding! They really go above and beyond to help you out.",
    author: "Jane Smith",
    jobTitle: "Product Manager",
    image: profile2,
  },
];
const Testimonials = () => {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl mt-4 font-semibold bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
        Customer Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-4">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 drop-shadow-lg max-w-lg m-auto hover:scale-105 transition-all duration-700"
          >
            <p className="text-black text-4xl">"</p>
            <p className="text-sm text-black">{item.text}</p>
            <div className="flex items-center gap-3 mt-5">
              <img
                className="w-10 h-10 rounded-full"
                src={item.image}
                alt="image"
              />
              <div>
                <p>{item.author}</p>
                <p className="text-sm text-gray-600">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
