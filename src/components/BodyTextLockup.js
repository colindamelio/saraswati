import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {cta && cta.text && <button>{cta.text}</button>}
    </Container>
  );
};

export default BodyTextLockup;

BodyTextLockup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  })
};
