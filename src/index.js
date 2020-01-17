import * as serviceWorker from './serviceWorker';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import News from './module/news'
import { Login } from './module/login/index';
import { SelfInfo } from './module/self-info/index';
import { SelfBlog } from './module/self-blog/index';

const store = createStore(reducers);
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/news">news</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/selfinfo">selfInfo</Link></li>
          <li><Link to="/selfblog">calendar</Link></li>
        </ul>

        {/*
          接着用 `this.props.children` 替换 `<Child>`
          router 会帮我们找到这个 children
        */}
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path="/news" component={News}/>
        <Route path="/login" component={Login}/>
        <Route path="/selfinfo" component={SelfInfo}/>
        <Route path="/selfblog" component={SelfBlog}/>
      </Switch>
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
