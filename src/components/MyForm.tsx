import React from 'react'
import { useState } from 'react';
import {Form} from 'antd';
import {Card, Typography, Divider} from 'antd';
import './style.css';

import {ExpenseTrackerContext} from '../context/context';



type SizeType = Parameters<typeof Form>[0]['size'];

const MyForm: React.FC = () => {
    const { saveTransaction, transactions } = React.useContext(ExpenseTrackerContext) as ContextType
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const [formData, setFormData] = React.useState<ITransactions>(
        {
            id: -1,
            type: "Income",
            category: "Salary",
            amount: 0,
            date: ""
        }
    )
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
    }

  const handleSaveTransaction = (e: React.FormEvent, formData: ITransactions | any) => {
      e.preventDefault()
      saveTransaction(formData)
  }
    return (
      <>
        <Card title="Expense Tracker">
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '30px'}}>
          <Typography >Your Balance $100</Typography>
          </div>
          <Divider />
         
        
        <form className='Form' onSubmit={(e) => handleSaveTransaction(e, formData)} style={{padding:'10px'}}>
        <div>
          <div>
            <label htmlFor='type'>Type</label>
            <select className='inputstyle' id="type" onChange={handleInput}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
          </div>
          <div>
            <label htmlFor='category'>Category</label>
            <select className='inputstyle' id="category" onChange={handleInput}>
                <option value="Salary">Salary</option>
                <option value="Business">Business</option>
                <option value="Bills">Bills</option>
                <option value="Grocery">Grocery</option>
                <option value="Fun">Fun</option>
                <option value="Loan">Loan</option>
            </select>
          </div>
          <div>
            <label htmlFor='amount'>Amount</label>
            <input className='inputstyle' onChange={handleInput} type='number' id='amount' />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <input className='inputstyle' onChange={handleInput} type='date' id='date' />
          </div>
        </div>
        <button className='inputstyle button' disabled={formData === undefined ? true : false}>Add</button>
      </form> 

      </Card>
    </>
    )
}

export default MyForm
