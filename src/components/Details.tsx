import React from 'react';
import { Card } from 'antd';
import Chart from './Chart';

interface IProp {
    title: string,
}

const income = {
    borderBottom: '10px solid #839B97',
    
  };

const expense = {
    borderBottom: '10px solid #8E7F7F'
}

const Details = ({title}: IProp) => {
    return (
        <div className="site-card-border-less-wrapper" style={title === 'Income' ? income : expense}>
        <Card title={title} >
          <Chart />
        </Card>
        </div>
    )
}

export default Details
