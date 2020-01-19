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
        <Header className="app-header" theme="light">
          <RCMenu />
        </Header>
        <Layout className="app-content-wrap">
          <Content>
            <YcRouter />
          </Content>
          <Sider reverseArrow  theme="light">Sider</Sider>
        </Layout>
        <Footer>
          <div className="footer-content">
            <span>Copyright 2020◎****</span>
            <span>备案号: xxxx-xxxx-xxxx</span>
            <span>版本：V1.0.1</span>
          </div>
        </Footer>
      </Layout>
    )
  }
}
export default App;
