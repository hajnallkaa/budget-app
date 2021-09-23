import React from 'react';
import { Layout, Menu, } from 'antd';
import {Link } from 'react-router-dom';

const { Header} = Layout;

const HeaderComp: React.FC = () => {
    return (
      <Header style={{background:'#34626C'}}>
      <div className="logo"/>
    <Menu style={{background:'#34626C'}}   theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item className="menuitem"style={{color:"#ffffff"}}><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item className="menuitem"><Link to='/budget'>Your Budget</Link></Menu.Item>
      <Menu.Item className="menuitem"><Link to='/statistics'>Statistics</Link></Menu.Item>
      <Menu.Item className="menuitem"><Link to='/months'>Months</Link></Menu.Item>
    </Menu>
  </Header>
    )
}

export default HeaderComp
