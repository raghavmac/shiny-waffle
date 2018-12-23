import React from 'react';

import 'assets/styles/app.scss';

const App = props => (
  <div className="layout">
    {props.children}
  </div>
);

export default App;