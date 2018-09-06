import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  color: ${props => props.theme.white};
  padding: 0 20px;
  text-transform: uppercase;
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
    margin-top: 11px;
    margin-right: auto;
  }

  ${Link} {
    font-family: ${props => props.theme.secondaryFont};
    font-weight: ${props => props.theme.bold};
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
