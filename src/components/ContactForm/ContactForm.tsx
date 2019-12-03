import React from "react";
import "./ContactForm.scss";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">

      <div className="wrap-form">

        <div className="name-100">

          <input className="c-name" type="text" name="Full-name" placeholder="Name"></input>

        </div>

        <br></br>

        <div className="email-100">

          <input className="mail" type="email" name="email" placeholder="Email"></input>

        </div>
        <br></br>

        <div className="phone-100">

          <input className="phoneNumber" type="text" name="phone" placeholder="Phone"></input>

        </div>

        <br></br>

        <div className="message-100">

          <textarea className="comment" name="message" placeholder="Your quote..."></textarea>

        </div>

      </div>

    </div>
  );
};

export default ContactForm;
