import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  const shipping = 15;
  const tax = (shipping + total) * 2;
  const grandtotal = total + tax + shipping;
  return (
    <div>
      <h2>Order Summary </h2>
      <h4>Item Order: {props.cart.length} </h4>
      <br />
      <h4>Total: {total.toFixed(2)} </h4>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Grand Total: {grandtotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
