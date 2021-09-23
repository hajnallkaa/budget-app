import React from 'react'
import { Layout, } from 'antd';
import Home from './Home';
import HeaderComp from './HeaderComp'

const { Content, Footer } = Layout;

const Main: React.FC = () => {
    return (
    <Layout className="layout" >
        <HeaderComp />
        <Content style={{ 
            padding: '0 50px', 
            marginTop: '20px', 
            }}>
            <div className="site-layout-content">
            <Home />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);
    
}

export default Main
