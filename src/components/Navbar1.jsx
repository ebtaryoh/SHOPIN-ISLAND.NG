import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Image,
  Navbar,
  Nav,
  Badge,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/Cart";
import logo1 from "../../src/Images/Shoping_Island.png";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const Navbar1 = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [query, setQuery] = useState("");
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <Navbar expand="lg" className="bg-white center navbar-custom">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="logo-size">
            <Image src={logo1} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-dark nav-linkss pt-2">
            <Nav.Link className="m-2 mt-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="m-2 mt-3" href="/about">
              Product
            </Nav.Link>
            <Nav.Link className="m-2 mt-3" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="mobile-view-search d-flex flex-row">
          <div className="search-container d-flex ms- box1">
            <Form className="d-flex m-1 p-3 ps-0 ms-0">
              <FormControl
                type="search"
                placeholder="   Search product"
                className="  input-bar rounded-3 m-3 rounded-end-0 border-end-0 me-0"
                aria-label="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                className="btn-search rounded-start-0 m-3 p-0 ms-0 text-white"
                variant="outline-primary"
              >
                Search
                <IoIosSearch className="search-icon text-black" />
              </Button>
            </Form>
          </div>
          <div>
            <Container className="box2">
              <Row className="mt-4 cart-pro">
                <Col className="d-flex justify-content-center align-items-center position-relative cart-m">
                  <Link
                    to="/cart"
                    className="d-flex flex-column align-items-center"
                    onClick={handleOpenTabCart}
                  >
                    <MdOutlineShoppingCart size={28} />
                    <p>Cart</p>
                  </Link>

                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute top-0 end-0 translate-middle"
                  >
                    {totalQuantity}
                  </Badge>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <a
                    href="/profile"
                    className="d-flex flex-column align-items-center"
                  >
                    <HiOutlineUser size={25} />
                    <p>Profile</p>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
