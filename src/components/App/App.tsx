import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact"
import NotFound from "../pages/NotFound/NotFound";
import "./reset.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route  component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
