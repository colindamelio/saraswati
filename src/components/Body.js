import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Culture from "../routes/Culture";
import Curriculum from "../routes/Curriculum";
import Error from "../routes/Error";
import Navigation from "./Navigation";

export default class Body extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/culture" component={Culture} />
            <Route path="/curriculum" component={Curriculum} />
            <Route component={Error} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}
