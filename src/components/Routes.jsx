import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

/* Stack OverFlow Answer for using Array as PATH: https://stackoverflow.com/questions/69921188/react-router-dom-v6-pass-array-to-path */

const renderMultiRoutes = ({ element: Element, paths, ...rest }) =>
  paths.map((path) => <Route key={path} path={path} {...rest} element={Element} />);

export const Routes = () => {
  return (
    <div className="p-4">
        <Switch>
          <Route path="/" element={<Navigate to="/search" />} />
          {renderMultiRoutes({
            paths: ['/search', '/images', '/news', '/videos'],
            element: <Results />,
          })}
        </Switch>
    </div>
  );
};
