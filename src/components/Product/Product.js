import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, stock, seller } = props.product;
  const carticon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <img src={img} alt="" />

      <div className="details">
        <h4 className="product-name">{name}</h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <h3>Price: {price}</h3>
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
        <button
          onClick={() => props.handleAddtoCart(props.product)}
          className="purchas-btn"
        >
          {carticon} Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
