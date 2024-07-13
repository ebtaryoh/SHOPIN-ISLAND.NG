import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeProduct } from "../stores/Cart";
import products from "./ProductDb";
import product1 from "./ProductDb1";
import product2 from "./ProductDb2";
import { Button, Image, Row, Col } from "react-bootstrap";

const CartItem = (product) => {
  const { productId, quantity } = product.data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const findDetail =
      products.find((product) => product.id === productId) ||
      product1.find((product) => product.id === productId) ||
      product2.find((product) => product.id === productId);

    if (findDetail) {
      setDetail(findDetail);
    }
  }, [productId]);

  useEffect(() => {
    if (detail && detail.price) {
      const itemPrice = detail.price * quantity;
      setTotalPrice(itemPrice);
    }
  }, [quantity, detail]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(changeQuantity({ productId, quantity: quantity - 1 }));
    }
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({ productId, quantity: quantity + 1 }));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(productId));
  };

  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="mb-3">
      <Row className="align-items-center text-black p-2 border-bottom">
        {detail && detail.image && (
          <Col xs={3}>
            <Image src={detail.image} alt={detail.name} rounded fluid />
          </Col>
        )}
        <Col xs={6}>
          <div>
            {detail && detail.name && <h5>{detail.name}</h5>}
            {detail && detail.text && <small>{detail.text}</small>}
          </div>
          <div className="d-flex align-items-center gap-2 mt-2">
            <Button variant="dark" size="sm" onClick={handleMinusQuantity}>
              -
            </Button>
            <span>{quantity}</span>
            <Button variant="dark" size="sm" onClick={handlePlusQuantity}>
              +
            </Button>
            {detail && detail.price && (
              <p className="mb-0">₦{formatPrice(detail.price * quantity)}</p>
            )}
          </div>
        </Col>
        <Col xs={2} className="text-end">
          <Button
            variant="link"
            size="sm"
            className="text-danger p-0"
            onClick={handleRemoveProduct}
          >
            x
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
