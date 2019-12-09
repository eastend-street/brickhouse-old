import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Contact from "../Contact/Contact"
import Team from "../Team/Team";
import NotFound from "../NotFound/NotFound";
import Advisor from "../Advisor/Advisor";
import "./reset.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/team" exact component={Team} />
        <Route path="/Advisor" exact component={Advisor} />
        <Route  component={NotFound} />
        <Route path="/team" exact component={NotFound} />
        <Route path="/press" exact component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
