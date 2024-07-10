import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/Cart";
import { Button, Image } from "react-bootstrap";
import rate from "../Images/rating.png";

const ProductCart = (product) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const carts = useSelector((store) => store.cart.items);
  const { id, chairType, price, image, slug } = product.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productInCart = carts.find((item) => item.productId === id);

    if (!productInCart) {
      dispatch(
        addToCart({
          productId: id,
          quantity: 1,
        })
      );
      setAddedToCart(true);
    } else {
      alert("This product is already added to the cart.");
    }
  };

  const isSpecialProduct = [23].includes(id); t
  const itSpecialProduct = [24, 19, 18, 17, 1, 2, 3, 5, 6, 7].includes(id); 
  return (
    <div
      className={`bg-white p-5 rounded-xl shadow-sm ${
        isSpecialProduct ? "special-product" : ""
      }`}
    >
      <Link to={slug}>
        <Image
          src={image}
          alt={chairType}
          className={`${
            isSpecialProduct ? "w-full h-60 mb-14" : "w-full h-60"
          }`}
          fluid
        />
      </Link>
      <p
        className={`${
          itSpecialProduct
            ? "pt-7 text-xl text-center font-medium"
            : "text-xl text-center font-medium"
        }`}
      >
        {chairType}
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <p>
          ₦<span className="text-xs font-bold">{price}</span>
        </p>
        <div>
          <Image src={rate} alt="Rating" className="w-60 h-5" fluid />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button
          className={`bg-cyan-500 p-2 rounded-full text-sm w-72 text-center mt-3 ${
            addedToCart ? "bg-gray-600 cursor-not-allowed" : "hover:bg-cyan-400"
          }`}
          onClick={handleAddToCart}
          disabled={addedToCart}
        >
          {addedToCart ? "Added to Cart" : "Add To Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
