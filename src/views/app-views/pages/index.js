import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/profile`} />
      <Route path={`${match.url}/profile`} component={lazy(() => import(`views/app-views/pages/profile`))} />
      <Route path={`${match.url}/invoice`} component={lazy(() => import(`views/app-views/pages/invoice`))} />
      <Route path={`${match.url}/pricing`} component={lazy(() => import(`views/app-views/pages/pricing`))} />
      <Route path={`${match.url}/faq`} component={lazy(() => import(`views/app-views/pages/faq`))} />
      <Route path={`${match.url}/setting`} component={lazy(() => import(`views/app-views/pages/setting`))} />
      <Route path={`${match.url}/user-list`} component={lazy(() => import(`views/app-views/pages/user-list`))} />
    </Switch>
  </Suspense>
);

export default Pages;
