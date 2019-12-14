import React from "react";
import "./Home.scss";

import Top from "../Top/Top";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Press from "../Press/Press";
import Team from "../Team/Team";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Top />
      <About />
      <Team />
      <Press />
      <Contact />
    </div>
  );
};

export default Home;
