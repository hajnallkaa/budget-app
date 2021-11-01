import React from 'react';
import { Layout } from 'antd';
import HeaderComp from './HeaderComp';
import { Row, Col, Divider } from 'antd';
import MyForm from './MyForm';
import ExpenseTrackerProvider from '../context/context';
import List from './List';
import ExpenseDetails from './ExpenseDetails';
import IncomeDetails from './IncomeDetails';

const { Content, Footer } = Layout;

const mystyle = {
  border: '5px solid white', 
  padding:'10px',  
}

const Budget: React.FC = () => {
    return (
            <Layout className="layout" >
            <HeaderComp/>
        <Content style={{ padding: '0 50px', marginTop: '20px'}}>
          <div className="site-layout-content">

          <ExpenseTrackerProvider>
              <Divider orientation="left">Your Budget</Divider>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                    <Col xs={24} sm={24} md={24} lg={8} className="gutter-row" span={8}>
                    <IncomeDetails title="Income"/>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={8}  className="gutter-row" span={8} style={mystyle}>
                    <MyForm />
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={8} className="gutter-row" span={8}>
                    <ExpenseDetails title="Expense"/>
                    </Col>

                  </Row>

                  <Row>
                  <Col span={24}><List/></Col>
                  </Row>

          </ExpenseTrackerProvider>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default Budget
