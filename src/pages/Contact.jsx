import React from "react";
import PizzaLeft from "../assets/pizzaleft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{backgroundImage: `url(${PizzaLeft})` }} 
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter Full Name..." />
          <label htmlFor="emai">Full Name</label>
          <input type="email" name="email" placeholder="Enter Your Email..." />
          <label htmlFor="message"> Message </label>
          <textarea
            rows={"6"}
            placeholder="Enter Message"
            name="message"
          ></textarea>
          <button type="submit">Send Message </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
