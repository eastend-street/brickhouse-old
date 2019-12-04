import React from "react";
import "./RightSection.scss";

import { Grid } from "@material-ui/core";

const RightSection: React.FC = () => {
  return (
    <div className="right-section">
      <Grid container>
        <Grid item xs={3}>
          <h3>We help with the build out and hiring of the management team</h3>
        </Grid>
        <Grid item xs={9}>
          here is the image
        </Grid>
      </Grid>
    </div>
  );
};

export default RightSection;
