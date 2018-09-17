import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from '../Home'
import Sell from '../Sell'
import Lottery from "../Lottery";
import Rule from "../Rule"
import Record from "../Record"

const history = createBrowserHistory()

const router = App => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sell" exact component={Sell} />
      <Route path="/lottery" exact component={Lottery} />
      <Route path={"/rule"} exact component={Rule}/>
      <Route path={"/record"} exact component={Record}/>
    </Switch>
  </Router>
)

export default router
