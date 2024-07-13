import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import Visa from "../Images/Visa.png";
import products from "./ProductDb";
import product1 from "./ProductDb1";
import product2 from "./ProductDb2";

function Checkout() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState('');

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
    return parseFloat(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const calculateTotal = () => {
    let productTotal = 0;
    for (let i = 0; i < carts.length; i++) {
      const cart = carts[i];
      const id = cart.productId;
      const detail =
        products.find((product) => product.id === id) ||
        product1.find((product) => product.id === id) ||
        product2.find((product) => product.id === id);

      productTotal = productTotal + (detail.price * cart.quantity);
    }

    const delivery = 10000;
    const totalPrice = productTotal + delivery;
    return totalPrice;
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <h2 className="pb-5">Check Out</h2>
          <Card className="p-4 mb-4">
            <Card.Title>Shipping Information</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Winner Giant Company 16, Akubero Street Off Iyana ipaja, Lagos, Nigeria"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="+234 803 647 2837" />
              </Form.Group>

              <Button variant="warning" as={Link} to="/" className="mb-3">
                Edit
              </Button>
            </Form>
          </Card>
          <Card className="p-4">
            <Card.Title>Total</Card.Title>
            <Card.Text className="fs-4">
              {formatPrice(calculateTotal())}
            </Card.Text>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 visa-bg text-white">
            <Card.Title>Payment Method</Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Check
                  type="radio"
                  label="Debit Card"
                  name="paymentMethod"
                  id="cashOnDelivery"
                  value="Cash on Delivery"
                  checked={selectedMethod === 'Cash on Delivery'}
                  onChange={() => handleInputChange('Cash on Delivery')}
                />
                <Form.Check
                  type="radio"
                  label="Paypal"
                  name="paymentMethod"
                  id="bankTransfer"
                  value="Bank Transfer"
                  checked={selectedMethod === 'Bank Transfer'}
                  onChange={() => handleInputChange('Bank Transfer')}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNameOnCard">
                <Form.Label>Payment Details</Form.Label>
                <Form.Control
                  type="text" 
                  placeholder="Enter name on Card  "
                  className="bg-transparent text-white border-bottom"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCardNumber">
                <Form.Control
                  type="text"
                  placeholder="Card Number"
                  className="bg-transparent border-bottom"
                />
              </Form.Group>

              <img src={Visa} alt="Visa" className="w-12 mb-3" />

              <Row>
                <Col>
                  <Form.Group controlId="formExpiration">
                    <Form.Control
                      type="text"
                      placeholder="Expiration"
                      className="bg-transparent border-bottom"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formCvv">
                    <Form.Control
                      type="text"
                      placeholder="CVV"
                      className="bg-transparent border-bottom"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            <Button variant="warning" as={Link} to="/shopping-cart" className="mt-4 w-100">
              Pay
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
