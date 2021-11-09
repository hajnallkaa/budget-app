import React from 'react';
import ExpenseStatistics from './ExpenseStatistics';
import IncomeStatistics from './IncomeStatistic';



const Statistics: React.FC = () => {
  return(
  <>
  <ExpenseStatistics/>
  <IncomeStatistics/>
  </>
  )
}

export default Statistics
