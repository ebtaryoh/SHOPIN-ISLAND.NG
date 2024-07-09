import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Image,
  Navbar,
  Nav,
  Badge, Row, Col
} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/Cart'


import logo1 from "../../src/Images/Shoping_Island.png";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const Navbar1 = () => {
  const [query, setQuery] = useState("");
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }
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
           
            <div>
  <Container className="box2">
    <Row className="mt-2 p">
      <Col className="d-flex justify-content-center align-items-center position-relative ms-">
        <a href="/cart1" className="d-flex flex-column align-items-center">
          <MdOutlineShoppingCart size={28} />
          <p className="">Cart</p>
        </a>
        <Badge
          pill
          bg="danger"
          className="position-absolute top-0 end-0 translate-middle "
        >
          {totalQuantity}
        </Badge>
      </Col>
      <Col className="d-flex justify-content-center align-items-center">
        <a href="/profile" className="d-flex flex-column align-items-center ">
          <HiOutlineUser size={25  } />
          <p>Profile</p>
        </a>
      </Col>
    </Row>
  </Container>
</div>;
       </div>
      </Container>
    </Navbar>
  );
};



export default Navbar1;
