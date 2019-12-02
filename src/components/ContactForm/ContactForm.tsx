import React from "react";
import "./ContactForm.scss";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">
      <div className="wrap-form">


        <input className="c-name" type="text" name="Full-name" placeholder="Name"></input>
        <br></br>
        <input type="email" name="email" placeholder="Email"></input>
        <br></br>
        <input className="phoneNumber" type="text" name="phone" placeholder="Phone"></input>
        <br></br>
        <textarea className="Message" name="message" placeholder="Your quote..."></textarea>
      </div>

    </div>
  );
};

export default ContactForm;
