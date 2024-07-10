import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="card-style container mt-5">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title className="cardname-style">{product.chairType}</Card.Title>
        <Card.Text className="price mb-0">{product.price}</Card.Text>
        <div className="d-flex gap-1 rev-star">
          <Rating
            className="star-rating"
            emptySymbol={<AiOutlineStar color="gold" />}
            fullSymbol={<AiFillStar color="gold" />}
            initialRating={4}
            readonly
          />
          <p className="reviews">(238 Reviews)</p>
        </div>
        <div className="mt-2">
          <Button
            className="card-iconz"
            variant="primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
