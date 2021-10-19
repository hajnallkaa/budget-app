import * as React from 'react'
import axios from 'axios';


const contextDefaultValues: ContextType = {
    transactions: [],
    saveTransaction: () => {},
    updateTransaction: () => {},
    deleteTransaction: () => {}
};



export const ExpenseTrackerContext = React.createContext<ContextType>(contextDefaultValues);

export const ExpenseTrackerProvider: React.FC = ({ children }) => {
    const [transactions, setTransactions] = React.useState<ITransactions[]>(contextDefaultValues.transactions)
  
    React.useEffect(() => {
      const getTransactions = () => {
        axios.get<ITransactions[]>("http://localhost:3001/listTransactions")
        .then( response => {
          console.log(response.data);
          setTransactions(response.data)
        })
        .catch(ex => {
          console.log(ex)
        });
      }
      getTransactions();
    } , [])


    const saveTransaction = (transaction: ITransactions) => {
      let newTransaction = transaction;
      newTransaction.amount = Number(transaction.amount)
      newTransaction.id = Math.random()
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