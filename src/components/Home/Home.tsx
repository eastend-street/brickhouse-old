import React from "react";
import "./Home.scss";

import Top from "../Top/Top";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Top />
      <About />
      <Contact />
    </div>
  );
};

export default Home;