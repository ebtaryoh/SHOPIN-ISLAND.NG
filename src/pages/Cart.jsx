// src/components/CartPage.js
import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <ListGroup>
        {cart.map((item, index) => (
          <ListGroup.Item key={index}>
            <img src={item.image} alt={item.name} style={{ width: "50px" }} />
            {item.name} - ${item.price}
            <Button
              variant="danger"
              onClick={() => removeFromCart(item)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Cart;
