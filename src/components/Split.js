import React from 'react';
import styled from 'styled-components';
import Tout from './Tout';
import Image from './Image';
import villaImage from 'media/villa-malaathina-1.jpg';
import mq from 'utils/mq';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  ${mq.desktop`
    flex-direction: ${props => (props.isReversed ? 'row-reverse' : 'row')};
  `};
`;

const HeroImage = styled.div`
  background: ${props => `url(${props.src}) ${props.theme.white}`};
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

const ImageContainer = styled.div`
  width: 100%;
  ${mq.desktop`
    width: 50%;
  `};
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  padding: ${props => props.theme.paddingDesktop};
  background: ${props =>
    props.secondary ? props.theme.primaryAccent : 'none'};
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

const Split = ({ id, src, children, content, ctas, secondary, isReversed }) => {
  return (
    <Section id={id} isReversed={isReversed}>
      <HeroImage src={src} />
      {/* <ImageContainer>
        <Image src={src} />
      </ImageContainer> */}
      <Content secondary={secondary}>
        {children
          ? children
          : content.map((item, n) => (
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

Split.defaultProps = {
  ctas: [],
};

export default Split;