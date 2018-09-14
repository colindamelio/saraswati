import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from 'routes/Home';
import Culture from 'routes/Culture';
import Curriculum from 'routes/Curriculum';
import Error from 'routes/Error';
import Header from 'modules/Header';
import Footer from 'modules/Footer';

const Body = props => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header {...props} />
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/"
              render={renderProps => <Home {...props} {...renderProps} />}
            />
            <Route
              path="/culture"
              render={renderProps => <Culture {...props} {...renderProps} />}
            />
            <Route
              path="/curriculum"
              render={renderProps => <Curriculum {...props} {...renderProps} />}
            />
            <Route component={Error} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default Body;
