import React from "react";
import Logo from "../../assets/images/brickhouse.svg";
import Wave_1 from "../../assets/images/Wave_1.svg";
import Wave_2 from "../../assets/images/Wave_2.svg";
import anime from "animejs";
import "./Top.scss";

class Top extends React.Component {
  moveWave = () => {
    const wave_1Path =
      "M1 152.298C102.398 137.602 159.598 -132.513 475.453 94.3304C1005.95 475.329 1121.69 82.8693 1202 182.043C1276.5 274.043 1435 248.043 1435 234.158";
    const wave_2Path =
      "M4 1.32324C48 132 569.729 408.402 832 132C1034.75 -81.6736 1206.57 322.802 1435.02 146.434";

    const tl = anime.timeline({
      targets: ".initialPath-wave-1",
      duration: 8000,
      easing: "linear",
      loop: true,
      d: [
        {
          value:
            "M1 24.322C100.346 7.70234 417.979 -49.9824 619.771 164.596C804 360.5 1203.57 345.8 1432.02 169.433"
        },
        {
          value:
            "M1 8.60577C100.346 -8.01385 352.058 26.0242 619.771 148.88C863 260.5 1203.57 330.084 1432.02 153.717"
        },
        {
          value:
            "M1 4.93525C100.346 -11.6844 327.641 182.944 619.771 145.209C873 112.5 1203.57 326.414 1432.02 150.046"
        },
        {
          value:
            "M1 5.00979C100.346 -11.6098 384.314 322.27 619.771 145.284C911.5 -74 1203.57 326.488 1432.02 150.121"
        },
        {
          value:
            "M1 4.93525C100.346 -11.6844 327.641 182.944 619.771 145.209C873 112.5 1203.57 326.414 1432.02 150.046"
        },
        {
          value:
            "M1 8.60577C100.346 -8.01385 352.058 26.0242 619.771 148.88C863 260.5 1203.57 330.084 1432.02 153.717"
        },
        {
          value:
            "M1 24.322C100.346 7.70234 417.979 -49.9824 619.771 164.596C804 360.5 1203.57 345.8 1432.02 169.433"
        },
        {
          value:
            "M1.37207 10.1401C100.718 -6.4795 366.83 0.0936664 620.143 150.414C873.455 300.735 1203.94 331.619 1432.4 155.251"
        }
      ]
    });
    tl.add({
      targets: ".initialPath-wave-2",
      d: [
        {
          value:
            "M2 29.2587C308 -64.5 319.104 131.937 596.585 218.65C662.072 239.115 1047.5 288.003 1291.63 142.746C1312.5 130.33 1364.56 92.0689 1436 111.119"
        },
        {
          value:
            "M3 3.03711C286.5 252.5 393.477 143.303 601 84.8966C1027 -34.9982 1079.37 359.756 1323.5 214.5C1404 166.603 1379.5 101 1437 84.8978"
        },
        {
          value:
            "M2 3.76758C144.5 85.6311 327.737 222.474 604.5 133.495C1008 3.76965 1047.5 262.511 1291.63 117.255C1312.5 104.839 1364.56 66.5778 1436 85.6283"
        },
        {
          value:
            "M3 3.03711C286.5 252.5 393.477 143.303 601 84.8966C1027 -34.9982 1079.37 359.756 1323.5 214.5C1404 166.603 1379.5 101 1437 84.8978"
        },
        {
          value:
            "M2 29.2587C308 -64.5 319.104 131.937 596.585 218.65C662.072 239.115 1047.5 288.003 1291.63 142.746C1312.5 130.33 1364.56 92.0689 1436 111.119"
        }
      ]
    });
  };
  render() {
    return (
      <div onLoad={this.moveWave} className="top">
        <div className="top__logo">
          <img src={Logo} alt="Brickhouse logo" />
        </div>
        <svg
          id="wave-1"
          width="1435"
          height="280"
          viewBox="0 0 1435 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="initialPath-wave-1"
            opacity="0.7"
            d="M1.37207 10.1401C100.718 -6.4795 366.83 0.0936664 620.143 150.414C873.455 300.735 1203.94 331.619 1432.4 155.251"
            stroke="white"
            stroke-width="7.44162"
          />
        </svg>
        <svg
          id="wave-2"
          width="1436"
          height="239"
          viewBox="0 0 1436 239"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="initialPath-wave-2"
            opacity="0.7"
            d="M1 5.88206C102.398 -8.81426 318.104 108.561 595.585 195.274C661.072 215.738 1131.43 306.154 1290.63 119.37C1306.38 100.89 1363.56 68.6922 1435 87.7428"
            stroke="#028DC3"
            stroke-width="7.44162"
          />
        </svg>
        <div className="top__text">
          <h2>
            A Modern Approach <br />
            To The Value Creation
          </h2>
        </div>
      </div>
    );
  }
}

export default Top;
