import React from "react";
import "./Home.scss";

// import Top from "../Top/Top";
import About from "../About/About";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* <Top /> */}
      <About />
    </div>
  );
};

export default Home;
