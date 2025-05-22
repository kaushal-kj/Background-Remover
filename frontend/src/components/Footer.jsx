import React from "react";
import logo from "../assets/Remove_BG_Logo.png";
import linkdin from "../assets/linkdin_logo.png"
const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 mb-4">
      <img src={logo} alt="logo" className="w-40" />
      <p className="flex-1 border-0 border-gray-400 pl-1 text-sm text-white max-sm:hidden">
        All rights reserved &copy; {new Date().getFullYear()} | UNIFIED MENTOR
      </p>
      <div className="flex gap-1">
        <img
          width={40}
          src={linkdin}
          alt="linkdin"
          className="select-none"
        />
      </div>
    </div>
  );
};

export default Footer;
