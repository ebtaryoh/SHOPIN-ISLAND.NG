import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Image } from "react-bootstrap";
import { changeQuantity, removeProduct } from "../../src/stores/Cart";
import { products } from "../components/ProductDb";
import { product1 } from "../components/PorductDb1";
import { product2 } from "../components/ProductDb2";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
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
    dispatch(changeQuantity({ productId, quantity: quantity - 1 }));
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
    <div className="d-flex justify-content-between align-items-center border-bottom p-2">
      {detail && detail.image && (
        <Image
          src={detail.image}
          alt={detail.name}
          className="w-28 rounded-xl"
          fluid
        />
      )}

      <div className="flex-grow-1 ms-2">
        <div>
          {detail && detail.name && <h3>{detail.name}</h3>}
          {detail && detail.text && <h6>{detail.text}</h6>}
        </div>
        <div className="d-flex align-items-center gap-2 w-60">
          <Button variant="teal" onClick={handlePlusQuantity}>
            +
          </Button>
          <span>{quantity}</span>
          <Button variant="teal" onClick={handleMinusQuantity}>
            -
          </Button>
          {detail && detail.price && (
            <p>₦{formatPrice(detail.price * quantity)}</p>
          )}
        </div>
      </div>
      <Button variant="black" onClick={handleRemoveProduct}>
        x
      </Button>
      <p>total: ₦{formatPrice(totalPrice)}</p>
    </div>
  );
};

export default CartItem;
