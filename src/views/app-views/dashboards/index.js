import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/default`} component={lazy(() => import(`views/app-views/dashboards/default`))} />
      <Route path={`${match.url}/analytic`} component={lazy(() => import(`views/app-views/dashboards/analytic`))} />
      <Route path={`${match.url}/sales`} component={lazy(() => import(`views/app-views/dashboards/sales`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/default`} />
    </Switch>
  </Suspense>
)};

export default Dashboards;
