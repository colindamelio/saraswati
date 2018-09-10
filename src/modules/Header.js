import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DEFAULT_PROPS from 'data/components/header';

const Link = styled(NavLink)`
  padding: 0 15px;
  text-transform: ${props => props.theme.ctaCasing};
  color: ${props => props.theme.white};
`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.primaryAccent};
  padding: 35px 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  ${Link}:first-child {
    font-family: ${props => props.theme.primaryFont};
    font-weight: ${props => props.theme.bold};
    font-size: 30px;
    line-height: 13px;
    letter-spacing: 1px;
    margin-top: 11px;
    margin-right: auto;
  }

  ${Link} {
    font-family: ${props => props.theme.secondaryFont};
    font-weight: ${props => props.theme.bold};
    font-size: ${props => props.theme.ctaFontSize};
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
