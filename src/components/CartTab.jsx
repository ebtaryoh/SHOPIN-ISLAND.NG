import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const CartTab = () => {
  const cartItems = useSelector((state) => state.cart.items); // Fetch cart items from Redux store

  const formatPrice = (price) => {
    if (isNaN(price)) {
      return '₦0.00';
    }
    return parseFloat(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const calculateTotalCartPrice = () => {
    if (cartItems.length === 0) {
      return 0;
    }

    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 0;
      return total + (price * quantity);
    }, 0);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => subtotal + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    if (!isNaN(subtotal)) {
      const deliveryFee = 10000;
      return subtotal + deliveryFee;
    } else {
      console.error("Error calculating subtotal. Please check item prices.");
      return 0;
    }
  };

  const formattedTotalPrice = formatPrice(calculateTotalCartPrice());

  return (
    <Container className="bg-zinc-100 md:pl-28">
      <Row className="justify-content-center">
        <Col md={8} className="bg-white">
          <h2 className="p-5 text-black text-2xl">My Cart</h2>
          {cartItems.length === 0 ? (
            <div className="p-5 text-center">
              <p className='text-xl'>Cart is empty</p>
              <Link to="/">
                <Button className="bg-cyan-500 text-black mt-16 mb-[87px] w-44 h-10 rounded-lg">
                  Keep Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <Row>
              <Col md={7}>
                {cartItems.map((item, key) => (
                  <CartItem key={key} data={item} />
                ))}
              </Col>
              <Col md={5}>
                <Card className="bg-teal-900 text-white">
                  <Card.Body>
                    <Card.Title>Summary</Card.Title>
                    <div className="d-flex justify-content-between border-bottom border-gray-300 py-3">
                      <span>Total Price:</span>
                      <span>₦{formattedTotalPrice}</span>
                    </div>
                    <div className="d-flex justify-content-between border-bottom border-gray-300 py-3">
                      <span>Delivery:</span>
                      <span>₦10,000.00</span>
                    </div>
                    <div className="d-flex justify-content-between py-3">
                      <span>Total:</span>
                      <span>₦{calculateTotal().toFixed(2)}</span>
                    </div>
                    <Link to="/checkoutpage">
                      <Button className="w-100 bg-yellow-400 mt-4">
                        CHECK OUT
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CartTab;
