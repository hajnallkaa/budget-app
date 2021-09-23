import React from 'react'
import { Layout } from 'antd';
import HeaderComp from './HeaderComp';
import { Column } from '@ant-design/charts';

const {  Content, Footer } = Layout;

const myData = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 4 },
  { x: 3, y: 11 },
  { x: 4, y: 9 },
  { x: 5, y: 14 },
  { x: 6, y: 19 },
  { x: 7, y: 17 },
  { x: 8, y: 22 },
  { x: 9, y: 24 },
  { x: 10, y: 23 },
  { x: 11, y: 27 },
  { x: 12, y: 32 },
  { x: 13, y: 30 },
  { x: 14, y: 35 },
  { x: 15, y: 37 },
  { x: 16, y: 60 },
  { x: 17, y: 35 },
  { x: 18, y: 37 },
  { x: 19, y: 90 },
  { x: 20, y: 35 },
  { x: 21, y: 37 },
  { x: 22, y: 80 },
  { x: 23, y: 35 },
  { x: 24, y: 37 },
  { x: 25, y: 90 },
  { x: 26, y: 35 },
  { x: 27, y: 37 },
  { x: 28, y: 90 },
  { x: 29, y: 35 },
  { x: 30, y: 37 },
];

const Statistics: React.FC = () => {
    return (
        <Layout className="layout" >
            <HeaderComp/>
        <Content style={{ padding: '0 50px', marginTop: '20px'}}>
          <div className="site-layout-content">
          <>
            <Column
              data={myData}
              height={500}
              xField="x"
              yField="y"
              color='#34626C'
            />
          </>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default Statistics
