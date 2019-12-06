import React from "react";
import "./About.scss";

import { Grid } from "@material-ui/core";
import RightSection from "./RightSection/RightSection";

const About: React.FC = () => {
  return (
    <div className="about">
      <Grid container>
        <Grid item sm={12} md={5} className="about___left-grid">
          <div className="shape"></div>
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
        <Grid item sm={12} md={7}>
          <RightSection />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
