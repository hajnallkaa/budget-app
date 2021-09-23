interface ITransactions {
    id: number
    type: string
    category: string
    amount: number
    date: string // should be Date format
  }
  
  type ContextType = {
    transactions: ITransactions[]
    saveTransaction: (transaction: ITransactions) => void
    updateTransaction: (transaction: ITransactions) => void
    deleteTransaction: (id: number) => void
  } 

  type State = {
    username: string
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
  };
  
  
  type Action = { type: 'setUsername', payload: string }
    | { type: 'setPassword', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };
  