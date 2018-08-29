import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  padding: 0 10px;
  text-transform: uppercase;
`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.green};
  padding: 15px 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  ${Link}:first-child {
    font-family: ${props => props.theme.fonts.primaryFont};
    font-weight: ${props => props.theme.weights.primaryBold};
    font-size: 30px;
    line-height: 13px;
    margin-top: 11px;
    margin-right: auto;
  }

  ${Link} {
    font-family: ${props => props.theme.fonts.secondaryFont};
    font-weight: ${props => props.theme.weights.secondaryBold};
    font-size: 14px;
  }
`;

export default class Navigation extends Component {
  render() {
    return (
      <NavContainer>
        <Nav>
          <Link to="/">Saraswati</Link>
          <Link to="/culture">Culture</Link>
          <Link to="/curriculum">Curriculum</Link>
          <Link to="">Apply</Link>
        </Nav>
      </NavContainer>
    );
  }
}
