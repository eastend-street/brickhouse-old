import React from "react";
import "./Contact.scss";
import ContactForm from "../ContactForm/ContactForm"
import Location from "../Location/Location";
import { Grid } from "@material-ui/core";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact us</h2>
      <Grid container>
        <Grid item xs={12} md={5}>
          <ContactForm/>
        </Grid>
        <Grid item xs={12} md={7}>
          <Location />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
