import React, { useState } from "react";
import productList from "../data/productList";
import "./SearchResults.css";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const results = productList.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results-page">
      <h2>Search Menu Items</h2>
      <input
        type="text"
        value={query}
        placeholder="Search food (e.g., dosa, juice)..."
        onChange={e => setQuery(e.target.value)}
      />
      <div className="search-results-list">
        {results.length === 0 && <div>No items found.</div>}
        {results.map(item => (
          <div className="search-result-item" key={item.id}>
            <b>{item.name}</b> – ₹{item.price} ({item.category})
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;