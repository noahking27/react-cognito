import React from 'react';

function LoadingAnimation() {
  return (
    <div className="logo-spinner">
      <div className="logo" />
      <div className="spinner">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    </div>
  );
}

export function Spinner({ centered, reports = false }) {
  if (centered) {
    return (
      <div className="loader">
        <div className={`${reports ? 'centered is-reports' : 'centered'}`}>
          <LoadingAnimation />
        </div>
      </div>
    );
  }
  return <LoadingAnimation />;
}
