import React from 'react';
import { List as MyList, Avatar } from 'antd';
import {DollarCircleOutlined, DeleteOutlined} from '@ant-design/icons';
import {ExpenseTrackerContext} from '../context/context';
import axios from "axios";

const incomestyle = {
    backgroundColor: '#839B97'
}

const expensestyle = {
    backgroundColor: '#8E7F7F'
}

const List: React.FC = () => {
   
    const { transactions, deleteTransaction } = React.useContext(ExpenseTrackerContext) as ContextType
    
    const handleDeleteTransaction = (e: React.FormEvent, id: number | any) => {
        e.preventDefault()
        deleteTransaction(id)
        deleteTransactionFromServer(id)
    }
  
    const deleteTransactionFromServer = (id: number) => {
      axios.delete(`http://localhost:3001/deleteTransaction`, {
        data: {
          id: id
        }
      }).then(res => {
          console.log(res);        
        }).catch((error)=> {
      console.log(error);    
    })
    }
    
    return (
       

        <div style={{overflowY: 'scroll', height: '400px'}}>
        <MyList itemLayout="horizontal" dataSource={transactions} renderItem={transaction => (
            
                <MyList.Item>
                    <MyList.Item.Meta
                    key={transaction.id}
                    avatar={<Avatar style={transaction.type === 'Income' ? incomestyle : expensestyle}><DollarCircleOutlined /></Avatar>}
                    title={<a href="https://ant.design">{transaction.category}</a>}
                    description={transaction.date + ' - ' + transaction.amount +'$'}
                    />
                    <DeleteOutlined  style={{marginRight: '10px'}} onClick={(e) => handleDeleteTransaction(e, transaction.id)}/>
                </MyList.Item>
            
            )}
        />
        </div>
        


    )

}

export default List
