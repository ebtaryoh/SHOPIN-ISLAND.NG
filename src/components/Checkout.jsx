import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import Visa from "../Images/Visa.png";
import ProductDb from "./ProductDb";

const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleInputChange = (value) => {
    setSelectedMethod(value);
  };

  const carts = useSelector((store) => store.cart.items);

  const formatPrice = (price) => {
    if (isNaN(price)) {
      return "₦0.00";
    }
    return parseFloat(price).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateTotal = (products) => {
    let productTotal = 0;
    for (let i = 0; i < carts.length; i++) {
      const cart = carts[i];
      const id = cart.productId;
      const detail = products.find((product) => product.id === id);

      if (detail) {
        productTotal += detail.price * cart.quantity;
      }
    }

    const delivery = 10000;
    const totalPrice = productTotal + delivery;
    return totalPrice;
  };

  return (
    <Container className="pt-5">
      <ProductDb>
        {({ products }) => (
          <Row>
            <Col md={8}>
              <h2 className="mb-4">CHECKOUT</h2>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Delivery Address</Card.Title>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formAddress" className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>
                    <Form.Group controlId="formAddress2" className="mb-3">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control type="text" placeholder="Enter address 2" />
                    </Form.Group>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formCountry">
                          <Form.Label>Country</Form.Label>
                          <Form.Control
                            as="select"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                          >
                            <option value="">Choose...</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Ghana">Ghana</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Kenya">Kenya</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formState">
                          <Form.Label>State</Form.Label>
                          <Form.Control type="text" placeholder="Enter state" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formZip">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control type="text" placeholder="Enter zip code" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formPhone">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control type="text" placeholder="Enter phone number" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Payment Method</Card.Title>
                  <Form>
                    <div key="radio" className="mb-3">
                      <Form.Check
                        type="radio"
                        id="credit"
                        label="Credit card"
                        value="credit"
                        checked={selectedMethod === "credit"}
                        onChange={(e) => handleInputChange(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        id="debit"
                        label="Debit card"
                        value="debit"
                        checked={selectedMethod === "debit"}
                        onChange={(e) => handleInputChange(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        id="paypal"
                        label="PayPal"
                        value="paypal"
                        checked={selectedMethod === "paypal"}
                        onChange={(e) => handleInputChange(e.target.value)}
                      />
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Order Summary</Card.Title>
                  <Card.Text>
                    <div className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <strong>₦{formatPrice(calculateTotal(products) - 10000)}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Delivery</span>
                      <strong>₦{formatPrice(10000)}</strong>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <span>Total</span>
                      <strong>₦{formatPrice(calculateTotal(products))}</strong>
                    </div>
                  </Card.Text>
                  <Link to="/confirmation">
                    <Button variant="warning" className="w-100 mt-4">
                      PLACE ORDER
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </ProductDb>
    </Container>
  );
};

export default Checkout;
