import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Components = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/general/button`} />
      <Route path={`${match.url}/general`} component={lazy(() => import(`views/app-views/components/general`))} />
      <Route path={`${match.url}/layout`} component={lazy(() => import(`views/app-views/components/layout`))} />
      <Route path={`${match.url}/navigation`} component={lazy(() => import(`views/app-views/components/navigation`))} />
      <Route path={`${match.url}/data-entry`} component={lazy(() => import(`views/app-views/components/data-entry`))} />
      <Route path={`${match.url}/data-display`} component={lazy(() => import(`views/app-views/components/data-display`))} />
      <Route path={`${match.url}/feedback`} component={lazy(() => import(`views/app-views/components/feedback`))} />
      <Route path={`${match.url}/other`} component={lazy(() => import(`views/app-views/components/other`))} />
      <Route path={`${match.url}/charts`} component={lazy(() => import(`views/app-views/components/charts`))} />
      <Route path={`${match.url}/maps`} component={lazy(() => import(`views/app-views/components/maps`))} />
    </Switch>
  </Suspense>
);

export default Components;
