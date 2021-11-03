import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import axios from 'axios';
import {ExpenseTrackerContext} from '../context/context';

const ExpenseChart: React.FC = () => {
  const { render } = React.useContext(ExpenseTrackerContext) as ContextType
  const [expenses, setExpenses] = React.useState<Record<string, any>[]>([
    {
      type: "",
      value: 0,
    }
  ]);
  
    React.useEffect(() => {
      const getExpenses = () => {
        axios.get<Record<string, any>[]>("http://localhost:3001/listExpenses")
        .then( response => {
          console.log(response.data);
          setExpenses(response.data)
        })
        .catch(err => {
          console.log(err)
        });
      }
      getExpenses();
    } , [render])

  
  var config = {
    appendPadding: 10,
    data: expenses,
    angleField: 'value',
    colorField: 'type',
    color: ['#34626C', '#839B97', '#5E8B7E', '#CFD3CE', '#C6B497', '#8E7F7F'],
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '$',
      },
    },
  };
  return <Pie {...config} />;
};

export default ExpenseChart;