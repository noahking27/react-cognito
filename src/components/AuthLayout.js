import React, { Suspense } from 'react';
import { Spinner } from './Loader';

// Code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const loading = () => <Spinner centered />;

const AuthLayout = ({ user, children }) => {
  return (
    <div className="app-wrapper">
      <div className="content-page">
        <div className="content">
          <Suspense fallback={loading()}>{children || null}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
