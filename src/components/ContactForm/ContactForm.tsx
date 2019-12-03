import React from "react";
import "./ContactForm.scss";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">

      <div className="wrap-form">

        <h1 className = "contact_intro">Contact us for custom quote</h1>

        <input className="c-name" type="text" name="Full-name" placeholder="Name"></input>

        <br></br>

        <input className="mail" type="email" name="email" placeholder="Email"></input>

        <br></br>

        <input className="phoneNumber" type="text" name="phone" placeholder="Phone"></input>

        <br></br>

        <textarea className="comment" name="message" placeholder="Your quote..."></textarea>


        <input className="submitButton" type="submit" value="Submit"></input>

      </div>

    </div>
  );
};

export default ContactForm;
