import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  background: aqua;
  padding: 15px 0;
`;

const Nav = styled.nav`
  &:last-of-type {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }
`;

const Link = styled(NavLink)`
  color: #000;
  padding: 0 10px;
`;
export default class Navigation extends Component {
  render() {
    return (
      <NavContainer>
        <Nav>
          <Link to="/">Saraswati</Link>
        </Nav>
        <Nav>
          <Link to="/culture">Culture</Link>
          <Link to="/curriculum">Curriculum</Link>
        </Nav>
      </NavContainer>
    );
  }
}
