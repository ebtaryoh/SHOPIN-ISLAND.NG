import React from "react";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 5;
  const finalAmount = totalAmount + deliveryFee;

  return (
    <div>
      <h2>Cart</h2>
      <ListGroup>
        {cart.map((item, index) => (
          <ListGroup.Item key={index}>
            <Row>
              <Col xs={2}>
                <img
                  src={item.image}
                  alt={item.chairType}
                  style={{ width: "50px" }}
                />
              </Col>
              <Col xs={4}>{item.chairType}</Col>
              <Col xs={2}>${item.price}</Col>
              <Col xs={2}>
                <Button
                  variant="outline-secondary"
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                >
                  -
                </Button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <Button
                  variant="outline-secondary"
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                >
                  +
                </Button>
              </Col>
              <Col xs={2}>
                <Button variant="danger" onClick={() => removeFromCart(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="mt-3">
        <h4>Order Summary</h4>
        <p>Subtotal: ${totalAmount.toFixed(2)}</p>
        <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
        <h5>Total: ${finalAmount.toFixed(2)}</h5>
        <Link to="/checkout">
          <Button variant="success">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
