import React from "react";
import "./Footer.scss";

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
              <p>604.616.1514</p>
              <p>604.785.4229</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="logo">
          <p>Copyright © 2019 Brickhouse Inc. All rights reserved.</p>
        </div>
        <div className="flash">
          <div>
            <h2>Toronto</h2>
            <hr />
            <p>393 University Avenue, Suite 2000 Toronto ON, M5G 1E6</p>
            <hr />
          </div>
          <div>
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
