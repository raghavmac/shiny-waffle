import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import SkillsContainer from 'containers/SkillsContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SkillsContainer} />
  </Route>
);