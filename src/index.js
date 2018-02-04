import React from 'react';
import { render } from 'react-dom';
import TestComponent from './Components/TestComponent/TestComponent';

render(
  <TestComponent name="TODO" count={12345} showCount />,
  document.querySelector('#react-app'),
);