import React from 'react';
import styled from 'styled-components';
import PageContent from 'modules/PageContent';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 238px);
`;

const ErrorHeading = styled.h1`
  text-align: center;
`;

const Error = () => {
  return (
    <PageContent>
      <Container>
        <ErrorHeading>
          Sorry, the page you are looking for does not exist
        </ErrorHeading>
      </Container>
    </PageContent>
  );
};

export default Error;
