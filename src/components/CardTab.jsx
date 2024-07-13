import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItems';
import { toggleStatusTab } from '../stores/Cart';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import products from './ProductDb';
import product1 from './ProductDb1';
import product2 from './ProductDb2';

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const formatPrice = (price) => {
    if (isNaN(price)) {
      return "₦0.00"; 
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
    let total = 0;
    console.log(total);

    for (let i = 0; i < carts.length; i++) {
      const cart = carts[i];
      const id = cart.productId;
      const detail =
        products.find((product) => product.id === id) ||
        product1.find((product) => product.id === id) ||
        product2.find((product) => product.id === id);

      total = total + (detail.price * cart.quantity);
    }
    console.log(total);
    return total;
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

  const formattedTotalPrice = formatPrice(calculateSubtotal());

  console.log("formattedTotalPrice:", calculateSubtotal());

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-4">My Cart</h2>
          {carts.length === 0 ? (
            <div>
              <p className='text-xl'>Cart is empty</p>
              <Link to="/">
                <Button variant="info" className="mt-4">
                  Keep Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {carts.map((item, key) => (
                <CartItem key={key} data={item} />
              ))}
            </>
          )}
        </Col>
        {carts.length > 0 && (
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Summary</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <strong>₦{formattedTotalPrice}</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Delivery:</span>
                    <strong>₦10,000.00</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Total:</span>
                    <strong>₦{calculateTotal().toFixed(2)}</strong>
                  </ListGroup.Item>
                </ListGroup>
                <Link to="/checkout">
                  <Button variant="warning" className="w-100 mt-4">
                    CHECK OUT
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CartTab;
