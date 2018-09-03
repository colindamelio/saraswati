import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: ${props => `${props.width}px`};
`;

const Image = ({ alt, src, width }) => {
  return src ? <Img src={src} alt={alt} width={width} /> : null;
};

export default Image;

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number
};
