import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Button, Col, Row } from "react-bootstrap";
import { products } from "../components/ProductDb";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/Cart";
import { product1 } from "../components/PorductDb1";
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
    <div className="pb-10">
      <h2 className="text-3xl text-center pt-5">PRODUCT DETAIL</h2>
      <Row className="mt-5">
        <Col>
          <Image src={detail.image} alt={detail.name} fluid />
        </Col>
        <Col>
          <div className="d-flex flex-column gap-5">
            <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
            <p className="font-bold text-3xl">${detail.price}</p>
            <div className="d-flex gap-5 align-items-center">
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <Button
                  variant="light"
                  className="font-bold text-xl rounded-xl"
                  onClick={handleMinusQuantity}
                >
                  -
                </Button>
                <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl d-flex justify-content-center align-items-center">
                  {quantity}
                </span>
                <Button
                  variant="light"
                  className="font-bold text-xl rounded-xl"
                  onClick={handlePlusQuantity}
                >
                  +
                </Button>
              </div>
              <Button
                variant="slate"
                className="px-7 py-3 rounded-xl shadow-2xl text-white"
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
