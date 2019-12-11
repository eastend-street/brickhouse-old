import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Team from "../Team/Team";
import NotFound from "../NotFound/NotFound";
import Advisor from "../Advisor/Advisor";
import Press from "../Press/Press";
import "./reset.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Advisor" exact component={Advisor} />
        <Route path="/team" exact component={Team} />
        <Route path="/press" exact component={Press} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
