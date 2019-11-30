import React from "react";
import "./Location.scss";

import { Grid } from "@material-ui/core";

const Location: React.FC = () => {
  return (
    <div className="location">
      <Grid container>
        <Grid item xs={12} sm={6}>
          here is vancouver photo
        </Grid>
        <Grid item xs={12} sm={6}>
          here is vancouver location
        </Grid>
        <Grid item xs={12} sm={6}>
          here is toronto photo
        </Grid>
        <Grid item xs={12} sm={6}>
          here is toronto location
        </Grid>
      </Grid>
    </div>
  );
};

export default Location;
