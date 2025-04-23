import React from "react";
import "./Shop.css";
import productList from "../data/productList";

const Shop = () => (
  <div className="shop-page">
    <h2>Canteen Menu</h2>
    <div className="product-list">
      {productList.map(product => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ₹{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

export default Shop;