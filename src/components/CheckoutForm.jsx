import React from 'react';

const CheckoutForm = () => (
  <form className="checkout-form">
    <h2>Checkout</h2>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <label>
      Address:
      <input type="text" name="address" />
    </label>
    <label>
      Card Details:
      <input type="text" name="card" />
    </label>
    <button type="submit">Place Order</button>
  </form>
);

export default CheckoutForm;
