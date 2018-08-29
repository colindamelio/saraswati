import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Culture from "./components/Culture";
import Curriculum from "./components/Curriculum";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
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

export default App;
