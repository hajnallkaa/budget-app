import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';



const Chart: React.FC = () => {
  var data = [
    {
      type: 'Grocery',
      value: 27,
    },
    {
      type: 'Bills',
      value: 25,
    },
    {
      type: 'Fun',
      value: 18,
    },
    {
      type: 'Salary',
      value: 15,
    },
    {
      type: 'Business',
      value: 10,
    },
    {
      type: 'Other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
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

export default Chart;