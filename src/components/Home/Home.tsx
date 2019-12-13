import React from "react";
import "./Home.scss";

import Top from "../Top/Top";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Press from "../Press/Press"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Top />
      <About />
      <Press />
      <Contact />
    </div>
  );
};

export default Home;