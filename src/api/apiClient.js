import axios from 'axios'
import { API_ENDPOINT } from '../CONSTS'
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
  }
}