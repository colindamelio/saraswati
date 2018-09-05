import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import mq from "utils/mq";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.primaryFont};
`;

const Description = styled.p`

`;

const BodyTextLockup = ({ title, description, cta }) => {

  return (
    <Container>
      {title ? <Title>{title}</Title> : null}
      {description ? <Description>{description}</Description> : null}
      {cta ? <button>{cta.text}</button> : null}
    </Container>
  );
};

export default BodyTextLockup;

BodyTextLockup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.object
};
