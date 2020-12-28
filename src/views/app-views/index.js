import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/components`} component={lazy(() => import(`views/app-views/components`))} />
        <Route path={`${APP_PREFIX_PATH}/pages`} component={lazy(() => import(`views/app-views/pages`))} />
        <Route path={`${APP_PREFIX_PATH}/maps`} component={lazy(() => import(`views/app-views/maps`))} />
        <Route path={`${APP_PREFIX_PATH}/charts`} component={lazy(() => import(`views/app-views/charts`))} />
        <Route path={`${APP_PREFIX_PATH}/docs`} component={lazy(() => import(`views/app-views/docs`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/dashboards`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);
