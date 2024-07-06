// import React from 'react';
// import Header from '../components/Header';
// import CartItem from '../components/CartItem';
// // import './cart.css';

// const cartItems = [
//   { id: 1, name: 'Product 1', price: 10, quantity: 2, image: '/path/to/image1.jpg' },
//   { id: 1, name: 'Product 1', price: 10, quantity: 2, image: '/path/to/image1.jpg' },
//   { id: 1, name: 'Product 1', price: 10, quantity: 2, image: '/path/to/image1.jpg' },
//   { id: 1, name: 'Product 1', price: 10, quantity: 2, image: '/path/to/image1.jpg' },
// ];

// const Cart = () => (
//   <>
//     <Header />
//     <div className="cart-list">
//       {cartItems.map(item => (
//         <CartItem key={item.id} item={item} />
//       ))}
//     </div>
//   </>
// );

// export default Cart;


// src/pages/Cart.jsx
import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <Header />
      <div className="cart-list">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => <CartItem key={item.id} item={item} />)
        )}
      </div>
    </>
  );
};

export default Cart;
