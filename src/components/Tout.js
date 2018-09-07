import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import Button from './Button';
import BodyTextLockup from './BodyTextLockup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CtaContainer = styled.div`
  display: flex;
`;

const Tout = ({ image, title, description, secondary, ctas }) => {
  return (
    <Container>
      {image && image.url && <Image src={image.url} alt={image.alt} />}
      <BodyTextLockup
        secondary={secondary}
        title={title}
        description={description}
      />
      {ctas.length > 0 && (
        <CtaContainer>
          {ctas.map((cta, n) => (
            <Button
              key={`${n}-cta`}
              text={cta.title}
              href={cta.href}
              style={cta.style}
            />
          ))}
        </CtaContainer>
      )}
    </Container>
  );
};

export default Tout;

Tout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ctas: PropTypes.array,
};
