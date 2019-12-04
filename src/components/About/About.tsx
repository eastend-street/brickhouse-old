import React from "react";
import "./About.scss";

import { Grid } from "@material-ui/core";

const About: React.FC = () => {
  return (
    <div className="about">
      <Grid container>
        <Grid item xs={12} sm={5} className="about___right-grid">
          <h2>
            Brickhouse Ventures invests in Esports, Sports &amp; Entertainment
            Technologies.
          </h2>
          <div className="message1">
            We advise companies on the structure of future financing rounds and
            the path to public markets if appropriate
          </div>
          <div className="message2">
            We help these companies with business development, partnerships and
            strategy
          </div>
        </Grid>
        <Grid item xs={12} sm={7}>
          <h3>We help with the build out and hiring of the management team</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
