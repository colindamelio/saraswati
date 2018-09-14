import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DEFAULT_PROPS from 'data/components/header';
import mq from '../utils/mq';
import Icon from '../components/Icon';
import MaterialIcon from '../components/MaterialIcon';

const Container = styled.div`
  width: 100%;
  position: fixed;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: ${props => props.theme.headerIndex};
  display: flex;
  background: ${props => props.theme.primaryAccent};
  height: ${props => props.theme.navHeightDesktop};
  width: 100%;
  padding: 0 ${props => props.theme.paddingDesktop};
  box-shadow: 0px 1px 15px ${props => props.theme.black};
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
    height: 40px;
    margin-right: auto;
    ${mq.mobile`
      height: 30px;
    `};
  }
  &:not(:first-child) {
    padding-left: 30px;
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  opacity: ${props => (props.isExpanded ? '1' : '0')}
  transition: all 0.5s ease;
  transform: ${props =>
    props.isExpanded ? `translateY(0)` : `translateY(-300px)`};
`;

const MobileMenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100px;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.white};
  font-family: ${props => props.theme.secondaryFont};
  font-size: ${props => props.theme.subtitleDesktop}
  padding: 0 ${props => props.theme.paddingMobile};
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.primaryAccent};
  }
  &:last-child {
    border: none;
  }

  ${mq.tablet`
    padding: 0 ${props => props.theme.paddingTablet};
    `};
`;

const DesktopNav = ({ routes }) => (
  <NavContainer>
    <Nav>
      {routes.map((route, index) => (
        <Link key={index} {...route}>
          {route.title === 'Saraswati' ? (
            <Icon name={'logo'} color={'#EEEEEE'} />
          ) : (
            route.title
          )}
        </Link>
      ))}
    </Nav>
  </NavContainer>
);

const MobileNav = ({ routes, isExpanded, handleToggle }) => (
  <Fragment>
    <NavContainer>
      <Nav>
        <Link {...routes[0]}>
          <Icon name={'logo'} color={'#EEEEEE'} />
        </Link>
        <MaterialIcon onClick={handleToggle}>
          {isExpanded ? 'close' : 'menu'}
        </MaterialIcon>
      </Nav>
    </NavContainer>
    <MobileMenu isExpanded={isExpanded}>
      {routes.slice(1).map((route, index) => (
        <MobileMenuItem key={index} onClick={handleToggle} {...route}>
          {route.title}
        </MobileMenuItem>
      ))}
    </MobileMenu>
  </Fragment>
);

class Header extends Component {
  state = {
    isExpanded: false,
  };

  handleToggle = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { routes, isDesktop } = this.props;
    return (
      <Container>
        {isDesktop ? (
          <DesktopNav routes={routes} />
        ) : (
          <MobileNav
            routes={routes}
            isExpanded={this.state.isExpanded}
            handleToggle={this.handleToggle}
          />
        )}
      </Container>
    );
  }
}

Header.defaultProps = DEFAULT_PROPS;

export default Header;
