import React, { Component } from 'react';
import H1 from './../components/H1';
import H2 from './../components/H2';
import BodyText from './../components/BodyText';
import Button from './../components/Button';

export default class Home extends Component {
  render() {
    return (
      <div>
        <H1 secondary>Test</H1>
        <H2 secondary>Test</H2>
        <BodyText>
          Learn to code your own website in the heart of Bali. Apply for our
          14-day retreat today!
        </BodyText>
        <Button>Apply Now</Button>
        <h1>
          At Saraswati Retreats, we believe your education should be
          extraordinary.
        </h1>
        <h2>
          Learn to code your own website in the heart of Bali. Apply for our
          14-day retreat today!
        </h2>
      </div>
    );
  }
}
