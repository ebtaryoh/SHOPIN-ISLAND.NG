import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeProduct } from "../stores/Cart";
import products from "./ProductDb";  // Importing static products data
import { Button, Image, Row, Col } from "react-bootstrap";

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const findDetail = products.find((product) => product.id === productId);
        if (findDetail) {
          setDetail(findDetail);
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProductDetail();
  }, [productId]);

  useEffect(() => {
    if (detail && detail.price) {
      const itemSubtotal = detail.price * quantity;
      const itemTotalPrice = itemSubtotal;
      setSubtotal(itemSubtotal);
      setTotalPrice(itemTotalPrice);
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
            <Image src={detail.image} alt={detail.chairType} rounded fluid />
          </Col>
        )}
        <Col xs={6}>
          <div>
            {detail && detail.chairType && <h5>{detail.chairType}</h5>}
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
              <p className="mb-0">₦{formatPrice(subtotal)}</p>
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
      <Row className="align-items-center text-black p-2">
        <Col xs={9}>
          <div className="text-end">
            <p className="mb-0">Subtotal: ₦{formatPrice(subtotal)}</p>
            <p className="mb-0">Total: ₦{formatPrice(totalPrice)}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
