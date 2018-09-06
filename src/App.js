import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  getViewportWidth,
  getDeviceIdFromDimensions,
  devices,
} from 'utils/helpers';
import theme from './theme';
import Body from './components/Body';
import strings from './data/resource-strings';

class App extends Component {
  state = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  };

  componentDidMount() {
    this.setViewportDimensions();
    window.addEventListener('resize', this.setViewportDimensions);
    console.log(strings);
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
        <Body {...this.state} strings={strings} />
      </ThemeProvider>
    );
  }
}

export default App;
