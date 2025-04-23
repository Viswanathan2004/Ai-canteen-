import React, { useState, useEffect } from "react";
import "./TrackOrder.css";

const MOCK_STATUS = [
  "Order received",
  "Preparing your meal",
  "Ready for pickup",
  "Completed"
];

const TrackOrder = () => {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (status < MOCK_STATUS.length - 1) {
      const timer = setTimeout(() => setStatus(status + 1), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="order-tracking">
      <h2>Track Your Order</h2>
      <div className="status">{MOCK_STATUS[status]}</div>
      <progress value={status} max={MOCK_STATUS.length - 1} />
    </div>
  );
};

export default TrackOrder;