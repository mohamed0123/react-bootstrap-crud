import React, { lazy, Suspense } from 'react';

const LazyTest = lazy(() => import('./Test'));

const Test = props => (
  <Suspense fallback={null}>
    <LazyTest {...props} />
  </Suspense>
);

export default Test;
