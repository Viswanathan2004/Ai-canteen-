import React from "react";
import productList from "../data/productList";

const Products = () => (
  <div style={{ maxWidth: 600, margin: "30px auto", background: "#fff", borderRadius: 10, padding: 24 }}>
    <h2>All Products</h2>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Name</th><th>Category</th><th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productList.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>₹{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Products;