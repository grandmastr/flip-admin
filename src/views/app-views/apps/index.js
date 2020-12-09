import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/mail`} component={lazy(() => import(`views/app-views/apps/mail`))} />
      <Route path={`${match.url}/chat`} component={lazy(() => import(`views/app-views/apps/chat`))} />
      <Route path={`${match.url}/calendar`} component={lazy(() => import(`views/app-views/apps/calendar`))} />
      <Route path={`${match.url}/project`} component={lazy(() => import(`views/app-views/apps/project`))} />
      <Route path={`${match.url}/ecommerce`} component={lazy(() => import(`views/app-views/apps/e-commerce`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/mail`} />
    </Switch>
  </Suspense>
);

export default Apps;
