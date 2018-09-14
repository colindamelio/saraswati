import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import Cta from './Cta';
import BodyTextLockup from './BodyTextLockup';
import mq from '../utils/mq';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${props => props.theme.paddingDesktop};
  ${mq.tablet`
    margin-top: ${props => props.theme.paddingTablet};
  `} ${mq.mobile`
    margin-top: ${props => props.theme.paddingMobile};
    flex-direction: column;
  `};
`;

const ToutImage = styled(Image)`
  margin-bottom: 30px;
`;

const Tout = ({ image, title, children, secondary, ctas }) => {
  return (
    <Container>
      {image && image.src && <ToutImage src={image.src} alt={image.alt} />}
      <BodyTextLockup secondary={secondary} title={title}>
        {children}
      </BodyTextLockup>
      {ctas && ctas.length > 0 ? (
        <CtaContainer>
          {ctas.map((cta, n) => (
            <Cta key={`${n}-cta`} href={cta.href} className={`${cta.variant}`}>
              {cta.text}
            </Cta>
          ))}
        </CtaContainer>
      ) : null}
    </Container>
  );
};

Tout.defaultProps = {
  ctas: [],
};

Tout.propTypes = {
  title: PropTypes.string,
  ctas: PropTypes.array,
};

export default Tout;
