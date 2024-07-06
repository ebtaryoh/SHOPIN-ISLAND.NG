import React, { useState } from "react";
import { Button, Image, Navbar } from "react-bootstrap";
import logo1 from "../../src/Images/Shoping_Island.png";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const Navbar1 = () => {
  const [query, setQuery] = useState("");
  return (
    <Navbar className=" navbar-size bg-white ">
      <div className="container">
        <Link to="/" className="logo-size ">
          <Image className="" src={logo1} />
        </Link>

        <div className="nav-grp" >
          <Link to="/" className=" text-dark nav-linkss">
            Home
          </Link>
          <Link to="/About" className=" text-dark nav-linkss">
            About Us
          </Link>
          <Link to="/Category" className=" text-dark nav-linkss">
            Category
          </Link>
          <Link to="/Contact" className=" text-dark nav-linkss">
            Contact
          </Link>
        </div>

        <div className="search-container d-flex">
          <IoIosSearch className="search-icon" />
          <input
            type="text"
            className="p-1  input-bar rounded-3 rounded-end-0 "
            placeholder="       Search product"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button className="btn-search rounded-start-0">
            <label >Search</label>
          </Button>
        </div>
        <div className="d-flex gap-4 ">
          <a href="" className="text-black icon-nav text-center  ">
            <GrFavorite  className="align-"/>
            <p>favorite</p>
          </a>

          <a href="" className="text-black icon-nav text-center ">
            <MdOutlineShoppingCart />
            <p>Cart</p>
          </a>
          <a href="" className="text-black icon-nav text-center">
            <HiOutlineUser />
            <p>Profile</p>
          </a>
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar1;
