import React from "react";
import logo from "../../src/Images/Shoping_Island.png";
import { Image } from "react-bootstrap";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";


const Footer = () => {
  return (
   <div className="footer">
     <div className=" container d-flex">
      <div className="d-flex">
      <div>
        <Image src={logo} />
        <div className="text-white">
          <LiaFacebook />
          <TiSocialTwitterCircular />
          <TiSocialLinkedinCircular />
          <FaInstagram />
        </div>
      </div>
      <div className="text-white">
        <p>Contact Us</p>
        <p>Email: Support@shopinisland.com</p>
        <p>Address: 1,Ogunlesi Street, Awoyokun Bus Stop,Onipanu Lagos</p>
      </div>
      <div className="text-white">
        <p>Shop</p>
        <p>Living Room</p>
        <p>Bedroom</p>
        <p>Office</p>
      </div>
      <div className="text-white">
        <p>About Us</p>
        <p>Who We Are</p>
        <p>Our Mission</p>
      </div>
      <div className="text-white">
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Cookie Policy</p>
      </div>
      </div>
      <div>
        <br />
   <div className="text-white">
   <MdCopyright />
   <p> 2024 shopinisland.ng, All rights reserved</p>
   </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
