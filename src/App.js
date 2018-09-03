import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Body />
      </ThemeProvider>
    );
  }
}

export default App;
