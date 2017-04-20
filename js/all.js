import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

document.addEventListener("DOMContentLoaded", () => {
  const mountNode = document.getElementById('app');
  const component = (
    <Hello initialName="shwld">
      <p>this is yamagata children</p>
    </Hello>
  );
  ReactDOM.render(component, mountNode);
});
