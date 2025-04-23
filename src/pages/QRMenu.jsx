import React from "react";
import "./QRMenu.css";

const QRMenu = () => (
  <div className="qr-menu-page">
    <h2>Scan to View Menu</h2>
    <div className="qr-container">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://canteen.example.com/menu"
        alt="QR Code for Menu"
      />
      <p>Scan this QR code with your mobile device to browse our menu and order online!</p>
    </div>
  </div>
);

export default QRMenu;