import React, { useState } from "react";
import logo from "../../src/Images/Shoping_Island.png";
import { Image } from "react-bootstrap";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleDetails = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
  return (
    <div className="footer   ">
      <div className=" container  footer2 ">
        <div className="d-flex ">
          <div>
            <Image src={logo} />
            <div className="text-white text-start footer-icon d-flex flex-row gap-4 mt-3">
              <LiaFacebook />
              <TiSocialTwitterCircular />
              <TiSocialLinkedinCircular />
              <FaInstagram />
            </div>
          </div>
          <div className="text-white w-25 mx-5">
          <button className="footer-title" onClick={() => toggleDetails('contact-details')}>
          Contact Us
          <span className="dropdown-icon"><RiArrowDropDownLine />
          </span>
        </button>
                    <div   id="contact-details" className={`footer-details ${activeSection === 'contact-details' ? 'active' : ''}`}>
              <p className="contact-font mb-1">
                Email: Support@shopinisland.com
              </p>
              <p className="contact-font mb-1">Phone: +123 805 223 2843</p>
              <p className="contact-font mb-1 w-50">
                Address: 1,Ogunlesi Street, Awoyokun Bus Stop,Onipanu Lagos
              </p>
            </div>
          </div>
          <div className="d-flex flex-row gap-5">
            <div className="text-white mx-5 ">
            <button className="footer-title" onClick={() => toggleDetails('contact-details')}>
          Shop
          <span className="dropdown-icon"><RiArrowDropDownLine />
          </span>
        </button>
                      <div  id="contact-details" className={`footer-details ${activeSection === 'contact-details' ? 'active' : ''}`}>
                <p className="contact-font  mb-1">Living Room</p>
                <p className="contact-font mb-1">Bedroom</p>
                <p className="contact-font mb-1">Office</p>
              </div>
            </div>
            <div className="text-white mx-5">
            <button className="footer-title" onClick={() => toggleDetails('contact-details')}>
          About Us
          <span className="dropdown-icon"><RiArrowDropDownLine />
          </span>
        </button>
                      <div  id="contact-details" className={`footer-details ${activeSection === 'contact-details' ? 'active' : ''}`}>
                <p className="contact-font mb-1">Who We Are</p>
                <p className="contact-font mb-1">Our Mission</p>
              </div>
            </div>
            <div className="text-white mx-5">
            <button className="footer-title" onClick={() => toggleDetails('contact-details')}>
          Legal
          <span className="dropdown-icon"><RiArrowDropDownLine />
          </span>
        </button>
                      <div  id="contact-details" className={`footer-details ${activeSection === 'contact-details' ? 'active' : ''}`}>
                <p className="contact-font mb-1">Privacy Policy</p>
                <p className="contact-font mb-1">Terms Of Service</p>
                <p className="contact-font mb-1">Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column  align-items-center">
        <hr className="text-white border-5 w-75 " />
        <div className="text-white d-flex flex-row gap-2  ">
          <MdCopyright />
          <p className="contact-font">
            2024 shopinisland.ng, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
