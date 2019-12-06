import React from "react";
import "./RightSection.scss";

import { Grid } from "@material-ui/core";
import Tennis from "../../../assets/images/tennis.png";
import Seat from "../../../assets/images/seat.png";
import BasketballCourt from "../../../assets/images/basketball-court.png";

const RightSection: React.FC = () => {
  return (
    <div className="right-section">
      <Grid container>
        <Grid item xs={6} sm={5} md={4} className="message1-grid">
          <h3>We help with the build out and hiring of the management team</h3>
        </Grid>
        <Grid item xs={6} sm={7} md={8} className="tennis-photo-grid">
          <img src={Tennis} alt="tennis" />
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={5} className="message2-grid">
          <h3>
            We take an active role as advisors and/or board members to the
            companies we invest in
          </h3>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={6} sm={7} md={6} className="seat-photo-grid">
          <img src={Seat} alt="seat" />
        </Grid>
      </Grid>
      <div className="wrap-basketball-photo">
        <img src={BasketballCourt} alt="basketball court" />
      </div>
    </div>
  );
};

export default RightSection;
