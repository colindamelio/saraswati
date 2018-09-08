import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tout from "./Tout";
import Image from "./Image";
import villaImage from "media/villa-malaathina-1.jpg";
import mq from "utils/mq";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  ${mq.desktop`
    flex-direction: ${props => (props.isReversed ? "row-reverse" : "row")};
  `};
`;

const HeroImage = styled.div`
  background: ${props => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  flex-grow: 1;

  ${mq.tablet`
    max-height: 450px;
    min-height: 250px;
  `} ${mq.mobile`
    max-height: 220px;
    min-height: 200px;
  `};
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  padding: ${props => props.theme.paddingDesktop};
  background: ${props =>
    props.secondary ? props.theme.primaryAccent : "none"};
  ${mq.desktop`
    width: 50%;
  `};
  ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `};
  ${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
`;

const SplitHero = ({
  id,
  image,
  children,
  content,
  secondary,
  isReversed
}) => {
  return (
    <Section id={id} isReversed={isReversed}>
      <HeroImage src={image.src} />
      <Content secondary={secondary}>
        {children ||
          content.map((item, n) => (
            <Tout
              key={`${id}-${n}-paragraph`}
              secondary={secondary}
              title={item.title}
              description={item.description}
              ctas={item.ctas}
            />
          ))}
      </Content>
    </Section>
  );
};

SplitHero.defaultProps = {
  ctas: []
};

SplitHero.PropTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  secondary: PropTypes.bool,
  isReversed: PropTypes.bool
};

export default SplitHero;
