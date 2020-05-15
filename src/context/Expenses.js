import { createContext, useContext } from 'react'
import { API_URL } from '../utils/utils'
import axios from 'axios'

class ExpenseData {
  constructor() {
    this.expenses = []
  }

  async getExpenses(currentAccount, currentDate, shouldGetByDate = true) {
    const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''
    const res = await axios.get(`${API_URL}/api/expenses/${currentAccount._id}${optionalParam}`)
    this.expenses = res.data
  }
}

export const expenseData = new ExpenseData()

const ExpensesContext = createContext({})

export const ExpensesProvider = ExpensesContext.Provider

export const ExpensesConsumer = ExpensesContext.Consumer

export const useExpensesContext = () => useContext(ExpensesContext)