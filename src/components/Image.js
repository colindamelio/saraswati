import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: ${props => `${props.width}px`};
`;

const Image = ({ alt, className, src, width, attrs }) => {
  return src ? (
    <Img className={className} src={src} alt={alt} width={width} {...attrs} />
  ) : null;
};

export default Image;
