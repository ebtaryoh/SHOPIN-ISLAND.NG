import React from "react";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import FooterChair1 from "../Images/Footer-chair1.png";
import FooterChair2 from "../Images/Footer-chair2.png";
import { Image } from "react-bootstrap";

const Home = () => (
  <div className="bg-white">
    <HeroSection />
    <div className="text-center mt-5 ">
      <h2 className="fw-bold">AMAZING LIST OF CHAIR</h2>
      <p className="fs-5">See our amazing list of chair</p>
    </div>
    <Products />

    <div className="footer-chair-div">
      <div className="footer-chair-bg"></div>
      <div className="d-flex flex-row Footer-chair gap-5">
        <Image className="ft-chair" src={FooterChair1} />
        <Image className="ft-chair" src={FooterChair2} />
      </div>
    </div>
  </div>
);

export default Home;
