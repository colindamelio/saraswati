import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./Image";
import Button from "./Button";
import BodyTextLockup from "./BodyTextLockup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CtaContainer = styled.div`
  display: flex;
`;

const Tout = ({image, title, description, secondary, ctas}) => {
  return (
    <Container>
      {image && image.url && <Image src={image.url} alt={image.alt} />}
      <BodyTextLockup
        secondary={secondary}
        title={title}
        description={description}
      />
      {ctas && ctas.length > 0 ? (
        <CtaContainer>
          {ctas.map((cta, n) => (
            <Button key={`${n}-cta`} href={cta.href} className={`${cta.variant}`}>
              {cta.text}
            </Button>
          ))}
        </CtaContainer>
      ) : null}
    </Container>
  );
};

Tout.defaultProps = {
  ctas: []
};

Tout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ctas: PropTypes.array
};

export default Tout;
