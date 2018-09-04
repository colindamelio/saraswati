import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: ${props => `${props.width}px`};
`;

export default Image;
