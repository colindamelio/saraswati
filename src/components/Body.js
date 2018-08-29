import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Culture from "./Culture";
import Curriculum from "./Curriculum";
import Error from "./Error";
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
