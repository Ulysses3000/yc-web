import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Calendar from '../module/calendar';
import SelfBlog from '../module/self-blog';
import SelfInfo from '../module/self-info';
import News from '../module/news';

const YcRouter = () => (
  <Switch>
    <Redirect exact path="/" to="/news" />
    <Route path="/news" component={News} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/selfinfo" component={SelfInfo} />
    <Route path="/selfblog" component={SelfBlog} />
  </Switch>
)

export default YcRouter;