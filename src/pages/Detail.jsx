import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/Cart";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=66463b38709a4cf98ec5811780b8ea7e&Appid=SEKBK1J42EYNC0H&Apikey=24ff0c84141444edad9e9f38110bff4820240713000328036304&url_slug=${slug}`
        );
        const data = await response.json();
        if (data && data.products && data.products.length > 0) {
          const product = data.products[0];
          setDetail({
            id: product.id,
            chairType: product.name,
            price: product.current_price[0]?.NGN[0] || 0,
            description: product.description,
            image: `https://api.timbu.cloud/images/${product.photos.length > 0 ? product.photos[0].url : ""}`,
          });
        } else {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
        window.location.href = "/";
      }
    };

    fetchProductDetail();
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity - 1 < 1 ? 1 : prevQuantity - 1));
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
          {detail.image && <Image src={detail.image} alt={detail.chairType} fluid />}
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column gap-4">
            <h1 className="text-uppercase font-weight-bold">
              {detail.chairType}
            </h1>
            <p className="font-weight-bold h3">₦{detail.price}</p>
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
                className="ms-3"
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
