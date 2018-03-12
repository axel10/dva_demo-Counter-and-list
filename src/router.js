import React from 'react';
import { Router, Route, Switch,Redirect  } from 'dva/router';
import demo from './routes/demo'
import list from './routes/list'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/*<Route path="/" exact component={IndexPage} />*/}
        <Route path="/demo" exact component={demo} />
        <Route path="/list" exact component={list} />
        <Redirect to="/list"/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
