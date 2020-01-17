import React from 'react';
import { Menu, Icon, Row } from 'antd'
import { Link } from 'react-router-dom'

import './menu.less'

class RCMenu extends React.Component {
  state = {
    current: 'news'
  }
  handleClick = (e: any) => {
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <Menu
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
          <Menu.Item key="news">
            <Row>
              <Icon type="mail" />
              <Link to="/news">news</Link>
            </Row>
          </Menu.Item>
          <Menu.Item key="selfinfo">
            <Row>
              <Icon type="info-circle" />
              <Link to="/selfinfo">selfInfo</Link>
            </Row>
          </Menu.Item>
          <Menu.Item key="selfblog">
            <Row>
              <Icon type="user" />
              <Link to="/selfblog">selfblog</Link>
            </Row>
          </Menu.Item>
      </Menu>
    )
  }
}
export default RCMenu