import React from "react";
import "./Footer.scss";
import facebook from "./resource/icons-facebook.png";
import instagram from "./resource/icons-instagram.png";
import twitter from "./resource/icons-twitter.png";
import logo from "./resource/logo.png";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="Footer">
        <div className="first-content">
          <div className="company-phone">
            <div>
              <h2>Company</h2>
              <hr />
              <p>Team</p>
              <p>Home</p>
              <p>Contact</p>
              <p>Press</p>
            </div>
            <div className="phone-style">
              <h2>Phone</h2>
              <hr />
              <a href="callto:1234567">Call 604.616.1514</a>
              <br />
              <a href="callto:1234567">Call 604.785.4229</a>
            </div>
          </div>
          <div className="logos">
            <img src={facebook} alt="Facebook" width="20%" />
            <img src={instagram} alt="Instagram" width="20%" />
            <img src={twitter} alt="Twitter" width="20%" />
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="Braicklogo" width="50%" />
          <p>Copyright © 2019 Brickhouse Inc. All rights reserved.</p>
        </div>
        <div className="flash">
          <div className="address">
            <h2>Toronto</h2>
            <hr />
            <p>393 University Avenue, Suite 2000 Toronto ON, M5G 1E6</p>
            <hr />
          </div>
          <div className="address">
            <h2>Vancouver</h2>
            <hr />
            <p>303 – 570 Granville Street Vancouver B.C., V6C 3P1</p>
            <hr />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
