import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Home from 'components/Home';

export default (
  <Route path="/" component={App}>
    {/* <Route path="/list" component={} /> */}
    <IndexRoute component={Home} />
  </Route>
);