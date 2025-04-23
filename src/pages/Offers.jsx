import React from "react";
import "./Offers.css";

const offers = [
  {
    id: 1,
    title: "Combo Meal Offer",
    description: "Buy any sandwich with a juice and get 10% off!",
    code: "COMBO10"
  },
  {
    id: 2,
    title: "Breakfast Bonanza",
    description: "Get ₹5 off on all breakfast items before 10 AM.",
    code: "BREAKFAST5"
  },
  {
    id: 3,
    title: "Student Special",
    description: "Show your student ID to get a free cookie with any lunch order.",
    code: "STUDENTFREE"
  }
];

const Offers = () => (
  <div className="offers-page">
    <h2>Today's Offers & Deals</h2>
    <div className="offers-list">
      {offers.map((offer) => (
        <div className="offer-card" key={offer.id}>
          <h3>{offer.title}</h3>
          <p>{offer.description}</p>
          <div className="offer-code">Use Code: <b>{offer.code}</b></div>
        </div>
      ))}
    </div>
  </div>
);

export default Offers;