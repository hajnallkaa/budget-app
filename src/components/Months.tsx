import React from 'react'
import { Layout } from 'antd';
import HeaderComp from './HeaderComp';
import Month from './Month';
import { Row, Col, Divider } from 'antd';

const {  Content, Footer } = Layout;


const Months: React.FC = () => {
    return (
        <Layout className="layout" >
            <HeaderComp/>
        <Content style={{  marginTop: '20px'}}>
          <div className="site-layout-content">
                
          <Divider orientation="left">Here are the statistics of the past months</Divider>
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" span={6}>
                    <Month />
                  </Col>
                  <Col className="gutter-row" span={6}>
                  <Month />
                  </Col>
                  <Col className="gutter-row" span={6}>
                  <Month />
                  </Col>
                  <Col className="gutter-row" span={6}>
                  <Month />
                  </Col>
                  <Col className="gutter-row" span={6}>
                  <Month />
                  </Col>
                  <Col className="gutter-row" span={6}>
                  <Month />
                  </Col>
                  <Col className="gutter-row" span={6}>
                  <Month />
                  </Col>
                  <Col className="gutter-row" span={6}>
                  <Month />
                  </Col>
                </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default Months
