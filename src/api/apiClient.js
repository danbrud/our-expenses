import axios from 'axios'
import { API_URL } from '../utils/utils'

export const apiClient = {
  getExpenses: (accountId, optionalParam) => {
    return axios.get(`${API_URL}/api/expenses/${accountId}${optionalParam}`)
  },
  addExpense: (expense) => {
    return axios.post(`${API_URL}/api/expenses`, expense)
  },
  deleteExpense: (expenseId) => {
    return axios.delete(`${API_URL}/api/expenses/${expenseId}`)
  },
  getIncomes: (accountId, optionalParam) => {
    return axios.get(`${API_URL}/api/incomes/${accountId}${optionalParam}`)
  },
  addIncome: (income) => {
    return axios.post(`${API_URL}/api/incomes`, income)
  },
  deleteIncome: (incomeId) => {
    return axios.delete(`${API_URL}/api/incomes/${incomeId}`)
  },
  getAccount: (accountId) => {
    return axios.get(`${API_URL}/api/accounts/${accountId}`)
  },
  updateAccount: (accountId, updateProperties) => {
    return axios.put(`${API_URL}/api/accounts/${accountId}`, updateProperties)
  }
}