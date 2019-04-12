import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from 'routes/Home';
import Curriculum from 'routes/Curriculum';
import Culture from 'routes/Culture';
import About from 'routes/About';
import Apply from 'routes/Apply';
import Error from 'routes/Error';
import Header from 'modules/Header';
import Footer from 'modules/Footer';

const Body = props => {
  return (
    <HashRouter>
      <Fragment>
        <Header isDesktop={props.isDesktop} />
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/"
              render={renderProps => <Home {...props} {...renderProps} />}
            />
            <Route
              path="/curriculum"
              render={renderProps => <Curriculum {...props} {...renderProps} />}
            />
            <Route
              path="/culture"
              render={renderProps => <Culture {...props} {...renderProps} />}
            />
            <Route
              path="/about"
              render={renderProps => <About {...props} {...renderProps} />}
            />
            <Route
              path="/apply"
              render={renderProps => <Apply {...props} {...renderProps} />}
            />
            <Route component={Error} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Fragment>
    </HashRouter>
  );
};

export default Body;
