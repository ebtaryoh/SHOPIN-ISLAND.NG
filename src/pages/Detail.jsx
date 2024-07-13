import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Button, Col, Row } from "react-bootstrap";
import { products } from "../components/ProductDb";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/Cart";
import { product1 } from "../components/ProductDb1";
import { product2 } from "../components/ProductDb2";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail =
      products.find((product) => product.slug === slug) ||
      product1.find((product) => product.slug === slug) ||
      product2.find((product) => product.slug === slug);

    if (findDetail) {
      setDetail(findDetail);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity - 1 < 1 ? 1 : prevQuantity - 1
    );
  };

  const handlePlusQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail.id,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="pb-1">
      <h2 className="text-center pt-5">PRODUCT DETAIL</h2>
      <Row className="mt-5">
        <Col md={6}>
          <Image src={detail.image} alt={detail.chairType} fluid />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column gap-4">
            <h1 className="text-uppercase font-weight-bold">
              {detail.chairType}
            </h1>
            <p className="font-weight-bold h3">${detail.price}</p>
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <Button variant="light" onClick={handleMinusQuantity}>
                  -
                </Button>
                <span className="bg-light px-3 py-2 font-weight-bold">
                  {quantity}
                </span>
                <Button variant="light" onClick={handlePlusQuantity}>
                  +
                </Button>
              </div>
              <Button
                variant="dark"
                className="ms-3 "
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </div>
            <p>{detail.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
