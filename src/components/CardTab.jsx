import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItems";
import { toggleStatusTab } from "../stores/Cart";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import ProductDb from "./ProductDb";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const formatPrice = (price) => {
    if (isNaN(price)) {
      return "₦0.00";
    }
    return parseFloat(price).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateSubtotal = (products) => {
    let total = 0;

    for (let i = 0; i < carts.length; i++) {
      const cart = carts[i];
      const id = cart.productId;
      const detail = products.find((product) => product.id === id);

      if (detail) {
        total += detail.price * cart.quantity;
      }
    }
    return total;
  };

  const calculateTotal = (products) => {
    const subtotal = calculateSubtotal(products);
    if (!isNaN(subtotal)) {
      const deliveryFee = 10000;
      return subtotal + deliveryFee;
    } else {
      console.error("Error calculating subtotal. Please check item prices.");
      return 0;
    }
  };

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <Container className="pt-5">
      <ProductDb>
        {({ products }) => {
          const formattedTotalPrice = formatPrice(calculateSubtotal(products));

          return (
            <Row>
              <Col md={8}>
                <h2 className="mb-4">My Cart</h2>
                {carts.length === 0 ? (
                  <div>
                    <p className="text-xl">Cart is empty</p>
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
                          <strong>₦{formatPrice(calculateTotal(products))}</strong>
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
          );
        }}
      </ProductDb>
    </Container>
  );
};

export default CartTab;
