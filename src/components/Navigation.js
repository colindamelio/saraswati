import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  padding: 0 10px;
`;

const NavContainer = styled.div`
  display: flex;
  background: ${props => props.theme.colors.green};
  padding: 15px 0;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  ${Link} {
    font-family: ${props => props.theme.fonts.secondaryFont};
    font-weight: ${props => props.theme.weights.secondaryBold};
    font-size: 14px;
  }
`;

const LogoNav = styled.nav`
  font-family: ${props => props.theme.fonts.primaryFont};
  font-weight: ${props => props.theme.weights.primaryBold};
  font-size: 30px;
`;

export default class Navigation extends Component {
  render() {
    return (
      <NavContainer>
        <LogoNav>
          <Link to="/">Saraswati</Link>
        </LogoNav>
        <Nav>
          <Link to="/culture">Culture</Link>
          <Link to="/curriculum">Curriculum</Link>
        </Nav>
      </NavContainer>
    );
  }
}
