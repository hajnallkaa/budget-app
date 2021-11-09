import React from 'react'
import { Layout } from 'antd';
import HeaderComp from './HeaderComp';
import { Column } from '@ant-design/charts';
import axios from 'axios';

const {  Content } = Layout;



const ExpenseStatistics: React.FC = () => {
  const [stat, setStat] = React.useState<IDateStat[]>([
    {
      x: 0,
      y: 0
    }
  ]);

  React.useEffect(() => {
    const getStatistics = () => {
      axios.get<IDateStat[]>("http://localhost:3001/listDays")
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
            <HeaderComp/>
        <Content style={{ padding: '0 50px', marginTop: '20px'}}>
          <div className="site-layout-content">
          <>
            <Column
              data={stat}
              height={500}
              xField="x"
              yField="y"
              color='#34626C'
            />
          </>
          </div>
        </Content>
      </Layout>
    )
}

export default ExpenseStatistics
