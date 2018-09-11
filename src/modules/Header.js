import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DEFAULT_PROPS from 'data/components/header';
import mq from '../utils/mq';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: ${props => props.theme.headerIndex};
  display: flex;
  align-items: center;
  background: ${props => props.theme.primaryAccent};
  height: ${props => props.theme.navHeightDesktop};
  width: 100%;
  padding: 0 ${props => props.theme.paddingDesktop};
  ${mq.tablet`
    height: ${props => props.theme.navHeightTablet};
    padding: 0 ${props => props.theme.paddingTablet};
    `};
  ${mq.mobile`
    height: ${props => props.theme.navHeightMobile};
    padding: 0 ${props => props.theme.paddingMobile};
    `};
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;

const Link = styled(NavLink)`
  height: ${props => props.theme.ctaFontSize};
  font-family: ${props => props.theme.secondaryFont};
  font-size: ${props => props.theme.ctaFontSize};
  font-weight: ${props => props.theme.bold};
  text-transform: ${props => props.theme.ctaCasing};
  color: ${props => props.theme.white};
  transition: color 0.3s;
  &:hover {
    color: ${props => props.theme.black};
  }
  &:first-child {
    font-family: ${props => props.theme.primaryFont};
    font-size: 30px;
    height: 30px;
    letter-spacing: 1px;
    margin-right: auto;
  }
  &:not(:first-child) {
    padding-left: 30px;
  }
`;

class Header extends Component {
  render() {
    const { routes } = this.props;
    return (
      <NavContainer>
        <Nav>
          {routes.map((route, index) => (
            <Link key={index} {...route}>
              {route.title}
            </Link>
          ))}
        </Nav>
      </NavContainer>
    );
  }
}

Header.defaultProps = DEFAULT_PROPS;

export default Header;
