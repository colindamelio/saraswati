import React from 'react';
import styled from 'styled-components';
import HeroWithContent from './HeroWithContent';
import H1 from './H1';
import ApplicationForm from './ApplicationForm';
import reflection from './../media/bali-tall-2-min.jpg';

const Bold = styled.span`
  font-weight: ${props => props.theme.weights.primaryBold};
`;

const Container = styled.div``;

const Application = () => {
  return (
    <Container>
      <HeroWithContent src={reflection} width={50}>
        <H1>
          <Bold>Apply today</Bold> for an upcoming retreat!
        </H1>
        <ApplicationForm />
      </HeroWithContent>
    </Container>
  );
};

export default Application;
