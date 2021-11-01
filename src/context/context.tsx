import * as React from 'react'
import axios from 'axios';
const shortid = require('shortid');

const contextDefaultValues: ContextType = {
    transactions: [],
    render: false,
    saveTransaction: () => {},
    updateTransaction: () => {},
    deleteTransaction: () => {},
};

export const ExpenseTrackerContext = React.createContext<ContextType>(contextDefaultValues);

export const ExpenseTrackerProvider: React.FC = ({ children }) => {
    const [transactions, setTransactions] = React.useState<ITransactions[]>(contextDefaultValues.transactions)
    const [render, setRender] = React.useState<boolean>(false);

    React.useEffect(() => {
      getTransactions();
    } , [])
    
    const getTransactions = () => {
      axios.get<ITransactions[]>("http://localhost:3001/listTransactions")
      .then( response => {
        console.log(response.data);
        setTransactions(response.data)
        setRender(!render)
      })
      .catch(ex => {
        console.log(ex)
      });
    }

    const saveTransaction = (transaction: ITransactions) => {
      let newTransaction = transaction;
      newTransaction.value = Number(transaction.value)
      newTransaction.id = shortid.generate();
      setRender(!render)
      setTransactions([...transactions, newTransaction])
    }

    const updateTransaction = (transactionToEdit: ITransactions) => {
        transactions.forEach(function (transaction) {
          if (transaction.id === transactionToEdit.id) {
              transaction = transactionToEdit
            }
        });
        setTransactions([...transactions])
    }

    const deleteTransaction = (id: number) => {
      const newTransactions =  transactions.filter((transaction: ITransactions) => (transaction.id !== id))
      setRender(!render)
      setTransactions(newTransactions)
    }
  
    return (
      
      <ExpenseTrackerContext.Provider
      value={{
        transactions,
        render,
        saveTransaction,
        updateTransaction,
        deleteTransaction,
      }}
      >
      {children}
    </ExpenseTrackerContext.Provider>
      
    )
  }
  
  export default ExpenseTrackerProvider