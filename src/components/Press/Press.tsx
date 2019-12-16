import React from "react";
import { Grid } from "@material-ui/core";
import PressJSON from "../../data/press.json";

import "./Press.scss";

type PressData = {
  date: string;
  title: string;
  image_url: string;
  description: string;
};

const renderPress = () => {
  const pressData: PressData[] = PressJSON;
  return pressData.map((press: PressData, index) => {
    return (
      <React.Fragment key={index}>
        <Grid item xs={3}>
          <div className="press__left-section">
            <img src={press.image_url} alt={press.title} />
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="press__right-section">
            <div>
              <h3>{press.title}</h3>
              <div className="press__date">{press.date}</div>
              <p className="press__description">{press.description}</p>
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  });
};

const Press: React.FC = () => {
  return (
    <div id="press" className="press">
      <div className="press__inner">
        <h2>Press</h2>
        <Grid container>{renderPress()}</Grid>
      </div>
    </div>
  );
};

export default Press;
