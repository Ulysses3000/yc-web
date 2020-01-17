import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import Login from './module/login/index';
import App from './App';

const store = createStore(reducers);

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/' component={App} />
      </Switch>
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster,
// you can change unregister() => register() 
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
