import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TestComponent from './Components/TestComponent/TestComponent';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component name="TODO" count={123456789} showCount />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

renderApp(TestComponent);

// Check hot reloading is enabled in our webpack-build and initialise top-level component if it is.

if (module && module.hot) {
  module.hot.accept('./Components/TestComponent/TestComponent', () => {    
    renderApp(TestComponent);
  })
}