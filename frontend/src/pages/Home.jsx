import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import BigSlide from "../components/BigSlide";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BigSlide />
      <Testimonials />
      <Upload />
    </div>
  );
};

export default Home;
