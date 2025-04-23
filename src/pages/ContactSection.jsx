import React from "react";
import "./ContactSection.css";

const ContactSection = () => (
  <div className="contact-section">
    <h2>Contact Us</h2>
    <p>For support or feedback, reach out to us:</p>
    <form>
      <input type="text" placeholder="Your Name" required /><br />
      <input type="email" placeholder="Your Email" required /><br />
      <textarea placeholder="Your Message" required /><br />
      <button type="submit">Send</button>
    </form>
    <div className="contact-info">
      <p>Email: canteen@campus.edu</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  </div>
);

export default ContactSection;