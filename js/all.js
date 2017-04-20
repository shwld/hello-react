import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

document.addEventListener("DOMContentLoaded", () => {
  const mountNode = document.getElementById('app');
  ReactDOM.render(<Hello name="shwld" />, mountNode);
});
