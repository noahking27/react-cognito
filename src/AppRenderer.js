import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import config from './constants/config';

// Imports aws config and runs the file which sets up authentication.
// Importing this in other files can cause a bug due to multiple calls to setup the config
// eslint-disable-next-line no-unused-vars
import { awsConfig } from './constants/aws-exports';

const AppWithAuth = React.lazy(() => import(/* webpackChunkName: "App" */ './AppWithAuth'));

ReactDOM.render(
  <Suspense fallback={<div className="loading" />}>
    <AppWithAuth />
  </Suspense>,
  document.getElementById('root')
);

// serviceWorker.unregister();
