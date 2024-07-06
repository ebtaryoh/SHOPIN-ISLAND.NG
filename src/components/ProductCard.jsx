import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chair1 from "../../src/Images/chair1.png"
import { Image } from 'react-bootstrap';

function ProductCard() {
  return (
    <Card style={{ width: '18rem' }} className='container'>
      <Image variant="top" src="holder.js/100px180" />
      <Image src={Chair1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        ULTRA PLUSH RECLINING LIVING ROOM CHAIR
        </Card.Text>
        <div className='d-flex column-gap-3'>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;



// // src/components/ProductCard.jsx
// import React from 'react';
// import { useCart } from '../context/CartContext';

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;
