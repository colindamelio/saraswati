import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: ${props => props.theme.primaryFont};
  titleLineHeight: ${props => props.theme.titleLineHeight};
`;

const Description = styled.div`
  font-size: ${props => props.theme.bodyTextDesktop};
  line-height: ${props => props.theme.descriptionLineHeight};
`;

const BodyTextLockup = ({ title, description, cta }) => {

  return (
    <Container>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default BodyTextLockup;

BodyTextLockup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
