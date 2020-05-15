import { createContext, useContext } from 'react'
import { API_URL } from '../utils/utils'
import axios from 'axios'

class IncomeData {
  constructor() {
    this.income = []
  }

  async getIncome(currentAccount, currentDate, shouldGetByDate = true) {
    const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''
    const res = await axios.get(`${API_URL}/api/income/${currentAccount._id}${optionalParam}`)
    this.income = res.data
  }

  deleteIncome = async (id) => {
    await axios.delete(`${API_URL}/api/income/${id}`)
    const index = this.income.findIndex(i => i._id === id)
    this.income.splice(index, 1)
  }
}

export const incomeData = new IncomeData()

const IncomeContext = createContext({})

export const IncomeProvider = IncomeContext.Provider

export const IncomeConsumer = IncomeContext.Consumer

export const useIncomeContext = () => useContext(IncomeContext)