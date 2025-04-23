import React from "react";
import productList from "../data/productList";
import "./Items.css";

const Items = () => (
  <div className="items-page">
    <h2>Available Items</h2>
    <ul>
      {productList.map(item => (
        <li key={item.id}>
          {item.name} – ₹{item.price} <span>({item.category})</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Items;