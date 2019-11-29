import React from "react";
import "./Contact.scss";

import { Grid } from "@material-ui/core";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact us</h2>
      <Grid container>
        <Grid item xs={12} sm={5}>
          here is contact form
        </Grid>
        <Grid item xs={12} sm={7}>
          here is location
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
