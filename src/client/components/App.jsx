import React from 'react';
import { Layout } from 'antd';

import 'assets/styles/app.scss';

const App = props => (
  <Layout>
    {props.children}
  </Layout>
);

export default App;