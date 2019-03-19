import * as serviceWorker from './serviceWorker';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Router from './router';
// import {Router,Route,Link} from 'react-router';
import { Router, Route, Link, BrowserRouter, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import News from './module/news'

// const App = React.createClass({
//   rander(){
//     <div>
//       <h1>i`m is app</h1>
//       <ui>
//         <li><link to="/news">to news</link> </li>
//         <li><link to="/login">to login</link> </li>
//       </ui>
//       {this.props.children}
//     </div>
//   }
// })
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
// class News extends Component {
//   render(){

//     return (
//       <div>news</div>
//     )
//   }
// }
class Login extends Component {
  render(){
    return (
      <div>Login</div>
    )
  }
}


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render((
//   <Router>
//     <Route path='/' component={App}>
//       <Route path='news' component={News}></Route>
//       <Route path='login' component={Login}></Route>
//     </Route>
//   </Router>
// ),document.getElementById('root'))


ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path="/news" component={News}/>
        <Route path="/Login" component={Login}/>
      </Switch>
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
