import React from 'react'
import { Layout } from 'antd';
import { Column } from '@ant-design/charts';
import axios from 'axios';

const {  Content, Footer } = Layout;


const IncomeStatistics: React.FC = () => {
  const [stat, setStat] = React.useState<IDateStat[]>([
    {
      x: 0,
      y: 0
    }
  ]);

  React.useEffect(() => {
    const getStatistics = () => {
      axios.get<IDateStat[]>("http://localhost:3001/listDaysOfIncome")
      .then( response => {
        console.log(response.data);
        setStat(response.data)
      })
      .catch(err => {
        console.log(err)
      });
    }
    getStatistics();
  } , [])
    return (
        <Layout className="layout" >
        <Content style={{ padding: '0 50px', marginTop: '20px'}}>
          <div className="site-layout-content">
          <>
            <Column
              data={stat}
              height={500}
              xField="x"
              yField="y"
              color='#8a7d67'
            />
          </>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default IncomeStatistics;
