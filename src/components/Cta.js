import styled from 'styled-components';
import mq from 'utils/mq';

const Cta = styled.a`
  padding: ${props => props.theme.ctaPadding};
  background: ${props => props.theme.secondaryAccent};
  border: none;
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.bold};
  font-size: ${props => props.theme.ctaFontSize};
  text-transform: ${props => props.theme.ctaCasing};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${props => props.theme.black};
  }
  &:nth-child(n + 2) {
    background: none;
    border: none;
    color: ${props => props.theme.black};
    padding: 0;
    margin-left: 30px;
    &:hover {
      text-decoration: underline;
    }
  }

  &.secondary {
    background: none;
    border: ${props => props.theme.ctaBorder};
    border-color: ${props => props.theme.white};
    &:hover {
      background: ${props => props.theme.white};
      color: ${props => props.theme.black};
    }
    &:nth-child(n + 2) {
      border: none;
      color: ${props => props.theme.white};
      padding: 0;
      margin-left: 30px;
      &:hover {
        background: none;
        text-decoration: underline;
      }
    }
  }
  ${mq.mobile`
    width: 100%;
    text-align: center;
    &:nth-child(n + 2) {
      padding: ${props => props.theme.ctaPadding};
      margin-left: 0;
      margin-top: 15px;
      text-decoration: underline;
    }
    &.secondary {
      &:nth-child(n + 2) {
        padding: ${props => props.theme.ctaPadding};
        margin-left: 0;
        margin-top: 15px;
        text-decoration: underline;
      }
  `};
`;

export default Cta;
