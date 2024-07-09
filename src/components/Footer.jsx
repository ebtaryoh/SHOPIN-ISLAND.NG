import React from "react";
import logo from "../../src/Images/Shoping_Island.png";
import { Image } from "react-bootstrap";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
  
  return (
   <div className="footer d-flex flex-column fs-4   ">
     <div className=" container  footer2  ">
      <div className="d-flex  ">
      <div className="me-5">
        <Link to="/">
        <Image src={logo} />
        </Link>
        <div className="text-white text-start footer-icon d-flex flex-row gap-3 mt-3">
          <LiaFacebook />
          <TiSocialTwitterCircular />
          <TiSocialLinkedinCircular />
          <FaInstagram />
        </div>
      </div>
      <d iv className="text-white w-25 mx-5 me-0">
        <p className="fw-bold">Contact Us</p>
       <div> <p className="contact-font mb-1">Email: Support@shopinisland.com</p>
        <p className="contact-font mb-1">Phone: +123 805 223 2843</p>
        <p className="contact-font mb-1 w-50">Address: 1,Ogunlesi Street, Awoyokun Bus Stop,Onipanu Lagos</p></div>
      </d>
     <div className="d-flex flex-row gap-5">
     <div className="text-white mx-5 ">
        <p className="fw-bold ">Shop</p>
      <div>
      <p className="contact-font  mb-1">Living Room</p>
        <p className="contact-font mb-1">Bedroom</p>
        <p className="contact-font mb-1">Office</p>
      </div>
      </div>
      <div className="text-white mx-5">
        <p className="fw-bold">About Us</p>
     <div>
     <p className="contact-font mb-1">Who We Are</p>
     <p className="contact-font mb-1">Our Mission</p>
     </div>
      </div>
      <div className="text-white mx-5">
        <p className="fw-bold">Legal</p>
       <div>
       <p className="contact-font mb-1">Privacy Policy</p>
        <p className="contact-font mb-1">Terms Of Service</p>
        <p className="contact-font mb-1">Cookie Policy</p>
       </div>
      </div>
     </div>
      </div>
      </div>
      <div className="d-flex flex-column  align-items-center container">
        <hr className="text-white border-4 bg-white w-100 "/>
   <div className="text-white d-flex flex-row gap-2 align-items-baseline ">
   <MdCopyright />
   <p className="contact-font "> 2024 shopinisland.ng, All rights reserved</p>
   </div>
    </div>
   </div>
  );
};

export default Footer;
