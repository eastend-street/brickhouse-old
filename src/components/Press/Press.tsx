import React from "react";
import { Grid } from "@material-ui/core";
import PressJSON from "../../data/press.json";

import "./Press.scss";

type PressData = {
  title: string;
  image_url: string;
  description: string;
};

const renderPress = () => {
  return (
    <>
      <Grid item xs={3}>
        <img src="" alt="aaaaaaaa" />
      </Grid>
      <Grid item xs={9}>
        22222222
      </Grid>
    </>
  );
};

const Press: React.FC = () => {
  const pressData: PressData[] = PressJSON;
  return (
    <div className="press">
      <h1>Press</h1>
      <Grid container>{renderPress}</Grid>
    </div>
  );
};

export default Press;
