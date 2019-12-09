import React from "react";
import "./ContactForm.scss";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">
      <div className="wrap-form">
        <input
          className="c-name"
          type="text"
          name="Full-name"
          placeholder="Name"
        ></input>
        <input
          className="mail"
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <input
          className="phoneNumber"
          type="text"
          name="phone"
          placeholder="Phone"
        ></input>
        <textarea
          className="comment"
          name="message"
          placeholder="Your quote..."
          rows={4}
        ></textarea>
        <input
          className="submitButton"
          type="submit"
          value="Get in Touch"
        ></input>
      </div>
    </div>
  );
};

export default ContactForm;
