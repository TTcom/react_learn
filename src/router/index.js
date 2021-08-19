import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense, Fragment } from 'react';
import routerList from './routerList';

class CustomRoute extends React.Component {
  // 递归方法
  routerListRecursion = (routerList) => {
    return Object.assign(routerList).map(({ path, exact, routes, component: LazyComponent }, key) => {
      let newItem = { path, exact, routes };
      if (routes && routes.length) {
        return (
          <Fragment key={`fragment${key}`}>
            <Route key={key} {...newItem} render={(props) => <LazyComponent {...props} />}></Route> 
            <Switch key={`switch${key}`}>
              {this.routerListRecursion(routes)}
            </Switch>
          </Fragment>
        )
      } else {
        return <Route key={key} {...newItem} render={(props) => <LazyComponent {...props} />}></Route>
      }
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<span>Loading...</span>}> 
          <Switch>
            {this.routerListRecursion(routerList)} 
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
export default CustomRoute;
