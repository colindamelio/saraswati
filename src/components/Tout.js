import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./Image";
import BodyTextLockup from "./BodyTextLockup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tout = ({ image, title, description, cta }) => {

  return (
    <Container>
      {image && image.url && <Image src={image.url} alt={image.alt}/>}
        <BodyTextLockup
          title={title}
          description={description}
          cta={cta}
        />
    </Container>
  );
};

export default Tout;

Tout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  })
};
