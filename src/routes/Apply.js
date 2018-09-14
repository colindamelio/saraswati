import React, { Fragment } from 'react';
import PageContent from 'modules/PageContent';
import Application from 'modules/home/Application';

const Home = props => {
  return (
    <Fragment>
      <PageContent>
        <Application />
      </PageContent>
    </Fragment>
  );
};

export default Home;
