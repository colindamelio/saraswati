import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import {
  getViewportWidth,
  getDeviceIdFromDimensions,
  devices,
} from 'utils/helpers';
import theme from './theme';
import Body from './components/Body';

injectGlobal`
  b, strong {
    font-weight: 700;
  }
`;

class App extends Component {
  state = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  };

  componentDidMount() {
    this.setViewportDimensions();
    window.addEventListener('resize', this.setViewportDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setViewportDimensions);
  }

  setViewportDimensions = () => {
    const deviceId = getDeviceIdFromDimensions({
      width: getViewportWidth(),
    });

    this.setState({
      isMobile: deviceId === devices.mobile,
      isTablet: deviceId === devices.tablet,
      isDesktop: deviceId === devices.desktop,
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Body {...this.state} />
      </ThemeProvider>
    );
  }
}

export default App;
