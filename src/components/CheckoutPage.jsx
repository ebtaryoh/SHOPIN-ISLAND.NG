import React from 'react';
import { useCart } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { cart } = useCart();
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 5;
  const finalAmount = totalAmount + deliveryFee;

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Amount: ${finalAmount.toFixed(2)}</p>
      <p>Thank you for your purchase!</p>
    </div>
  );
};

export default CheckoutPage;
