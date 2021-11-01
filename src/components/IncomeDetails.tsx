import React from 'react';
import { Card } from 'antd';
import IncomeChart from './IncomeChart';

interface IProp {
    title: string,
}


const income = {
    borderBottom: '10px solid #839B97',
    
  };

const expense = {
    borderBottom: '10px solid #8E7F7F'
}

const IncomeDetails = ({title}: IProp) => {

    return (
        <div className="site-card-border-less-wrapper" style={title === 'Income' ? income : expense}>
        <Card title={title} >
          <IncomeChart/>
        </Card>
        </div>
    )
}

export default IncomeDetails;
