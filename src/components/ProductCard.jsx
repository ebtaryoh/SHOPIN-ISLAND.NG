import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Rating from "react-rating";
import { addToCart } from "../stores/Cart";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productInCart = carts.find((item) => item.productId === product.id);

    if (!productInCart) {
      dispatch(
        addToCart({
          productId: product.id,
          quantity: 1,
        })
      );
      setAddedToCart(true);
    } else {
      console.log("Product already added to cart");
      alert("Product already added to the cart");
    }
  };

  return (
    <Card className="card-style container mt-5">
      <Link to={product.slug}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title className="cardname-style">{product.chairType}</Card.Title>
        <Card.Text className="price mb-0">₦ {product.price}</Card.Text>
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
            variant={addedToCart ? "secondary" : "info"}
            className={`w-100 mt-3 rounded-5 ${addedToCart ? "cursor-not-allowed" : ""}`}
            onClick={handleAddToCart}
            disabled={addedToCart}
          >
            {addedToCart ? "Added to Cart" : "Add To Cart"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
