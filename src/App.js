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
        <h2>网站建设中</h2>
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
            <span><a href="http://www.beian.miit.gov.cn">湘ICP18018933</a></span>
            <span>v1.0.1</span>
          </div>
        </Footer>
      </Layout>
    )
  }
}
export default App;
