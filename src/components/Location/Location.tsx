import React from "react";
import "./Location.scss";

import { Grid } from "@material-ui/core";
import VancouverLogo from "../../assets/images/vancouver.png";
import TorontoLogo from "../../assets/images/toronto.png";

const Location: React.FC = () => {
  return (
    <div className="location">
      <Grid container>
        <Grid item xs={12} sm={6} className="location__wrap-van-photo-grid">
          <img src={VancouverLogo} alt="vancouver logo" />
        </Grid>
        <Grid item xs={12} sm={6} className="location__vancouver-grid">
          <h3>Vancouver</h3>
          <p className="location__address">
            303 – 570 Granville Street
            <br />
            Vancouver B.C., V6C 3P1
          </p>
          <hr />
          <div className="location__email">
            <span>Email: </span>
            <span>matt@brickhouse.ventures</span>
          </div>
          <div className="location__phone">
            <span>Phone: </span>
            <span>604-616-1514</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="location__toronto-grid">
          <h3>Toronto</h3>
          <p className="location__address">
            393 University Avenue, Suite 2000
            <br />
            Toronto ON, M5G 1E6
          </p>
          <hr />
          <div className="location__email">
            <span>Email: </span>
            <span>spencer@brickhouse.ventures</span>
          </div>
          <div className="location__phone">
            <span>Phone: </span>
            <span>604-785-4229</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="location__wrap-toronto-photo-grid">
          <img src={TorontoLogo} alt="toronto logo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Location;
