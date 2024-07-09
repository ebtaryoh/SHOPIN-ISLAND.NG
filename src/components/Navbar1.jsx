import React, { useState } from "react";
import {
  Button,
  Container,
  Image,
  Navbar,
  Nav,
} from "react-bootstrap";
import logo1 from "../../src/Images/Shoping_Island.png";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const Navbar1 = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbar-size bg-white center navbar-custom"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="logo-size ">
            <Image className="" src={logo1} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-dark nav-linkss p pt-2">
            <Nav.Link className=" m-2 mt-3"  href="/">Home</Nav.Link>
            <Nav.Link  className=" m-2 mt-3" href="/about"> About Us</Nav.Link>
            <Nav.Link  className=" m-2 mt-3" href="category"> Category</Nav.Link>
            <Nav.Link  className=" m-2 mt-3" href="contact"> Contact</Nav.Link>
           
          </Nav>
          
        </Navbar.Collapse>
       <div className="mobile-view-search d-flex flex-row">
       <div className="search-container d-flex ms- box1">
              <IoIosSearch className="search-icon" />
              <input
                type="text"
                className="p-1  input-bar rounded-3 m-3 rounded-end-0 me-0 "
                placeholder="       Search product"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button className="btn-search rounded-start-0 m-3 ms-0">
                <label>Search</label>
              </Button>
            </div >
            <div className="d-flex mt-2 mobile-view-icons box2 ">
              <a href="/favorite" className="text-black icon-nav1 text-center  ">
                <GrFavorite className="align-" />
                <p>favorite</p>
              </a>

              <a href="/cartpage" className="text-black icon-nav text-center ">
                <div className="cart-div d-flex justify-content-center align-items-center ">
                  <MdOutlineShoppingCart className="w-5" />
                  <span>0</span>
                </div>
                <p>Cart</p>
              </a>
              <a href="/profile" className="text-black icon-nav text-center">
                <HiOutlineUser />
                <p>Profile</p>
              </a>
            </div>
       </div>
      </Container>
    </Navbar>
  );
};

//   return (
//     <Navbar className=" navbar-size bg-white center navbar-custom">
//       <div className="container">

//         <div className="nav-grp">
//           <Link to="/" className=" text-dark nav-linkss">
//             Home
//           </Link>
//           <Link to="/About" className=" text-dark nav-linkss">
//             About Us
//           </Link>
//           <Link to="/Category" className=" text-dark nav-linkss">
//             Category
//           </Link>
//           <Link to="/Contact" className=" text-dark nav-linkss">
//             Contact
//           </Link>
//         </div>
//         <div className="nav-grp-side-bar">
//           <Link to="/" className=" text-dark nav-linkss">
//             Home
//           </Link>
//           <Link to="/About" className=" text-dark nav-linkss">
//             About Us
//           </Link>
//           <Link to="/Category" className=" text-dark nav-linkss">
//             Category
//           </Link>
//           <Link to="/Contact" className=" text-dark nav-linkss">
//             Contact
//           </Link>
//           <a href=""></a>
//         </div>

//       </div>
//     </Navbar>
//   );
// };

export default Navbar1;
