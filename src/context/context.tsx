import * as React from 'react'
import axios from 'axios';


const contextDefaultValues: ContextType = {
    transactions: [
        {
            id: 1,
            type: "Income",
            category: 'Salary',
            amount: 50,
            date: 'Wed Sep 16'
        },
        {
            id: 2,
            type: "Expense",
            category: 'Pets',
            amount: 50,
            date: 'Wed Sep 18'
        },
        {
            id: 3,
            type: "Income",
            category: 'Business',
            amount: 50,
            date: 'Wed Sep 17'
        },
    ],
    saveTransaction: () => {},
    updateTransaction: () => {},
    deleteTransaction: () => {}
};



export const ExpenseTrackerContext = React.createContext<ContextType>(contextDefaultValues);

export const ExpenseTrackerProvider: React.FC = ({ children }) => {
    const [transactions, setTransactions] = React.useState<ITransactions[]>(contextDefaultValues.transactions)
  
    const saveTransaction = (transaction: ITransactions) => {
      const newTransaction: ITransactions = {
        id: Math.random(), // need to be done better, uuid
        type: transaction.type,
        category: transaction.category,
        amount: transaction.amount,
        date: transaction.date
      }
      setTransactions([...transactions, newTransaction])
    }
  
    const updateTransaction = (transactionToEdit: ITransactions) => {
        transactions.filter((transaction: ITransactions) => {
        if (transaction.id === transactionToEdit.id) {
          transaction = transactionToEdit
          setTransactions([...transactions])
        }
      })
    }

    const deleteTransaction = (id: number) => {
        const newTransactions: ITransactions[] = []
        transactions.filter((transaction: ITransactions) => {
        if (transaction.id !== id) {
            newTransactions.push(transaction)
        }
      })
      setTransactions(newTransactions)
    }
  
    return (
      
      <ExpenseTrackerContext.Provider
      value={{
        transactions,
        saveTransaction,
        updateTransaction,
        deleteTransaction
      }}
      >
      {children}
    </ExpenseTrackerContext.Provider>
      
    )
  }
  
  export default ExpenseTrackerProvider