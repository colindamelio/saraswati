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
  color: ${props =>
    props.secondary ? props.theme.white : props.theme.secondaryAccent};
  margin-bottom: 15px;
`;

const Description = styled.div`
  font-size: ${props => props.theme.bodyTextDesktop};
  line-height: ${props => props.theme.descriptionLineHeight};
  color: ${props =>
    props.secondary ? props.theme.white : props.theme.black};
`;

const BodyTextLockup = ({ title, secondary, children }) => {

  return (
    <Container>
      {title && <Title secondary={secondary}>{title}</Title>}
      {children && <Description secondary={secondary}>{children}</Description>}
    </Container>
  );
};

export default BodyTextLockup;

BodyTextLockup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
