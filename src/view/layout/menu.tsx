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
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
          <Menu.Item key="news">
            <Link to="/news">
              <Icon type="mail" /> news
            </Link>
          </Menu.Item>
          <Menu.Item key="selfinfo">
            <Link to="/selfinfo">
              <Icon type="info-circle" /> selfInfo
            </Link>
          </Menu.Item>
          <Menu.Item key="selfblog">
            <Link to="/selfblog">
              <Icon type="user" /> selfblog
            </Link>
          </Menu.Item>
      </Menu>
    )
  }
}
export default RCMenu