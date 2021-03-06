import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
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
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
