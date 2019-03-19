import React from 'react';
import {Router,Route} from 'react-router';

import Login from '../module/login';
// import Head from '../component/base/head';
// import Menu from '../component/base/menu'

import Calendar from '../module/calendar';
import SelfBlog from '../module/self-blog';
import SelfInfo from '../module/self-info';
import News from '../module/news';

const YcRouter = <Router>
  <Route path='/login' component={Login}></Route>
  <Route path='/' >
    {/* <Head></Head>
    <Menu></Menu> */}

    <Router path='news' component={News}></Router>

    <Router path='selfBlog' component={SelfBlog}></Router>

    <Router path='selfInfo' component={SelfInfo}></Router>

    <Router path='calendar' component={Calendar}></Router>

  </Route>
</Router>

export default YcRouter;