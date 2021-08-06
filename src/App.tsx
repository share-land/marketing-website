import React, {FC, ReactElement} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout} from './components/Layout';

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.globEager('./pages/*.tsx');

const routes = Object.keys(pages).map((path) => {
  const nameMatch = path.match(/\.\/pages\/(.*)\.tsx$/) as Array<string>;
  const name = nameMatch[1];
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});

export const App: FC = (): ReactElement => {
  return (
    <Layout>
      <Switch>
        {routes.map(({path, component: RouteComp}) => {
          return (
            <Route key={path} path={path}>
              <RouteComp />
            </Route>
          );
        })}
      </Switch>
    </Layout>
  );
};
