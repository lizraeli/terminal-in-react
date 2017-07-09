import React from 'react';
import { render } from 'react-dom';
// Bundle generated with npm run build:production ('../build/terminal') or use '../components'
import Terminal from '../components';

const App = () => (
  <Terminal
    msg="Hello World. My name is Foo and I like Bar"
    watchConsoleLogging
  />
);

render(<App />, document.getElementById('app'));
