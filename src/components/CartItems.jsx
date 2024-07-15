import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeProduct } from "../stores/Cart";
import { Button, Image, Row, Col } from "react-bootstrap";

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=66463b38709a4cf98ec5811780b8ea7e&Appid=SEKBK1J42EYNC0H&Apikey=24ff0c841414747ee4ab6259b2b398c9`
        );
        const data = await response.json();
        const product = data.products.find(
          (product) => product.id === productId
        );
        setDetail(product);
        setSubtotal(product.price * quantity);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetail();
  }, [productId, quantity]);

  const handleRemove = () => {
    dispatch(removeProduct(productId));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(changeQuantity({ productId, quantity: newQuantity }));
    }
  };

  return (
    <Row className="mb-4">
      <Col md={3}>
        <Image src={detail.image} fluid thumbnail />
      </Col>
      <Col md={9}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5>{detail.name}</h5>
            <p>Price: ₦{detail.price}</p>
            <p>Subtotal: ₦{subtotal}</p>
          </div>
          <div>
            <Button
              variant="outline-secondary"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              -
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button
              variant="outline-secondary"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default CartItem;
