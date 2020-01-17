import React, { Component } from 'react';
import './App.less';

import { Layout } from 'antd';
import YcRouter from './router/index';
import RCMenu from './view/layout/menu';

const { Header, Footer, Sider, Content } = Layout;

export class App extends Component {
  render() {
    return (
      <Layout className="app">
        <Header className="app-header">
          <RCMenu />
        </Header>
        <Layout className="app-content-wrap">
          <Content>
            <YcRouter />
          </Content>
          <Sider reverseArrow>Sider</Sider>
        </Layout>
        <Footer >Footer</Footer>
      </Layout>
    )
  }
}
export default App;
