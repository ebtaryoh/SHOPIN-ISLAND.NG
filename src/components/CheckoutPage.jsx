// import React from 'react';
// import { useCart } from '../contexts/CartContext';

// const CheckoutPage = () => {
//   const { cart } = useCart();
//   const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const deliveryFee = 5;
//   const finalAmount = totalAmount + deliveryFee;

//   return (
//     <div>
//       <h2>Checkout</h2>
//       <p>Total Amount: ${finalAmount.toFixed(2)}</p>
//       <p>Thank you for your purchase!</p>
//     </div>
//   );
// };

// export default CheckoutPage;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import Visa from "../Images/Visa.png"; 

const countries = [
    { name: "Nigeria" }, { name: "USA" }, { name: "UK" }, { name: "Canada" },
];

const nigerianStates = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];

function CheckoutPage() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleInputChange = (value) => {
        setSelectedMethod(value);
    };

    return (
        <div>
            <Row className="pb-14">
                <Col md={8}>
                    <h2 className="font-semibold pb-5 pt-10">
                        Check Out
                    </h2>
                    <div>
                        <p className="font-semibold text-xl">Shipping Information</p>
                        <div className="pt-2 pb-5">
                            <h4>Address</h4>
                            <Form.Group controlId="address">
                                <Form.Control
                                    type="text"
                                    placeholder="Winner Giant Company 16, Akubero Street Off Iyana ipaja, Lagos, Nigeria"
                                    className="mb-3"
                                />
                            </Form.Group>
                        </div>
                        
                        <div className="pb-5">
                            <h4>Phone Number</h4>
                            <Form.Group controlId="phoneNumber">
                                <Form.Control
                                    type="text"
                                    placeholder="+234 803 647 2837"
                                    className="mb-3"
                                />
                            </Form.Group>
                        </div>

                        <Link to="/">
                            <Button variant="warning" className="mb-5">
                                Edit
                            </Button>
                        </Link>

                        <div>
                            <p className="text-xl">Total</p>
                            <p className="text-xl pt-2">₦322,000.00</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <Card className="h-100">
                        <Card.Body className="bg-teal-900 text-white">
                            <h6 className="text-[25px] font-semibold pb-2 pt-5">
                                Payment Method
                            </h6>

                            <div>
                                <h6 className="text-[15px] font-semibold pb-3 pt-1">
                                    Select Payment Method
                                </h6>

                                <div className="flex flex-column gap-2">
                                    <Form.Check
                                        type="radio"
                                        id="cashOnDelivery"
                                        name="paymentMethod"
                                        label="Cash on Delivery"
                                        value="Cash on Delivery"
                                        checked={selectedMethod === 'Cash on Delivery'}
                                        onChange={() => handleInputChange('Cash on Delivery')}
                                        className="text-white"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="bankTransfer"
                                        name="paymentMethod"
                                        label="Bank Transfer"
                                        value="Bank Transfer"
                                        checked={selectedMethod === 'Bank Transfer'}
                                        onChange={() => handleInputChange('Bank Transfer')}
                                        className="text-white"
                                    />
                                </div>
                            </div>

                            <div className="pt-5">
                                <p>Payment Details</p>
                                <Form.Group controlId="nameOnCard" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name on Card"
                                        className="bg-transparent border-bottom border-gray-300 text-white"
                                    />
                                </Form.Group>

                                <Form.Group controlId="cardNumber" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Card Number"
                                        className="bg-transparent border-bottom border-gray-300 text-white"
                                    />
                                </Form.Group>

                                <img src={Visa} alt="Visa" className="w-12 pt-5" />

                                <Row className="pt-5">
                                    <Col md={6}>
                                        <Form.Group controlId="expiration">
                                            <Form.Control
                                                type="text"
                                                placeholder="Expiration"
                                                className="bg-transparent border-bottom border-gray-300 text-white"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="cvv">
                                            <Form.Control
                                                type="text"
                                                placeholder="CVV"
                                                className="bg-transparent border-bottom border-gray-300 text-white"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>

                            <Link to="/shopping-cart">
                                <Button variant="warning" className="w-100 mt-4">
                                    Pay
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default CheckoutPage;

