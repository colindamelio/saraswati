import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Culture from 'routes/Culture';
import Curriculum from 'routes/Curriculum';
import Error from 'routes/Error';
import Footer from 'components/Footer';

const Body = props => {
  return (
    <BrowserRouter>
      <Fragment>
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
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default Body;
